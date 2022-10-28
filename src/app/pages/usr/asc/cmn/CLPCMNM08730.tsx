import { Dropdown, InputNumber, InputText,RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import ViewButtonsTemplate from '../../../../shared/components/template/ViewButtonsTemplate';
import TextEditor from '../../../../shared/components/ui/text-editor/TextEditor';
import useBasePage from '../../../../shared/hooks/base-page.hook';
import './CLPCMNM08730.css';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';

//소통공간 등록
const CLPCMNM08730:React.FC = () => {
    const { goPage } = useBasePage()

    const [mode, setMode] = React.useState<'edit' | 'register'>('edit');

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    //유형 라디오
    const categories = [
        {name: '자율소통', key: 'nY'}, 
        {name: '후기', key: 'nN'},
        {name: '질문', key: 'nddN'}];
    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    //목록 버튼
    const list = () => {
        goPage('/spr/cmn/list')
    }

    //삭제 버튼
    const remove = () => {
        console.log('삭제')
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
        title: '상세 내용',
        mode: mode,
        hasRequired: true,
        rows: [
            {
                cols: [
                    {
                        required: false,
                        key: '유형', 
                        editingValue: 
                        <>
                            {
                                categories.map((category) => (
                                    <span key={category.key} className="field-radiobutton mr20">
                                        <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                        <label htmlFor={category.key}>{category.name}</label>
                                    </span>
                                ))
                            }
                            
                        </>
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '제목', 
                        editingValue: <InputText className="" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '내용', 
                        editingValue: <TextEditor value={content} onTextChange={setContent} />,
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
            mode={mode} 편집모드 'view' | 'edit' | 'register'
            list={list} 목록 버튼
            edit={edit} 수정 버튼
            remove={remove} 삭제 버튼
            cancel={cancel} 수정모드 > 취소 버튼
            confirm={confirm} 수정모드 > 확인 버튼
        */}
        <ViewButtonsTemplate 
            mode={mode}
            list={list}
            remove={remove}
        />
    </BasePage>)
}
export default CLPCMNM08730;