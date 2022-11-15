import * as React from 'react';
import { Menubar } from 'primereact/menubar';
import './page-title.css'
import { Link, useMatches } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs';

interface IProps {
    title: string;
    breadcrumbs?: string[];
    subTitle?: string;
}

const PageTitle: React.FC<IProps> = ({title, breadcrumbs, subTitle}) => {

    React.useEffect(() => {

    }, [])

    const items = [
        {
            label: 'menu1',
            items: [
                {
                    label: 'Left',
                    url: '',
                },
                {
                    label: 'Right',
                    url: '',
                },
                {
                    label: 'Center',
                    url: '',
                },
                {
                    label: 'Justify',
                    url: '',
                },

            ]
        },
    ];

    const items2 = [
        {
            label: 'menu2',
            items: [
                {
                    label: 'Left',
                    url: '',
                },
                {
                    label: 'Right',
                    url: '',
                },

            ]
        },
    ];

    const items3 = [
        {
            label: 'menu3',
            items: [
                {
                    label: 'Left',
                    url: '',
                },
                {
                    label: 'Right',
                    url: '',
                },

            ]
        },
    ];

    return(
    <div className='pageTitleContainer'>
        <div className='pageTitle'>
            <h1>{title}</h1>

            <BreadCrumbs />
        </div>
        
        <div className='subTitle'>{subTitle}</div>
    </div>
    )
}
export default PageTitle

