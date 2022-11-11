import { Player } from "@lottiefiles/react-lottie-player";
import reviewMotion from '../../../../assets/images/lottie/80671-5-star-review.json'

const ReviewPopupMotion = () => {

    return (
        <Player
            autoplay
            loop
            speed={1.5}
            style={{width:200}}
            src={reviewMotion}
        >
        </Player>
    )

}
export default ReviewPopupMotion;