import React, { useState, useEffect } from 'react';
import logo from '../assets/logosmall.png';
import tataLogo from '../assets/logosmall (1).png';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa';
import WhatWeDo from './WhatWeDo';
import WhoWeAre from './WhoWeAre';
import Insights from './Insights';
import Careers from './Careers';
import Newsroom from './Newsroom';
import Investors from './Investors';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Login from './Login';

import { aboutus, americas, asia, esg, europe, financials, india, industries, management, middle_east, newsandevents, productsAndPlatforms, researchandinnovation, resources, services, topics } from './Data';
import { useAuth } from '../context/AuthProvider';

import Logout from './Logout';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [activeNavItem, setActiveNavItem] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [navbarBg, setNavbarBg] = useState('bg-transparent');
    const [responsiveNav, setResponsiveNav] = useState(false);
    const [whatWeDo, setWhatWeDo] = useState(false)
    const [whoWeAre, setWhoWeAre] = useState(false)
    const [insights, setInsights] = useState(false)
    const [career, setCareer] = useState(false)
    const [newsroom, setNewsroom] = useState(false)
    const [investors, setInvestors] = useState(false)
    const [industrie, setIndustrie] = useState(false)
    const [service, setService] = useState(false)
    const [product, setProduct] = useState(false)
    const [research, setResearch] = useState(false)
    const [about, setAbout] = useState(false)
    const [topic, setTopic] = useState(false)
    const [indian, setIndian] = useState(false)
    const [american, setAmerican] = useState(false)
    const [asian, setAsian] = useState(false)
    const [european, setEuropean] = useState(false)
    const [middleEast, setMiddleEast] = useState(false)
    const [managementData, setManagementData] = useState(false)
    const [financial, setFinancial] = useState(false)
    const [news, setNews] = useState(false)
    const [esgData, setEsgData] = useState(false)
    const [resource, setResource] = useState(false)
      const [authUser, setAuthUser] = useAuth();
    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavbarBg('bg-[#1E2222] '); // Change background when scrolled
            } else {
                setNavbarBg('bg-transparent'); // Revert to transparent background when at the top
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (item) => {
        setActiveNavItem((prevItem) => (prevItem === item ? '' : item));
    };

    const handleSearchClick = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const closeSearch = () => {
        setIsSearchVisible(false);
    };

    return (
        <>
         
            <div className={`flex items-center xl:gap-0 gap-3 px-5 py-2 xl:w-[100dvw] fixed top-0 right-0 left-0 w-fit fixed z-[100] ${navbarBg}`}>
               
                <img src={logo} alt="TCS Logo" />
                <div className="flex justify-between xl:w-full">
                    <div className=" xl:flex hidden gap-4 ml-6">
                        {['What we do', 'Who we are', 'Insights', 'Careers', 'Newsroom', 'Investors'].map((item) => (
                            <p
                                key={item}
                                className={`text-white flex items-center cursor-pointer ${activeNavItem === item ? 'border-b-[1px] border-b-blue-600 ' : null}`}
                                onClick={() => handleNavClick(item)}
                            >
                                {item} {activeNavItem === item ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                            </p>
                        ))}
                    </div>
       <div className='hidden md:block px-3 py-2 ml-60 '>
     
       </div>
                   

      

   
              <div>
              {responsiveNav ? <IoClose onClick={() => setResponsiveNav(false)} className=' xl:hidden inline-block text-white  text-3xl ' /> : <GiHamburgerMenu onClick={() => setResponsiveNav(true)} className=' xl:hidden inline-block text-white  text-3xl ' />}

              </div>

            </div>

            <div className={`text-white xl:hidden bg-[#1E2222] max-w-[500px] w-[100vw] border-b-2 border-b-white transition-all duration-300 absolute top-20 ${responsiveNav ? 'right-0 block' : '-right-[560px] hidden '} z-[110]`} >
                <div className='flem items-center py-4 mx-2  ' onClick={() => setWhatWeDo(!whatWeDo)} >
                    <p className='flex justify-between items-center'>What we do <IoMdArrowDropdown /></p>
                </div>
                <hr className=' mx-2 ' />
                <div className={` ${whatWeDo ? 'block' : 'hidden'}  p-3 bg-gray-700`} >
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Overview </p>
                    </div>
                    <hr />
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setIndustrie(!industrie)} >Industries <FaPlus /> </p>
                        <ul className={`mt-5 ${industrie ? 'block' : 'hidden'} `} >
                            {industries.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <hr />
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setService(!service)}>Services <FaPlus /> </p>
                        <ul className={`mt-5 ${service ? 'block' : 'hidden'} `} >
                            {services.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <hr />
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setProduct(!product)}>Products and Platforms <FaPlus /> </p>
                        <ul className={`mt-5 ${product ? 'block' : 'hidden'} `} >
                            {productsAndPlatforms.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <hr />
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setResearch(!research)}>Research & Innovation <FaPlus /> </p>
                        <ul className={`mt-5 ${research ? 'block' : 'hidden'} `} >
                            {researchandinnovation.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='flem items-center py-4 mx-2  ' onClick={() => setWhoWeAre(!whoWeAre)} >
                    <p className='flex justify-between items-center'>Who we are <IoMdArrowDropdown /></p>
                </div>
                <hr className=' mx-2 ' />
                <div className={` ${whoWeAre ? 'block' : 'hidden'}  p-3 bg-gray-700`} >
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Overview </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setAbout(!about)}>About Us <FaPlus /> </p>
                        <ul className={`mt-5 ${about ? 'block' : 'hidden'} `} >
                            {aboutus.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Leadership </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Events </p>
                    </div>

                </div>
                <div className='flem items-center py-4 mx-2  ' onClick={() => setInsights(!insights)} >
                    <p className='flex justify-between items-center'>Insights <IoMdArrowDropdown /></p>
                </div>
                <hr className=' mx-2 ' />
                <div className={` ${insights ? 'block' : 'hidden'}  p-3 bg-gray-700`} >
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Overview </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Customer Stories </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Perspectives </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Global Studies </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setTopic(!topic)} >Topics <FaPlus /> </p>
                        <ul className={`mt-5 ${topic ? 'block' : 'hidden'} `} >
                            {topics.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>

                </div>
                <div className='flem items-center py-4 mx-2' onClick={() => setCareer(!career)} >
                    <p className='flex justify-between items-center'>Careers <IoMdArrowDropdown /></p>
                </div>
                <hr className=' mx-2 ' />
                <div className={` ${career ? 'block' : 'hidden'}  p-3 bg-gray-700`} >
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Overview </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setIndian(!indian)}>India <FaPlus /> </p>
                        <ul className={`mt-5 ${indian ? 'block' : 'hidden'} `} >
                            {india.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setAmerican(!american)}>Americas <FaPlus /> </p>
                        <ul className={`mt-5 ${american ? 'block' : 'hidden'} `} >
                            {americas.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setAsian(!asian)}>Asia Pacific <FaPlus /> </p>
                        <ul className={`mt-5 ${asian ? 'block' : 'hidden'} `} >
                            {asia.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setEuropean(!european)}>Europe and UK <FaPlus /> </p>
                        <ul className={`mt-5 ${european ? 'block' : 'hidden'} `} >
                            {europe.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setMiddleEast(!middleEast)}>Middle East and Africa <FaPlus /> </p>
                        <ul className={`mt-5 ${middleEast ? 'block' : 'hidden'} `} >
                            {middle_east.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>

                </div>
                <div className='flem items-center py-4 mx-2' onClick={() => setNewsroom(!newsroom)} >
                    <p className='flex justify-between items-center'>Newsroom <IoMdArrowDropdown /></p>
                </div>
                <hr className=' mx-2 ' />
                <div className={` ${newsroom ? 'block' : 'hidden'}  p-3 bg-gray-700`} >
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Overview </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Press releases </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>News alerts </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Analyst recognition </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Media kit </p>
                    </div>

                </div>
                <div className='flem items-center py-4 mx-2 ' onClick={() => setInvestors(!investors)} >
                    <p className='flex justify-between items-center'>Investors <IoMdArrowDropdown /></p>
                </div>
                <hr className=' mx-2 ' />
                <div className={` ${investors ? 'block' : 'hidden'}  p-3 bg-gray-700`} >
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center'>Overview </p>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setManagementData(!managementData)}>Management Commentary <FaPlus /></p>
                        <ul className={`mt-5 ${managementData ? 'block' : 'hidden'} `} >
                            {management.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setFinancial(!financial)}>Financials <FaPlus /></p>
                        <ul className={`mt-5 ${financial ? 'block' : 'hidden'} `} >
                            {financials.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setNews(!news)}>News and events <FaPlus /> </p>
                        <ul className={`mt-5 ${news ? 'block' : 'hidden'} `} >
                            {newsandevents.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setEsgData(!esgData)}>ESG <FaPlus /> </p>
                        <ul className={`mt-5 ${esgData ? 'block' : 'hidden'} `} >
                            {esg.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flem items-center py-4 mx-2  ' >
                        <p className='flex justify-between items-center' onClick={() => setResource(!resource)}>Resources <FaPlus /> </p>
                        <ul className={`mt-5 ${resource ? 'block' : 'hidden'} `} >
                            {resources.map((item, index) => {
                                return (
                                    <>
                                        <li className=' border-b-2 py-3 border-b-gray-400 ' key={index}> {item.name} </li>

                                    </>
                                )
                            })}
                        </ul>
                    </div>

                </div>
                <div className='flem items-center py-4 mx-2 border-b-[1px] border-b-gray-700'>

                    <p className=" hover:underline hover:underline-offset-2 cursor-pointer text-[#9E9FA3] uppercase text-[0.75rem] tracking-[0.15em] font-bold">
                        Contact Us
                    </p>
                </div>
                <div className='flem items-center py-4 mx-2 border-b-[1px] border-b-gray-700'>

                    <p className="hover:underline hover:underline-offset-2 cursor-pointer text-[#9E9FA3] uppercase text-[0.75rem] tracking-[0.15em] font-bold">
                      
                    </p>
                </div>

            </div>

            <div className={`bg-[#1E2222] z-[90] top-20 absolute w-full transition-all duration-300 overflow-hidden ${activeNavItem ? 'h-[65vh]' : 'max-h-0'}`}>
                <div className={`transition-opacity duration-300 ${activeNavItem ? 'opacity-100' : 'opacity-0'}`}>
                    {activeNavItem && (
                        <div className="p-10 flex">
                            {activeNavItem === "What we do" ? <WhatWeDo /> : activeNavItem === "Who we are" ? <WhoWeAre /> : activeNavItem === "Insights" ? <Insights /> : activeNavItem === "Careers" ? <Careers /> : activeNavItem === "Newsroom" ? <Newsroom /> : activeNavItem === "Investors" ? <Investors /> : null}
                        </div>
                    )}
                </div>
            </div>

            <div className={`fixed inset-0 bg-black bg-opacity-50 z-[110] ${isSearchVisible ? 'block' : 'hidden'}`} onClick={closeSearch}>
                <div className={`fixed left-0 w-[100dvw] h-20 xl:block flex items-center bg-[#1E2222] shadow-lg xl:p-4  transition-all duration-300 ${isSearchVisible ? 'top-0' : '-top-20'}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-between items-center xl:px-10 px-5">
                        <CiSearch className="text-white xl:text-3xl text-2xl font-bold" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full p-2 bg-transparent outline-none border-0 pb-4 border-b-[1px] border-b-white focus:outline-none xl:placeholder:text-3xl xl:text-3xl placeholder:text-xl text-xl "
                        />
                        <FaTimes className="text-white xl:text-2xl text-xl cursor-pointer" onClick={closeSearch} />
                    </div>
                </div>
            </div>

            <div className="xl:flex hidden justify-end items-center gap-4 mr-4">
  <p className="hover:underline hover:underline-offset-2 cursor-pointer text-[#9E9FA3] uppercase text-[0.75rem] tracking-[0.15em] font-bold">
  {authUser ?(
        <Link to="/dashboard" className="text-[#9E9FA3]">
          Admin
        </Link>
      ) : null}
    </p>
  
  
</div>


<div className="xl:flex hidden justify-end items-center gap-4 ml-4 mr-4">
    <p className="hover:underline hover:underline-offset-2 cursor-pointer text-[#9E9FA3] uppercase text-[0.75rem] tracking-[0.15em] font-bold">
        <Link 
            to="/contact" // Ensure this matches your routing setup for the contact page
            className="text-[#9E9FA3]"
        >
            Contact
        </Link>
    </p>
</div>

<div className="justify-center items-center ml-4">
  {authUser ? (  //authUser && authUser.role === 'admin' ?  add thiss in plce of authuser for admin only access to dashboard
    <Logout />
  ) : (
    <div className="flex justify-center items-center">
      <a
        className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </a>
      <Login />
    </div>
  )}
</div>

                    </div>
                   

                
        </>
    );
};

export default Navbar;
