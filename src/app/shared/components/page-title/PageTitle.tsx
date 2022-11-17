import * as React from 'react';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs';
import './page-title.css'

interface IProps {
    title: string;
    breadcrumbs?: string[];
    subTitle?: string;
}

const PageTitle: React.FC<IProps> = ({title, breadcrumbs, subTitle}) => {

    React.useEffect(() => {

    }, [])

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

