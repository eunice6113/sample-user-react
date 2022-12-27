import { Player } from "@lottiefiles/react-lottie-player";
import motion from '../../../../assets/images/lottie/tfc-motion1.json'

const TFCMotion1 = () => {

    return (
        <Player
            autoplay
            loop
            speed={1}
            src={motion}
            style={{width:250}}
        >
        </Player>
    )

}
export default TFCMotion1;