import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>Gallery Thakurgaon sugar mills high school</title>
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* batch 1999 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-[300px]" src="https://i.ibb.co/XtJV3Sp/1999.jpg" alt="batch-1999" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  1999</h2>
                    <Link to={"/batch-1999"} className="btn btn-secondary w-full">See All</Link>
                </div>
                {/* batch 2020 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/tMPkZtQ/batch20.jpg" alt="batch-2020" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০২০</h2>
                    <Link to={"/batch-2020"} className="btn btn-secondary w-full">See All</Link>
                </div>
                {/* batch 2023 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/s3Bd2L6/IMG-20240418-WA0004.jpg" alt="batch-2023" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০২৩</h2>
                    <Link to={"/batch-2023"} className="btn btn-secondary w-full">See All</Link>
                </div>
                {/* batch 2024 */}
                <div data-aos="zoom-in" data-aos-duration="1200" className="border-4 flex flex-col space-y-5 justify-center rounded-2xl items-center p-10">
                    <img className="w-full h-full" src="https://i.ibb.co/M5Q6c7P/IMG-4511-01.jpg" alt="batch-2024" />
                    <h2 className="font-bold text-black text-2xl border-4 p-4 border-indigo-700 rounded-xl">ব্যাচ  ২০২৪</h2>
                    <Link to={"/batch-2024"} className="btn btn-secondary w-full">See All</Link>
                </div>



            </div>
        </div>
    );
};

export default Gallery;