import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPICPM00400.css';
import { Player } from "@lottiefiles/react-lottie-player";
import helpdeskMotion from '../../../../assets/images/lottie/tech-helpdesk-support.json'
import CommunicationMotion from '../../../../assets/images/lottie/67986-business-deal.json'
import supportMotion from '../../../../assets/images/lottie/82666-business-illustration.json'

interface IProps {
    children: React.ReactNode;
}
// 클라우드 포털 소개
const CLPICPM00400: React.FC<IProps> = ({children}) => {

    return(
    <BasePage className="CLPICPM00400">

        <div className="content01">
            <p className="text-center">
                <b>클라우드 기반의 생태계를 구축하기 위해</b><br/>
                IBK 클라우드의 서비스 정보, 각종 지원 프로그램 등 <br />
                <b>당행 직원 간 소통 및 정보 교류의 장을 제공/운영하고 있습니다.</b>
            </p>
        </div>
        <div className="contentBox">
            <div>
                <Player
                    autoplay
                    loop
                    speed={1.5}
                    src={helpdeskMotion}
                >
                </Player>
            </div>
            <div className="ml20">
                <h3 className="title">IBK Cloud<br /><span>Help Desk</span></h3>
                <p className="boxSubTitle">헬프 데스크 운영</p>
                <p >원활한 클라우드 서비스 사용을 위한 매뉴얼 및 가이드 제공, <br />
                진행  클라우드 도입을 위한 The-Fast 클라우드 등 사업부서 지원<br />
                프로그램 신청을 돕고 있습니다.</p>
            </div>
        </div>

        <div className="contentBg">
            <div className="contentBox">
                <div>
                    <h3 className="title">IBK Cloud<br /><span>Communication</span></h3>
                    <p className="boxSubTitle">클라우드 소통 게시판 운영</p>
                    <p className="text">클라우드 포탈은 IBK직원들의 시스템, 프로세스 등 개선 제안 <br/>
                    클라우드 활용 후기를 공유할 수 있는 소통 게시판을 제공하고 있습니다. </p>
                </div>
                <div className="communicationImg">
                    <Player
                        autoplay
                        loop
                        speed={1.5}
                        src={CommunicationMotion}
                    >
                    </Player>
                </div>
            </div>
        </div>
        <div className="contentBox">
            <div>
                <Player
                    autoplay
                    loop
                    speed={1.5}
                    src={supportMotion}
                >
                </Player>
            </div>
            <div className="ml20">
                <h3 className="title">IBK Cloud<br /><span>IT Resource Support</span></h3>
                <p className="boxSubTitle">IT 자원 지원 시스템 운영</p>
                <p>클라우드 위에서 역량을 펼칠 본부부서에 IT자원을 <br />
                지원하는 시스템을 제공하여 전행 IT비용 최적화를 위해 <br />
                노력하고 있습니다.</p>
            </div>
        </div>
    </BasePage>)
}
export default CLPICPM00400;