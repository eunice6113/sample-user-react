import * as React from "react";
import { BasePage } from "../../../shared/components/base/BasePage";
import './CLPMANM00100.css';

interface IProps {
    children: React.ReactNode;
}
// 메인화면
const CLPMANM00100: React.FC<IProps> = ({children}) => {

    return(
    <BasePage className="CLPMANM00100">
        <h1>main</h1>
    </BasePage>)
}
export default CLPMANM00100;