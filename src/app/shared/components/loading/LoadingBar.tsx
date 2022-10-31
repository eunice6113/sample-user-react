import React from 'react';
import { ProgressSpinner } from 'primereact';
import './loading-bar.css';
import loadingBar from '../../../../assets/images/cloud-loading.json'
import { Controls, Player } from '@lottiefiles/react-lottie-player';

const LoadingBar = () => {

    return (
        <div className='loadingBar'>
            <Player
                autoplay
                loop
                speed={2.5}
                src={loadingBar}
                style={{width: 70}}
            >
                {/* <Controls
                    visible={true}
                    buttons={["play", "repeat", "frame", "debug"]}
                /> */}
            </Player>
            {/* <img src={loadingBar} alt='loading' /> */}
            {/* <ProgressSpinner style={{width:50}}></ProgressSpinner> */}
        </div>
    )
}
export default LoadingBar;