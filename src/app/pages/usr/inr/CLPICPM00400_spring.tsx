import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPICPM00400.css';
import styles from './trail.module.css';
import { Player } from "@lottiefiles/react-lottie-player";
import helpdeskMotion from '../../../../assets/images/lottie/tech-helpdesk-support.json'
import CommunicationMotion from '../../../../assets/images/lottie/67986-business-deal.json'
import supportMotion from '../../../../assets/images/lottie/82666-business-illustration.json'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useTrail, a } from '@react-spring/web'

interface TrailProps {
    open: boolean
    children: React.ReactNode;
}
const Trail: React.FC<TrailProps> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 30,
      height: open ? 30 : 0,
      from: { opacity: 0, x: 30, height: 0 },
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={styles.trailsText} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }



interface IProps {
    children: React.ReactNode;
}
// 클라우드 포털 소개
const CLPICPM00400: React.FC<IProps> = ({children}) => {

    return(
    <BasePage className="CLPICPM00400">

        <Parallax pages={5} style={{ top: '0', left: '0', height: '100vh' }}>

            <ParallaxLayer
                offset={0}
                speed={0.2}
            >
                <div className="content01_bg"></div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={0}
                speed={0.2}
            >
                <div className="content01">
                    <p className="text-center">
                    <Trail open={true}>
                        <p><b>클라우드 기반의 생태계를 구축하기 위해</b></p>
                        <p>IBK 클라우드의 서비스 정보, 각종 지원 프로그램 등</p>
                        <p><b>당행 직원 간 소통 및 정보 교류의 장을 제공/운영하고 있습니다.</b></p>
                    </Trail>
                    </p>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={1}
                speed={2}
            >
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
                        <p className="subTitle">헬프 데스크 운영</p>
                        <p >원활한 클라우드 서비스 사용을 위한 매뉴얼 및 가이드 제공, <br />
                        진행  클라우드 도입을 위한 The-Fast 클라우드 등 사업부서 지원<br />
                        프로그램 신청을 돕고 있습니다.</p>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={2}
                speed={0.2}
            >
                <div className="contentBg">
                    <div className="contentBox">
                        <div>
                            <h3 className="title">IBK Cloud<br /><span>Communication</span></h3>
                            <p className="subTitle">클라우드 소통 게시판 운영</p>
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

            </ParallaxLayer>

            <ParallaxLayer
                offset={3}
                speed={0.2}
            >
                
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
                        <p className="subTitle">IT 자원 지원 시스템 운영</p>
                        <p>클라우드 위에서 역량을 펼칠 본부부서에 IT자원을 <br />
                        지원하는 시스템을 제공하여 전행 IT비용 최적화를 위해 <br />
                        노력하고 있습니다.</p>
                    </div>
                </div>
            </ParallaxLayer>
        </Parallax>

{/* 
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
                <p className="subTitle">헬프 데스크 운영</p>
                <p >원활한 클라우드 서비스 사용을 위한 매뉴얼 및 가이드 제공, <br />
                진행  클라우드 도입을 위한 The-Fast 클라우드 등 사업부서 지원<br />
                프로그램 신청을 돕고 있습니다.</p>
            </div>
        </div>

        <div className="contentBg">
            <div className="contentBox">
                <div>
                    <h3 className="title">IBK Cloud<br /><span>Communication</span></h3>
                    <p className="subTitle">클라우드 소통 게시판 운영</p>
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
                <p className="subTitle">IT 자원 지원 시스템 운영</p>
                <p>클라우드 위에서 역량을 펼칠 본부부서에 IT자원을 <br />
                지원하는 시스템을 제공하여 전행 IT비용 최적화를 위해 <br />
                노력하고 있습니다.</p>
            </div>
        </div>
         */}
        
        
    </BasePage>)
}
export default CLPICPM00400;