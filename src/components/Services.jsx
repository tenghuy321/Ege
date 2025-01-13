import Home from "./Home";
import Footer from "./Footer"
import Banner from "../components/Banner";


import service1 from '../assets/images/services/service-1.png';
import service2 from '../assets/images/services/service-2.png';
import service3 from '../assets/images/services/service-3.png';
import { useState } from "react";

const Services = () => {
  const [visibleSections, setVisibleSections] = useState("");

  const toggleVisibility = (id) => {
    setVisibleSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const cardsData = [
    {
      image: service1,
      number: '01',
      header: 'Feasibility Studies & Site Survey',
      description: 'We begin every project with a thorough feasibility study and site survey to ensure optimal results. Our team evaluates the technical, environmental, and financial aspects of implementing solar solutions. By analyzing factors such as sunlight availability, site conditions, and energy requirements, we design a customized plan to maximize ensures that your solar investment is practical, sustainable, and impactful.',
      colSpan: 1,
      link: 'feasibility'
    },
    {
      image: service2,
      number: '02',
      header: 'Project Management',
      description: 'Effective project management is at the core of our operations. From planning to execution, our experienced project managers oversee every phase of your solar project. We coordinate with all stakeholders, manage timelines, and ensure compliance with industry standards and regulations. Our goal is to deliver a seamless process, on time and within budget, while maintaining the highest levels of quality and professionalism.',
      colSpan: 1,
      link: 'project_management'
    },
    {
      image: service3,
      number: '03',
      header: 'Installation and Maintenance',
      description: 'Our installation services are designed to provide hassle-free and precise implementation of solar energy systems. Using state-of-the-art equipment and industry best practices, our skilled technicians ensure that your solar panels, inverters, and other components are installed efficiently and securely. Beyond installation, we offer reliable maintenance services to ensure your system performs optimally over its lifespan, minimizing downtime and maximizing energy output.',
      colSpan: 2,
      link: 'installation'
    },
  ]
  return (
    <section className="overflow-hidden">
      <Home />
      <div className="max-w-7xl mx-auto px-4">
        <hr className="h-4 bg-[#A4CA62] border-none" />
        <div className="px-0 py-4 md:p-5">
          <h1 data-aos='fade-right' data-aos-duration='1000' className="text-[30px] md:text-[40px] lg:text-[50px] text-[#415464] font-[700]">Our Services</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {cardsData.map((data, id) => (
              <div id={data.link} key={data.id} className={`${data.colSpan === 2 ? "col-span-1 lg:col-span-2" : "col-span-1"}`} data-aos='fade-right' data-aos-duration='1200'>
                <img src={data.image} alt="Service 1" className="w-full h-[200px] lg:h-auto object-cover" />
                <div className="flex flex-col md:flex-row items-start bg-[#415464] py-2 px-6 leading-none">
                  <h1 className="text-[80px] lg:text-[100px] font-[700] text-[#ffffff] p-0 m-0 leading-none tracking-tight">{data.number}</h1>
                  <div className="flex flex-col items-start p-0 md:p-4 text-[#ffffff] text-[12px]" id="text-content">
                    <h1 className="text-[16px] md:text-[20px] lg:text-[25px] font-[700] leading-none h-auto md:h-[50px] lg:h-[30px]">{data.header}</h1>
                    <p
                      className={`text-white text-[12px] md:text-[14px] font-[300] leading-5 ${visibleSections[id] ? "" : "line-clamp-2"
                        } transition-all duration-300`}
                    >
                      {data.description}
                    </p>

                    <button
                      className="mt-4 px-4 py-2 bg-[#ffffff] text-[#415464] font-[700] rounded-sm transition-all duration-300 shadow-[2px_2px_2px_0px_rgba(0,0,0,0.5)] hover:shadow-transparent"
                      onClick={() => toggleVisibility(id)}
                    >
                      {visibleSections[id] ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* banner */}

      <Banner />
      <Footer />
    </section>
  )
}

export default Services