import { Button, Calendar, Dropdown, Editor, FileUpload, InputText, InputTextarea, RadioButton } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import useBasePage from '../../../../shared/hooks/base-page.hook';
import './CLPENTM07320.css';
import Comment from '../../../../shared/components/ui/comment/Comment';
import CommentRegister from '../../../../shared/components/ui/comment/CommentRegister';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { DataTable } from 'primereact/datatable';
import { eventWinData } from '../../../../shared/demo/data/eventWinData';
import BoardDetail from '../../../../shared/components/template/BoardDetail';
import { updateItemInList } from '../../../../shared/utils/com-utils';
import { IComment } from '../../../../core/models/i-comment';
import { commDummyData } from '../../../../shared/demo/data/commentDummyData';


//이벤트 상세
const CLPENTM07320:React.FC = () => {
    const { goPage } = useBasePage()

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');
   
    //목록 버튼
    const list = () => {
        goPage('/asc/ent/list')
    }

    //링크 버튼
    const link = () => {

    }
    

    //이벤트 댓글 리스트
    const initialComments:IComment[] =  [
        {
            id: 'c0',
            mode:'view',
            deletable:true,
            editable:true,
            showProfile:true,
            userName:'권승주',
            value: '1111 클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
        {
            id: 'c1',
            mode:'view',
            deletable:true,
            editable:true,
            showProfile:true,
            userName:'홍길동',
            value: '2222 클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
        {
            id: 'c2',
            mode:'view',
            deletable:true,
            editable:true,
            showProfile:true,
            userName:'홍길동',
            value: '3333 클라우드 Cell은 당대의 빛과 같은 존재로 기은에서 없어서는 안될 존재입니다. 기은의 클라우드를 늘 이끌어주세요~~!!',
            date:'2022.03.02 09:00:00'
        },
    ]


    //댓글 목록
    const [comments, setComments] = React.useState<IComment[]>([])

    React.useEffect(() => {
        //댓글 목록 초기화
        setComments(initialComments);
    }, [])
    

    //(하나만 있는) 댓글 입력 처리
    const [comment, setComment] = React.useState('');


    //(하나만 있는) 댓글 등록
    const registerComment = () => {
        console.log('등록')
    }
    


    //댓글 목록 ===================================================

    //댓글 삭제 버튼
    const deleteFunc = ( e:Event, id:any ) => {
        console.log('삭제', id)

        setComments(
            comments.filter(c =>
                c.id !== id
            )
        );
    }

    // Start 댓글 수정 버튼 눌렀을 때 나오는 버튼들 ---------------
    //댓글 취소
    const cancel = ( e:Event, id:any ) => {
        console.log('취소', id)

        //댓글 목록의 해당 댓글 모드를 view 로 바꾼다
        updateItemInList(id, 'mode', 'view', comments, setComments)
    }

    //댓글 등록
    const register = ( e:Event, id:any ) => {
        console.log('등록', id)

        //댓글 목록의 해당 댓글 모드를 view 로 바꾼다
        updateItemInList(id, 'mode', 'view', comments, setComments)
    }
    // End 댓글 수정 버튼 눌렀을 때 나오는 버튼들 ---------------


    //댓글 수정 버튼
    const edit = ( e:Event, id:any ) => {
        console.log('수정', id)

        //댓글 목록의 해당 댓글 모드를 edit 로 바꾼다
        updateItemInList(id, 'mode', 'edit', comments, setComments)
    }

    //댓글 내용 수정
    const editValue = ( e:any, id:any ) => {
        console.log('댓글 내용 수정', id, e.target.value)

        //댓글 목록의 해당 댓글 값을 업데이트한다
        updateItemInList(id, 'value', e.target.value, comments, setComments)
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
    

     //더보기 할 댓글수
     let moreCommentLen = 120;

     //댓글 더보기 버튼
     const moreComment = () => {
         console.log('댓글 더보기')
     }
     
    
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
                value={comment}
                setValue={setComment}
                register={registerComment}
            />

            {
                comments.map(( item, index) => (
                    <Comment 
                        key={'comm'+index}
                        id={item.id}
                        deletable={item.deletable}
                        editable={item.editable}
                        showProfile={item.showProfile}
                        userName={item.userName} 
                        value={item.value}
                        setValue={(e:Event) => editValue(e, item.id)}
                        date={item.date}
                        mode={item.mode}
                        edit={(e:Event) => edit(e, item.id)}
                        delt={(e:Event) => deleteFunc(e, item.id)}
                        register={(e:Event) => register(e, item.id)}
                        cancel={(e:Event) => cancel(e, item.id)}
                    />
                ))
            
            }
            
            <Button onClick={moreComment} label={`더보기 ${moreCommentLen}댓글`} className='more p-button-text' icon='pi pi-angle-down' iconPos="right"/>
        </div>
        

                

                
        
    </BasePage>)
}
export default CLPENTM07320;