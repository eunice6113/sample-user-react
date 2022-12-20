import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import './main.css';
import useBasePage from '../../../shared/hooks/base-page.hook';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import visual41 from '../../../../assets/images/main/main4-1.png';
import visual42 from '../../../../assets/images/main/main4-2.png';
import visual43 from '../../../../assets/images/main/main4-3.png';
import visual61 from '../../../../assets/images/main/main6-1.png';
import visual62 from '../../../../assets/images/main/main6-2.png';
import visual63 from '../../../../assets/images/main/main6-3.png';

import video1 from '../../../../assets/videos/gettyimages-1333586824-640_adpp.mp4';
import video2 from '../../../../assets/videos/gettyimages-1249114501-640_adpp.mp4';
import video3 from '../../../../assets/videos/gettyimages-1136493849-640_adpp.mp4';
import videoStarLink from '../../../../assets/videos/gettyimages-158708666-640_adpp.mp4';

import { Button } from 'primereact';
import { Link } from 'react-router-dom';

// 메인 화면
const Main: React.FC = ({}) => {
    const {goPage, location} = useBasePage()

    const [isDownscroll, setIsDownscroll] = React.useState(false);
    const [scrollTop, setScrollTop] = React.useState(0);
    
    //content1 motion
    const [activeIdx, setActiveIdx] = React.useState(0);

    //content2 motion
    const [appearC2, setAppearC2] = React.useState(false);
    const [appearC3, setAppearC3] = React.useState(false);
    const [appearC4, setAppearC4] = React.useState(false);
    const [appearC5, setAppearC5] = React.useState(false);
    const [appearC6, setAppearC6] = React.useState(false);
    const [appearC7, setAppearC7] = React.useState(false);
    const [appearC8, setAppearC8] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
            if (currentPosition > scrollTop) {
                // downscroll code
                setIsDownscroll(true);

                if(currentPosition > 660) {
                    setAppearC2(true)
                } 
                if(currentPosition > 1300) {
                    setAppearC3(true)
                } 
                if(currentPosition > 2000) {
                    setAppearC4(true)
                } 
                if(currentPosition > 2500) {
                    setAppearC5(true)
                }
            } else {
                // upscroll code
                setIsDownscroll(false);
            }
            // console.log('isDownscroll =>', isDownscroll)
            console.log('scrollTop =>', scrollTop)

            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    React.useEffect(() => {
        console.log('appearC2', appearC2)
    }, [appearC2])

    // 하단 서비스 소개 배너 페이지네이션
    const customPagination = {
        clickable: true,
        renderBullet: (index:number, className:string) => {
            if(index === 0) {
                return `
                    <div class='${className}'>
                        <div class='innerWrapper'>
                            <h3>DevOps</h3>
                            <p>정보화 사업 수행에 필요한 프로젝트 개발 환경이 필요하세요?<br/>
                                클라우드의 DevOps(CICD) 환경을 적용해드립니다.</p>
                        </div>
                    </div>
                `;    
            }
            else if(index === 1) {
                return `
                    <div class='${className}'>
                        <div class='innerWrapper'>
                            <h3>SANDBOX</h3>
                            <p>새로운 개발을 통한 비즈니스 발굴을 원하세요?<br/>
                                클라우드의 샌드박스를 활용해 보세요</p>
                        </div>
                    </div>
                `;
            }
            else {
                return `
                    <div class='${className}'>
                        <div class='innerWrapper'>
                            <h3>프로그램 개발환경</h3>
                            <p>마이크로서비스를 경험해 보고 싶으신가요?<br/>
                                클라우드 포털 가이드를 참고해보세요</p>
                        </div>
                    </div>
                `;
            }
        }
    };

    return(
    <div className='mainContents'>

        <section className='content1'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{delay: 3500, disableOnInteraction: false}}
                pagination={{clickable: true}}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mainVisualSwiper"
                onSlideChange={( e ) => setActiveIdx(e.activeIndex)}
            >
                <SwiperSlide>
                    <div className='mainVisual'>
                        <video muted autoPlay loop className='videoBg'>
                            <source src={video1} type='video/mp4'></source>
                        </video>
                        <div className='copyWrapper'>
                            <h1 className='keyTitle'>
                                <p className={activeIdx === 0 ? 'anim':''}>활용하고</p>
                                <p className={activeIdx === 0 ? 'anim':''}>도전하고</p>
                                <p className={activeIdx === 0 ? 'anim':''}>실현하는</p>
                                <p className={activeIdx === 0 ? 'anim':''}>IBK 클라우드</p>
                            </h1>
                            <hr className={activeIdx === 0 ? 'anim':''} />
                            <p className={`text ${activeIdx === 0 ? 'anim':''}`}>
                                새로운 도전 클라우드가 지원합니다 
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mainVisual'>
                        <video muted autoPlay loop className='videoBg' preload='false'>
                            <source src={video2} type='video/mp4'></source>
                        </video>
                        <div className='copyWrapper'>
                            <h1 className='keyTitle'>
                                <p className={activeIdx === 1 ? 'anim':''}>비즈니스 혁신을</p>
                                <p className={activeIdx === 1 ? 'anim':''}>가능하게 하는</p>
                                <p className={activeIdx === 1 ? 'anim':''}>IBK 클라우드</p>
                            </h1>
                            <hr className={activeIdx === 1 ? 'anim':''} />
                            <p className={`text ${activeIdx === 1 ? 'anim':''}`}>
                                현업의 비즈니스 클라우드가 함께 합니다 
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mainVisual'>
                        <video muted autoPlay loop className='videoBg' preload='false'>
                            <source src={video3} type='video/mp4'></source>
                        </video>
                        <div className='copyWrapper'>
                            <h1 className='keyTitle'>
                                <p className={activeIdx === 2 ? 'anim':''}>우리가 그려가는</p>
                                <p className={activeIdx === 2 ? 'anim':''}>클라우드 세상</p>
                            </h1>
                            <hr className={activeIdx === 2 ? 'anim':''} />
                            <p className={`text ${activeIdx === 2 ? 'anim':''}`}>
                                우리와 함께 IBK DT를 만들어가요
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className='mainVisual v1'>
                        <div className='copyWrapper'>
                            <h1 className='keyTitle'>
                                <p className={activeIdx === 3 ? 'anim':''}>우리가 그려가는</p>
                                <p className={activeIdx === 3 ? 'anim':''}>클라우드 세상</p>
                            </h1>
                            <hr className={activeIdx === 3 ? 'anim':''} />
                            <p className={`text ${activeIdx === 3 ? 'anim':''}`}>
                                Digital Innovation, With IBK Cloud
                            </p>
                        </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className='mainVisual v2'>
                        <div className='copyWrapper'>
                            <h1 className='keyTitle'>
                                <p className={activeIdx === 3 ? 'anim':''}>정보화 사업에 클라우드를</p>
                                <p className={activeIdx === 3 ? 'anim':''}>활용하고 싶으신가요?</p>
                                <p className={activeIdx === 3 ? 'anim':''}>클라우드 추진셀이 도와드립니다.</p>
                            </h1>
                            <Button label='The-Fast Cloud 신청하기' 
                                icon='pi pi-arrow-right' iconPos='right' 
                                className={`outline white roundBtn p-button-rounded mt60 ${activeIdx === 3 ? 'anim':''} `}
                                onClick={(e) => goPage('/mml')} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mainVisual v3'>
                        <div className='copyWrapper'>
                            <h1 className='keyTitle'>
                                <p className={activeIdx === 4 ? 'anim':''}>클라우드 주요 기능을</p>
                                <p className={activeIdx === 4 ? 'anim':''}>신청해서 적극 활용해 보세요.</p>
                            </h1>
                            <Button label='서비스 카탈로그 신청하기' 
                                icon='pi pi-arrow-right' iconPos='right' 
                                className={`outline white roundBtn p-button-rounded mt60 ${activeIdx === 4 ? 'anim':''} `}
                                onClick={(e) => goPage('/mml')} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

      
        </section>

        <section className='content2'>
            <div className='banner c1 hoverScaleEffect'>
                <h3 className={appearC2 ? 'anim':''}>
                    클라우드 서비스로<br/>
                    효율성을 높이고
                </h3>
            </div>
            <div className='banner c2 hoverScaleEffect'>
                <h3 className={appearC2 ? 'anim':''}>
                    기술을 몰라도<br/>
                    아이디어를 마음껏<br/>
                    펼칠 수 있도록
                </h3>
            </div>
            <div className='banner c3 hoverScaleEffect'>
                <h3 className={appearC2 ? 'anim':''}>
                    당신의 비즈니스를<br/>
                    가능하게 해 드립니다.
                </h3>
            </div>
        </section>

        <section className='content3'>
            <video muted autoPlay loop className='videoBg'>
                <source src={videoStarLink} type='video/mp4'></source>
            </video>
            <div className={`copyWrapper`}>
                <div className={`conWrapper`}>
                    <div className={`leftTextWrapper ${appearC3 ? 'anim':''}`}>
                        <h5>Provisioning</h5>
                        <h2>우리만의 공간</h2>
                        <p className='subTitle'>IBK만의 퍼블릭, 프라이빗 클라우드를 누구나 쉽게<br/>요청을 하여 빠르게 아이디어를 만들어 갈 수 있습니다.</p>
                    </div>
                </div>
                <div className='conWrapper'>
                    <div className={`rightTextWrapper ${appearC3 ? 'anim':''}`}>
                        <h5>Security</h5>
                        <h2>안전한 공간</h2>
                        <p className='subTitle'>누구나 쉽게 사용할 수 있지만<br/>어느 누구도 접근 할 수 없습니다.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='content4'>
            <h2 className='mb40'>클라우드 주요 서비스</h2>
            <div className='bannerWrapper'>
                <div className={`banner ${appearC4 ? 'anim':''}`}>
                    <div className='imgWrapper'>
                        <img src={visual41}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>새로운 디지털 전환 과제를<br/>고민하시나요?<br/>클라우드와 함께라면 가능합니다.</p>
                                <Button className='textBtn' label='서비스 신청하기' icon='pi pi-arrow-right' iconPos='right' />
                            </div>
                        </div>
                    </div>
                    <p className='subText'>Consulting Service</p>
                    <h3>PLAN</h3>
                </div>
                <div className={`banner ${appearC4 ? 'anim':''}`}>
                    <div className='imgWrapper'>
                        <img src={visual42}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>Jira를 이용하여<br/>Agile 협업 환경을 경험해보세요.</p>
                                <Button className='textBtn' label='서비스 신청하기' icon='pi pi-arrow-right' iconPos='right' />
                            </div>
                        </div>
                    </div>
                    <p className='subText'>Work Management</p>
                    <h3>Jira</h3>
                </div>
                <div className={`banner ${appearC4 ? 'anim':''}`}>
                    <div className='imgWrapper'>
                        <img src={visual43}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>부서만의 데이터 대시보드가 필요한가요?<br/>클라우드가 지원합니다.</p>
                                <Button className='textBtn' label='서비스 신청하기' icon='pi pi-arrow-right' iconPos='right' />
                            </div>
                        </div>
                    </div>
                    <p className='subText'>Analytics Dashboard</p>
                    <h3>ELK</h3>
                </div>
            </div>
        </section>
        
        <section className='content5'>
            <h5 className='text underline'>IDEATION</h5>
            <h2 className='mt25 mb40'>우리가 할 수 있는 클라우드</h2>
            <p className='subText'>클라우드 포탈에서 준비한 다양한 클라우드 활용 매뉴얼을 통해<br/>쉽고, 빠르게 IBK만의 DT를 완성할 수 있습니다.</p>

            <Button label='다양한 클라우드 활용 매뉴얼 보러 가기' icon='pi pi-arrow-right' iconPos="right" className='outline white roundBtn p-button-rounded mt60' onClick={(e) => goPage('/mml')} />
        </section>

        <section className='content6'>
            <h5 className='text underline black'>KEY FEATURES</h5>
            <h2 className='mt25 mb40'>아이디어를 현실로</h2>
            <p className='subText'>클라우드 포탈의 주요 기능을 활용하여 빠른 아이디어 현실화를 경험하세요.</p>

            <div className='aboutService mt75'>
                <Swiper
                    direction={'vertical'}
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    pagination={customPagination}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="aboutServiceSwiper"
                >
                    <SwiperSlide>
                        <img src={visual61} alt='DevOps' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={visual62} alt='SANDBOX' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={visual63} alt='프로그램 개발환경' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        {/* <section className='content7'>
            <div className='banner b1'>
                <div>
                    <h3>정보화 사업에 클라우드를<br/>활용하고 싶으신가요?<br/>클라우드 추진셀이 도와드립니다.</h3>

                    <Button label='The-Fast Cloud 신청하기' icon='pi pi-arrow-right' iconPos='right' className='outline white roundBtn p-button-rounded mt60' onClick={(e) => goPage('/mml')} />
                </div>
            </div>
            <div className='banner b2'>
                <div>
                    <h3>클라우드 주요 기능을<br/>신청해서 적극 활용해 보세요.</h3>

                    <Button label='서비스 카탈로그 신청하기' icon='pi pi-arrow-right' iconPos='right' className='outline white roundBtn p-button-rounded mt60' onClick={(e) => goPage('/mml')} />
                </div>
            </div>
        </section> */}

        <section className='content7'>
            <h5 className='text underline'>PLAYING</h5>
            <h2 className='mt25 mb40'>아이디어가 가치가 되는 공간</h2>
            <p className='subText'>IBK 모두의 클라우드 아이디어를 소통하는 그 곳.</p>

            <Button label='소통하러 가기' icon='pi pi-arrow-right' iconPos="right" className='outline white roundBtn p-button-rounded mt60' onClick={(e) => goPage('/mml')} />
        </section>
    </div>)
}
export default Main;