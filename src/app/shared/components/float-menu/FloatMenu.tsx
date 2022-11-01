import { Button } from "primereact";
import * as React from "react";
import { Link } from "react-router-dom";
import './float-menu.css'

const FloatMenu = () => {
    
    return (
        <ul className="floatMenuBox">
            <li>
                <Link to='/asc/cat-req'>
                    <i className="pi pi-shopping-cart icon-cart"></i>
                    <p>장바구니</p>
                </Link>
            </li>
            <li>
                <button className='faqBtn'>
                    <i className="icon-req"></i>
                    <p>건의 및 개선</p>
                </button>
            </li>
            <li>
                <Link to='/spr/faq'>
                    <i className="icon-faq"></i>
                    <p>자주묻는질문</p>
                </Link>
            </li>
        </ul>
    )
}
export default FloatMenu;