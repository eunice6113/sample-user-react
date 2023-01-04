import { Button, OrganizationChart } from 'primereact';
import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import './CLPIASM00500.css';

import banner1 from '../../../../assets/images/about-cloud-service/about-service01.png';
import banner2 from '../../../../assets/images/about-cloud-service/about-service02.png';
import banner3 from '../../../../assets/images/about-cloud-service/about-service03.png';
import banner4 from '../../../../assets/images/about-cloud-service/about-service04.png';
import banner5 from '../../../../assets/images/about-cloud-service/about-service05.png';
import banner6 from '../../../../assets/images/about-cloud-service/about-service06.png';
import banner7 from '../../../../assets/images/about-cloud-service/about-service07.png';
import banner8 from '../../../../assets/images/about-cloud-service/about-service08.png';
import banner9 from '../../../../assets/images/about-cloud-service/about-service09.png';

// 클라우드 서비스 소개
const CLPIASM00500: React.FC = () => {


    return(
    <BasePage className='CLPIASM00500'>
        <section className='content1'>
            <div className='innerWrap'>
                <h2>
                클라우드Cell은<br/>
                안전하고 안정적인 클라우드 서비스를 제공하며<br/>
                비즈니스의 성공을 함께 고민합니다
                </h2>
            </div>
        </section>
        <section className='content2'>
            <div className='bannerWrapper'>
                <div className='banner'>
                    <div className='imgWrapper'>
                        <img src={banner1}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>
                                정보화사업을 추진 중이세요? 사업 대상 선정 및 예산 산정, 단계별 밀접 멘토링까지 클라우드 추진Cell이 함께 합니다. 연간 클라우드 사용 계약을 전담 지원하고 클라우드 운영을 도와드릴게요.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>The Fast Cloud</h3>
                </div>
                <div className='banner'>
                    <div className='imgWrapper'>
                        <img src={banner2}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>
                                클라우드 서비스 기반의 새로운 디지털 전환 과제를 고민 중이라면 클라우드Cell의 문을 두드려보세요. 우리는 비즈니스의 성공을 함께 고민하고 기술을 지원합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>Service Planning</h3>
                </div>
                <div className='banner'>
                    <div className='imgWrapper'>
                        <img src={banner3}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>
                                어린이들이 안전하고 자유롭게 놀 수 있는 모래상자, 샌드박스는 기존 시스템과 독립된 클라우드 기반 개발환경입니다. 안전하게 보호된 가상 영역에서 자유롭게 아이디어를 실험해보세요.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>SANDBOX</h3>
                </div>
            </div>
            <div className='bannerWrapper'>
                <div className='banner'>
                    <div className='imgWrapper'>
                        <img src={banner4}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>
                                데이터의 활용성이 중요해지면서 데이터 수집과 분석은 매우 중요한 요소가 되었습니다. 오픈소스 검색엔진으로 유명한 Eastic에서 개발하고 제공하는 ELK는 데이터 수집, 분석 시각화를 도와줄거에요.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>ELK</h3>
                </div>
                <div className='banner'>
                    <div className='imgWrapper'>
                        <img src={banner5}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>
                                Jira는 Agile 소프트웨어 개발방법론을 지향합니다. 백로그를 작성하고 스프린트 계획, 칸반 보트, 버전 관리, 릴리즈 관리를 수행할 수 있어요. 다양한 유형의 프로젝트를 성공적으로 관리할 수 있게 도와줄 거예요.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>Jira Software</h3>
                </div>
                <div className='banner'>
                    <div className='imgWrapper'>
                        <img src={banner6}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>
                                DevOps는 단순한 도구가 아니에요. 협업과 목표 공유의 문화를 지향합니다. 팀워크를 증진시키고 장려하며 모든 팀원이 동일한 목표를 달성 하기 위해 함께 노력하여 빠르고 신속한 구축을 가능하게 해줄 거에요.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>DevOps</h3>
                </div>
            </div>
            <div className='bannerWrapper'>
                <div className='banner'>
                    <div className='imgWrapper'>
                        <img src={banner7}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>
                                여러 대의 WAS가 세션을 공유하면 한 대의 WAS에 문제가 생겨도 나머지 WAS가 세션을 유지시켜 줍니다. 로드밸런싱과 세션클러스터링으로 안정적인 개발 환경을 유지할 수 있어요.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>Session Clustering</h3>
                </div>
                <div className='banner'>
                    <div className='imgWrapper'>
                        <img src={banner8}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>
                                핀테크 비즈니스를 준비한다면 보안과 인증 컨설팅이 필요하겠군요. 클라우드Cell의 공통인증 서비스는 OAuth2.0을 활용하여 타 서비스와의 인증체계 공유를 용이하게 구현해줄 거에요.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>공통인증</h3>
                </div>
                <div className='banner'>
                    <div className='imgWrapper'>
                        <img src={banner9}></img>
                        <div className='textWrapper'>
                            <div>
                                <p>
                                마이크로 서비스 아키텍처 설계 지원으로 서비스별 개별 배포가 가능하여 요구사항을 신속하고 빠르게 반영 • 배포할 수 있어요. 신기술 적용이 유연한 MSA 가이드에 대한 노하우를 만나보세요.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>MSA Guide</h3>
                </div>
            </div>
        </section>
        
        
    </BasePage>)
}
export default CLPIASM00500;