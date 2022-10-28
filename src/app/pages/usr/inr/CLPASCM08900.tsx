import * as React from "react";
import { Button, Checkbox } from 'primereact';
import { BasePage } from "../../../shared/components/base/BasePage";
import useBasePage from '../../../shared/hooks/base-page.hook';
import './CLPASCM08900.css';
import BoardDetail from '../../../shared/components/template/BoardDetail';
import listImg from '../../../../assets/images/manual-img.png';

interface IProps {
    children: React.ReactNode;
}
// 서비스 카탈로그 장바구니*
const CLPASCM08900: React.FC<IProps> = ({children}) => {
    const { goPage } = useBasePage()

    const categories = [
        {
            name: '공통인증', 
            images:listImg,
            key: 'A'
        }, 
        {name: '공통인증', key: 'M'}, 
        {name: '공통인증', key: 'P'},] 
    const [selectedCategories, setSelectedCategories] = React.useState<any>([]);
    const onCategoryChange = (e: { value: any, checked: boolean }) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) {
            _selectedCategories.push(e.value);
        }
        else {
            for (let i = 0; i < _selectedCategories.length; i++) {
                const selectedCategory = _selectedCategories[i];

                if (selectedCategory.key === e.value.key) {
                    _selectedCategories.splice(i, 1);
                    break;
                }
            }
        }

        setSelectedCategories(_selectedCategories);
    }


    //api 읽어와서 업데이트 할 내용
    //장바구니 목록 상세내용
    const cartList = {
        rows: [
            {
                value: 
                <>  
                    <p className="userInfo">
                        <i className="pi pi-user"></i> 신청 아이디
                        <span className="ml10">#20221030001</span>
                    </p>
                </>
            },
            {
                value: 
                <>  
                    <div>
                    {
                        categories.map((category) => {
                            return (
                                <div key={category.key} className="field-checkbox">
                                    <div className="cartList d-flex-default">
                                    <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} 
                                    checked={selectedCategories.some((item:any) => item.key === category.key)} disabled={category.key === 'R'} />
                                    <img className="categoryImg" src={category.images} alt={category.images}></img>
                                    <div>
                                        <label htmlFor={category.key}>{category.name}</label>
                                        <p>1212.1212</p>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </>
            },
            
            
        ],
        
    }

    return(
    <BasePage className="CLPASCM08900">
          {/* 내용 */}
          <div className="mt10 cartList">
            <h2 className="f20">최종 신청할 서비스 카탈로그를 확인해주세요.</h2>
            <BoardDetail {...cartList} className="mt0" />
          </div>
          
    </BasePage>)
}
export default CLPASCM08900;