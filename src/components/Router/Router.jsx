import {
    createBrowserRouter,
} from "react-router-dom"
import Root from "../Root/Root";
import Home from "../Home/Home";
import Teacher from "../Pages/Teacher";
import Gallery from "../Pages/Gallery";
import SchoolWork from "../Pages/SchoolWork";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Contact from "../Pages/Contact";
import UpdateProfile from "../Pages/UpdateProfile";
import Batch2020 from "../Batch/Batch2020";
import Batch2023 from "../Batch/Batch2023";
import Batch2024 from "../Batch/Batch2024";
import Batch1999 from "../Batch/Batch1999";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/teacherInfo",
                element: <Teacher />
            },
            {
                path: "/gallery",
                element: <PrivateRoute><Gallery /></PrivateRoute>
            },
            {
                path: "/batch-1999",
                element: <Batch1999/>
            },
            {
                path: "/batch-2020",
                element: <Batch2020 />
            },
            {
                path: "/batch-2023",
                element: <Batch2023 />
            },
            {
                path: "/batch-2024",
                element: <Batch2024 />
            },
            {
                path: "/school-work",
                element: <PrivateRoute><SchoolWork /></PrivateRoute>
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
            {
                path: "/profile",
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
]);