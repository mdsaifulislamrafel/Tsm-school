import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("synthwave");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 200;
            if (window.scrollY > threshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <style>
                {`
                .sticky-header {
                    transition: top 0.5s ease-in-out;
                    position: fixed;
                    top: ${isScrolled ? '0' : '-100px'};
                    left: 0;
                    right: 0;
                    z-index: 1000;
                }

                .content {
                    transition: padding-top 0.5s ease-in-out;
                    padding-top: ${isScrolled ? '100px' : '0'};
                }
                `}
            </style>
            <nav className={`relative bg-white shadow ${isScrolled ? 'sticky-header' : ''} ${isOpen ? 'opened' : ''}`}>
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <div className='flex items-center justify-center gap-2'>
                                <img className='w-20' src={logo} alt="" />
                                <a href="#">
                                    <p className='text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>ঠাকুরগাঁও সুগার মিলস উচ্চ বিদ্যালয়</p>
                                </a>
                            </div>
                            <div className="flex lg:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    {!isOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                <NavLink to={"/"} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">হোম পেজ</NavLink>
                                <NavLink to={"/teacherInfo"} className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">শিক্ষক বৃন্দ</NavLink>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">গ্যালারি</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">প্রতিষ্ঠানিক কার্যক্রম</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">যোগাযোগ</a>
                            </div>
                            <div className="flex items-center gap-2 mt-4 lg:mt-0 md:p-2">
                                <label className="cursor-pointer grid place-items-center">
                                    <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                </label>
                                <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                                    </div>
                                    <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
