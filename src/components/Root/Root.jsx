import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const Root = () => {
    return (
        <div>
            <Helmet>
                <title>Home Thakurgaon sugar mills high school</title>
            </Helmet>
            <Header />
            <div className="w-[95%] my-5 md:my-8 mx-auto min-h-[calc(100vh-258.32px)]">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>

    );
};

export default Root;