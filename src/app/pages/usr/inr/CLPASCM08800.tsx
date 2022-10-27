import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPASCM08800.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginator } from "../../../shared/utils/table-paginator";
import { requestDummyData } from '../../../shared/demo/data/requestDummyData';
import useBasePage from '../../../shared/hooks/base-page.hook';
import { Button } from "primereact";

interface IProps {
    children: React.ReactNode;
}
// 서비스 카탈로그 신청 화면
const CLPASCM08800: React.FC<IProps> = ({children}) => {
    const { goPage } = useBasePage()

    //table
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(10);

    const onCustomPage = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
    }

    //table page length
    let pages = 50;
    
    const goDetail = ( e:any ) => {
        console.log('clicked row =>', e.index)
        goPage(`/asc/${e.index}`);
    }
    
    const catRqsBtn =( e:any ) => {
        goPage(`/asc/cat-req`);
    }
    const tfcRqsBtn =( e:any ) => {
        goPage(`/asc/tfc-req`);
    }

    const headerTemplate = [
        
        {
            field: 'type',
            header: '신청 구분',
            sortable: false,
        },
        {
            field: 'rqsDate',
            header: '신청일',
            sortable: false,
        },
        {
            field: 'state',
            header: '진행상태',
            sortable: false,
        },
        {
            field: 'rqsRslt',
            header: '신청결과',
            sortable: false,
        },
        {
            field: 'rqsRsltDate',
            header: '신청결과일',
            sortable: false,
        },
        {
            field: 'manager',
            header: '담당자',
            sortable: false,
        },
        
    ]

    return(
    <BasePage className="CLPASCM08800">
        <div className="rqsList mt45">
            <div className="catRqs rqs">
                <div className="text">
                    <h2>서비스 카탈로그</h2>
                    <p>
                        클라우드 허브에서 제공하는 <br/>
                        다양한 주요 기능을<br/>
                        신청할 수 있습니다.
                    </p>
                    <Button className='outline' label='신청하기' onClick={catRqsBtn} />
                </div>
            </div>
            <div className="tfcRqs rqs">
                <div className="text">
                    <h2>The-Fast Cloud</h2>
                    <p>
                    정보화사업의 예산산정이<br/>
                    어려우시죠?<br/>
                    효율적으로 산정하도록<br/>
                    도와드립니다.
                    </p>
                    <Button className='outline' label='신청하기' onClick={tfcRqsBtn} />
                </div>
            </div>
        </div>
        <div className="mt45">
            <div className="tableTitle mb10">
                <h2>신청자 현황</h2>
                <p className="color-red f14 ml10">* 당담자가 확인 후 연락을 드릴 예정입니다.</p>
            </div>
            
            <DataTable value={requestDummyData} paginator paginatorTemplate={paginator} 
                className='scm'
                onRowClick={(e) => goDetail(e)}
                first={first} rows={rows} 
                onPage={onCustomPage} responsiveLayout='scroll'>
                {headerTemplate.map((col, index) => (
                    <Column key={col.header} field={col.field} header={col.header} ></Column>
                ))}
            </DataTable>
        </div>

    </BasePage>)
}
export default CLPASCM08800;