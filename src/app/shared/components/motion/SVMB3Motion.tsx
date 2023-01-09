import { Player } from "@lottiefiles/react-lottie-player";
import motion from '../../../../assets/images/lottie/about-service-market-consulting.json'

const SVMB3Motion = () => {

    return (
        <Player
            autoplay
            loop
            speed={1}
            src={motion}
            style={{height:230}}
        >
        </Player>
    )

}
export default SVMB3Motion;