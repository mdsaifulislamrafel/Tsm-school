import {
    createBrowserRouter,
} from "react-router-dom"
import Root from "../Root/Root";
import Home from "../Home/Home";
import Teacher from "../Pages/Teacher";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/teacherInfo",
                element: <Teacher />
            }
        ]
    },
]);