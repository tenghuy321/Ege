import Home from "./Home";
import Footer from "./Footer"
import about_bg4 from '../assets/images/about/about-bg-4.png';

import service1 from '../assets/images/services/service-1.png';
import service2 from '../assets/images/services/service-2.png';
import service3 from '../assets/images/services/service-3.png';
import { useState } from "react";

const Services = () => {
  const [visibleSections, setVisibleSections] = useState({});

  const toggleVisibility = (id) => {
    setVisibleSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <section className="overflow-hidden">
      <Home />
      <div className="max-w-7xl mx-auto px-4">
        <hr className="h-4 bg-[#A4CA62] border-none" />
        <div className="px-0 py-4 md:p-5">
          <h1 data-aos='fade-right' data-aos-duration='1000' className="text-[30px] md:text-[40px] lg:text-[50px] text-[#415464] font-[700]">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div data-aos='fade-right' data-aos-duration='1200'>
              <img src={service1} alt="Service 1" />
              <div className="flex flex-col md:flex-row items-start bg-[#415464] py-2 px-6 leading-none">
                <h1 className="text-[80px] lg:text-[100px] font-[700] text-[#ffffff] p-0 m-0 leading-none tracking-tight">01</h1>
                <div className="flex flex-col items-start p-0 md:p-4 text-[#ffffff] text-[12px]" id="text-content">
                  <h1 className="text-[16px] md:text-[20px] lg:text-[25px] font-[700] leading-none h-auto md:h-[50px] lg:h-[30px]">Feasibility Studies & Site Survey</h1>
                  <p className="pt-2 h-auto md:h-[70px] font-[300] leading-4">
                    We begin every project with a thorough feasibility study and site survey to ensure optimal results.
                    Our team evaluates the technical, environmental, and financial aspects of implementing solar solutions.
                  </p>

                  {visibleSections[1] && (
                    <div className="pt-2">
                      <p>Additional content for Service 1...</p>
                    </div>
                  )}

                  <button
                    className="mt-4 px-4 py-2 bg-[#ffffff] text-[#415464] font-[700] rounded-[10px]"
                    onClick={() => toggleVisibility(1)}
                  >
                    {visibleSections[1] ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
            <div data-aos='fade-left' data-aos-duration='1200'>
              <img src={service2} alt="Service 1" />
              <div className="flex flex-col md:flex-row items-start bg-[#415464] py-2 px-6 leading-none">
                <h1 className="text-[80px] lg:text-[100px] font-[700] text-[#ffffff] p-0 m-0 leading-none tracking-tight">02</h1>
                <div className="flex flex-col items-start p-0 md:p-4 text-[#ffffff] text-[12px]" id="text-content">
                  <h1 className="text-[16px] md:text-[20px] lg:text-[25px] font-[700] leading-none h-auto md:h-[50px] lg:h-[30px]">Project Management</h1>
                  <p className="pt-2 h-auto md:h-[70px] font-[300] leading-4">
                    Effective project management is at the core of  our operations. From planning to execution, our  experienced project managers oversee every  phase of your solar project.
                  </p>

                  {visibleSections[2] && (
                    <div className="pt-2">
                      <p>Additional content for Service 2...</p>
                    </div>
                  )}

                  <button
                    className="mt-4 px-4 py-2 bg-[#ffffff] text-[#415464] font-[700] rounded-[10px]"
                    onClick={() => toggleVisibility(2)}
                  >
                    {visibleSections[2] ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-2" data-aos='fade-right' data-aos-duration='1200'>
              <img src={service3} alt="Service 1" />
              <div className="flex flex-col md:flex-row items-start bg-[#415464] py-2 px-6">
                <h1 className="text-[80px] lg:text-[100px] font-[700] text-[#ffffff] p-0 m-0 leading-none tracking-tight">03</h1>
                <div className="flex flex-col items-start p-0 md:p-4 text-[#ffffff] text-[12px]" id="text-content">
                  <h1 className="text-[16px] md:text-[20px] lg:text-[25px] font-[700] leading-none h-auto md:h-[50px] lg:h-[30px]">Installation and Maintenance</h1>
                  <p className="pt-2 h-auto md:h-[70px] font-[300] leading-4">
                    Our installation services are designed to provide hassle-free and precise implementation of
                    solar energy systems. Using state-of-the-art equipment and industry best practices, our skilled
                    technicians ensure that your solar panels, solar inverters, solar rooftop, solar balcony, solar streetlight, solar carport and other components are installed
                    efficiently and securely. Beyond installation, we offer reliable maintenance services to ensure
                    your system performs optimally over its lifespan, minimizing downtime and maximizing energy
                    output.
                  </p>

                  {visibleSections[3] && (
                    <div className="pt-2">
                      <p>Additional content for Service 3...</p>
                    </div>
                  )}

                  <button
                    className="mt-4 px-4 py-2 bg-[#ffffff] text-[#415464] font-[700] rounded-[10px]"
                    onClick={() => toggleVisibility(3)}
                  >
                    {visibleSections[3] ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className='w-full h-full relative mt-4'>
        <img src={about_bg4} alt="" className='w-full h-full' />
        <div className='absolute inset-0 w-full h-full bg-[#000000]/70 bg-blend-multiply'></div>
        <div data-aos='fade-up' data-aos-duration='1200' className='absolute inset-0 w-full h-full flex items-center text-center justify-center text-[30px] sm:text-[50px] md:text-[60px] lg:text-[100px] leading-none text-[#ffffff] font-[700] italic'>
          Innovation meets <br />
          sustainability.
        </div>
      </div>


      <Footer />
    </section>
  )
}

export default Services