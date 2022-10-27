import { InputText, Button } from "primereact";
import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPMANM00100.css';
import Visual from "../../../shared/components/ui/visual/Visual";
import Card from "../../../shared/components/ui/card/Card";
import useBasePage from "../../../shared/hooks/base-page.hook";
import mainImg from '../../../../assets/images/main-img.png';
import listImg from '../../../../assets/images/manual-img.png';
import { Link } from 'react-router-dom';

// 매뉴얼 화면
const CLPMANM00100: React.FC = ({}) => {
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
            title:<span>여신 심사 금리 계산기</span>,
            description:<span>저희 여신 심사부서가 진행한 금리 산출 계산기 앱을 출시했습니다.<br/><br/>
            메뉴얼과 파일 활용하시고, 카탈로그 활용하셔서 바로 다양한 클라우드 프로젝트 해보세요.</span>,
            buttonLabel:'매뉴얼 보러가기',
            textAlign: 'text-left',
            buttonClick: () => { goPage('') },
            showButton:false,
            images:<img src={mainImg} alt="메인 이미지"></img>,

        },
        {
            title:<span>Cloud DB<br/>for PostgreSQL</span>,
            description:<span>PostgreSQL 서비스를 손쉽게 구축하고<br/>자동으로 관리합니다.</span>,
            buttonLabel:'매뉴얼 보러가기',
            textAlign: 'text-left',
            buttonClick: () => { goPage('') },
            showButton:false,
            images:<img src={listImg} alt="매뉴얼 이미지"></img>,
        },
        

    ]
    
    //최근게시물
    const noticeList = [
        {
            title:'클라우드포탈이 오픈하였습니다.',
            date:'2022-08-01',
        },
        {
            title:'클라우드포탈이 오픈하였습니다.',
            date:'2022-08-01',
        },
        {
            title:'클라우드포탈이 오픈하였습니다.',
            date:'2022-08-01',
        },
        {
            title:'클라우드포탈이 오픈하였습니다.',
            date:'2022-08-01',
        },
        {
            title:'클라우드포탈이 오픈하였습니다.',
            date:'2022-08-01',
        },
    ]
    const communicationList = [
        {
            title:'소통공간입니다. 소통공간입니다.',
            date:'2022-08-01',
        },
        {
            title:'소통공간입니다. 소통공간입니다.',
            date:'2022-08-01',
        },
        {
            title:'소통공간입니다. 소통공간입니다.',
            date:'2022-08-01',
        },
        {
            title:'소통공간입니다. 소통공간입니다.',
            date:'2022-08-01',
        },
        {
            title:'소통공간입니다. 소통공간입니다.',
            date:'2022-08-01',
        },
    ]

    return(
    <BasePage className="CLPMANM00100">
        {/* 배너 */}
        <Visual banners={banners} />
        
        <h2 className="contentTitle mt60">다양한 클라우드를 만나고, 경험하세요.</h2>
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

        <div>
            <h2 className="contentTitle mt60">다양한 클라우드 지원을 받으세요.</h2>

            <div className="banner mt40">
                <div className="bannerItem">
                    <p>정보화사업의 예산산정을 효율적으로 <br/>산정하도록 도와드립니다.</p>
                    <Button label='The-Fast Cloud 신청하기' className="p-button outline" onClick={btnClick}/>
                </div>
                <div className="bannerItem item2">
                    <p>클라우드 주요 기능을 신청해서<br/>적극 활용해보세요.</p>
                    <Button label='서비스 카탈로그 신청하기' className="p-button outline" onClick={btnClick}/>
                </div>
            </div>
        </div>

        <div className="recentPost mt60">
            <div className="recentList">
                <div className="title">
                    <h2>공지사항</h2>
                    <p>
                        <Link to='/' className='more'>더보기<i className="pi pi-angle-right"></i></Link> 
                    </p>
                </div>

                <ul>
                    {
                        noticeList.map((noticeList,index) => (
                                <li key={`noticeList${index}`}>
                                    <span>{noticeList.title}</span>
                                    <span>{noticeList.date}</span>
                                </li>
                        ))
                    }
                </ul>
            </div>
            <div className="recentList">
                <div className="title">
                    <h2>소통공간</h2>
                    <p>
                        <Link to='/' className='more'>더보기<i className="pi pi-angle-right"></i></Link> 
                    </p>
                </div>
                
                <ul>
                    {
                        communicationList.map((communicationList,index) => (
                                <li key={`communicationList${index}`}>
                                    <span>{communicationList.title}</span>
                                    <span>{communicationList.date}</span>
                                </li>
                        ))
                    }
                </ul>
            </div>
        </div>        
    </BasePage>)
}
export default CLPMANM00100;