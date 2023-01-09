import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import './CLPSVMM00000.css';

import ico1 from '../../../../assets/images/about-service-market/ico1.png';
import ico2 from '../../../../assets/images/about-service-market/ico2.png';
import ico3 from '../../../../assets/images/about-service-market/ico3.png';
import arrow from '../../../../assets/images/about-service-market/arrow.png';
import SVMB1Motion from '../../../shared/components/motion/SVMB1Motion';
import SVMB2Motion from '../../../shared/components/motion/SVMB2Motion';
import SVMB3Motion from '../../../shared/components/motion/SVMB3Motion';


// 클라우드 
const CLPSVMM00000: React.FC = () => {

    return(
    <BasePage className='CLPSVMM00000'>
        <section className='content1'>
            <div className='innerWrap'>
                <h1>
                    클라우드 인프라, 개발 환경 등 디지털 사업에 필요한<br/>
                    유용한 도구들을 간편하게 이용할 수 있습니다.
                </h1>
            </div>
        </section>
        <section className='content2'>
            <div className='cirWrapper'>
                <div className='cirBanner'>
                    <div className='cir'>
                        <div>
                            <img src={ico1} alt=''/>
                            <h3>서비스 신청</h3>
                        </div>
                    </div>
                    <p>서비스 목록 및 조회<br/>서비스 신청</p>
                </div>
                <img src={arrow} alt='' className='arrowImg' />
                <div className='cirBanner'>
                    <div className='cir'>
                        <div>
                            <img src={ico2} alt=''/>
                            <h3>업무협의</h3>
                        </div>
                    </div>
                    <p>클라우드 담당자의<br/>업무 지원</p>
                </div>
                <img src={arrow} alt='' className='arrowImg' />
                <div className='cirBanner'>
                    <div className='cir'>
                        <div>
                            <img src={ico3} alt=''/>
                            <h3>클라우드<br/>서비스 이용</h3>
                        </div>
                    </div>
                    <p>클라우드 서비스를<br/>업무에 활용</p>
                </div>
            </div>
        </section>

        <hr/>
        
        <section className='content3'>
            <h2>주요 서비스</h2>
            <div className='banners'>
                <div className='banner'>
                    <h3>인프라</h3>
                    <SVMB1Motion />
                    <p>
                        IBK 최적화 “하이브리드 클라우드” 환경이 준비되어 있습니다.<br/>
                        IT자원과 소프트웨어는 필요한 때 필요한 만큼만 쉽게 사용하세요.
                    </p>
                </div>
                <div className='banner'>
                    <h3>공통 서비스</h3>
                    <SVMB2Motion />
                    <p>신속한 업무 협업을 위한 애자일 프로세스, 업무 현황을 한눈에 보는 ‘데이터 대시보드’ 등 업무에 유용한 각종 서비스를 이용해 보세요.</p>
                </div>
                <div className='banner'>
                    <h3>지원 서비스</h3>
                    <SVMB3Motion />
                    <p>
                        클라우드에 대해 잘 모르더라도 걱정하지 마세요.<br/>
                        최고의 전문가들이 클라우드 쉽게 활용할 수 있도록 지원해 드립니다.
                    </p>
                </div>
            </div>
        </section>
        
    </BasePage>)
}
export default CLPSVMM00000;