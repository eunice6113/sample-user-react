import { useLocation, useNavigate, useParams } from "react-router-dom"


const useBasePage = () => {

    const location = useLocation();
    const curLocation = location.pathname.split('/')
    // console.log('curLocation', curLocation, curLocation[3])

    const isRegister:boolean = curLocation[3] === 'register'

    const navigator = useNavigate();
    const params = useParams();
    const paramId = params.id;
    // console.log(params.id);

    const goBack = () => {
        navigator(-1);
    }

    const goPage = ( url:string ) => {
        navigator(url);
    }

    const goPageWithData = ( url:string, data:object ) => {
        navigator(url, { state: data });
    }

    return {
        goBack,
        goPage,
        goPageWithData,
        params,
        paramId,

        location,
        curLocation,
        isRegister
    }
}
export default useBasePage