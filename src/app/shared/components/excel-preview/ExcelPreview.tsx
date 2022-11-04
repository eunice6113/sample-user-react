import * as React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import NoData from '../ui/NoData';
import { paginator } from '../../utils/table-paginator';

interface IProps {
    id?: number;
    buttonLabel?: string;
}

const ExcelPreview: React.FC<IProps> = ({
    id = 0,
    buttonLabel = '엑셀 미리보기'
}) => {

    const [importedData, setImportedData] = React.useState<any[]>([]);
    const [importedCols, setImportedCols] = React.useState<any[]>([{ field: '', header: 'Header' }]);
    const [sheetNames, setSheetNames] = React.useState<string[]>([]);
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    const divId = `importExcelInput${id}`;
    const importExcelInputDiv = window.document.getElementById(divId);

    const handleInputClick = ( e:any ) => {
        importExcelInputDiv?.click()
    }

    const handleExcelView = ( id:any ) => {
        setActiveIndex(id)
    }

    const toCapitalize = (s:any) => {
        return s.toString().charAt(0).toUpperCase() + s.toString().slice(1);
    }

    const clear = () => {
        setSheetNames([]);
        setImportedData([]);
        setImportedCols([{ field: '', header: 'Header' }]);
    }

    const onFileChange = (e:any) => {
        importExcel(e.target.files[0])
        return e.target.value = null
    }

    const importExcel = ( _file:any ) => {
        console.log('importExcel', _file)
        
        const file = _file
        let colList: any[] = [];
        let dataList: any[] = [];

        import('xlsx').then(xlsx => {
            const reader = new FileReader();
            reader.onload = (e:any) => {
                const wb = xlsx.read(e.target.result, { type: 'array' });
                const sheetNames = wb.SheetNames
                setSheetNames(wb.SheetNames)

                sheetNames.forEach(( wsname:any, index:any ) => {
                    const ws = wb.Sheets[wsname];
                    const data = xlsx.utils.sheet_to_json(ws, { header: 1 });

                    // Prepare DataTable
                    const cols:any = data[0];
                    data.shift();

                    let _importedCols:any = cols.map((col:any) => {
                        return { field: col, header: toCapitalize(col) }
                    });

                    let _importedData:any = data.map((d:any) => {
                        return cols.reduce((obj:any, c:any, i:any) => {
                            obj[c] = d[i];
                            return obj;
                        }, {});
                    });

                    colList.push(_importedCols)
                    dataList.push(_importedData)
                })

                // console.log('importedCols ==>', importedCols)
                // console.log('importedData ==>', importedData)

                setImportedCols(colList)
                setImportedData(dataList)
            };

            reader.readAsArrayBuffer(file);
        });
    }

/*
    const importCSV = (e:any) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e:any) => {
            const csv = e.target.result;
            const data = csv.split('\n');

            // Prepare DataTable
            const cols = data[0].replace(/['']+/g, '').split(',');
            data.shift();

            let _importedCols = cols.map((col:any) => ({ field: col, header: toCapitalize(col.replace(/['']+/g, '')) }));
            let _importedData = data.map((d:any) => {
                d = d.split(',');
                return cols.reduce((obj:any, c:any, i:any) => {
                    obj[c] = d[i].replace(/['']+/g, '');
                    return obj;
                }, {});
            });

            setImportedCols(_importedCols);
            setImportedData(_importedData);
        };

        reader.readAsText(file, 'UTF-8');
    }

    const importExcelOneSheetOnly = ( _file:any ) => {
        console.log('importExcel', _file)

        const file = _file

        import('xlsx').then(xlsx => {
            const reader = new FileReader();
            reader.onload = (e:any) => {
                const wb = xlsx.read(e.target.result, { type: 'array' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = xlsx.utils.sheet_to_json(ws, { header: 1 });

                // Prepare DataTable
                const cols:any = data[0];
                data.shift();

                let _importedCols:any = cols.map((col:any) => {
                    return { field: col, header: toCapitalize(col) }
                });

                let _importedData:any = data.map((d:any) => {
                    return cols.reduce((obj:any, c:any, i:any) => {
                        obj[c] = d[i];
                        return obj;
                    }, {});
                });

                setImportedCols(_importedCols);
                setImportedData(_importedData);
            };

            reader.readAsArrayBuffer(file);
        });
    }
*/
    
    return(
        <>
        <input onChange={onFileChange} id={`importExcelInput${id}`} hidden multiple={false} type='file'
            accept='application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' />

        <div className='d-flex-default export-buttons mb10'>
            <Button label={buttonLabel} onClick={(e) => handleInputClick(e)} />
            <Button type='button' label='Clear' icon='pi pi-times' onClick={clear} className='outline ml-auto mr0' />
        </div>

        <hr />

        <div className='pt-2 pb-4 mt10 mb10'>
            {
                sheetNames.map((sheet, index) => (
                    <Button key={`sheet-${index}`} onClick={() => handleExcelView(index)} className={`mr10 ${activeIndex === index ? 'secondary':'outline'}`} label={sheet} />
                ))
            }
        </div>
        {
            importedData.length > 0 ?
            <DataTable value={importedData[activeIndex]} emptyMessage={<NoData message='데이터가 없습니다' />} 
                paginator rows={10} alwaysShowPaginator={false} paginatorTemplate={paginator} 
                responsiveLayout='scroll'>
                {
                    importedCols[activeIndex]?.map((col:any, index:number) => <Column key={index} field={col.field} header={col.header} />)
                }
            </DataTable>
            :
            <NoData message='데이터가 없습니다' />
        }
        </>
    )

}
export default ExcelPreview;