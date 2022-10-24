import { InputText } from "primereact";
import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPMNLM04010.css';

interface IProps {
    children: React.ReactNode;
}

// 매뉴얼 화면
const CLPMNLM04010: React.FC<IProps> = ({children}) => {

    const [value4, setValue4] = React.useState('');

    return(
    <BasePage className="CLPMNLM04010">

        <span className="p-input-icon-right">
            <i className="pi pi-search" />
            <InputText value={value4} onChange={(e) => setValue4(e.target.value)} className='mainSearch' />
        </span>
    
    </BasePage>)
}
export default CLPMNLM04010;