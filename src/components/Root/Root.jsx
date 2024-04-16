import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header />
            <div className="w-[95%] my-5 md:my-10 mx-auto min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>

    );
};

export default Root;