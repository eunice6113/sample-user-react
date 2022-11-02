import { Player } from "@lottiefiles/react-lottie-player";
import celebrateMotion from '../../../../assets/images/lottie/112766-celebrate.json'

const EventPopupMotion = () => {

    return (
        <Player
            autoplay
            loop
            speed={1.5}
            src={celebrateMotion}
        >
        </Player>
    )

}
export default EventPopupMotion;