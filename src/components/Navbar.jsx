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
                        <li className="hover:bg-[#2E4354]"><NavLink to="/about#vision" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Vision</NavLink></li>
                        <li className="hover:bg-[#2E4354]"><NavLink to="/about#mission" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Mission</NavLink></li>
                        <li className="hover:bg-[#2E4354]"><NavLink to="/about#core_values" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Core Values</NavLink></li>
                        <li className="hover:bg-[#2E4354]"><NavLink to="/about#history" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Our History</NavLink></li>
                        <li className="hover:bg-[#2E4354]"><NavLink to="/about#management_team" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Management Team</NavLink></li>
                        <li className="hover:bg-[#2E4354]"><NavLink to="/about#registration_docs" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Registration Docs</NavLink></li>
                        <li className="hover:bg-[#2E4354]"><NavLink to="/about#certificate" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Certificate of Auth</NavLink></li>
                    </ul>
                </li>
                <li className="relative group">
                    <NavLink to='/products'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Products</NavLink>
                    <ul className="absolute left-1/2 transform -translate-x-1/2 hidden mt-3 py-2 space-y-2 w-44 bg-[#415464] shadow-lg group-hover:block z-50">
                        <li className="hover:bg-[#2E4354]"><NavLink to="/products#product" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Products</NavLink></li>
                        <li className="hover:bg-[#2E4354]"><NavLink to="/products#reason" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>6 Reason to choose us</NavLink></li>
                    </ul>
                </li>
                <li className="relative group">
                    <NavLink to='/services'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Services</NavLink>
                    <ul className="absolute left-1/2 transform -translate-x-1/2 hidden mt-3 w-44 py-2 space-y-2 bg-[#415464] shadow-lg group-hover:block z-50">
                        <li className="hover:bg-[#2E4354]"><NavLink to="/services#feasibility" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Feasibility Studies & Site Survey</NavLink></li>
                        <li className="hover:bg-[#2E4354]"><NavLink to="/services#project_management" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Project Management</NavLink></li>
                        <li className="hover:bg-[#2E4354]"><NavLink to="/services#installation" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Installation & Maintenance</NavLink></li>
                    </ul>
                </li>
                <li className="relative group">
                    <NavLink to='/career'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Careers</NavLink>
                    <ul className="absolute left-1/2 transform -translate-x-1/2 hidden mt-3 py-2 space-y-2 w-44 bg-[#415464] shadow-lg group-hover:block z-50">
                        <li className="hover:bg-[#2E4354]"><NavLink to="/career#careers" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Careers</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to='/events'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Events</NavLink>
                </li>
                <li className="relative group">
                    <NavLink to='/project'  className={({isActive}) => `px-5 xl:px-7 py-4 xl:py-4 text-[16px] xl:text-[20px] text-[#415464] nav_link ${isActive ? 'active font-[600]' : ''}`}>Projects</NavLink>
                    <ul className="absolute left-1/2 transform -translate-x-1/2 hidden mt-3 py-2 space-y-2 w-44 bg-[#415464] shadow-lg group-hover:block z-50">
                        <li className="hover:bg-[#2E4354]"><NavLink to="/project#project" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Project Credentials</NavLink></li>
                        <li className="hover:bg-[#2E4354]"><NavLink to="/project#activities" className={({isActive}) => `block px-2 text-[14px] text-[#ffffff] ${isActive ? 'text-[#ffffff]' : ''}`}>Activities</NavLink></li>
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