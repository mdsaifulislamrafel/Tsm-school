

const HeadTeacher = () => {
    return (
        <div className=" mx-auto my-10 flex flex-col items-center justify-evenly md:flex-row">
            <div data-aos="fade-right" data-aos-duration="1000" className="group relative  sm:w-[350px]">
                <img width={350} height={350} className="h-full w-full scale-105 transform rounded-lg bg-black/70" src="https://i.ibb.co/7pkvbnN/head.png" alt="card navigate ui" />

            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className="w-full flex items-center flex-col justify-center md:h-[50vh] mt-5 md:mt-0 space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[rgb(24,24,27)] md:w-[50%] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                <div className="space-y-5">
                    <h2 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" className="text-center border-b-4 font-sans text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-5xl">মোঃ সারওয়ারে খোদা</h2>
                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className="font-sans text-2xl text-gray-500 dark:text-white/70">পদবী : Head Master</p>
                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" className="text-2xl tracking-wider text-gray-700 dark:text-white/80 lg:text-3xl">ফোন : ০১৭১৮৮৩৫২৭৯</p>
                </div>
            </div>
        </div>
    );
};

export default HeadTeacher;