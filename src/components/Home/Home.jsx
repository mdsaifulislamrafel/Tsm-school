import AboutSchool from "../Pages/AboutSchool";
import Banner from "../Pages/Banner";
import Location from "../Pages/Location";
import Slider from "../Pages/Slider";

const Home = () => {
    return (
        <div>
            <Banner />
            <Slider />
            <AboutSchool />
            <Location />
        </div>
    );
};

export default Home;