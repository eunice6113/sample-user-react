

import * as React from 'react';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

interface FileUploadProps {
    name?: string;
    url: string;
    onSelect?: any;
    onUpload: any;
    onFileRemove?: any;
    onError?: any;
    onClear?: any;
    multiple?: boolean;
    accept?: string;
    maxFileSize?: number;
    totalSize?: number;
}

const CldFileUpload: React.FC<FileUploadProps> = ({name = 'files', url, onSelect, onUpload, onFileRemove, onError, onClear, totalSize, multiple = false, accept = 'image/*', maxFileSize = 1000000}) => {
    const fileUploadRef:any = React.useRef(null);

    const headerTemplate = (options:any) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        // const value = totalSize/200000;
        // const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                {/* <ProgressBar value={value} displayValueTemplate={() => `${formatedValue} / 20 MB`} style={{width: '300px', height: '18px', marginLeft: 'auto'}}></ProgressBar> */}
            </div>
        );
    }

    const itemTemplate = (file:any, props:any) => {
        return (
            <div className="d-flex align-items-center flex-wrap fileUpload">
                <div><img alt={file.name} role="presentation" src={file.objectURL} width={100} /></div>
                <div className="flex-column text-left ml-3">
                    {file.name}<br />
                    <small>{new Date().toLocaleDateString()}</small>
                </div>
                <div className='text-center'><Tag value={props.formatSize} severity="warning" className="px-3 py-2" /></div>
                <div className='text-right'><Button type="button" icon="pi pi-times" 
                    className="p-button-outlined p-button-rounded p-button-danger ml-auto" 
                    onClick={() => onFileRemove(file, props.onFileRemove)} />
                    </div>
            </div>
        )
    }

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center text-center">
                <i className="pi pi-exclamation-triangle f30 mb5"></i>
                <div className='infoTxt f12'>
                    ???????????? ????????? ??????????????????.<br/>
                    <div className='mt5'>
                    * ????????? 1?????? ????????? ???????????????.(png, jpg??? ??????)<br/>
                    * ?????? ???????????? 20MB??? ????????? ??? ????????????.
                    </div>
                </div>
            </div>
        )
    }

    const chooseOptions = {icon: 'pi pi-fw pi-plus', iconOnly: false, label:'????????????', className: 'custom-choose-btn p-button outline'};
    const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', iconOnly: false, label:'?????????', className: 'custom-upload-btn p-button outline'};
    const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: false, label:'????????????', className: 'custom-cancel-btn p-button outline'};

    return (
        <div>
            <FileUpload 
                ref={fileUploadRef} 
                name={name}
                url={url}
                multiple={multiple}
                accept={accept}
                maxFileSize={maxFileSize}
                onUpload={onUpload} 
                onSelect={onSelect} 
                onError={onError} 
                onClear={onClear}
                headerTemplate={headerTemplate} 
                itemTemplate={itemTemplate} 
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions} 
                uploadOptions={uploadOptions} 
                cancelOptions={cancelOptions} />
        </div>
    )
}
export default CldFileUpload;



  