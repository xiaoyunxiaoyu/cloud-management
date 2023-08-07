import { Navigate} from "react-router-dom";
import Home from "@/components/Home.tsx";
import {lazy} from "react";
// import About from "@/components/About.tsx";
// import News from "@/components/News.tsx";
const About = lazy(()=> import("@/components/About"))
const News = lazy(()=> import("@/components/News"))


const router = [
    // 一级路由默认都在根目录下
    {
        path: "/",
        element: <Navigate to="/about"/>
    },
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/news",
                element: <News></News>
            },
        ]
    },
]
export default router;
