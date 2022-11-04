import * as React from 'react';
import { BasePage } from '../../shared/components/base/BasePage';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import ExcelPreview from '../../shared/components/excel-preview/ExcelPreview';

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
    const dt = React.useRef<any>(null);

    const cols = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    React.useEffect(() => {
        setProducts(demoData)
    }, []);


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

    
    return(
    <BasePage>
        <div className='card'>
            <h3>Import</h3>

            <ExcelPreview id={0} buttonLabel='엑셀 미리보기 1' />

            <ExcelPreview id={1} buttonLabel='엑셀 미리보기 2' />

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

