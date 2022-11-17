import { Button } from "primereact";
import * as React from "react";
import { useLocation } from "react-router-dom";
import portalRoutes from "../../../routes/portal-routes";
import useBasePage from "../../hooks/base-page.hook";
import PageTitle from "../page-title/PageTitle";
import './base-page.css';
interface IProps {
    className?: string;
    children: React.ReactNode;
}

export const BasePage: React.FC<IProps> = ({className, children}) => {

    const location = useLocation();
    const curLocation = location.pathname.split('/')
    // let pageTitle = '';
    let subTitle = '';
    const routes = portalRoutes;

    let showTitle = location.pathname !== '/man'
    // console.log('showTitle', showTitle)
    
    const [pageTitle, setPageTitle] = React.useState('')

    const getLocPath = ( loc:string ) => {
        let res = '';
        let temp = loc.split('/')
        let lastChar = temp[temp.length-1]
        let isNumber = !isNaN(Number(lastChar));

        //주소의 / 뒤 마지막 문자가 숫자이면 :id 로 바꿔준다
        if(isNumber) {
            lastChar = ':id'

            temp.pop();
            temp.push(lastChar)
        }
        res = temp.join('/');

        return res;
    }
    const curPath = getLocPath(location.pathname)

    let list:any = [];
    const setList = () => {
        routes[1]?.children?.forEach((item:any) => {
            let obj = {
                level: 1,
                label: item?.name,
                url: `/${item.path}`,
                items: item?.children?.forEach((sitem:any) => {
                    let sobj = {
                        level: 2,
                        label: sitem.name, 
                        url: `/${item.path}/${sitem.path}`,
                        items: sitem?.children?.forEach((titem:any) => {
                            let tobj = {
                                level: 3,
                                label: titem.name, 
                                url: `/${item.path}/${sitem.path}/${titem.path}`,
                            }
                            list.push(tobj)
                        })
                    }
                    list.push(sobj)
                })
            }
            list.push(obj)
        })

        return list
    }

    //list 한 번만 만들어서 (list 값이 없으면 setList 돌리고 아니면 list 리턴) 렌더링시마다 재사용 (useMemo)
    const lists = React.useMemo(() => setList(), [list])
    
    React.useEffect(() => {
        // console.log('lists', lists)
        // console.log('curPath', curPath)
        
        lists.forEach( (menu:any) => {
            if(menu.url === curPath) {
                setPageTitle(menu.label)
                return false;
            }
        })

    }, [])

    // pageTitle= '공지사항'
    // subTitle='클라우드 포탈의 다양한 내용을 확인하세요.'

    //새로운 곳으로 이동시 페이지 상단으로 스크롤 이동
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return(<>
        {/* <Button onClick={(e) => { goPageWithData('/man', { id: 'hello !!!' } ) }} label='data with data' /> */}
        {
            showTitle && <PageTitle title={pageTitle} subTitle={subTitle} />
        }

        <div className={` basePage ${className}`}>
            {children}
        </div>
    </>)
}
