import {useLocation} from "react-router-dom"
import {useEffect} from "react";
const Login = () => {
    const params = useLocation();
    useEffect(() => {
        console.log(params.state.type);
    }, [params.state.type])
    return <>我是登录组件</>
}
export default Login
