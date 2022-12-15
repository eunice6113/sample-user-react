import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import './main.css';
import useBasePage from '../../../shared/hooks/base-page.hook';

import visual41 from '../../../../assets/images/main/main4-1.png';
import visual42 from '../../../../assets/images/main/main4-2.png';
import visual43 from '../../../../assets/images/main/main4-3.png';
import visual5 from '../../../../assets/images/main/main5.jpg';
import visual61 from '../../../../assets/images/main/main6-1.png';
import visual62 from '../../../../assets/images/main/main6-2.png';
import visual63 from '../../../../assets/images/main/main6-3.png';
import { Button } from 'primereact';

// 메인 화면
const Main: React.FC = ({}) => {
    const {goPage, location} = useBasePage()

    const [scrolling, setScrolling] = React.useState(false);
    const [scrollTop, setScrollTop] = React.useState(0);

    React.useEffect(() => {
        const onScroll = () => {
            let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
            if (currentPosition > scrollTop) {
                // downscroll code
                setScrolling(false);
            } else {
                // upscroll code
                setScrolling(true);
            }

            console.log('scrolling =>', scrolling)
            console.log('scrollTop =>', scrollTop)

            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return(
    <div className='mainContents'>

        <section className='content1'>
            <div className='textWrapper'>
                <h1 className='keyTitle'>우리가 그려가는<br/>클라우드 세상</h1>
                <hr />
                <p className='text'>Digital Innovation, With IBK Cloud</p>
            </div>
        </section>

        <section className='content2'>
            <div className='banner c1 hoverScaleEffect'>
                <h3>
                    클라우드 서비스로<br/>
                    효율성을 높이고
                </h3>
            </div>
            <div className='banner c2 hoverScaleEffect'>
                <h3>
                    기술을 몰라도<br/>
                    아이디어를 마음껏<br/>
                    펼칠 수 있도록
                </h3>
            </div>
            <div className='banner c3 hoverScaleEffect'>
                <h3>
                    당신의 비즈니스를<br/>
                    가능하게 해 드립니다.
                </h3>
            </div>
        </section>

        <section className='content3'>
            <div className='conWrapper'>
                <div className='leftTextWrapper'>
                    <h5>Provisioning</h5>
                    <h2>우리만의 공간</h2>
                    <p className='subTitle'>IBK만의 퍼블릭, 프라이빗 클라우드를 누구나 쉽게<br/>요청을 하여 빠르게 아이디어를 만들어 갈 수 있습니다.</p>
                </div>
            </div>
            <div className='conWrapper'>
                <div className='rightTextWrapper'>
                    <h5>Security</h5>
                    <h2>안전한 공간</h2>
                    <p className='subTitle'>누구나 쉽게 사용할 수 있지만<br/>어느 누구도 접근 할 수 없습니다.</p>
                </div>
            </div>
        </section>

        <section className='content4'>
            <h2 className='mb40'>클라우드 주요 서비스</h2>
            <div className='bannerWrapper'>
                <div className='banner'>
                    <img src={visual41}></img>
                    <p className='subText'>Consulting Service</p>
                    <h3>PLAN</h3>
                </div>
                <div className='banner'>
                    <img src={visual42}></img>
                    <p className='subText'>Work Management</p>
                    <h3>Jira</h3>
                </div>
                <div className='banner'>
                    <img src={visual43}></img>
                    <p className='subText'>Analytics Dashboard</p>
                    <h3>ELK</h3>
                </div>
            </div>
        </section>
        
        <section className='content5'>
            <p className='text underline'>IDEATION</p>
            <h2 className='mt25 mb40'>우리가 할 수 있는 클라우드</h2>
            <p className='subTitle'>클라우드 포탈에서 준비한 다양한 클라우드 활용 매뉴얼을 통해<br/>쉽고, 빠르게 IBK만의 DT를 완성할 수 있습니다.</p>

            <Button label='다양한 클라우드 활용 매뉴얼 보러 가기' className='p-button outline' onClick={(e) => goPage('/man')} />
        </section>

       
        20 #000
        Key features

        50
        아이디어를 현실로

        20
        클라우드 포탈의 주요 기능을 활용하여 빠른 아이디어 현실화를 경험하세요.

        30
        DevOps
        SANDBOX
        프로그램 개발환경


















        
        <div style={{width:100, height:300, marginBottom:50, backgroundColor:'red'}}></div>
        <div style={{width:100, height:300, marginBottom:50, backgroundColor:'red'}}></div>
        <div style={{width:100, height:300, marginBottom:50, backgroundColor:'red'}}></div>
        <div style={{width:100, height:300, marginBottom:50, backgroundColor:'red'}}></div>
        <div style={{width:100, height:300, marginBottom:50, backgroundColor:'red'}}></div>
        <div style={{width:100, height:300, marginBottom:50, backgroundColor:'red'}}></div>

    </div>)
}
export default Main;