import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>Gallery Thakurgaon sugar mills high school</title>
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* batch 1992 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-[300px]" src="https://i.ibb.co/P6880Zn/IMG-20240420-155135-331.jpg" alt="batch-1992" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ১৯৯২</h2>
                    <Link to={"/batch-1992"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 1999 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-[300px]" src="https://i.ibb.co/XtJV3Sp/1999.jpg" alt="batch-1999" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ১৯৯৯</h2>
                    <Link to={"/batch-1999"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 2011 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/VtBXdLH/IMG-20240418-WA0002.jpg" alt="batch-2011" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০১১</h2>
                    <Link to={"/batch-2011"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 2016 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/7CwTsYW/61783539-2394476837487452-4545797423355658240-n.jpg" alt="batch-2018" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০১৬</h2>
                    <Link to={"/batch-2016"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 2017 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/x6qhj60/100045626-1676693772484375-2487825880261328896-n.jpg" alt="batch-2018" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০১৭</h2>
                    <Link to={"/batch-2017"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 2018 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/DrWPPYg/48425574-1368664029951796-4299148794555006976-n.jpg" alt="batch-2018" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০১৮</h2>
                    <Link to={"/batch-2018"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 2019 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/7J0qnRd/IMG-4313.jpg" alt="batch-2019" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০১৯</h2>
                    <Link to={"/batch-2019"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 2020 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/tMPkZtQ/batch20.jpg" alt="batch-2020" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০২০</h2>
                    <Link to={"/batch-2020"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 2021 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/Cv70jvh/IMG-4225.jpg" alt="batch-2021" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০২১</h2>
                    <Link to={"/batch-2021"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 2022 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/xsY00ZZ/DSC097331.jpg" alt="batch-2020" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০২২</h2>
                    <Link to={"/batch-2022"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 2023 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/s3Bd2L6/IMG-20240418-WA0004.jpg" alt="batch-2023" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০২৩</h2>
                    <Link to={"/batch-2023"} className="btn btn-secondary w-full">See more</Link>
                </div>
                {/* batch 2024 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/M5Q6c7P/IMG-4511-01.jpg" alt="batch-2024" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০২৪</h2>
                    <Link to={"/batch-2024"} className="btn btn-secondary w-full">See more</Link>
                </div>



            </div>
        </div>
    );
};

export default Gallery;