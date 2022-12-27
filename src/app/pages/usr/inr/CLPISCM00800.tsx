import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import TFCMotion1 from '../../../shared/components/motion/TFCMotion1';
import TFCMotion2 from '../../../shared/components/motion/TFCMotion2';
import TFCMotion3 from '../../../shared/components/motion/TFCMotion3';
import './CLPISCM00800.css';


// the fast cloud 서비스 신청
const CLPISCM00800: React.FC = () => {

    return(
    <BasePage className='CLPISCM00800'>

        <section className='infoSection'>
            <h1 className=''>The Fast 클라우드 신청 안내</h1>
            <h2 className='mt60 mb30'>정보화 사업 소요예산 사전신청 시</h2>
            <hr className='mb40'/>
            <div className='infoCardWrap i01'>
                <div className='infoCard color01'>
                    <div>
                        <h3>사전 신청</h3>
                        <h5>추진부서</h5>
                        <p>‘체크리스트’ 및 관련자료 작성</p>
                    </div>
                    <div className='ml-auto mo01'>
                        <TFCMotion1 />
                    </div>
                </div>
                <div className='arrowRight'>
                    <i className='pi pi-angle-right'></i>
                </div>
                <div className='infoCard color02'>
                    <div>
                        <h3>검토 및 의견 송부</h3>
                        <h5>클라우드 추진 Cell</h5>
                        <p>
                            (적정성) 클라우드 적합도 의견 제공<br/>
                            (기간) 사업범위에 따른 예상기간 및 추진시기 협의<br/>
                            (예산) 클라우드 예상견적 및 연간비용 산출
                        </p>
                    </div>
                    <div className='ml-auto mo02'>
                        <TFCMotion2 />
                    </div>
                </div>
            </div>

            <h2 className='mt60 mb30'>정보화사업 추진 시</h2>
            <hr className='mb40'/>
            <div className='infoCardWrap i02'>
                <div className='infoCard color03'>
                    <div>
                        <h3>본 신청</h3>
                        <h5>추진부서</h5>
                        <p>
                            (포탈 내 결제)사업계획서 초안 및<br/>
                            체크리스트 포함하여 요청
                        </p>
                    </div>
                </div>
                <div className='arrowRight'>
                    <i className='pi pi-angle-right'></i>
                </div>
                <div className='infoCard color04'>
                    <div>
                        <h3>사업대상 선정</h3>
                        <h5>클라우드 추진 Cell</h5>
                        <p className='mb10'>
                            클라우드 우선순위 산정기준표를<br/>
                            통해 최종 선정
                        </p>
                        <small className='color-red'>*우선순위에 따라 제도 선정이 늦어질 수 있습니다.</small>
                    </div>
                </div>
                <div className='arrowRight'>
                    <i className='pi pi-angle-right'></i>
                </div>
                <div className='infoCard color05'>
                    <div>
                        <h3>단계별 밀착 멘토링 지원</h3>
                        <h5>클라우드 추진 Cell</h5>
                        <p>
                            (설계) 아키텍처 수립 및 설계, 이슈 관리<br/>
                            (선정기준) 사업자 및 솔루션 선정 방향제시<br/>
                            (예산) 예상견적 및 연간비용 산출<br/>
                            (보안) 보안성검토 작성 등 필요 절차 자문<br/>
                            (문서) 클라우드 분야 사업계획서 작성 자문
                        </p>
                    </div>
                </div>
            </div>

            <h2 className='mt60 mb30'>정보화사업 완료 후</h2>
            <hr className='mb40'/>
            <div className='infoCardWrap i03'>
                <div className='infoCard color03'>
                    <div>
                        <h3>유지보수 관리</h3>
                        <h5>클라우드 추진 Cell</h5>
                        <p>
                            (유지보수계약) 연간 클라우드 사용계약 전담 지원<br/>
                            (클라우드운영) 시스템 사용량에 따른 용량 재조정 등
                        </p>
                    </div>
                    <div className='ml-auto mo03'>
                        <TFCMotion3 />
                    </div>
                </div>
            </div>
        </section>
    </BasePage>)
}
export default CLPISCM00800;