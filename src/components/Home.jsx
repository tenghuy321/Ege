// import { motion } from 'framer-motion';

import banner from '../assets/images/banner-1.png'
// import { fadeIn } from '../variants';
import { useEffect } from 'react';
import Aos from 'aos';
import ButtonScroll from './ButtonScroll';
import { Link, useLocation } from 'react-router-dom';
// import Loading from './Loading';
const Home = () => {
  useEffect(() => {
    Aos.init({
      offset: 10,
      easing: 'ease-in-out',
      once: false,
    });
    // Aos.refresh();
  })

  // submenu change to page only (hash) get href
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);
  return (
    <section className="w-full bg-[#D9ECEE] min-h-screen 2xl:h-[86.9vh] flex z-1 relative">
        <div>
          <ButtonScroll />
        </div>
        <div className="container mx-auto px-4 xl:px-10 grid grid-cols-1 md:grid-cols-12 md:gap-4 items-center justify-center">
          <div className="md:col-span-5">
            <div className="flex items-end overflow-hidden">
              <hr data-aos='fade-left' data-aos-duration='1000' className="w-2 h-20 md:h-40 mx-auto bg-[#A4CA62] border-0" />
              <div className="bg-[#415464] w-full px-8 lg:px-10 py-4" data-aos='fade-left' data-aos-duration='1500'>
                <div data-aos='fade-left' data-aos-duration='2000'>
                  <p className="text-[25px] xl:text-[30px] font-[700] text-[#ffffff]">Welcome to</p>
                  <p className="text-[#ffffff] text-[25px] lg:text-[40px] xl:text-[60px] font-[700] leading-none">EGE Cambodia Energy </p>
                  <p className="text-[#ffffff] text-[40px] xl:text-[60px] font-[700] leading-none">Solutions.</p>
                </div>
              </div>
            </div>
            <div data-aos='fade-left' data-aos-duration='2000' className="px-8 lg:px-12 py-2 text-[#415464] text-[25px] lg:text-[30px] xl:text-[40px] font-[400] leading-none">
              Innovation meets
              sustainability.
            </div>
          </div>
          <div data-aos='fade-left' data-aos-duration='1500' className="mix-blend-darken md:col-span-7 flex items-center justify-center">
            <img src={banner} alt="" className="mix-blend-darken w-full h-auto 2xl:h-[650px] object-contain object-center flex items-center justify-center" />
          </div>
        </div>

        <div className="hidden lg:block absolute top-3 right-2 xl:right-28 px-3">
          <div className="flex items-center">
            <Link href="#" className="px-4 hover:text-[#A4CA62]">Schedule a Consultation</Link>
            <hr className="h-[25px] w-[3px] bg-[#415464]" />
            <Link to="/getquote" className="px-4 hover:text-[#A4CA62]">Get Quote</Link>
          </div>
        </div>
    </section>
  )
}

export default Home