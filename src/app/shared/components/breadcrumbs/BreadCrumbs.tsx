import * as React from 'react';
import { Dropdown } from 'primereact';
import { Link, useLocation } from 'react-router-dom';
import portalRoutes from '../../../routes/portal-routes';
import useBasePage from '../../hooks/base-page.hook';
import './bread-crumbs.css';

const BreadCrumbs: React.FC = () => {

    const { goPage } = useBasePage()

    const location = useLocation();
    const routes = portalRoutes;
    const curLocation = location.pathname.split('/')
    const mainPath = `/${curLocation[1]}`
    const subPath = curLocation[2] === undefined ? null : `/${curLocation[1]}/${curLocation[2]}`

    let option:any = []

    const setOptions = () => {

        option = [];

        // 메인화면, ui 가이드는 제외
        // url : 자기 자신의 url
        // path : 실제 active 시켜야하는 자식의 url (예를 들어 클라우드 지원 > 공지사항. 클라우드 지원을 클릭시 공지사항이 활성화 될 수 있도록 (/list 를 끝에 붙이기 위해 만듦))
        option = routes[1]?.children?.filter((menu:any) => menu.path !== 'ui' && menu.path !== 'man')
            .map((item:any, mid: number) => {

            let obj = {
                // level: 1,
                label: item?.name,
                id: mid,
                value: mid,
                url: `/${item.path}`,
                path: item?.children === undefined ? `/${item.path}` : item?.children?.map((sitem:any, tid:number) => {
                    let url = ''
                    if(sitem?.children === undefined) {
                        url = `/${item.path}/${sitem.path}`
                    } else {
                        url = sitem?.children?.map((titem:any, tid:number) => {
                            let url = `/${item.path}/${sitem.path}/${titem.path}`
                            return url;
                        })
                        url = url[0]
                    }
                    // console.log('url =>', url)
                    return url;
                }),
                children: item?.children?.map((sitem:any, sid:number) => {
                    let sobj = {
                        // level: 2,
                        label: sitem.name,
                        value: sid,//sitem.name,
                        id: sid,
                        // parentId: mid,
                        // parentUrl: `/${item.path}`,
                        url: `/${item.path}/${sitem.path}`,
                        path: sitem?.children === undefined ? `/${item.path}/${sitem.path}` : sitem?.children?.map((titem:any, tid:number) => {
                            let url = `/${item.path}/${sitem.path}/${titem.path}`
                            return url;
                        }),
                        children: sitem?.children?.map((titem:any, tid:number) => {
                            let tobj = {
                                // level: 3,
                                label: titem.name, 
                                value: tid,
                                id: tid,
                                // parentId: sid,
                                // parentUrl: `/${item.path}/${sitem.path}`,
                                url: `/${item.path}/${sitem.path}/${titem.path}`,
                            }
                            return tobj;
                        })
                    }
                    return sobj;
                }),
            }
            return obj;
        })

        return option
    }

    //option 한 번만 만들어서 (option 값이 없으면 setOptions 돌리고 아니면 option 리턴) 렌더링시마다 재사용 (useMemo)
    const options = React.useMemo(() => setOptions(), [option])

    //메뉴 options 
    const [selectedMenuOptions, setSelectedMenuOptions] = React.useState([options]);

    //1depth, 2depth 초기 active menu 인덱스
    const [selectedMenus, setSelectedMenus] = React.useState<any[]>([0,0])

    React.useEffect(() => {

        // console.log('options', options)
        // console.log('mainPath =>', mainPath, 'subPath =>', subPath)

        let curMenus:any = [];
        options.forEach((item:any) => { 
            if(getFirstValue(item.url) === mainPath) {
                curMenus.push(item.value)
                item.children?.forEach((sitem:any) => {
                    if(getFirstValue(sitem.url) === subPath) {
                        curMenus.push(item.value)
                        return false;
                    }
                })
            }
        })

        console.log('curMenus =>', curMenus)
        setSelectedMenus(curMenus)

        let temp = getSubMenus(curMenus[0]);
        setSelectedMenuOptions(temp)

    }, [])

    const getFirstValue = ( list:any ) => {
        let res = list;
        if(typeof res === 'object' && res.length > 0) {
            res = res[0]
        }
        return res;
    }

    const getSubMenus = ( mid:number ) => {
        let nextOptions = options[mid].children
        let temp = nextOptions === undefined ? [options] : [options, options[mid].children]

        return temp;
    }

    const handleChange = (e:any, id:number) => {

        // console.log('******', e)

        let selectedId = e.value
        if(id === 0) {
            //2뎁스 메뉴 목록을 재구성해서 뿌려줌 (선택한 1 뎁스 메뉴의 하위메뉴로 )
            let temp = getSubMenus(selectedId);
            setSelectedMenuOptions(temp)
        }

        let menu = [ ...selectedMenus ]
        menu[id] = e.value

        //1뎁스 선택하면 2뎁스 메뉴의 첫번째 것을 기본 선택하도록 유도
        if(id === 0)    menu[1] = 0
        setSelectedMenus(menu)
        // console.log(id, 'menu', menu, 'selectedMenus', selectedMenus, menu === selectedMenus)

        if(id === 1) {
            let selectedSubMenu = selectedMenuOptions[id][selectedId]
            // console.log('*** selectedSubMenu', selectedSubMenu)
            if(selectedSubMenu) {
                let path = getFirstValue(selectedSubMenu.path);
                // console.log('*** selectedSubMenu.url', selectedSubMenu.url)
                // console.log('*** selectedSubMenu.path', selectedSubMenu.path)
                // console.log('*** path', path)
                goPage(path)
            }
        }
        
    }

    return(
        <>
            <div className='breadCrumbs'>
                <Link to='/' className='menuTxt'>Home</Link> 
                <i className='pi pi-chevron-right' />
                {
                    selectedMenus.map((menu, index) => (
                        <React.Fragment key={`breadCrumb-${index}`}>
                            <Dropdown 
                                value={selectedMenus[index]} 
                                options={selectedMenuOptions[index]} 
                                onChange={(e:any) => handleChange(e, index)} 
                                optionLabel='label'
                                placeholder='메뉴 선택'
                            />
                            {
                                selectedMenus.length-1 === index ? null :
                                <i className='pi pi-chevron-right' />
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
export default BreadCrumbs

