import * as React from 'react';
import { Button} from 'primereact';
import { Swiper, SwiperSlide } from "swiper/react";
import './Visual.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

interface Banner {
    title: any;
    description: any;
    tags?: string[];
    buttonLabel?: string;
    buttonClick?: Function;
    textAlign?: string;
    showButton?:boolean;
    images?:any;
}

interface iVisual { 
    banners?: Banner[];
    showButton?:boolean;
}
//visual
const Visual:React.FC<iVisual> = ({
    banners, 
    showButton=true,
}) => {
   

    return (
        <>
         <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mt45"
        >
            {
                banners?.map((banner, index) => (
                    <SwiperSlide key={'visual-'+index}> 
                        <div className="visual">
                            <div className={`visualText ${banner.textAlign}`}>
                                <h2>{banner.title}</h2>
                                <p>{banner.description}</p>
                                {banner.showButton &&
                                <Button className='outline' label={banner.buttonLabel} onClick={(e) => banner.buttonClick} />
                                }
                            </div>
                            
                            <div className="visualImg">{banner.images}</div>
                        </div>
                    </SwiperSlide>
                ))
            }
            
            
            
        </Swiper>
        </>
    )
}
export default Visual;