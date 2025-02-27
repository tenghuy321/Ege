import Home from "./Home";
import { NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import '../components/footer.css';
const Contact = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <section>
      <Home />
      <div className="bg-[#D9ECEE] pt-10 pb-10 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-[30px] md:text-[50px] text-[#415464] font-[700]">Contact Us</h1>
          <div className="grid grid-cols-12 gap-4 py-10">
            <div className="col-span-7 sm:col-span-8 lg:col-span-4 text-[12px] sm:text-[14px]">
              <h2 className="text-[18px] text-[#A4CA62] font-[600]">EGE Cambodia Energy Solutions.</h2>
              <p>Our commitment goes beyond mere products; we actively engage in studying projects, providing expert consultancy, and offering efficient project management solutions.</p>
              <img src={Logo} alt="" className="w-32 pt-10" />
              <h1 className="text-[18px] sm:text-[25px] text-[#415464] font-[700] italic leading-none pt-6">Innovation meets <br /> sustainability. </h1>
            </div>

            <div className="col-span-5 sm:col-span-4 lg:col-span-3">
              <h1 className='text-[#A4CA62] text-[18px] font-[700]'>Infomation</h1>
              <ul className='text-[14px] text-[#415464] flex flex-col space-y-1'>
              <li><NavLink onClick={scrollTop} className={({ isActive }) => `nav_list ${isActive ? 'font-bold' : ''}`} to='/'>Home</NavLink></li>
              <li><NavLink onClick={scrollTop} className={({ isActive }) => `nav_list ${isActive ? 'font-bold' : ''}`} to='/about'>About Us</NavLink></li>
              <li><NavLink onClick={scrollTop} className={({ isActive }) => `nav_list ${isActive ? 'font-bold' : ''}`} to='/products'>Products</NavLink></li>
              <li><NavLink onClick={scrollTop} className={({ isActive }) => `nav_list ${isActive ? 'font-bold' : ''}`} to='/services'>Services</NavLink></li>
              <li><NavLink onClick={scrollTop} className={({ isActive }) => `nav_list ${isActive ? 'font-bold' : ''}`} to='/career'>Career</NavLink></li>
              <li><NavLink onClick={scrollTop} className={({ isActive }) => `nav_list ${isActive ? 'font-bold' : ''}`} to='/events'>Events</NavLink></li>
              <li><NavLink onClick={scrollTop} className={({ isActive }) => `nav_list ${isActive ? 'font-bold' : ''}`} to='/project'>Project</NavLink></li>
              <li><NavLink onClick={scrollTop} className={({ isActive }) => `nav_list ${isActive ? 'font-bold' : ''}`} to='/contact'>Contact Us</NavLink></li>
              </ul>

              <h1 className='text-[#A4CA62] text-[18px] font-[700] pt-10'>Follow Us</h1>
              <div className='flex space-x-2 pt-2'>
                <a href="https://www.facebook.com/share/1By1qNP5MY/?mibextid=wwXIfr" className='transition-all hover:scale-110 duration-200'>
                  <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 15C30 22.4871 24.5145 28.6928 17.3438 29.8178V19.3359H20.8389L21.5039 15H17.3438V12.1863C17.3438 10.9998 17.925 9.84375 19.7883 9.84375H21.6797V6.15234C21.6797 6.15234 19.9629 5.85938 18.3217 5.85938C14.8957 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8178C5.48555 28.6928 0 22.4871 0 15C0 6.71602 6.71602 0 15 0C23.284 0 30 6.71602 30 15Z" fill="#415464" />
                    <path d="M20.8389 19.3359L21.5039 15H17.3438V12.1863C17.3438 11 17.9249 9.84375 19.7882 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.322 5.85938C14.8956 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8177C13.42 29.9375 14.2027 30 15 30C15.7973 30 16.58 29.9375 17.3438 29.8177V19.3359H20.8389Z" fill="white" />
                  </svg>
                </a>

                <a href="https://t.me/JAnRW9JVrnBiZTc9" className='transition-all hover:scale-110 duration-200'>
                  <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z" fill="#415464" />
                  </svg>
                </a>

                <a href="https://www.linkedin.com/company/ege-cambodia-energy-solutions-co-ltd/" className='transition-all hover:scale-110 duration-200'>
                  <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#415464" />
                    <path d="M23.9629 16.2069V22.391H20.3775V16.6213C20.3775 15.1726 19.8599 14.1833 18.5617 14.1833C17.571 14.1833 16.9825 14.8493 16.7226 15.4943C16.6282 15.7248 16.6039 16.0448 16.6039 16.3681V22.3908H13.0182C13.0182 22.3908 13.0663 12.6188 13.0182 11.6072H16.6041V13.1354C16.5969 13.1474 16.5867 13.1592 16.5803 13.1707H16.6041V13.1354C17.0806 12.4022 17.9304 11.354 19.8355 11.354C22.1944 11.354 23.9629 12.8952 23.9629 16.2069ZM9.26723 6.40918C8.04072 6.40918 7.23828 7.21429 7.23828 8.27208C7.23828 9.30741 8.01745 10.1358 9.22017 10.1358H9.24343C10.494 10.1358 11.2716 9.30741 11.2716 8.27208C11.2478 7.21429 10.494 6.40918 9.26723 6.40918ZM7.45139 22.391H11.0357V11.6072H7.45139V22.391Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>

            <div className='col-span-12 lg:col-span-5'>
              <h1 className='text-[#A4CA62] text-[18px] font-[700]'>Keep In Touch</h1>
              <div className='flex flex-col space-y-4 text-[14px] text-[#415464]'>
              <div className='flex items-start space-x-1'>
                <div>
                  <svg className="w-6 h-6 text-[#415464]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                  </svg>
                </div>
                <p className='p-[2px]'>Borey Chip Mong 271, #117, St Commercial, Sangkat Chak Agre Leu,Khan Mean Chey, Phnom Penh, Cambodia</p>
              </div>
              <div className='flex items-start space-x-1'>
                <div>
                  <svg className="w-6 h-6 text-[#415464]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                  </svg>
                </div>
                <a href='mailto:info@egecambodia.com' className='p-[2px]'>info@egecambodia.com</a>
              </div>
              <div className='flex items-start space-x-1'>
                <div>
                  <svg className="w-6 h-6 text-[#415464]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                  </svg>
                </div>
                <a href='#' className='p-[2px]'>(+855) 078 256 088</a>
              </div>
              </div>

              <div className="map-container mt-4">
                <iframe
                  className="w-full h-[200px] sm:h-[300px] rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7818.900079128005!2d104.92195769050927!3d11.519539767470624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951402fed35c3%3A0x1b5a375e4fd977db!2sBorey%20Chip%20Mong%20271!5e0!3m2!1sen!2skh!4v1736416425077!5m2!1sen!2skh"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#415464] text-[#A4CA62] text-center py-2 text-[15px]'>
        <h1>EGE (Cambodia) Energy Solutions Co., Ltd <br />
          All Right Reserved 2024</h1>
      </div>
    </section>
  )
}

export default Contact