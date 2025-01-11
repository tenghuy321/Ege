import { NavLink } from "react-router-dom"
import Logo from "./logo"

const Navbar = () => {
  return (
    <nav className="w-full bg-[#D9ECEE] hidden lg:flex">
        <div className="max-w-7xl mx-auto flex items-center space-x-1 py-2">
             <Logo/>
            <ul className="flex items-center bg-[#ffffff] space-x-1 px-5 xl:px-10 py-3">
                <li>
                    <NavLink to='/' className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Home</NavLink>
                </li>
                <li className="relative group">
                    <NavLink to='/about' className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>About Us</NavLink>
                    <ul className="absolute left-1/2 transform -translate-x-1/2 hidden mt-3 py-2 space-y-2 w-44 bg-[#415464] shadow-lg group-hover:block z-50">
                        <li className="hover:bg-[#2E4354]"><a href="/about#vision" className="block px-2 text-[14px] text-[#ffffff]">Vision</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/about#mission" className="block px-2 text-[14px] text-[#ffffff]">Mission</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/about#core_values" className="block px-2 text-[14px] text-[#ffffff]">Core Values</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/about#history" className="block px-2 text-[14px] text-[#ffffff]">Our History</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/about#management_team" className="block px-2 text-[14px] text-[#ffffff]">Management Team</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/about#registration_docs" className="block px-2 text-[14px] text-[#ffffff]">Registration Docs</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/about#certificate" className="block px-2 text-[14px] text-[#ffffff]">Certificate of Auth</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <NavLink to='/products'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Products</NavLink>
                    <ul className="absolute left-1/2 transform -translate-x-1/2 hidden mt-3 py-2 space-y-2 w-44 bg-[#415464] shadow-lg group-hover:block z-50">
                        <li className="hover:bg-[#2E4354]"><a href="/products#product" className="block px-2 text-[14px] text-[#ffffff]">Products</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/products#reason" className="block px-2 text-[14px] text-[#ffffff]">6 Reason to choose us</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <NavLink to='/services'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Services</NavLink>
                    <ul className="absolute left-1/2 transform -translate-x-1/2 hidden mt-3 w-44 py-2 space-y-2 bg-[#415464] shadow-lg group-hover:block z-50">
                        <li className="hover:bg-[#2E4354]"><a href="/services#consultant" className="block px-2 text-[14px] text-[#ffffff]">Consultant</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/services#feasibility" className="block px-2 text-[14px] text-[#ffffff]">Feasibility Studies</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/services#installation" className="block  px-2 text-[14px] text-[#ffffff]">Installation</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/services#site_survey" className="block px-2 text-[14px] text-[#ffffff]">Site Survey</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/services#project_management" className="block px-2 text-[14px] text-[#ffffff]">Project Management</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/services#maintenance" className="block px-2 text-[14px] text-[#ffffff]">Maintenance</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/services#pump" className="block px-2 text-[14px] text-[#ffffff]">Pump / Irrigation</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/services#solar_agriculture" className="block  px-2 text-[14px] text-[#ffffff]">Solar Agriculture</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/services#solar_home" className="block px-2 text-[14px] text-[#ffffff]">Solar Home</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/services#solar_farm" className="block px-2 text-[14px] text-[#ffffff]">Solar Farm & Rooftop</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <NavLink to='/career'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Career</NavLink>
                    <ul className="absolute left-1/2 transform -translate-x-1/2 hidden mt-3 py-2 space-y-2 w-44 bg-[#415464] shadow-lg group-hover:block z-50">
                        <li className="hover:bg-[#2E4354]"><a href="/career#careers" className="block px-2 text-[14px] text-[#ffffff]">Careers</a></li>
                    </ul>
                </li>
                <li>
                    <NavLink to='/events'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Events</NavLink>
                </li>
                <li className="relative group">
                    <NavLink to='/project'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Project</NavLink>
                    <ul className="absolute left-1/2 transform -translate-x-1/2 hidden mt-3 py-2 space-y-2 w-44 bg-[#415464] shadow-lg group-hover:block z-50">
                        <li className="hover:bg-[#2E4354]"><a href="/project#activities" className="block px-2 text-[14px] text-[#ffffff]">Activities</a></li>
                        <li className="hover:bg-[#2E4354]"><a href="/project#project" className="block px-2 text-[14px] text-[#ffffff]">Project Credentials</a></li>
                    </ul>
                </li>
                <li>
                    <NavLink to='/contact'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Contact Us</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar