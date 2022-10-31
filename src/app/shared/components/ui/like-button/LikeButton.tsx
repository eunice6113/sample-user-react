import { ToggleButton } from 'primereact';
import * as React from 'react';
import './like-button.css';


interface IProps {
    likeNum: number;
    checked: boolean;
    setChecked: Function;
}

const LikeButton: React.FC<IProps> = ({
    likeNum,
    checked,
    setChecked
}) => {

    let num = String(likeNum)

    return (
        <ToggleButton 
            checked={checked} 
            onChange={(e) => setChecked(e.value)} 
            onIcon='pi pi-thumbs-up-fill' 
            offIcon='pi pi-thumbs-up' 
            onLabel={num}
            offLabel={num}
            className='p-button-text thumbsUp' 
            aria-label='Like' />
    )
}
export default LikeButton;