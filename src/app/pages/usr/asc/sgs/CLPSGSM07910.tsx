import * as React from "react";
import { BasePage } from "../../../../shared/components/base/BasePage";
import './CLPSGSM07910.css';

interface IProps {
    children: React.ReactNode;
}
// 설문 목록
const CLPSGSM07910: React.FC<IProps> = ({children}) => {

    return(
    <BasePage>
        <p>3개의 설문이 진행 중 입니다.</p>
        <div></div>
    </BasePage>)
}
export default CLPSGSM07910;