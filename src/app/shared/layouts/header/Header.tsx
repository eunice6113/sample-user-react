import { Badge, Button } from "primereact";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../../../../assets/images/ibk-logo.png';
import './header.css';
import { InputSwitch } from 'primereact/inputswitch';

interface IProps {
    handleOpen: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

const Header: React.FC<IProps> = ({handleOpen, children}) => {

    const [theme, setTheme] = React.useState(false);

    const menus = [
        {
            label:'클라우드 소개',
            url: '/inr/cell',
            children: [
                {
                    label:'클라우드 추진 Cell 소개',
                    url: '/inr/cell',
                },
                {
                    label:'The fast claoud 지원 프로그램',
                    url: '/inr/tfc',
                },
                {
                    label:'클라우드 포털 소개',
                    url: '/inr/portal',
                },
                {
                    label:'클라우드 서비스 소개',
                    url: '/inr/cloud',
                },
            ]
        },
        {
            label:'매뉴얼',
            url: '/mnl',
        },
        {
            label:'신청하기',
            url: 'asc',
            children: [
                {
                    label:'서비스 카탈로그 신청 화면',
                    url: '/asc/cat-req',
                },
                {
                    label:'The fast cloud 서비스 신청',
                    url: '/asc/tfc-req',
                },
            ]
        },
        {
            label:'요청관리',
            url: '',
            children: [
                {
                    label:'',
                    url: '',
                },
                {
                    label:'',
                    url: '',
                },
                {
                    label:'',
                    url: '',
                },
            ]
        },
        {
            label:'운영관리',
            url: '',
            children: [
                {
                    label:'',
                    url: '',
                },
                {
                    label:'',
                    url: '',
                },
                {
                    label:'',
                    url: '',
                },
                {
                    label:'',
                    url: '',
                },
                {
                    label:'',
                    url: '',
                },
                {
                    label:'',
                    url: '',
                },
                {
                    label:'',
                    url: '',
                },
            ]
        },
        {
            label:'클라우드 지원',
            url: '/spr/ntc/list',
            children: [
                {
                    label:'공지사항',
                    url: '/spr/ntc/list',
                },
                {
                    label:'자주 묻는 질문',
                    url: '/spr/faq/list',
                },
                {
                    label:'이벤트',
                    url: '/spr/ent/list',
                },
                {
                    label:'소통공간',
                    url: '/spr/cmn/list',
                },
                {
                    label:'설문',
                    url: '/spr/sgs/list',
                },
            ]
        },
    ]
    
    const handleTheme = () => {
        let switchTheme = !theme
        setTheme(switchTheme)
        console.log('theme', switchTheme)
        if(switchTheme) {
            window.document.body.classList.add('theme-dark')
            window.document.body.classList.remove('theme-light')
        } else {
            window.document.body.classList.add('theme-light')
            window.document.body.classList.remove('theme-dark')
        }
    }

    let userName = '홍길동'

    return(
    <div className='customHeader'>
        <div className="headerInnerContents">
            <Button className="menu p-button-text" icon="pi pi-bars"
                    onClick={handleOpen} />

            <Link to='/' className="logoTitle">
                <img className="ibkLogo" src={logo} alt='클라우드 포털 관리자' />
                <span className="portalName">Cloud Portal</span>
            </Link>
            {/* {children} */}

            <InputSwitch className="ml10" checked={theme} onChange={handleTheme} />


            <ul className="mainMenus">
                {
                    menus.map((menu, index) => (
                        <li><Link to={menu.url}>{menu.label}</Link></li>
                    ))
                }
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <i className="pi pi-bell mr15 p-text-secondary p-overlay-badge fs24 color-white">
                <Badge severity="success" className="badgeDot"></Badge>
            </i>

            <span className="profile ml8">
                <i className="pi pi-user" />
            </span>
            <span>{userName}</span>

            
        </div>
        
    </div>
    )
}
export default Header;