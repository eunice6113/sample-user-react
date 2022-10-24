import { Dropdown, Editor, FileUpload, InputText, RadioButton, InputNumber,Calendar } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import CldFileUpload from '../../../../shared/components/CldFileUpload';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import { MODE } from '../../../../shared/config/commonCode';
import './CLPENTM07330.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import { SearchParams } from "../../../../core/models/search-params";


//이벤트 등록
const CLPENTM07330:React.FC = () => {
    const { goPage, goBack, paramId, isRegister } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('register');

    const [select1, setSelect1] = React.useState<any>(null);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    
    //이벤트 유형
    const type = [
        {name: '댓글 이벤트', key: 'Y'}, 
        {name: '퀴즈 이벤트', key: 'N'}];
    const [selectedType, setSelectedType] = React.useState(type[1]);
   
    //당첨유형
    const categories = [
        {name: '랜덤 당첨', key: 'Y'}, 
        {name: '실시간 당첨', key: 'N'}];
    const [selectedCategory, setSelectedCategory] = React.useState(categories[1]);
    const [order, setOrder] = React.useState<any>(null);

    //이벤트 기간
    const [values, setValues] = React.useState<SearchParams>({
        fromDate: undefined,
        toDate: undefined,
    });

    const handleChange = (prop: keyof SearchParams, value:any) => {
        setValues({ ...values, [prop]: value });
    };

    //목록 버튼
    const list = () => {
        goPage('/stm/qna/list')
    }

    //삭제 버튼
    const remove = () => {
        console.log('삭제')
    }

    //수정 버튼
    const edit = () => {
        setMode('edit');

        console.log('mode =>', mode)
    }
    
    //취소 버튼
    const cancel = () => {
        console.log('취소')

        if(mode === MODE.REGISTER) {
            goBack();
        } else if(mode === MODE.EDIT) {
            setMode('view')
        }
    }

    //확인 버튼
    const confirm = () => {
        if(mode === MODE.REGISTER) {
            goBack();
        } else if(mode === MODE.EDIT) {
            setMode('view')
        }
    }

    //api 읽어와서 업데이트 할 내용
    const authorInfo = {
        title: '등록자 정보',
        rows: [
            {
                cols: [
                    {
                        key: '등록자', 
                        value: '신재문'
                    },
                    {
                        key: '등록일시', 
                        value: '2023.03.02. 15:00:00'
                    },
                ]
            }
        ]
    }

    const contentsInfo = {
        title: '등록 내용',
        mode: mode,
        hasRequired: true,
        rows: [
            {
                cols: [
                    {
                        required: true,
                        key: '이벤트 제목', 
                        editingValue: <InputText className="" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '이벤트 유형',
                        editingValue: (
                            type.map((type) => {
                            return (
                                <span key={type.key} className="field-radiobutton mr20">
                                    <RadioButton inputId={type.key} name="type" value={type} onChange={(e) => setSelectedType(e.value)} checked={selectedType.key === type.key} disabled={type.key === 'R'} />
                                    <label className='ml5' htmlFor={type.key}>{type.name}</label>
                                </span>
                        )}))
                    }
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '당첨 유형',
                        editingValue: 
                            <div className='d-flex-default'>
                            {
                            categories.map((category) => (
                                <span key={category.key} className="field-radiobutton mr20">
                                    <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                    <label htmlFor={category.key}>{category.name}</label>
                                </span>
                                
                            ))}
                            <InputNumber className='orderNm' inputId="integeronly" value={order} onValueChange={(e) => setOrder(e.value)} /> 
                            <span className='color-red ml5'>* 랜덤 당첨할 인원수를 입력해주세요.</span>
                            </div>
                                                
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '이벤트 기간', 

                        editingValue: 
                        <>
                        <Calendar dateFormat='yy.mm.dd' value={values.fromDate} onChange={(e) => handleChange('fromDate', e.value)} showIcon />
                        <span className='mt5 mr5 ml5'>~</span>
                        <Calendar dateFormat='yy.mm.dd' value={values.toDate} onChange={(e) => handleChange('toDate', e.value)} showIcon />
                        </>,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '이벤트 설명', 
                        editingValue: <InputText className="" placeholder="이벤트 설명을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '퀴즈 정답', 
                        editingValue: <InputText className="" placeholder="퀴즈 정답을 입력해주세요. (시스템에서 정답 자동 추출을 위해 입력 시 오탈자에 주의해주세요.)" value={title} onChange={(e) => setTitle(e.target.value)} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '이미지', 
                        value: <><i className='pi pi-download mr5 downloadIco'></i><u>파일명.xlsx</u></>,
                        editingValue: <CldFileUpload url='' onUpload={()=>{ }} />
                    },
                ]
            },
            
        ]
    }

    return(
    <BasePage>
        {/* 등록자 정보 */}
        <ViewTemplate {...authorInfo} />

        {/* 등록 내용 */}
        <ViewTemplate {...contentsInfo} />

        {/* 
            버튼영역 
            mode={mode} 편집모드 'view' | 'edit' | 'resgister'
            list={list} 목록 버튼
            edit={edit} 수정 버튼
            remove={remove} 삭제 버튼
            cancel={cancel} 수정모드 > 취소 버튼
            confirm={confirm} 수정모드 > 확인 버튼
        */}
        <ViewButtonsTemplate 
            mode={mode}
            list={list}
            edit={edit}
            remove={remove}
            cancel={cancel}
            confirm={confirm}
        />
    </BasePage>)
}
export default CLPENTM07330;