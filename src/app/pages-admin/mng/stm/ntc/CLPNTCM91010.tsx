import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from '../../../../shared/utils/table-paginator';
import './CLPNTCM91010.css';
import { noticeDummyData } from '../../../../shared/demo/data/noticeDummyData';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { SearchParams } from '../../../../core/models/search-params';

//공지사항 관리
const CLPNTCM91010: React.FC = () => {
    const { goPage, goBack } = useBasePage()

    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        searchValue: '',
        fromDate: undefined,
        toDate: undefined,
    });

    //table
    const [data, setData] = React.useState([]);
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);

    //초기화
    React.useEffect(() => {

    }, []); 

    React.useEffect(() => {
        console.log('data =>', data)
    }, [data]); 

    //select option dummy data
    const options1 = [
        { name: '전체', code: 'NY' },
        { name: '제목', code: 'RM' },
        { name: '내용', code: 'LDN' },
        { name: '등록자', code: 'IST' },
    ];
    
    const options2 = [
        { name: '전체', code: 'NY' },
        { name: '공지사항', code: 'RM' },
        { name: '웹툰', code: 'LDN' },
        { name: '소식지', code: 'IST' },
        { name: '기타', code: 'PRS' }
    ];
    
    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }
    
    //table page length
    let pages = 50;
    
    //신규 등록 버튼
    const register = (event:any) => {
        goPage(`/stm/ntc/register`);
    }

    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
        goPage(`/stm/ntc/${e.index}`);
    }

    const headerTemplate = [
        {
            field: 'no',
            header: '순번',
            sortable: false,
        },
        {
            field: 'type',
            header: '유형',
            sortable: false,
        },
        {
            field: 'subject',
            header: '제목',
            sortable: false,
        },
        {
            field: 'attach',
            header: '첨부파일',
            sortable: false,
        },
        {
            field: 'author',
            header: '등록자',
            sortable: false,
        },
        {
            field: 'hit',
            header: '조회수',
            sortable: false,
        },
        {
            field: 'registerDate',
            header: '등록일',
            sortable: false,
        },
    ]

    return(
    <BasePage className='CLPNTCM91010'>
        <div className='searchBar'>
            <Dropdown value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                optionLabel='name' placeholder='전체' />
            <Dropdown value={values.type2} options={options2} onChange={(e) => handleChange('type2', e.value)} 
                optionLabel='name' placeholder='전체' />

            <InputText className='searchTxt' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />

            <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
            <span className='mt5'>~</span>
            <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />
            <Button label='조회' />
        </div>

        <div className='toolbar mb10'>
            <p>총 <span className='pageNm'>{pages}</span>개</p>
            <Button className='ml-auto outline' label='신규등록' icon='pi pi-pencil' onClick={register} />
        </div>

        <DataTable value={noticeDummyData} paginator paginatorTemplate={paginator} 
            className="ntc"
            onRowClick={(e) => goDetail(e)}
            first={first} rows={rows} 
            onPage={onCustomPage} responsiveLayout='scroll'>
            {headerTemplate.map((col, index) => (
                <Column key={col.header} field={col.field} header={col.header} ></Column>
            ))}
        </DataTable>
    </BasePage>)
}
export default CLPNTCM91010;

