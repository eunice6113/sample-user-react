import * as React from 'react';
import { Button, OverlayPanel } from 'primereact';
import './profile-panel.css';

interface IProflie {
    domRef: any;
    children: React.ReactNode;
    logout: Function;
}
const ProfilePanel: React.FC<IProflie> = ({ domRef, children, logout }) => {

    return (
        <OverlayPanel
            ref={domRef}
            // showCloseIcon
            id='overlay_panel'
            className='profileOverlayPanel'
        >
            <ul className='userInfo'>
                {children}
                <li>
                    <Button onClick={(e) => logout} 
                        label='Logout' 
                        icon='pi pi-sign-out' 
                        className="p-button-link logoutBtn xxl" />
                </li>
            </ul>
        </OverlayPanel>
    )
}
export default ProfilePanel;