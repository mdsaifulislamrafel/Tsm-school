import { useEffect, useState } from "react";

const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = ['https://i.ibb.co/m5gJn54/Screenshot-2024-04-16-204156.png' ,'https://i.ibb.co/nm0MnQ6/Screenshot-2024-04-16-195746.png', 'https://i.ibb.co/jZfq8LZ/Screenshot-2024-04-16-193721.png', 'https://i.ibb.co/dQgyLqm/IMG-2097-2.jpg', 'https://i.ibb.co/fCKP1zk/IMG20181223104037.jpg', 'https://i.ibb.co/WkgHrTZ/Screenshot-2024-04-18-020820.png', 'https://i.ibb.co/88ws6NV/Screenshot-2024-04-19-072308.png'];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);
    return (
        <div data-aos="fade-up" data-aos-duration="2500" className="w-full mx-auto h-full lg:h-[540px] overflow-hidden gap-5 my-5">
            <div className="relative overflow-hidden">
                {/* dots */}
                <div className="flex h-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
                    {sliders.map((_, inx) => (
                        <button key={inx} onClick={() => setCurrentSlider(inx)}
                            className={`rounded-full duration-300  bg-white ${currentSlider === inx ? 'w-10' : 'w-2'} h-2`}>
                        </button>
                    ))}
                </div>
                {/* slider container */}
                <div className="ease-linear duration-300 flex flex-col h-full relative">
                    {/* sliders */}
                    {sliders.map((_, inx) => (
                        <div key={inx} className={`min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative ${currentSlider === inx ? '' : 'hidden'}`}>
                            <img src={_} className="w-full h-fit object-cover" alt={`Slider - ${inx + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
