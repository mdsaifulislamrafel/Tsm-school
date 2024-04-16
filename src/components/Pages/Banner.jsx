import Marquee from "react-fast-marquee";
import logo from "../../assets/images/logo.png"
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
const Banner = () => {
    return (
        <div>
            <div className="my-2 flex items-center gap-2 bg-[#003073] text-white p-2">
                <button className="btn btn-secondary text-white font-bold">Headline</button>
                <Marquee pauseOnHover speed={60}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, totam quasi explicabo doloribus sequi dolore! lorem5</p>
                </Marquee>
            </div>
            <div className="md:flex space-y-5 justify-between items-center bg-[#002147] p-5">
                <div className="ml-5 -mt-10">
                    <img className="w-28 mx-auto" src={logo} alt="" />
                </div>
                <div className="text-center md:space-y-5">
                    <h2 className="text-white font-extrabold text-1xl md:text-5xl">ঠাকুরগাঁও সুগার মিলস উচ্চ বিদ্যালয়</h2>
                    <p className="text-white text-xl md:text-3xl font-semibold">ঠাকুরগাঁও</p>
                    <p className="text-white text-sm md:text-xl font-bold">School Code : 129102 EIIN: 129102</p>
                </div>
                <div className="flex gap-2 items-center justify-center mr-5">
                    <img className="w-28 bg-white" src={logo1} alt="" />
                    <img className="w-28" src={logo2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;