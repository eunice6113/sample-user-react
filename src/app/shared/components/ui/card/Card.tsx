import * as React from 'react';
import { Chip } from 'primereact/chip';
import listImg from '../../../../../assets/images/manual_img.png';
import './Card.css';


interface Tag {
    label?:string;
    type?:string;
}
interface ICard {
    title?:string;
    description?:string;
    tags?:Tag[];
    button?:any;
}

//Card
const Card:React.FC<ICard> = ({
    title,
    description,
    tags,
    button,
}) => {

    return (
        <div className="item"> 
            <div className="imgWrap">
                <img className="listImg" src={listImg} alt="매뉴얼 이미지"></img>
                
                <div className="labelWrap d-flex-default">
                    {tags?.map((tag:any, index: number) => (
                        <Chip key={'labels-'+index} label={tag.label} className={tag.type} />
                    ))}
                    
                    {/* <Chip label="v.11.12.1.2" className="mr8 chip" />
                    <Chip label="Update" className="mr8 chip red" />
                    <Chip label="web/was/db" className="mr8 chip blue" />
                    <Chip label="NEW" className="mr8 chip yellow" /> */}
                </div>
            </div>
            <div className="itemInfo">
                <h3>{title}</h3>
                <p>{description}</p>
                {button}
            </div>
        </div>
    )
}
export default Card;