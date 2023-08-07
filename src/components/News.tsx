import {useLocation} from "react-router-dom"
import {useEffect} from "react";
const News = () => {
    const params = useLocation();
    useEffect(() => {
        console.log(params.state.type);
    }, [params.state.type])
    return <>我是news组件</>
}
export default News
