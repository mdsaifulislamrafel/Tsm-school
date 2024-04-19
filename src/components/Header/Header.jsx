import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
        toast.success('Successfully logout!')
    }


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
                                <img className='w-16 md:w-20' src="https://i.ibb.co/xjk8MmX/logo-CFs-Mp-Ycn.png" alt="" />
                                <NavLink to={"/"}>
                                    <p className='text-sm md:text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>ঠাকুরগাঁও সুগার মিলস উচ্চ বিদ্যালয়</p>
                                </NavLink>
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
                            <div className="flex flex-col md:gap-5 -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                <NavLink to={"/"} className={({ isActive, isPending }) => isActive ? "active text-red-600 hover:underline" : isPending ? "pending " : "block px-3 py-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}>হোম পেজ</NavLink>
                                <NavLink to={"/teacherInfo"} className={({ isActive, isPending }) => isActive ? "active text-red-600 hover:underline" : isPending ? "pending " : "block px-3 py-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}>স্কুল প্রশাসন</NavLink>
                                <NavLink to={"/gallery"} className={({ isActive, isPending }) => isActive ? "active text-red-600 hover:underline" : isPending ? "pending " : "block px-3 py-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}>গ্যালারি</NavLink>
                                <NavLink to={"/school-work"} className={({ isActive, isPending }) => isActive ? "active text-red-600 hover:underline" : isPending ? "pending " : "block px-3 py-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}>প্রতিষ্ঠানিক কার্যক্রম</NavLink>
                                <NavLink to={"/contact"} className={({ isActive, isPending }) => isActive ? "active text-red-600 hover:underline" : isPending ? "pending " : "block px-3 py-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}>যোগাযোগ</NavLink>
                                {
                                    user && <NavLink to={"/profile"} className={({ isActive, isPending }) => isActive ? "active text-red-600 hover:underline" : isPending ? "pending " : "block px-3 py-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}>প্রফাইল</NavLink>
                                }
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-4 lg:mt-0 md:p-2">
                                
                                <div className="flex items-center mt-4 lg:mt-0">
                                    {user ? (
                                        <div className="flex gap-2 items-center">

                                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                                <img title={user?.displayName} src={user?.photoURL || "https://i.ibb.co/jR0kk35/1e578556b494345deaabeda7e56467c5.png"} className="object-cover w-full h-full" alt="avatar" />
                                            </div>
                                            <h3 className="mx-2 text-sm text-gray-700 dark:text-gray-200 lg:hidden">{user?.displayName}</h3>
                                            <button onClick={() => handleLogOut()} className='btn btn-success text-white btn-sm'>Log Out</button>
                                        </div>
                                    ) : (
                                        <Link to={"/login"} className='btn btn-accent btn-sm font-bold'>Log in</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
