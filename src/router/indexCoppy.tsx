import { HashRouter, Route, Routes, Navigate} from "react-router-dom";
import App from "@/App.tsx";
import Home from "@/components/Home.tsx";
import About from "@/components/About.tsx";
import News from "@/components/News.tsx";

// 组件方式路由写法(旧写法)

const baseRouter = () => (
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="/"  element={<Navigate to="/home" />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/news" element={<News />}></Route>
            </Route>
        </Routes>
    </HashRouter>
)
export default baseRouter;
