import { Player } from "@lottiefiles/react-lottie-player";
// import motion from '../../../../assets/images/lottie/tfc-motion2.json'
import motion from '../../../../assets/images/lottie/Search.json'

const TFCMotion2 = () => {

    return (
        <Player
            autoplay
            loop
            speed={1}
            src={motion}
            style={{width:150}}
        >
        </Player>
    )

}
export default TFCMotion2;