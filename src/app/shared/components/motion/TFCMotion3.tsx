import { Player } from "@lottiefiles/react-lottie-player";
// import motion from '../../../../assets/images/lottie/tfc-motion2.json'
import motion from '../../../../assets/images/lottie/tfc-meeting.json'

const TFCMotion3 = () => {

    return (
        <Player
            autoplay
            loop
            speed={1}
            src={motion}
            style={{width:370}}
        >
        </Player>
    )

}
export default TFCMotion3;