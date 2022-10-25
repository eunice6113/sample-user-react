import { InputText, Button } from "primereact";
import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPMNLM04010.css';
import { Chip } from 'primereact/chip';
import listImg from '../../../../assets/images/manual_img.png';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

interface IProps {
    children: React.ReactNode;
}

    // 매뉴얼 화면
    const CLPMNLM04010: React.FC<IProps> = ({children}) => {

    const [value, setValue] = React.useState('');
    const btnClick = () => {
        alert(0)
    }
    //더보기 버튼
    const addBtn = () => {

    }
    

    return(
    <BasePage className="CLPMNLM04010">
        <div>
        <Swiper
            spaceBetween={30}
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
            <SwiperSlide> 
                <div className="visual">
                    <div className="visualText">
                        <h2>Cloud DB<br/>for PostgreSQL</h2>
                        <p>PostgreSQL 서비스를 손쉽게 구축하고<br/> 자동으로 관리합니다.</p>
                        <Button className='outline mt20' label='매뉴얼 보러가기' onClick={btnClick} />
                    </div>
                    <div className="visualImg"><img className="listImg" src={listImg} alt="매뉴얼 이미지"></img></div>
                </div>
            </SwiperSlide>
            <SwiperSlide> 
                <div className="visual">
                    <div className="visualText">
                        <h2>Cloud DB<br/>for PostgreSQL</h2>
                        <p>PostgreSQL 서비스를 손쉽게 구축하고<br/> 자동으로 관리합니다.</p>
                        <Button className='outline mt20' label='매뉴얼 보러가기' onClick={btnClick} />
                    </div>
                    <div className="visualImg"><img className="listImg" src={listImg} alt="매뉴얼 이미지"></img></div>
                </div>
            </SwiperSlide>
           
            
        </Swiper>
        </div>
        <h2 className="contentTitle mt60">다양한 클라우드 매뉴얼을 확인하세요.</h2>
        <div className="text-center mt30">
            <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText value={value} onChange={(e) => setValue(e.target.value)} className='mainSearch' />
            </span>
        </div>
        
        <div className="d-flex justify-center category mt60 mb40">
            <Button label='전체' className="p-button-rounded roundBtn on" onClick={btnClick}/>
            <Button label='Web/WAS/DB' className="p-button-rounded roundBtn" onClick={btnClick}/>
            <Button label='컨테이너/도커' className="p-button-rounded roundBtn" onClick={btnClick}/>
            <Button label='형상관리' className="p-button-rounded roundBtn" onClick={btnClick}/>
            <Button label='모니터링' className="p-button-rounded roundBtn" onClick={btnClick}/>
            <Button label='CI/CD' className="p-button-rounded roundBtn" onClick={btnClick}/>
            <Button label='협업툴' className="p-button-rounded roundBtn" onClick={btnClick}/>
            <Button label='프레임워크' className="p-button-rounded roundBtn" onClick={btnClick}/>
            <Button label='기타' className="p-button-rounded roundBtn" onClick={btnClick}/>
        </div>
        <div className="content">
            <div className="item"> 
                <div className="imgWrap">
                    <img className="listImg" src={listImg} alt="매뉴얼 이미지"></img>
                    <div className="labelWrap d-flex-default ">
                        <Chip label="v.11.12.1.2" className="mr8 chip" />
                        <Chip label="Update" className="mr8 chip red" />
                        <Chip label="web/was/db" className="mr8 chip blue" />
                        <Chip label="NEW" className="mr8 chip yellow" />
                    </div>
                </div>
                <div className="itemInfo">
                    <h3>Cloud DB for PostgreSQL</h3>
                    <p>PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다. </p>
                    <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
                </div>
            </div>
            <div className="item">
                <div className="imgWrap">
                    <img className="listImg" src={listImg} alt="매뉴얼 이미지"></img>
                    <div className="labelWrap d-flex-default ">
                        <Chip label="v.11.12.1.2" className="mr8 chip" />
                        <Chip label="Update" className="mr8 chip red" />
                        <Chip label="web/was/db" className="mr8 chip blue" />
                    </div>
                </div>
                <div className="itemInfo">
                    <h3>Cloud DB for PostgreSQL</h3>
                    <p>PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다. </p>
                    <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
                </div>
            </div>
            <div className="item">
                <div className="imgWrap">
                    <img className="listImg" src={listImg} alt="매뉴얼 이미지"></img>
                    <div className="labelWrap d-flex-default ">
                        <Chip label="v.11.12.1.2" className="mr8 chip" />
                        <Chip label="Update" className="mr8 chip red" />
                        <Chip label="web/was/db" className="mr8 chip blue" />
                    </div>
                </div>
                <div className="itemInfo">
                    <h3>Cloud DB for PostgreSQL</h3>
                    <p>PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다. </p>
                    <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
                </div>
            </div>
       
            <div className="item"> 
                <div className="imgWrap">
                    <img className="listImg" src={listImg} alt="매뉴얼 이미지"></img>
                    <div className="labelWrap d-flex-default ">
                        <Chip label="v.11.12.1.2" className="mr8 chip" />
                        <Chip label="Update" className="mr8 chip red" />
                        <Chip label="web/was/db" className="mr8 chip blue" />
                    </div>
                </div>
                <div className="itemInfo">
                    <h3>Cloud DB for PostgreSQL</h3>
                    <p>PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다. </p>
                    <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
                </div>
            </div>
            <div className="item">
                <div className="imgWrap">
                    <img className="listImg" src={listImg} alt="매뉴얼 이미지"></img>
                    <div className="labelWrap d-flex-default ">
                        <Chip label="v.11.12.1.2" className="mr8 chip" />
                        <Chip label="Update" className="mr8 chip red" />
                        <Chip label="web/was/db" className="mr8 chip blue" />
                    </div>
                </div>
                <div className="itemInfo">
                    <h3>Cloud DB for PostgreSQL</h3>
                    <p>PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다. </p>
                    <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
                </div>
            </div>
            <div className="item">
                <div className="imgWrap">
                    <img className="listImg" src={listImg} alt="매뉴얼 이미지"></img>
                    <div className="labelWrap d-flex-default ">
                        <Chip label="v.11.12.1.2" className="mr8 chip" />
                        <Chip label="Update" className="mr8 chip red" />
                        <Chip label="web/was/db" className="mr8 chip blue" />
                    </div>
                </div>
                <div className="itemInfo">
                    <h3>Cloud DB for PostgreSQL</h3>
                    <p>PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다. </p>
                    <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
                </div>
            </div>
        </div>
        <div className='d-flex justify-center'>
            <Button className='iconBtnAdd p-button-text mr10' icon='pi pi-plus-circle' onClick={addBtn} />
        </div>
        
    </BasePage>)
}
export default CLPMNLM04010;