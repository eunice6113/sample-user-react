import { InputText, Button } from "primereact";
import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPMNLM04010.css';
import Visual from "../../../shared/components/ui/visual/Visual";
import Card from "../../../shared/components/ui/card/Card";
import useBasePage from "../../../shared/hooks/base-page.hook";
import listImg from '../../../../assets/images/manual-img.png';


// 매뉴얼 화면
const CLPMNLM04010: React.FC = ({}) => {
    const {goPage} = useBasePage()

    const [value, setValue] = React.useState('');
    const btnClick = () => {
        alert(0)
    }
    //더보기 버튼
    const addBtn = () => {

    }
   
    //카테고리
    const selectCategory = (e:any, id:number) => {
        setSelectCat(id)
    }
    
    const [selectCat, setSelectCat] = React.useState(0)

    const category = ['전체', 'Web/WAS/DB', '컨테이너/도커', '형상관리', '모니터링', 'CI/CD', '협업툴', '프레임워크', '기타' ];
    const categoryItem = category.map((label, index) =>
        <Button key={'category-'+index} label={label} className={`p-button-rounded roundBtn ${selectCat === index ? 'on':''}`} onClick={(e) => selectCategory(e, index)}/>
    );

    //card list
    const cards =[
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'UPDATE',
                    type: 'tag-update',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
        },
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'NEW',
                    type: 'tag-new',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
        },
        
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'NEW',
                    type: 'tag-new',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
        },
        
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'NEW',
                    type: 'tag-new',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
        },
        
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'NEW',
                    type: 'tag-new',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
        },
        
        {
            listImg:listImg,
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                    type: '',
                },
                {
                    label: 'NEW',
                    type: 'tag-new',
                },
                {
                    label: 'WEB/WAS/DB',
                    type: 'tag-info',
                },
            ],
            button: <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
        },
        
        
        
    ]
       
    //visual 배너
    const banners = [
        {
            title:<span>Cloud DB<br/>for PostgreSQL</span>,
            description:<span>PostgreSQL 서비스를 손쉽게 구축하고<br/>자동으로 관리합니다.</span>,
            buttonLabel:'매뉴얼 보러가기',
            textAlign: 'text-center',
            buttonClick: () => { goPage('') },
            showButton:true,
            images:<img src={listImg} alt="매뉴얼 이미지"></img>,
        },
        

    ]
    
    return(
    <BasePage className="CLPMNLM04010">
        {/* 배너 */}
        <Visual banners={banners} />
        
        <h2 className="contentTitle mt60">다양한 클라우드 매뉴얼을 확인하세요.</h2>
        <div className="text-center mt30">
            <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText value={value} onChange={(e) => setValue(e.target.value)} className='mainSearch' />
            </span>
        </div>
        
        <div className="d-flex justify-center category mt60 mb40">
            {/* 카테고리 버튼*/}
            {categoryItem}
        </div>
       
        <div className="content">
        {/* 리스트 카드 */}
        {
            cards?.map((card, index) => ( 
                <Card 
                    key={'card-'+index} 
                    { ...card }
                />
            ))
        }
        </div>
           
        <div className='d-flex justify-center'>

            <Button className='iconBtnAdd p-button-text mr10' icon='pi pi-plus-circle' onClick={addBtn} />
        </div>
        
    </BasePage>)
}
export default CLPMNLM04010;