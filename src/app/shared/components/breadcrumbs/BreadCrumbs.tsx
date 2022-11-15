import { Button, Dropdown, Menu } from 'primereact';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import portalRoutes from '../../../routes/portal-routes';
import './bread-crumbs.css';

const BreadCrumbs: React.FC = () => {

    const location = useLocation();
    const routes = portalRoutes;
    const curLocation = location.pathname.split('/')
    const mainPath = `/${curLocation[1]}`
    const subPath = `/${curLocation[1]}/${curLocation[2]}`

    let list:any = []
    let option:any = []

    const setList = () => {

        list = [];

        //메인화면, ui 가이드는 제외
        list = routes[1]?.children?.filter((menu:any) => menu.path !== 'ui' && menu.path !== 'man')
            .map((item:any, mid: number) => {

            let obj = {
                level: 1,
                label: item?.name,
                // value: mid,
                value: item?.name,
                path: `/${item.path}`, //url 주면 누르는 순간 화면이동이 되므로 path 라는 이름으로 줌
                children: item?.children?.map((sitem:any, sid:number) => {
                    let sobj = {
                        level: 2,
                        label: sitem.name,
                        value: sitem.name,
                        // value: sid, 
                        id: sid, 
                        parentId: mid,
                        parentUrl: `/${item.path}`,
                        url: `/${item.path}/${sitem.path}`,
                        children: sitem?.children?.map((titem:any, tid:number) => {
                            let tobj = {
                                level: 3,
                                label: titem.name, 
                                value: titem.name, 
                                // value: tid,
                                id: tid, 
                                parentId: sid,
                                parentUrl: `/${item.path}/${sitem.path}`,
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

        return list
    }

    const setOptions = () => {

        option = [];

        //메인화면, ui 가이드는 제외
        option = routes[1]?.children?.filter((menu:any) => menu.path !== 'ui' && menu.path !== 'man')
            .map((item:any, mid: number) => {

            let obj = {
                level: 1,
                label: item?.name,
                id: mid,
                path: `/${item.path}`, //url 주면 누르는 순간 화면이동이 되므로 path 라는 이름으로 줌
                value: {id: mid},
                children: item?.children?.map((sitem:any, sid:number) => {
                    let sobj = {
                        level: 2,
                        label: sitem.name,
                        value: sitem.name,
                        id: sid,
                        parentId: mid,
                        parentUrl: `/${item.path}`,
                        url: `/${item.path}/${sitem.path}`,
                        children: sitem?.children?.map((titem:any, tid:number) => {
                            let tobj = {
                                level: 3,
                                label: titem.name, 
                                value: titem.name, 
                                id: tid,
                                parentId: sid,
                                parentUrl: `/${item.path}/${sitem.path}`,
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


/*
    const setList = () => {
        list = routes[1]?.children?.map((item:any) => {
            let obj = {
                label: item?.name,
                url: `/${item.path}`,
                items: item?.children?.map((sitem:any) => {
                    return { label: sitem.name, url: `/${item.path}/${sitem.path}` }
                })
            }
            return obj;
        })

        //메인화면, ui 가이드는 제외
        list = list.filter((menu:any) => menu.url !== '/ui' && menu.url !== '/man') 

        return list
    }
*/
    //list 한 번만 만들어서 (list 값이 없으면 setList 돌리고 아니면 list 리턴) 렌더링시마다 재사용 (useMemo)
    const lists = React.useMemo(() => setList(), [list])
    const options = React.useMemo(() => setOptions(), [option])

    const [selectedMenuOptions, setSelectedMenuOptions] = React.useState([options]);
    const [selectedMenus, setSelectedMenus] = React.useState<any[]>([])

    React.useEffect(() => {
        console.log('mainPath =>', mainPath, 'subPath =>', subPath)

        // curselectedMenus = [];
        // lists.forEach((item:any) => { 

        //     console.log('item.path =>', item.path)

        //     if(item.path === mainPath) {
        //         curselectedMenus.push(item)
        //         item.children?.forEach((sitem:any) => {

        //             console.log('sitem.url =>', sitem.url)
        //             if(sitem.url === subPath) {
        //                 curselectedMenus.push(sitem)
        //                 return false;
        //             }
        //         })
        //     }
        // })
        // setSelectedMenus(curselectedMenus)

    }, [])

    const refs = React.useRef<any>([]);

    const toggleMenuPanel = ( e:any, id:number ) => {
        let cur:any = refs?.current[id]
        cur.toggle(e)
    }

    const handleChange = (e:any, idx:number) => {
        let menu = selectedMenus
        menu[idx] = e.value
        setSelectedMenus(menu)
        console.log('menu =>', menu, 'idx', idx)

        console.log('******', e)

        let selectedId = e.value.id
        if(idx === 0) {
            let newSelected = options.filter((item:any) => item.id === selectedId)
            let temp = [options, newSelected[0].children]
            setSelectedMenuOptions(temp)
        }
    }

    return(
        <>
            <div className='breadCrumbs'>
                <Link to='/' className='menuTxt'>Home</Link> 
                <i className='pi pi-chevron-right' />
                {
                    selectedMenuOptions.map((menu, index) => (
                        <React.Fragment key={`breadCrumb-${index}`}>
                            <Dropdown 
                                value={selectedMenus[index]} 
                                options={selectedMenuOptions[index]} 
                                onChange={(e:any) => handleChange(e, index)} 
                                optionLabel='label'
                                placeholder='메뉴 선택'
                            />
                            {
                                selectedMenuOptions.length-1 === index ? null :
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

