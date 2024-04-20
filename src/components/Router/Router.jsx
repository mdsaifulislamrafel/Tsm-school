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
import Batch2011 from "../Batch/Batch2011";
import Batch2019 from "../Batch/Batch2019";
import Batch2022 from "../Batch/Batch2022";
import Batch2018 from "../Batch/Batch2018";
import Batch2021 from "../Batch/Batch2021";
import Batch2017 from "../Batch/Batch2017";
import Batch2016 from "../Batch/Batch2016";
import Batch1992 from "../Batch/Batch1992";

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
                path: "/batch-1992",
                element: <Batch1992 />
            },
            {
                path: "/batch-1999",
                element: <Batch1999 />
            },
            {
                path: "/batch-2011",
                element: <Batch2011 />
            },
            {
                path: "/batch-2016",
                element: <Batch2016 />
            },
            {
                path: "/batch-2017",
                element: <Batch2017 />
            },
            {
                path: "/batch-2018",
                element: <Batch2018 />
            },
            {
                path: "/batch-2019",
                element: <Batch2019 />
            },
            {
                path: "/batch-2020",
                element: <Batch2020 />
            },
            {
                path: "/batch-2021",
                element: <Batch2021 />
            },
            {
                path: "/batch-2022",
                element: <Batch2022 />
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