import { useState } from "react";
import { Button, Drawer } from "flowbite-react";
import Logo from "./logo"
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from '../assets/images/logo.png';
const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
    const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false); // Close the drawer when the route changes
    }, [location]);
    return (
        <header>
            <div className="relative px-[1rem] w-full h-[74px] items-center gap-[1rem] flex justify-between bg-[#D9ECEE] z-10 lg:hidden">
                <Logo />
                {/* <div className="flex items-center">
                    <nav
                            className={`fixed top-0 left-0 h-full w-full bg-[#415464] text-white z-[-1] transform ${
                                isOpen ? "translate-y-0 top-20" : "-translate-y-full"
                            } transition-transform duration-300 lg:hidden`}
                        >
                        <div className="h-full">
                            <div className="p-5"> 
                                <Logo/>
                            </div>
                            <hr />
                            <ul className="flex flex-col items-start justify-start space-y-5 pt-6 p-5">
                                <li>
                                    <NavLink
                                        to="/"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#A4CA62] font-bold bg-[#000000]/50" : "text-white"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#A4CA62] font-bold" : "text-white"
                                        }
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/products"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#A4CA62] font-bold" : "text-white"
                                        }
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/services"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#A4CA62] font-bold" : "text-white"
                                        }
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/career"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#A4CA62] font-bold" : "text-white"
                                        }
                                    >
                                        Career
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/events"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#A4CA62] font-bold" : "text-white"
                                        }
                                    >
                                        Events
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/project"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#A4CA62] font-bold" : "text-white"
                                        }
                                    >
                                        Project
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            isActive ? "text-blue-500 font-bold" : "text-white"
                                        }
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <button
                        className="relative z-50 lg:hidden"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div> */}

                <div className="flex min-h-[50vh] items-center justify-center">
                    <Button onClick={() => setIsOpen(true)} className="group relative flex items-stretch justify-center p-0.5 text-center font-medium bg-transparent transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 border border-transparent text-white focus:ring-0 focus:bg-transparent enabled:hover:bg-transparent rounded-lg focus:outline-none">
                        <svg width="20" height="20" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60.9741 138.583H96.3593C119.641 138.583 138.583 119.641 138.583 96.3593V60.9741C138.583 37.6923 119.641 18.75 96.3593 18.75H60.9741C37.6923 18.75 18.75 37.6923 18.75 60.9741V96.3593C18.75 119.641 37.6923 138.583 60.9741 138.583ZM37.5 60.9741C37.5 48.0286 48.0286 37.5 60.9741 37.5H96.3593C109.305 37.5 119.833 48.0286 119.833 60.9741V96.3593C119.833 109.305 109.305 119.833 96.3593 119.833H60.9741C48.0286 119.833 37.5 109.305 37.5 96.3593V60.9741Z" fill="#A3C962" />
                            <path d="M239.026 18.75H203.641C180.359 18.75 161.417 37.6923 161.417 60.9741V96.3593C161.417 119.641 180.359 138.583 203.641 138.583H239.026C262.308 138.583 281.25 119.641 281.25 96.3593V60.9741C281.25 37.6923 262.308 18.75 239.026 18.75ZM262.5 96.3593C262.5 109.305 251.972 119.833 239.026 119.833H203.641C190.696 119.833 180.167 109.305 180.167 96.3593V60.9741C180.167 48.0286 190.696 37.5 203.641 37.5H239.026C251.972 37.5 262.5 48.0286 262.5 60.9741V96.3593Z" fill="#A3C962" />
                            <path d="M60.9741 281.25H96.3593C119.641 281.25 138.583 262.308 138.583 239.026V203.641C138.583 180.359 119.641 161.417 96.3593 161.417H60.9741C37.6923 161.417 18.75 180.359 18.75 203.641V239.026C18.75 262.308 37.6923 281.25 60.9741 281.25ZM37.5 203.641C37.5 190.696 48.0286 180.167 60.9741 180.167H96.3593C109.305 180.167 119.833 190.696 119.833 203.641V239.026C119.833 251.972 109.305 262.5 96.3593 262.5H60.9741C48.0286 262.5 37.5 251.972 37.5 239.026V203.641Z" fill="#A3C962" />
                            <path d="M221.338 161.417C188.297 161.417 161.417 188.297 161.417 221.338C161.417 254.37 188.297 281.25 221.338 281.25C254.37 281.25 281.25 254.37 281.25 221.338C281.25 188.297 254.37 161.417 221.338 161.417ZM221.338 262.5C198.633 262.5 180.167 244.034 180.167 221.338C180.167 198.633 198.633 180.167 221.338 180.167C244.034 180.167 262.5 198.633 262.5 221.338C262.5 244.034 244.034 262.5 221.338 262.5Z" fill="#A3C962" />
                        </svg>
                    </Button>
                </div>
                <Drawer open={isOpen} onClose={() => setIsOpen(false)} position="left" className="p-0 transform transition-all duration-500 ease-in-out">
                    <div className="flex justify-between items-center p-4">
                        <img src={logo} alt="" className="w-20" />
                        <button onClick={() => setIsOpen(false)} className="text-[#A3C962] focus:outline-none">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <hr className="h-1 bg-[#A3C962]" />
                    <Drawer.Items className="p-4">
                        <ul className="flex flex-col items-start justify-start space-y-5 pt-6 p-5">
                            <li className="w-full">
                                <NavLink to="/" onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => isActive ? "text-[#415464] font-bold w-full block" : "text-[#415464]"}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center justify-between w-full">
                                    <NavLink to="/about" onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => isActive ? "text-[#415464] font-bold w-full block" : "text-[#415464]"}>
                                        About
                                    </NavLink>
                                    <button onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                                        className={`transition-transform duration-500`}
                                        style={{ transform: isAboutDropdownOpen ? 'rotate(225deg)' : 'rotate(0deg)' }}>

                                        <svg className="w-4 h-4 text-[#415464]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-7 7V5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden 
                                    ${isAboutDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="ml-4 mt-2">
                                        <ul>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/about#vision" className="mt-1 text-[14px] text-[#415464]">Vision</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/about#mission" className="mt-1 text-[14px] text-[#415464]">Mission</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/about#core_values" className="mt-1 text-[14px] text-[#415464]">Core Values</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/about#history" className="mt-1 text-[14px] text-[#415464]">Our History</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/about#management_team" className="mt-1 text-[14px] text-[#415464]">Management Team</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/about#registration_docs" className="mt-1 text-[14px] text-[#415464]">Registration Docs</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/about#certificate" className="mt-1 text-[14px] text-[#415464]">Certificate of Auth</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="w-full">
                                <div className="flex items-center justify-between w-full">
                                    <NavLink to="/products" onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => isActive ? "text-[#415464] font-bold" : "text-[#415464]"}>
                                        Products
                                    </NavLink>
                                    <button onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                                        className={`transition-transform duration-500`}
                                        style={{ transform: isProductsDropdownOpen ? 'rotate(225deg)' : 'rotate(0deg)' }}>

                                        <svg className="w-4 h-4 text-[#415464]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-7 7V5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden 
                                    ${isProductsDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="ml-4 mt-2">
                                        <ul>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/products#product" className="text-[14px] text-[#415464]">Products</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/products#reason" className="text-[14px] text-[#415464]">6 Reason to choose us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="w-full">
                                <div className="flex items-center justify-between w-full">
                                    <NavLink to="/services" onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => isActive ? "text-[#415464] font-bold" : "text-[#415464]"}>
                                        Services
                                    </NavLink>
                                    <button onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                        className={`transition-transform duration-500`}
                                        style={{ transform: isServicesDropdownOpen ? 'rotate(225deg)' : 'rotate(0deg)' }}>

                                        <svg className="w-4 h-4 text-[#415464]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-7 7V5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden 
                                    ${isServicesDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="ml-4 mt-2">
                                        <ul>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="#" className="mt-1 text-[14px] text-[#415464]">Consultant</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="#" className="mt-1 text-[14px] text-[#415464]">Feasibility Studies</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="#" className="mt-1 text-[14px] text-[#415464]">Installation</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="#" className="mt-1 text-[14px] text-[#415464]">Site Survey</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="#" className="mt-1 text-[14px] text-[#415464]">Project Management</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="#" className="mt-1 text-[14px] text-[#415464]">Maintenance</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="#" className="mt-1 text-[14px] text-[#415464]">Pump / Irrigation</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="#" className="mt-1 text-[14px] text-[#415464]">Solar Agriculture</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="#" className="mt-1 text-[14px] text-[#415464]">Solar Home</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="#" className="mt-1 text-[14px] text-[#415464]">Solar Farm & Rooftop</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="w-full">
                                <div className="flex items-center justify-between w-full">
                                    <NavLink to="/career" onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => isActive ? "text-[#415464] font-bold" : "text-[#415464]"}>
                                        Career
                                    </NavLink>
                                    <button onClick={() => setIsCareerDropdownOpen(!isCareerDropdownOpen)}
                                        className={`transition-transform duration-500`}
                                        style={{ transform: isCareerDropdownOpen ? 'rotate(225deg)' : 'rotate(0deg)' }}>

                                        <svg className="w-4 h-4 text-[#415464]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-7 7V5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden 
                                    ${isCareerDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="ml-4 mt-2">
                                        <ul>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/career#careers" className="text-[14px] text-[#415464]">Careers</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="w-full">
                                <NavLink to="/events" onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => isActive ? "text-[#415464] font-bold w-full block" : "text-[#415464]"}>
                                    Events
                                </NavLink>
                            </li>

                            <li className="w-full">
                                <div className="flex items-center justify-between w-full">
                                    <NavLink to="/project" onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => isActive ? "text-[#415464] font-bold" : "text-[#415464]"}>
                                        Project
                                    </NavLink>
                                    <button onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}
                                        className={`transition-transform duration-500`}
                                        style={{ transform: isProjectDropdownOpen ? 'rotate(225deg)' : 'rotate(0deg)' }}>

                                        <svg className="w-4 h-4 text-[#415464]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-7 7V5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden 
                                    ${isProjectDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="ml-4 mt-2">
                                        <ul>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/project#activities" className="text-[14px] text-[#415464]">Activities</NavLink></li>
                                            <li><NavLink onClick={() => setIsOpen(false)} to="/project#project" className="text-[14px] text-[#415464]">Project Credentials</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="w-full">
                                <NavLink to="/contact" onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => isActive ? "text-[#415464] font-bold w-full block" : "text-[#415464]"}>
                                    Contact Us
                                </NavLink>
                            </li>


                        </ul>
                    </Drawer.Items>
                </Drawer>


            </div>

            <section className="w-full bg-[#D9ECEE] hidden lg:block">
                <div className="max-w-7xl mx-auto px-7 flex space-x-4 items-end justify-end py-1">
                    <div className="text-[12px] flex items-center space-x-2">
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.46491 8.90287C5.51442 9.03688 5.49975 9.18888 5.42595 9.30839C5.3517 9.42839 5.2284 9.4999 5.09594 9.4999H4.11919H3.14197C3.00951 9.4999 2.88621 9.42789 2.81196 9.30839C2.73817 9.18888 2.7235 9.03688 2.773 8.90287C2.94122 8.44885 3.26481 8.01233 3.73509 7.60682L3.87259 7.48831C4.01743 7.36331 4.22323 7.36381 4.36761 7.48931L4.50237 7.60682C4.9731 8.01483 5.29716 8.45085 5.46491 8.90287ZM7.7246 10.0119C7.41246 9.77641 6.98436 9.86041 6.76801 10.2019C6.6493 10.3889 6.45496 10.4999 6.24778 10.4999H2.00205C1.81825 10.4999 1.64362 10.4119 1.52261 10.2594C1.45523 10.1734 1.34614 9.99092 1.38144 9.73541C1.5359 8.61336 2.18172 7.55482 3.30102 6.58827C3.46557 6.44577 3.56183 6.22926 3.56183 6.00025C3.56183 5.77124 3.46557 5.55423 3.30102 5.41223C2.18172 4.44569 1.53544 3.38664 1.38144 2.2646C1.34614 2.00908 1.45477 1.82708 1.52261 1.74107C1.64362 1.58807 1.81825 1.50056 2.00205 1.50056H6.24824C6.43158 1.50056 6.60622 1.58757 6.72676 1.74007C6.97427 2.05309 7.40788 2.08859 7.69618 1.81808C7.98403 1.54757 8.01566 1.07405 7.76769 0.760032C7.38588 0.277012 6.83173 6.7333e-07 6.24824 6.7333e-07H2.00205C1.41765 -0.000499348 0.863038 0.277512 0.48077 0.761532C0.104003 1.23905 -0.0637544 1.86808 0.0219579 2.4871C0.197049 3.75816 0.802993 4.93671 1.82604 5.99975C0.802993 7.06279 0.197049 8.24134 0.0219579 9.5124C-0.0637544 10.1314 0.104003 10.7604 0.48077 11.238C0.863038 11.7225 1.41765 12 2.00205 12H6.24824C6.9069 12 7.52384 11.647 7.89923 11.0555C8.11558 10.7149 8.0372 10.2474 7.7246 10.0119ZM11 5.99975C11 7.65682 9.76886 8.99988 8.24988 8.99988C6.73089 8.99988 5.49975 7.65682 5.49975 5.99975C5.49975 4.34268 6.73089 2.99963 8.24988 2.99963C9.76886 2.99963 11 4.34268 11 5.99975ZM9.39576 6.54277L8.70823 5.79274V4.49969C8.70823 4.22368 8.50289 3.99967 8.24988 3.99967C7.99686 3.99967 7.79152 4.22368 7.79152 4.49969V5.79274C7.79152 6.05775 7.88823 6.31226 8.06012 6.49977L8.74765 7.2498C8.92686 7.44481 9.217 7.44481 9.39576 7.2498C9.57498 7.05429 9.57498 6.73778 9.39576 6.54277Z" fill="#A4CA62" />
                        </svg>
                        <p>Monday - Friday 8am - 5pm</p>
                    </div>
                    <div className="text-[12px] flex items-center space-x-2">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0208 0H2.97917C2.18931 0.000866274 1.43204 0.317215 0.873528 0.879636C0.315012 1.44206 0.000860259 2.20462 0 3L0 9C0.000860259 9.79538 0.315012 10.5579 0.873528 11.1204C1.43204 11.6828 2.18931 11.9991 2.97917 12H10.0208C10.8107 11.9991 11.568 11.6828 12.1265 11.1204C12.685 10.5579 12.9991 9.79538 13 9V3C12.9991 2.20462 12.685 1.44206 12.1265 0.879636C11.568 0.317215 10.8107 0.000866274 10.0208 0ZM10.0208 1.63636C10.3493 1.63746 10.666 1.75994 10.9108 1.98055L7.38996 5.526C7.15082 5.756 6.83285 5.88434 6.50217 5.88434C6.17148 5.88434 5.85351 5.756 5.61438 5.526L2.09354 1.98055C2.33721 1.76093 2.65216 1.63853 2.97917 1.63636H10.0208ZM10.0208 10.3636H2.97917C2.62002 10.3636 2.27558 10.22 2.02163 9.96424C1.76767 9.70851 1.625 9.36166 1.625 9V3.82745L4.46279 6.68509C4.73025 6.95453 5.04779 7.16827 5.3973 7.3141C5.7468 7.45992 6.12141 7.53498 6.49973 7.53498C6.87805 7.53498 7.25266 7.45992 7.60216 7.3141C7.95167 7.16827 8.26921 6.95453 8.53667 6.68509L11.375 3.82745V9C11.375 9.36166 11.2323 9.70851 10.9784 9.96424C10.7244 10.22 10.38 10.3636 10.0208 10.3636Z" fill="#A4CA62" />
                        </svg>
                        <p>info@egecambodia.com</p>
                    </div>
                    <div className="text-[12px] flex items-center space-x-2">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0029 1.04325L11.4123 0.52881C10.6699 -0.185996 9.48312 -0.18058 8.72989 0.572132L7.60817 1.78513C7.25052 2.14254 7.05002 2.61907 7.05002 3.1281C7.05002 3.63713 7.2451 4.10825 7.60275 4.46566L7.81951 4.68226C7.13131 6.13353 6.10171 7.16242 4.69821 7.81224L4.47603 7.59564C4.11838 7.23823 3.64152 7.04329 3.13756 7.04329C2.6336 7.04329 2.15673 7.23823 1.81534 7.57939L0.558149 8.74366C0.2005 9.10106 0 9.5776 0 10.0866C0 10.5957 0.189662 11.0505 0.531055 11.4025C0.531055 11.4025 1.03501 11.9819 1.04585 11.9928C1.69612 12.6426 2.57399 13 3.51688 13C7.59191 13 13 7.59564 13 3.52341C13 2.58117 12.6424 1.70391 11.9921 1.05408L12.0029 1.04325ZM3.52772 11.3646C3.02918 11.3646 2.56315 11.1805 2.22176 10.8502C2.22176 10.8502 1.72322 10.2762 1.70696 10.2653C1.63652 10.1949 1.62568 10.1137 1.62568 10.0758C1.62568 10.0379 1.63652 9.95125 1.68529 9.90792L2.94248 8.74366C3.01292 8.67326 3.09421 8.66243 3.13214 8.66243C3.17007 8.66243 3.25677 8.67326 3.3218 8.74366L3.93414 9.35016C4.16173 9.57218 4.49771 9.64258 4.79575 9.52886C7.01751 8.68409 8.61067 7.09202 9.52647 4.80681C9.64569 4.50898 9.58066 4.1624 9.35306 3.93497L8.74614 3.31763C8.6757 3.24724 8.66486 3.16601 8.66486 3.1281C8.66486 3.0902 8.6757 3.00355 8.76782 2.91691L9.88954 1.70391C9.99792 1.60102 10.1659 1.60102 10.2743 1.70391C10.2851 1.71474 10.8595 2.21835 10.8595 2.21835C11.1901 2.55951 11.3743 3.0198 11.3743 3.52341C11.3743 6.98914 6.50271 11.3754 3.51688 11.3754L3.52772 11.3646Z" fill="#A4CA62" />
                        </svg>
                        <p>015 88 26 88 / 085 882 688</p>
                    </div>
                </div>
            </section>
        </header>

    )
}

export default Header