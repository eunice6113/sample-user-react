import { Button } from "primereact";
import { MODE } from '../../config/commonCode';

interface IProps {
    list?: any,
    cancel?: any,
    confirm?: any,
    edit?: any,
    remove?:  any,
    mode?: 'view' | 'edit' | 'register';
}
const ViewButtonsTemplate: React.FC<IProps> = ({ list, cancel, confirm, edit, remove, mode }) => {

    return(
        <div className='btn-container cld-row'>
            <div className='cld-col-3'>
                <Button className='secondary' onClick={list}>목록</Button>
            </div>
            <div className='cld-col-6 text-center'>
            { (mode === MODE.EDIT || mode === MODE.REGISTER) &&
            <>
                <Button className='lg outline' onClick={cancel}>취소</Button>
                <Button className='lg ml5' onClick={confirm}>확인</Button>
            </>
            }
            </div>
            <div className='cld-col-3 d-flex'>
            {mode === MODE.VIEW &&
            <>
                <Button className='ml-auto outline' onClick={edit}>수정</Button>
                <Button className='ml5' onClick={remove}>삭제</Button>
            </>
            }
            </div>
        </div>
    )
}
export default ViewButtonsTemplate;