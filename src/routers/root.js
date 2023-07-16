import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import LoadingPage from "../pages/LoadingPage";
import ListPage from "../pages/board/ListPage";
import BasicLayout from "../pages/board/indexPage";
import { Suspense, lazy } from "react";

const Loading = <LoadingPage></LoadingPage>

// lazy() : 동적으로 컴포넌트를 로딩 (비동기 통신할 때에 많이 쓰임)
const Board_Index = lazy(() => import("../pages/board/indexPage"))

const Board_List = lazy(()=> import("../pages/board/ListPage"))


const router = createBrowserRouter([
    {
        path:"",
        element: <MainPage></MainPage>
    },
    {
        path:"about",
        element: <AboutPage></AboutPage>
    },
    {
        path: "board",
        // 로딩중에 Loading을 보여주고, 성공하면 Board_Index를 띄움
        element: <Suspense fallback={Loading}><Board_Index/></Suspense>,
        // children : 배열
        children: [
            {
                path: "list",
                element: <Suspense fallback={Loading}><Board_List/></Suspense>
            }
        ]
    }
])

export default router;