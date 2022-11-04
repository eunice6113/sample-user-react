import * as React from 'react';
import { BasePage } from '../../shared/components/base/BasePage';
import './ui-guide.css';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import NoData from '../../shared/components/ui/NoData';

const demoData = [
    {'id': '1000','code': 'f230fh0g3','name': 'Bamboo Watch','description': 'Product Description','image': 'bamboo-watch.jpg','price': 65,'category': 'Accessories','quantity': 24,'inventoryStatus': 'INSTOCK','rating': 5},
    {'id': '1001','code': 'nvklal433','name': 'Black Watch','description': 'Product Description','image': 'black-watch.jpg','price': 72,'category': 'Accessories','quantity': 61,'inventoryStatus': 'INSTOCK','rating': 4},
    {'id': '1002','code': 'zz21cz3c1','name': 'Blue Band','description': 'Product Description','image': 'blue-band.jpg','price': 79,'category': 'Fitness','quantity': 2,'inventoryStatus': 'LOWSTOCK','rating': 3},
    {'id': '1003','code': '244wgerg2','name': 'Blue T-Shirt','description': 'Product Description','image': 'blue-t-shirt.jpg','price': 29,'category': 'Clothing','quantity': 25,'inventoryStatus': 'INSTOCK','rating': 5},
    {'id': '1004','code': 'h456wer53','name': 'Bracelet','description': 'Product Description','image': 'bracelet.jpg','price': 15,'category': 'Accessories','quantity': 73,'inventoryStatus': 'INSTOCK','rating': 4},
    {'id': '1005','code': 'av2231fwg','name': 'Brown Purse','description': 'Product Description','image': 'brown-purse.jpg','price': 120,'category': 'Accessories','quantity': 0,'inventoryStatus': 'OUTOFSTOCK','rating': 4},
    {'id': '1006','code': 'bib36pfvm','name': 'Chakra Bracelet','description': 'Product Description','image': 'chakra-bracelet.jpg','price': 32,'category': 'Accessories','quantity': 5,'inventoryStatus': 'LOWSTOCK','rating': 3},
    {'id': '1007','code': 'mbvjkgip5','name': 'Galaxy Earrings','description': 'Product Description','image': 'galaxy-earrings.jpg','price': 34,'category': 'Accessories','quantity': 23,'inventoryStatus': 'INSTOCK','rating': 5},
    {'id': '1008','code': 'vbb124btr','name': 'Game Controller','description': 'Product Description','image': 'game-controller.jpg','price': 99,'category': 'Electronics','quantity': 2,'inventoryStatus': 'LOWSTOCK','rating': 4},
    {'id': '1009','code': 'cm230f032','name': 'Gaming Set','description': 'Product Description','image': 'gaming-set.jpg','price': 299,'category': 'Electronics','quantity': 63,'inventoryStatus': 'INSTOCK','rating': 3}
]

const ExcelGuide: React.FC = () => {

    const [products, setProducts] = React.useState<any>([]);
    const [importedData, setImportedData] = React.useState<any[]>([]);
    const [importedCols, setImportedCols] = React.useState<any[]>([{ field: '', header: 'Header' }]);
    const dt = React.useRef<any>(null);

    const [sheetNames, setSheetNames] = React.useState<string[]>([]);
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    const cols = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    React.useEffect(() => {
        setProducts(demoData)
    }, []);

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

    const exportCSV = (selectionOnly:any) => {
        dt?.current?.exportCSV({ selectionOnly });
    }

    const exportExcel = () => {
        import('xlsx').then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            saveAsExcelFile(excelBuffer, 'products');
        });
    }

    const saveAsExcelFile = (buffer:any, fileName:any) => {
        import('file-saver').then(module => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    }

    const toCapitalize = (s:any) => {
        return s.toString().charAt(0).toUpperCase() + s.toString().slice(1);
    }

    const clear = () => {
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


    const importExcelInputDiv = window.document.getElementById('importExcelInput')

    const handleInputClick = ( e:any ) => {
        importExcelInputDiv?.click()
    }

    const handleExcelView = ( id:any ) => {
        setActiveIndex(id)
    }

    
    return(
    <BasePage>
        <div className='card'>
                <h3>Import</h3>

                <input onChange={onFileChange} id='importExcelInput' hidden multiple={false} type='file'
                    accept='application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' />

                <div className='d-flex-default export-buttons mb10'>
                    <Button label='Excel Import' onClick={(e) => handleInputClick(e)} />
                    <Button type='button' label='Clear' icon='pi pi-times' onClick={clear} className='outline ml-auto mr0' />
                </div>

                <hr />

                <div className='pt-2 pb-4 mt10 mb10'>
                    {
                        sheetNames.map((sheet, index) => (
                            <Button key={`sheet-${index}`} onClick={() => handleExcelView(index)} className={activeIndex === index ? 'secondary':'outline'} label={sheet} />
                        ))
                    }
                </div>
                {
                    importedData.length > 0 ?
                    <DataTable value={importedData[activeIndex]} emptyMessage={<NoData message='데이터가 없습니다' />} paginator rows={10} alwaysShowPaginator={false} responsiveLayout='scroll'>
                        {
                            importedCols[activeIndex]?.map((col:any, index:number) => <Column key={index} field={col.field} header={col.header} />)
                        }
                    </DataTable>
                    :
                    // 데이터가 없을때
                    <DataTable value={[]} emptyMessage={<NoData message='데이터가 없습니다' />} paginator rows={10} alwaysShowPaginator={false} responsiveLayout='scroll'>
                        <Column field='' header=''></Column>
                    </DataTable>
                }
            </div>

            <div className='card'>
                <h3>Export</h3>

                <Tooltip target='.export-buttons>button' position='bottom' />

                <div className='d-flex-default export-buttons mb10'>
                    <Button type='button' icon='pi pi-file' label='CSV' onClick={() => exportCSV(false)} className='ml-auto mr0' data-pr-tooltip='CSV' />
                    <Button type='button' icon='pi pi-file-excel' label='Excel' onClick={exportExcel} className='p-button-success ml10 mr0' data-pr-tooltip='XLS' />
                </div>

                <DataTable ref={dt} value={products} dataKey='id' responsiveLayout='scroll'>
                    {
                        cols.map((col:any, index:number) => <Column key={index} field={col.field} header={col.header} />)
                    }
                </DataTable>
            </div>
    </BasePage>)
}
export default ExcelGuide

