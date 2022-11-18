import * as React from 'react';
import { OverlayPanel } from 'primereact';
import { Link } from 'react-router-dom';
import './submenu-panel.css';

interface Menu {
    label:string;
    url:string;
    children?: Menu[];
}

interface ISubMenu {
    menus: Menu[];
    closeFunc: Function;
}
const SubMenuPanel: React.FC<ISubMenu> = ({ menus, closeFunc }) => {

    return (
    <div className='submenuOverlayPanel'>
        <div className='d-flex innerPanel'>
            <ul className='menus'>
                {menus.map((menu, index) => (
                    <li key={`smenu-${index}`}>
                        <p>{menu.label}</p>
                        {menu?.children &&
                        <ul>
                            {menu?.children.map((smenu, sindex) => (
                                <li key={`smenu-${sindex}`} 
                                    onClick={(e) => closeFunc()}>
                                    <Link to={smenu.url}>{smenu.label}</Link>
                                </li>
                            ))}
                        </ul>}
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}
export default SubMenuPanel;