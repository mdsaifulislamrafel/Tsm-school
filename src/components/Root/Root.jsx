import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>

    );
};

export default Root;