// import { motion } from 'framer-motion';

import banner from '../assets/images/banner-1.png'
// import { fadeIn } from '../variants';
import { useEffect } from 'react';
import Aos from 'aos';
import ButtonScroll from './ButtonScroll';
import { useLocation } from 'react-router-dom';
// import Loading from './Loading';
const Home = () => {
    useEffect(() => {
        Aos.init({
            offset: 100, 
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
    <section className="w-full bg-[#D9ECEE] min-h-screen flex overflow-hidden z-10">
      <div>
        <ButtonScroll />
      </div>
        <div className="container mx-auto px-4 xl:px-10 grid grid-cols-1 md:grid-cols-12 md:gap-4 items-center justify-center">
            <div data-aos='fade-right' data-aos-duration='1000' className="md:col-span-5">
                <div className="flex items-end">
                    <hr className="w-2 h-20 md:h-40 mx-auto bg-[#A4CA62] border-0" />
                    <div className="bg-[#415464] w-full px-8 lg:px-10 py-4">
                        <p className="text-[25px] xl:text-[30px] font-[700] text-[#ffffff]">Welcome to</p>
                        <p className="text-[#A4CA62] text-[25px] lg:text-[40px] xl:text-[60px] font-[700] leading-none">EGE Cambodia Energy </p>
                        <p className="text-[#ffffff] text-[40px] xl:text-[60px] font-[700] leading-none">Solutions<span className="text-[#A4CA62]">.</span></p>
                    </div>
                </div>
                <div className="px-8 lg:px-12 py-2 text-[25px] lg:text-[30px] xl:text-[40px] font-[400] leading-none">
                    Innovation meets
                    sustainability.
                </div>
            </div>
            <div data-aos='fade-left' data-aos-duration='1000' className="mix-blend-darken md:col-span-7 flex items-center justify-center">
                <img src={banner} alt="" className="mix-blend-darken object-cover object-center flex items-center justify-center" />
            </div>
        </div>
    </section>
  )
}

export default Home