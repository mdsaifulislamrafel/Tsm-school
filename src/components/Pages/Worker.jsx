

const Worker = () => {
    return (
        <div className="flex-1 md:flex md:gap-5 mt-20">
            <div data-aos="zoom-in" data-aos-duration="1000" className="mx-auto w-full space-y-6 rounded-xl border-4 border-[#B5B3BC] bg-white px-4 pb-8 pt-4 font-sans shadow-lg">
                <div className="relative flex h-48 w-fit mx-auto justify-center lg:h-[280px]">
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        {/* love  */}
                        <div className="flex items-center"><svg width={30} className="fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg></div>
                    </div>
                    <img width={300} height={300} loading="lazy" className="h-full w-full rounded-lg bg-black/40" src="https://i.ibb.co/sjSqnm0/Screenshot-2024-04-18-022341-removebg-preview.png" alt="card navigate ui" />
                </div>
                <div className="mx-auto w-[85%] space-y-2 text-center font-semibold">
                    <h6 className="text-sm text-black md:text-base lg:text-lg">মোঃ মিজানুর রহমান</h6>
                    <p className="text-xs font-semibold text-black md:text-sm">ফোন : 01719345948</p>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1000" className="mx-auto mt-5 md:mt-0 w-full space-y-6 rounded-xl border-4 border-[#B5B3BC] bg-white px-4 pb-8 pt-4 font-sans shadow-lg">
                <div className="relative flex h-48 w-fit mx-auto justify-center lg:h-[280px]">
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        {/* love  */}
                        <div className="flex items-center"><svg width={30} className="fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg></div>
                    </div>
                    <img width={300} height={300} loading="lazy" className="h-full w-full rounded-lg bg-black/40" src="https://i.ibb.co/DGNKDkP/khala.png" alt="card navigate ui" />
                </div>
                <div className="mx-auto w-[85%] space-y-2 text-center font-semibold">
                    <h6 className="text-sm text-black md:text-base lg:text-lg">রোকেয়া</h6>
                    <p className="text-xs font-semibold text-black md:text-sm">ফোন : 01750875593</p>
                </div>
            </div>
        </div>
    );
};

export default Worker;