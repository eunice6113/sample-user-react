import * as React from "react";
import { Button, Checkbox, InputText } from 'primereact';
import { BasePage } from "../../../shared/components/base/BasePage";
import useBasePage from '../../../shared/hooks/base-page.hook';
import './CLPASCM08900.css';
import BoardDetail from '../../../shared/components/template/BoardDetail';
import listImg from '../../../../assets/images/manual-img.png';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import TextEditor from "../../../shared/components/ui/text-editor/TextEditor";


interface IProps {
    children: React.ReactNode;
}
// 서비스 카탈로그 장바구니*
const CLPASCM08900: React.FC<IProps> = ({children}) => {
    const { goPage } = useBasePage()
    const [email, setEmail] = React.useState('');
    const deltBtn = () => {
    }
    const catRqsBtn= () =>{}

    const categories = [
        {
            name: '공통인증', 
            images:listImg,
            key: 'A',
            version:'10.1.1',
            price:'1,000,000'
        }, 
        {
            name: '공통인증', 
            images:listImg,
            key: 'b',
            version:'10.1.1',
            price:'1,000,000'
        }, 
        {
            name: '공통인증', 
            images:listImg,
            key: 'c',
            version:'10.1.1',
            price:'1,000,000'
        }, 
        
    ] 
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
                                    <div className="d-flex-default cartItme">
                                        <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} 
                                        checked={selectedCategories.some((item:any) => item.key === category.key)} disabled={category.key === 'R'} />
                                        <div className="categoryImg"><img src={category.images} alt={category.images}></img></div>
                                        <div className="name">
                                            <label htmlFor={category.key}>{category.name}</label>
                                            <p>{category.version}</p>
                                        </div>
                                        <div className="mr20 ml20">￦{category.price}</div>
                                        <div className="delt"><Button className='p-button-text' icon='pi pi-times' onClick={deltBtn} /></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </>
            },
            {
                value: 
                <>  
                    <p className="sum">
                        <span>합계</span>
                        <span className="ml40 color-red">￦1,000,000</span>
                    </p>
                </>
            },
            
            
        ],
        
    }

    //신청자정보
    const authorInfo = {
        rows: [
            {
                cols: [
                    {
                        key: '신청자', 
                        value: '김신청(12345)'
                    },
                    {
                        key: '이메일', 
                        value:         
                        <InputText className="" placeholder="이메일을 입력해주세요" value={email} onChange={(e) => setEmail(e.target.value)} />

                    },
                ]
            }
        ]
    }
    
    //최종 신청 예상 금액
    const cartRstLists = [
        {
            name:'공인인증',
            price:'100,000'
        },
        {
            name:'공인인증',
            price:'1,000,000'
        },
        {
            name:'공인인증',
            price:'1,000,000,000'
        },
        
    ]
    const discountLists = [
        {
            name:'공인인증',
            rateDiscount:'100',
            discount:'0',
            price:'100,000'
        },
        {
            name:'공인인증',
            rateDiscount:'100',
            discount:'0',
            price:'1,000,000'
        },
        {
            name:'공인인증',
            rateDiscount:'100',
            discount:'0',
            price:'1,000,000,000'
        },
        
    ]
    const cartResult = {
        rows: [
            {
                value: 
                <>  
                    <dl className="cartRstDl">
                        <dt>서비스 카탈로그 예상 금액</dt>
                        <dd>
                            {
                                 cartRstLists?.map((cartRstList, ) => {
                                    return (
                                        <ul>
                                            <li>{cartRstList.name}</li>
                                            <li></li>
                                            <li></li>
                                            <li className="text-right">￦{cartRstList.price}</li>
                                        </ul> 
                                    )
                                })
                            }
                             
                        </dd>
                        <dt>예상 할인율</dt>
                        <dd>
                            {
                                 discountLists?.map((discount, ) => {
                                    return (
                                        <ul>
                                            <li>{discount.name}</li>
                                            <li className="text-right">{discount.rateDiscount}%</li>
                                            <li className="text-right">￦{discount.discount}</li>
                                            <li className="text-right sale">￦{discount.price}</li>
                                        </ul> 
                                    )
                                })
                            }
                        </dd>
                    </dl>
                    
                </>
            },
            {
                value :
                <p className="text-center fs20 text-bold">
                    최종 예상 금액 
                    <span className="color-red ml10">￦0</span>
                </p>
            }
        ]
    }    

    return(
    <BasePage className="CLPASCM08900">
        {/* 내용 */}
        <div className="mt45 cartList">
            <h2 className="title">최종 신청할 서비스 카탈로그를 확인해주세요.</h2>
            <BoardDetail {...cartList} className="mt0" />
        </div>
        
        {/* 신청자 정보 */}
        <div className="mt60">
            <h2 className="title">서비스 카탈로스 가이드를 전달해드릴 이메일을 <span className="point">꼭</span> 확인해주세요.</h2>
            <ViewTemplate {...authorInfo} className='mt0'/>
        </div>

        {/* 최종 신청 예상 금액 */}
        <div>
            <div className="mt60 d-flex-default">
                <h2 className="title">최종 신청 예상 금액</h2>
                <p className="color-red ml10 f14">* 서비스 제공 상황에 따라 예상 금액이 달라질 수 있습니다.</p>
            </div>
            <BoardDetail {...cartResult} className="mt0 cartResult" />
        </div>

        <div className="text-center mt40">
            <Button label="서비스 카탈로그 신청하기" className="roundBtn p-button-rounded" onClick={catRqsBtn}/>
        </div>
        
    </BasePage>)
}
export default CLPASCM08900;