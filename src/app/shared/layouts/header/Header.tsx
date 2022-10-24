import { Badge, Button, Divider, OverlayPanel } from 'primereact';
import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/ibk-logo.png';
import './header.css';
import { InputSwitch } from 'primereact/inputswitch';

interface IProps {
    handleOpen: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

const Header: React.FC<IProps> = ({handleOpen, children}) => {

    const [theme, setTheme] = React.useState(false);
    const [submenuOpen, setsubmenuOpen] = React.useState(false);

    const profileOpRef = React.useRef<OverlayPanel>(null);
    const submenuOpRef = React.useRef<OverlayPanel>(null);
    const headerRef = React.useRef<HTMLElement>(null);

    //서브메뉴
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
        {
            label:'매뉴얼',
            url: '/mnl',
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

    const openSubmenu = ( e:any ) => {
        submenuOpRef.current?.show(e, e.target)
        setsubmenuOpen(true)
        if(submenuOpen) {

        }
    }

    const logout = () => {

    }
    

    return(
    <div className='customHeader'>
        <div className='headerInnerContents'>
            {/* <Button className='menu p-button-text' icon='pi pi-bars' onClick={handleOpen} /> */}

            <Link to='/' className='logoTitle'>
                <img className='ibkLogo' src={logo} alt='클라우드 포털 관리자' />
                <span className='portalName'>Cloud Portal</span>
            </Link>
            {/* {children} */}

            <InputSwitch className='ml10' checked={theme} onChange={handleTheme} />

            <ul className='mainMenus'>
                {
                    menus.map((menu, index) => (
                        <li key={`gnb-${index}`} 
                            onClick={(e) => submenuOpRef.current?.show(e, e.target)}
                            // onClick={(e) => openSubmenu(e)}
                        >{menu.label}</li>
                    ))
                }
            </ul>

            <Button icon='pi pi-bell' className='mr5 p-overlay-badge alarmBtn'>
                <Badge severity='success' className='badgeDot'></Badge>
            </Button>

            <Button
                className='profileBtn'
                onClick={(e) => profileOpRef.current?.toggle(e)}
                aria-haspopup
                aria-controls='overlay_panel'
            >
                <span className='profile'>
                    <i className='pi pi-user' />
                </span>
                <span>{userName}</span>
                <i className='pi pi-angle-down ml35'></i>
            </Button>
            
        </div>

        {/* 서브메뉴 패널 */}
        <OverlayPanel
            ref={submenuOpRef}
            // showCloseIcon
            id='submenu_panel'
            className='submenuOverlayPanel'
        >
            <div className='d-flex'>
            <ul className='menus'>
                {
                    menus.map((menu, index) => (
                        <li key={`smenu-${index}`}>
                            <p>{menu.label}</p>
                            {
                                menu?.children &&
                                <ul>
                                    {
                                        menu?.children.map((smenu, sindex) => (
                                            <li key={`smenu-${sindex}`} 
                                            onClick={(e) => submenuOpRef.current?.hide()}>
                                                <Link to={smenu.url}>{smenu.label}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                        </li>
                    ))
                }
            </ul>
            </div>
            
        </OverlayPanel>

        {/* 프로필 이름 클릭시 나오는 패널 */}
        <OverlayPanel
            ref={profileOpRef}
            // showCloseIcon
            id='overlay_panel'
            className='profileOverlayPanel'
        >
            <ul className='userInfo'>
                <li className='border-bottom'>홍길동 S12345</li>
                <li>IT그룹</li>
                <li className='border-bottom'>관리자</li>
                <li>
                    <Button onClick={logout} icon='pi pi-sign-out' className="p-button-link logoutBtn xxl" label='Logout' />
                </li>
            </ul>
        </OverlayPanel>
    </div>
    )
}
export default Header;