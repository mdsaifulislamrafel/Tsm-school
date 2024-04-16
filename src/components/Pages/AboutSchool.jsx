import { useState } from "react";

const AboutSchool = () => {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const datas = [
        { title: 'মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর', color: 'green', description: 'click now', links: 'https://dshe.gov.bd/'},
        { title: 'শিক্ষক বাতায়ন', color: 'sky', description: 'click now', links: 'https://www.teachers.gov.bd/' },
        { title: 'শিক্ষা মন্ত্রনালয়', color: 'purple', description: 'click now', links: 'http://www.moedu.gov.bd/' },
        { title: 'ই-বুক', color: 'amber', description: 'click now', links: 'http://www.ebook.gov.bd/' },
        { title: 'দিনাজপুর শিক্ষা বোর্ড', color: 'red', description: 'click now', links: 'https://dinajpureducationboard.gov.bd/' },
        { title: 'Education Board Results', color: 'purple', description: 'click now', links: 'http://www.educationboardresults.gov.bd/' },
        { title: 'জাতীয় শিক্ষা বোর্ড', color: 'yellow', description: 'click now', links: 'http://www.educationboard.gov.bd/'},
        { title: 'বিদ্যালয়ের ফেসবুক গ্রুপ', color: 'purple', description: 'click now', links: 'https://www.facebook.com/groups/514439851943676' }
    ];
    return (
        <div data-aos="fade-up" className="bg-[#E7EDC9] grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center my-5 md:my-16 lg:p-10">
            <div>
                <h2 className="border-b-8 border-[#86A824]"><span className="text-3xl text-black font-semibold">প্রধান শিক্ষকের বাণী</span></h2>

                <div className="mt-5 md:flex">
                    <img className="w-38 mx-auto h-48 ring-2 ring-purple-600 mb-3 md:p-2 md:mr-3" src="https://i.ibb.co/7pkvbnN/head.png" alt="" />
                    <h4 className="text-justify text-wrap text-black font-semibold p-1">তথ্য ও যোগাযোগের প্রযুক্তি (Information and Communication Technology-ICT) মানুষের জীবন ধারণের পদ্ধতিকে বদলে দিয়েছে- জীবনকে করেছে সহজ ও আনন্দময়। শিক্ষাক্ষেত্রেও তথ্য ও যোগযোগ প্রযুক্তি যোগ করেছে নতুন মাত্রা। আইসিটি স্থান করে নিয়েছে গ্রামের বিদ্যালয়ের সেই ছোট্ট শ্রেণিকক্ষেও - যেখানে শিক্ষার্থীরা বই-খাতার পাশাপাশি কম্পিউটারেও শিখতে শুরু করেছে। জাতীয় শিক্ষানীতি ২০১০-এর আলোকে আধুনিক জ্ঞান-বিজ্ঞান এবং সকল ক্ষেত্রে তথ্য ও যোগযোগ প্রযুক্তি ব্যবহারের মাধ্যমে নতুন প্রজন্মকে ডিজিটাল বাংলাদেশের যোগ্য রূপকার হিসাবে গড়ে তোলে ‘‘ভিশন ২০২৪’’ বাস্তবায়নের জন্য এই ওয়েবসাইট অত্যন্ত সহায়ক ভূমিকা পালন করবে বলে আমি বিশ্বাস করি। মূলত শিক্ষক, শিক্ষার্থী এবং অভিভাবক এই তিন অনুসঙ্গের নিকট তথ্য, উপাত্ত সহজে ও দ্রুততার সহিত পৌঁছানো এবং তথ্য প্রযুক্তির সর্বোত্তম ব্যবহার নিশ্চিত করে শিক্ষা সংশ্লিষ্ট বিভিন্ন দপ্তর এবং অন্যান্য সরকারি অফিসের যোগাযোগ রক্ষা করা এই ওয়েবসাইটের লক্ষ্য। ঠাকুরগাঁও জেলার অন্যতম শিক্ষা প্রতিষ্ঠান ঠাকুরগাঁও সুগার মিলস উচ্চ বিদ্যালয়, ঠাকুরগাঁও ইতোমধ্যে সকল শিক্ষকদের নিয়ে ‘‘মাল্টিমিডিয়া ক্লাসরুম’’ বিষয়ক অভ্যন্তরিন প্রশিক্ষন সম্পন্ন করেছে। এই ওয়েবসাইটটি খোলার মাধ্যমে বিদ্যালয়ের সামগ্রিক মান উন্নয়ন ও তথ্যের অবাধ প্রবাহ নিশ্চিত করণে একটি নতুন মাত্রা যুক্ত হবে এই প্রত্যাশা করছি।</h4>
                </div>
            </div>
            <div className="w-full border border-red-500 p-2 md:p-5">
                <h2 className="bg-[#9EB825] text-3xl font-semibold p-4 rounded-xl text-white">গুরুত্বপূর্ণ লিঙ্ক</h2>
                <div className="space-y-4 p-2 md:p-6">
                    {datas?.map((data, idx) => (
                        <div key={idx}>
                            {/* header / Title */}
                            <div onClick={() => handleToggle(idx)} className={`px-4 md:px-8 py-6 ${idx === 0 ? 'bg-green-50 border-green-500' : idx === 1 ? 'bg-sky-50 border-sky-500' : idx === 2 ? 'bg-purple-50 border-purple-500' : idx === 3 ? 'bg-amber-50 border-amber-500' : idx === 4 ? 'bg-red-50 border-red-500' : 'bg-orange-50 border-orange-500'} border-l-[3px] cursor-pointer`}>
                                <div className="flex items-center">
                                    <span>
                                        <svg className={`mr-4 ${idx === 0 ? 'fill-green-900' : idx === 1 ? 'fill-sky-900' : idx === 2 ? 'fill-purple-900' : idx === 3 ? 'fill-amber-900' : idx === 4 ? 'fill-red-900' : 'fill-orange-900'} shrink-0`} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /><rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /></svg>
                                    </span>
                                    <h4
                                        className={`${idx === 0 ? 'text-green-900' : idx === 1 ? 'text-sky-900' : idx === 2 ? 'text-purple-900' : idx === 3 ? 'text-amber-900' : idx === 4 ? 'text-red-900' : 'text-orange-900'} text-xl`}>
                                        {data.title}
                                    </h4>
                                </div>
                            </div>
                            {/* body / content  */}
                            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${idx === 0 ? 'text-green-900 bg-green-50 border-green-500' : idx === 1 ? 'text-sky-900 bg-sky-50 border-sky-500' : idx === 2 ? 'text-purple-900 bg-purple-50 border-purple-500' : idx === 3 ? 'text-amber-900 bg-amber-50 border-amber-500' : idx === 4 ? 'text-red-900 bg-red-50 border-red-500' : 'text-orange-900 bg-orange-50 border-orange-500'} `}>
                                        <a href={data?.links} target="_blank">{data?.description}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutSchool;