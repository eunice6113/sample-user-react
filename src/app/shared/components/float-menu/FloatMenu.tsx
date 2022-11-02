import { Button, InputText, InputTextarea } from 'primereact';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './float-menu.css'

const FloatMenu = () => {

    interface Qna {
        title: string;
        content: string;
    }

    const qna_initialized = {
        title: '',
        content: ''
    }

    const [showQna, toggleShowQna] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<Qna>(qna_initialized);

    const updateQna = ( prop:string, value: any) => {
        setValue({ ...value, [prop]: value })
    }
    
    const handleQnaPanel = () => {
        // toggleShowQna(!showQna)
        if(showQna) {
            closeQnaPanel()
        } else {
            openQnaPanel()  
        }
    }

    const openQnaPanel = () => {
        toggleShowQna(true)
    }

    const closeQnaPanel = () => {
        toggleShowQna(false)
    }

    return (
        <>
            <ul className='floatMenuBox'>
                <li>
                    <Link to='/asc/cat-req'>
                        <i className='icon-cart'></i>
                        <p>장바구니</p>
                    </Link>
                </li>
                <li>
                    <button className={`qnaBtn ${showQna ? 'on':''}`} onClick={handleQnaPanel}>
                        <i className='icon-qna'></i>
                        <p>건의 및 개선</p>
                    </button>
                </li>
                <li>
                    <Link to='/spr/faq'>
                        <i className='icon-faq'></i>
                        <p>자주묻는질문</p>
                    </Link>
                </li>
            </ul>

            {/* 건의 및 개선 */}
            <div className={`qnaBox ${showQna ? 'show':'hide'}`}>
                <InputText value={value.title} className='mb20'
                           placeholder='제목을 입력해주세요.'
                           onChange={(e) => updateQna('title', e.target.value)} />

                <InputTextarea value={value.content} rows={10} className='mb20'
                               placeholder='건의 및 개선 의견을 입력해주세요.'
                               onChange={(e) => updateQna('content', e.target.value)} />

                <Button className='xxl' label='확인' />
            </div>
        </>
    )
}
export default FloatMenu;