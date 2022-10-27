import { Button } from "primereact";
import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPASCM01700.css';
import Card from "../../../shared/components/ui/card/Card";
import useBasePage from "../../../shared/hooks/base-page.hook";


// 매뉴얼 화면
const CLPASCM01700: React.FC = ({}) => {
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
                },
            ],
            button:  //className on추가 시 주황색 아이콘으로 활성화
            <div className="d-flex">
            <Button className='cartBtn mr10 on' icon='pi pi-shopping-cart' onClick={addBtn} />
            <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
            </div>
            
        },
        {
            title:'Cloud DB for PostgreSQL Cloud DB for PostgreSQL Cloud DB for PostgreSQL',
            description:'PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.PostgreSQL 서비스를 손쉽게 구축하고 자동으로 관리합니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                },
               
            ],
            button:
            <div className="d-flex">
            <Button className='cartBtn mr10' icon='pi pi-shopping-cart' onClick={addBtn} />
            <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
            </div>
        },
        
       
        
        
    ]
       
    
    
    return(
    <BasePage className="CLPASCM01700">
       
        <div className="content mt45">
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
           
       
        
    </BasePage>)
}
export default CLPASCM01700;