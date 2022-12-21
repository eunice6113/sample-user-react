import * as React from 'react';
import { Outlet } from 'react-router-dom';
import FloatMenu from '../components/float-menu/FloatMenu';
import useBasePage from '../hooks/base-page.hook';
import Header from './header/Header';
import './layout.css'
import LNB from './sidebar/LNB';

const FullLayout: React.FC = () => {
    const { location } = useBasePage() //221221

    const [naviOpen, setNaviOpen] = React.useState(true)

    React.useEffect(() => {

        console.log(location.pathname)
    }, [])

    const handleOpen = () => {
        console.log('handle open')

        setNaviOpen(!naviOpen)
    }
  
    return(
    <>
        <Header handleOpen={handleOpen} />

        {/* //221221 */}
        <div className={`mainContainer ${location.pathname === '/test' ? 'mt0':''}`}>
            {/* <div className={`lnbContainer navi ${naviOpen ? 'open':'close'}`}>
                <LNB open={naviOpen} />
            </div> */}
            <div className={`pageContainer ${naviOpen ? 'open':'close'}`}>
                <Outlet />
            </div>
        </div>

        {/* 221221 */}
        {
            location.pathname !== '/test' &&
            <FloatMenu />
        }
    </>
    )
}

export default FullLayout
