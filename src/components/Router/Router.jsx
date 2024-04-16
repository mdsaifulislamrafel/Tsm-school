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
                path: "/school-work",
                element: <PrivateRoute><SchoolWork /></PrivateRoute>
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact /></PrivateRoute>
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