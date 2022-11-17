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

    let option:any = []
    let subOptions:any = [];

    const setOptions = () => {

        option = [];

        // 메인화면, ui 가이드는 제외
        // url : 자기 자신의 url
        // path : 실제 active 시켜야하는 자식의 url (예를 들어 클라우드 지원 > 공지사항. 클라우드 지원 클릭시 공지사항 목록이 활성화 될 수 있도록 (/list 를 주소 끝에 붙이기 위해 만듦))
        option = routes[1]?.children?.filter((menu:any) => menu.path !== 'ui' && menu.path !== 'man')
            .map((item:any, mid: number) => {

            let obj = {
                level: 1,
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
                        level: 2,
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
                                level: 3,
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
                    subOptions.push(sobj)
                    return sobj;
                }),
            }
            return obj;
        })

        return option
    }

    //2뎁스 메뉴의 path가 배열인 경우, 배열의 첫 번째 값으로 바꿔주기 위해 
    const setSubMenus = ( list:any ) => {
        let cutDepth2 = list.map((item:any) => {
            let ls = {
                ...item,
                path: getFirstValueOfList(item.path)
            }
            return ls
        });
        return cutDepth2;
    }

    //option 한 번만 만들어서 (option 값이 없으면 setOptions 돌리고 아니면 option 리턴) 렌더링시마다 재사용 (useMemo)
    const options = React.useMemo(() => setOptions(), [option])

    //메뉴 options 
    const [selectedMenuOptions, setSelectedMenuOptions] = React.useState([options]);

    //1depth, 2depth 초기 active menu 인덱스
    const [selectedMenus, setSelectedMenus] = React.useState<any[]>([0,0])

    React.useEffect(() => {

        let curMenus:any = [];

        //1뎁스 메뉴의 활성화 번호
        options.forEach((item:any) => { 
            if(getFirstValueOfList(item.url) === mainPath) {
                curMenus[0] = item.value
            }
        })

        //2뎁스 메뉴의 활성화 번호
        let depth2 = setSubMenus(subOptions)
        depth2.forEach((item:any) => { 
            if(item.path === location.pathname) {
                curMenus[1] = item.value
            }
        })

        //1뎁스, 2뎁스의 활성화 값을 세팅
        // console.log('curMenus =>', curMenus)
        setSelectedMenus(curMenus)

        //2뎁스 옵션 목록을 세팅
        let submenu = getActiveSubMenus(options, curMenus[0]);
        // console.log('submenu =>', submenu)
        setSelectedMenuOptions([options, submenu])

    }, [])

    //배열의 첫 번째 값만 리턴한다 (주소를 전부 string 으로 얻어 와서 단순 값 비교하기 위함!)
    const getFirstValueOfList = ( list:any ) => {
        let res = list;
        if(typeof res === 'object' && res.length > 0) {
            res = res[0]
        }
        return res;
    }

    //활성화 된 1뎁스 메뉴의 하위 메뉴(children, sub menu) 목록을 리턴
    const getActiveSubMenus = ( list:any, mid:number ) => {
        let childOptions = list[mid].children
        let temp = childOptions === undefined ? undefined : childOptions

        if(temp !== undefined) {
            let firstOption = { label: '메뉴 선택', value: '' }
            temp.unshift(firstOption)
        }
        return temp;
    }

    const handleChange = (e:any, id:number) => {

        // console.log('******', e)

        let selectedId = e.value
        if(id === 0) {
            //2뎁스 메뉴 목록을 재구성해서 뿌려줌 (선택한 1 뎁스 메뉴의 하위메뉴로 )
            let activeSubMenus = getActiveSubMenus(options, selectedId);
            // console.log('activeSubMenus', activeSubMenus)
            setSelectedMenuOptions([options, activeSubMenus])
        }

        let menu = [ ...selectedMenus ]
        menu[id] = e.value

        //1뎁스 선택하면 2뎁스 메뉴 목록의 첫번째 값 (메뉴 선택)을 active
        if(id === 0)    menu[1] = ''
        setSelectedMenus(menu)
        // console.log(id, 'menu', menu, 'selectedMenus', selectedMenus, menu === selectedMenus)

        if(id === 1) {
            // 맨 위에 '메뉴 선택' 이 있기 때문에 selectedId+1 해줘서 활성화 메뉴 선택
            let selectedSubMenu = selectedMenuOptions[id][selectedId+1]
            console.log('*** selectedSubMenu', selectedSubMenu)
            if(selectedSubMenu) {
                let path = getFirstValueOfList(selectedSubMenu.path);
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
                        selectedMenuOptions[index] &&
                        <React.Fragment key={`breadCrumb-${index}`}>
                            <Dropdown 
                                value={selectedMenus[index]}
                                options={selectedMenuOptions[index]} 
                                onChange={(e:any) => handleChange(e, index)} 
                                optionLabel='label'
                                placeholder='메뉴 선택'
                            />
                            {
                                selectedMenus.length-1 === index ? null : <i className='pi pi-chevron-right' />
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
export default BreadCrumbs

