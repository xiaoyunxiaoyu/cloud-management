import {Suspense} from "react";
import {useRoutes} from "react-router-dom";
import Router from "./router"
const App = () => {
    const outlet = useRoutes(Router)
    return <>
        <Suspense>
            {outlet}
        </Suspense>
    </>
}
export default App
