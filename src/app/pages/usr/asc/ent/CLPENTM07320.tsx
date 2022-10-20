import { Button, Calendar, Dropdown, Editor, FileUpload, InputText, InputTextarea, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { useBasePage } from '../../../../shared/hooks/base-page.hook';
import './CLPENTM07320.css';
import Comment from '../../../../shared/components/ui/comment/Comment';
import CommentRegister from '../../../../shared/components/ui/comment/CommentRegister';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { DataTable } from 'primereact/datatable';
import { eventWinData } from '../../../../shared/demo/data/eventWinData';
import BoardDetail from '../../../../shared/components/template/BoardDetail';


//소통공간 상세
const CLPENTM07320:React.FC = () => {
    const { goPage } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');
   
    //목록 버튼
    const list = () => {
        goPage('/stm/ent/list')
    }

    //링크 버튼
    const link = () => {

    }
    
    //comment 댓글입력
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    //comment 등록
    const registration = () => {
        console.log('등록')
    }
    
    //comment 삭제
    const deleteFunc = () => {
        console.log('삭제')
    }

    //comment 수정 버튼
    const edit = () => {
        setMode('edit');
        console.log('mode =>', mode)
    }

    //api 읽어와서 업데이트 할 내용
    
    const contentsInfo = {
        rows: [
            {
                value: 
                <>  
                <div className='tableInfo'>
                    <h2 className='title'>
                        클라우드 추진 Cell 응원 댓글 이벤트에 많은 참여바라. (진행중)
                        <Button className='iconBtn p-button-text mr10' icon='pi pi-copy' onClick={link} />
                    </h2>
                    <ul className='info mt10'>
                        <li className='mr20'><span>이벤트 유형</span> 댓글-랜덤당첨</li>
                        <li className='mr20'><span>이벤트 기간</span> 2023.03.01 ~2023.04.01</li>
                        <li className='mr20'><span>등록일</span> 2023.03.01</li>
                        <li><span>조회수</span> 2,195</li>
                    </ul>
                </div>
                </>
            },
            {
                value: 
                <>
                    <p>
                        본문 노출 영역 클라우드 포탈 오픈 소식을 알려드립니다. 클라우드 포탈 오픈 소식을 알려드립니다.
                        본문 노출 영역 클라우드 포탈 오픈 소식을 알려드립니다. 클라우드 포탈 오픈 소식을 알려드립니다.<br/>
                        본문 노출 영역 클라우드 포탈 오픈 소식을 알려드립니다. 클라우드 포탈 오픈 소식을 알려드립니다.
                        본문 노출 영역 클라우드 포탈 오픈 소식을 알려드립니다. 클라우드 포탈 오픈 소식을 알려드립니다.
                    </p>
                </>
            },
            
            
        ],
        
    }
    //이벤트 댓글 리스트
    const commentList = [
        {//관리자 이거나 ? 본인이 작성한 것만 수정/삭제 가능
            deletable:true,
            editable:true,
            userName:'권승주',
            commentContent: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
        {
            deletable:true,
            editable:true,
            userName:'홍길동',
            commentContent: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
        {
            deletable:true,
            editable:true,
            userName:'홍길동',
            commentContent: '클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'

        },
        
    ]

    return(
    <BasePage>

        {/* 내용 */}
        <BoardDetail {...contentsInfo} />

        <div className='text-center mt30'>
                <Button className='xl' onClick={list}>목록</Button>
        </div>

        {/* 댓글 */}
        <div className='commentWrap mt30'>
            <CommentRegister 
                title='이벤트에 참여해주세요.'
                total='글 댓글 2'
                value={value1}
                // setValue={setValue1}
                setValue={setValue1}
            />

            {
                commentList.map(( item, index) => (
                    <Comment 
                        id={index}
                        deletable={item.deletable}
                        editable={item.editable}
                        key={'comm'+index}
                        userName={item.userName} 
                        commentContent={item.commentContent}
                        date={item.date}
                        mode='register'
                        value={value2} 
                        setValue={setValue2}
                        edit={edit}
                        delt={deleteFunc}
                        registration={registration}
                        />
                ))
            
            }
            
            <Button className='more p-button-text' label='더보기 123댓글' icon='pi pi-angle-down'  iconPos="right"/>
        </div>
        

                

                
        
    </BasePage>)
}
export default CLPENTM07320;