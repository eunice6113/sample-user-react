import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import './CLPFAQM07600.css';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from "primereact";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { SearchParams } from '../../../../core/models/search-params';


interface IProps {
    children: React.ReactNode;
}
// 자주 묻는 질문
const CLPFAQM07600: React.FC<IProps> = ({children}) => {
    //검색 조건
    const [values, setValues] = React.useState<SearchParams>({
        type1: undefined,
        type2: undefined,
        searchValue: '',
        fromDate: undefined,
        toDate: undefined,
    });
        //select option dummy data
        const options1 = [
            { name: '전체', code: 'NY' },
            { name: '클라우드', code: 'RM' },
            { name: '클라우드 포탈', code: 'IST' },
            { name: '매뉴얼', code: 'IST' },
            { name: '서비스 그룹', code: 'IST' },
            { name: '자원요청', code: 'IST' },
            { name: '협력툴', code: 'IST' },
            { name: '기타', code: 'IST' },
        ];

     
        const handleChange = (prop: keyof SearchParams, value:any) => {
            setValues({ ...values, [prop]: value });
        };
    const faq =[
        {
            faqTitle:
            <>
                <span className="qNum">Q50</span>
                <span className="type">[매뉴얼]</span>
                <span className="faqTitle">CD/CI 업무 매뉴얼의 활용처가 궁금합니다.</span>
            </>, 
            faqContent:
            <span>지속적 통합, 지속적 배포의 기본개념으로 매번 개발자가 코드를 수정하고 빌드와 테스트를 하고 배포 까지 한다면 상당히 많은 시간이 소요됩니다. 하지만 클라우드 추진 cell에서 제공하는 git에 코드를 올리는 것 만으로도 빌드와 테스트, 배포의 시간이 줄어들 수 있습니다. 매뉴얼을 확인하시고 다양한 개발
            업무에 활용해보시길 추천 드립니다.
            </span>
        },
        {
            faqTitle:
            <>
                <span className="qNum">Q50</span>
                <span className="type">[매뉴얼]</span>
                <span className="faqTitle">CD/CI 업무 매뉴얼의 활용처가 궁금합니다.</span>
            </>, 
            faqContent:
            <span>지속적 통합, 지속적 배포의 기본개념으로 매번 개발자가 코드를 수정하고 빌드와 테스트를 하고 배포 까지 한다면 상당히 많은 시간이 소요됩니다. 하지만 클라우드 추진 cell에서 제공하는 git에 코드를 올리는 것 만으로도 빌드와 테스트, 배포의 시간이 줄어들 수 있습니다. 매뉴얼을 확인하시고 다양한 개발
            업무에 활용해보시길 추천 드립니다.
            </span>
        },
        
    ]
    return(
    <BasePage className="CLPFAQM07600">
        <div className='searchBar mt45 mb10'>
            <p className="pageNum">총 <span>40</span>개</p>
            <div className="ml-auto d-flex">
                <Dropdown className="" value={values.type1} options={options1} onChange={(e) => handleChange('type1', e.value)} 
                    optionLabel='name' placeholder='전체' />

                <InputText className='searchTxt ml8 mr8' placeholder='검색어를 입력해주세요' value={values.searchValue} onChange={(e) => handleChange('searchValue', e.target.value)} />
            
                <Button label='조회' />
            </div>
            
        </div>
        
        <Accordion multiple activeIndex={[0]} className='faqList'>
            {
                faq.map((faq,index) => (
                    <AccordionTab header= {faq.faqTitle} key={'faq-'+index} >
                    <div className="answer d-flex">
                        <div className="aNum">A.</div>
                        <div className="ml20 pr20">{faq.faqContent}</div>
                    </div>
                    </AccordionTab>
                ))
            }
        </Accordion>
    </BasePage>)
}
export default CLPFAQM07600;