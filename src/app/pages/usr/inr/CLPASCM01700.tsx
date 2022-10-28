import { Button } from "primereact";
import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPASCM01700.css';
import Card from "../../../shared/components/ui/card/Card";
import useBasePage from "../../../shared/hooks/base-page.hook";
import sampleImg from '../../../../assets/images/sample-img.png';


// 서비스 카탈로그 신청하기
const CLPASCM01700: React.FC = ({}) => {
    const {goPage} = useBasePage()

    const btnClick = () => {
        
    }
    //더보기 버튼
    const catCart = () => {
        goPage('/asc/cat-basket')
    }
    
    //card list
    const cards =[
        {
            listImg:sampleImg,
            title:'공통인증',
            description:'Oauth 2.0을 활용하여 간편로그인 같은 타 서비스와의 인증체계를 공유하기 용이하도록 제공하는 기술입니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                },
            ],
            button:  //className on추가 시 주황색 아이콘으로 활성화
            <div className="d-flex">
            <Button className='cartBtn mr10 on' icon='pi pi-shopping-cart' onClick={catCart} />
            <Button label='메뉴얼 보기' className="p-button xxl" onClick={btnClick}/>
            </div>
            
        },
        {
            listImg:sampleImg,
            title:'세션 클러스터링',
            description:'두 대 이상의 WAS를 이용하는 경우 로드 밸런싱 또는 페일오버, 오토스케일링 등의 대체된 WAS에게도 세션이 공유하게 하는 기술입니다.',
            tags: [
                {
                    label: 'v.11.12.1.2',
                },
               
            ],
            button:
            <div className="d-flex">
            <Button className='cartBtn mr10' icon='pi pi-shopping-cart' onClick={catCart} />
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