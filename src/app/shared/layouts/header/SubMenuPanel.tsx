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
    domRef: any;
    menus: Menu[];
}
const SubMenuPanel: React.FC<ISubMenu> = ({ domRef, menus }) => {

    return (
    <OverlayPanel
        ref={domRef}
        // showCloseIcon
        id='submenu_panel'
        className='submenuOverlayPanel'
        appendTo={window.document.body}
    >
        <div className='d-flex'>
            <ul className='menus'>
                {menus.map((menu, index) => (
                    <li key={`smenu-${index}`}>
                        <p>{menu.label}</p>
                        {menu?.children &&
                        <ul>
                            {menu?.children.map((smenu, sindex) => (
                                <li key={`smenu-${sindex}`} 
                                    onClick={(e) => domRef.current?.hide()}>
                                    <Link to={smenu.url}>{smenu.label}</Link>
                                </li>
                            ))}
                        </ul>}
                    </li>
                ))}
            </ul>
        </div>
    </OverlayPanel>
    )
}
export default SubMenuPanel;