import Home from '../components/Home';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import about_bg1 from '../assets/images/about/about-bg-1.png';
import about_bg2 from '../assets/images/about/about-bg-2.png';
import about_bg3 from '../assets/images/about/about-bg-3.png';
import icon1 from '../assets/images/about/icon-1.png';
import icon2 from '../assets/images/about/icon-2.png';
import icon3 from '../assets/images/about/icon-3.png';
import icon4 from '../assets/images/about/icon-4.png';
import icon5 from '../assets/images/about/icon-5.png';
import person1 from '../assets/images/about/person-1.png';
import person2 from '../assets/images/about/person-2.png';
import person3 from '../assets/images/about/person-3.png';
import cert1 from '../assets/images/about/certificate-1.png';
import cert2 from '../assets/images/about/certificate-2.png';
import cert3 from '../assets/images/about/certificate-3.png';
import awards1 from '../assets/images/about/awards-1.png';
import awards2 from '../assets/images/about/awards-2.png';
import awards3 from '../assets/images/about/awards-3.png';
import awards4 from '../assets/images/about/awards-4.png';
import awards5 from '../assets/images/about/awards-5.png';
import awards6 from '../assets/images/about/awards-6.png';
import awards7 from '../assets/images/about/awards-7.png';
import awards8 from '../assets/images/about/awards-8.png';
import awards9 from '../assets/images/about/awards-9.png';

import vision from '../assets/images/about/vision.png';
import mission from '../assets/images/about/mission.png';
import core_values from '../assets/images/about/core_values.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import './about.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useState } from 'react';

// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';


const timeline = [
  { icon: icon1, year: "2019-2020", month: "SEPTEMBER", description: "EGE began importing Eco Green Energy solar panels, a leading French brand, as the sole distributor in Cambodia, supplying solar equipment across 25 cities and provinces." },
  { icon: icon2, year: "2021", month: "JANUARY", description: "EGE Cambodia was officially registered and successfully delivered 21 projects." },
  { icon: icon3, year: "2022", month: "JANUARY", description: "EGE provided solar solutions through supply, distribution, consulting, EPC projects, and maintenance, successfully delivering 23 projects." },
  { icon: icon4, year: "2023", month: "JANUARY", description: "EGE developed solar irrigation systems, offering supply and installation services for the agricultural sector across multiple regions. EGE successfully delivered 28 projects in 2023." },
  { icon: icon5, year: "2024", month: "JANUARY", description: "Delivered over 10MW of solar energy across Cambodia within the year." },
];

const awards = [
  {
    image: awards1,
    title: '2023 OUTSTANDING ASEAN WOMAN ENTREPRENEUR AWARD',
  },
  {
    image: awards2,
    title: '2024 OUTSTANDING ASEAN WOMAN ENTREPRENEUR AWARD',
  },
  {
    image: awards3,
    title: 'GREAT ASEAN CSR ENTREPRENEUR AWARD 2024',
  },
  {
    image: awards4,
    title: 'GREAT ASEAN CSR ENTREPRENEUR AWARD 2024',
  },
  {
    image: awards5,
    title: 'CERTIFICATE OF AUTHORIZATION',
  },
];

const About = () => {

  // State to manage which popup is open
  const [activePopup, setActivePopup] = useState(null);

  // Function to open a specific popup
  const openPopup = (popupId) => {
    setActivePopup(popupId);
  };

  // Function to close the active popup
  const closePopup = () => {
    setActivePopup(null);
  };


  return (
    <section className='overflow-hidden'>
      <Home />
      <div className='max-w-7xl mx-auto px-4'>
        <hr className='h-4 bg-[#A4CA62] border-none' />
        <div className='bg-[#415464F2] px-2 xl:px-10 py-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden'>
            <div data-aos='fade-right' data-aos-duration='1000' className='text-[20px] sm:text-[40px] lg:text-[50px] text-[#fff] font-[600] leading-none'>
              <h1 className='text-[#A4CA62]'>EGE Cambodia Energy </h1>
              <p>Solutions.</p>
            </div>
            <div className='flex flex-row space-x-2 items-center justify-end'>
              <div data-aos='fade-left' data-aos-duration='1000' className='w-full md:w-[200px] h-[150px] lg:h-[200px] pt-2 px-1 lg:pl-2 lg:pr-10 bg-[#A4CA62] font-[700] leading-none text-[#415464]'>
                <p className='text-[12px] lg:text-[20px]'>Founded in</p>
                <p className='text-[30px] lg:text-[50px]'>2019</p>
              </div>
              <div data-aos='fade-left' data-aos-duration='1300' className='w-full md:w-[200px] h-[150px] lg:h-[200px] pt-2 pb-20 px-2 lg:pl-2 lg:pr-10 font-[400] text-[10px] lg:text-[15px] text-[#ffffff] bg-[#00AFD7]'>
                <p>our</p>
                <p className='text-[12px] lg:text-[20px] font-[700]'>warehouse</p>
                <p>can store up to of solar panels</p>
                <p className='text-[12px] lg:text-[20px] font-[700]'>1000 kW</p>
              </div>
              <div data-aos='fade-left' data-aos-duration='1600' className='w-full md:w-[200px] h-[150px] lg:h-[200px] pt-2 pb-20 px-2 lg:pl-2 lg:pr-10 font-[400] text-[10px] md:text-[11px] text-[#ffffff] bg-[#FF5900]'>
                <p>As we continue to grow, we have extended our footprint, not just within Phnom Penh but all over the country.</p>
              </div>
            </div>
          </div>
          <div data-aos='fade-right' data-aos-duration='1000' className='flex flex-col space-y-2 pt-3 text-[#ffffff] text-[12px] md:text-[15px]'>
            <p>In 2019, three visionaries came together to tackle Cambodia`s pressing energy challenges. Frustrated by frequent power outages and unreliable electricity, they envisioned a brighter future powered by sustainable energy. With this shared purpose, EGE Cambodia was born—founded on the belief that renewable energy, particularly solar, is key to transforming lives and communities.</p>
            <p>From the start, the founders sought to go beyond simply providing solar panels. They built a company that offers comprehensive solutions—from expert consultancy and tailored project management to seamless installation and maintenance. Their goal was clear: to make reliable, eco-friendly energy accessible and affordable for all, from small businesses to agricultural enterprises.</p>
            <p>Today, EGE Cambodia is a trusted leader in solar energy, delivering cost-effective solutions that reduce carbon emissions and empower communities across the country. Guided by the founders` vision, we continue to expand our impact, driving Cambodia toward a sustainable and energy-secure future.</p>
            {/* <p>As we continue to grow, we have extended our footprint, not just within Phnom Penh but all over the country.</p>
            <p>Join us on this journey towards a greener tomorrow.</p> */}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-10'>
          {/* vision */}
          <div id='vision' data-aos='fade-right' data-aos-duration='1500' className=''>
            <hr className='h-4 border-none bg-[#ffffff]' />
            <div className='flex flex-col md:flex-row items-start space-x-0 md:space-x-5 lg:space-x-10 text-[13px] lg:text-[15px] text-[#415464] p-5 lg:p-8'>
              <img src={vision} alt="" className='w-16 lg:w-20' />
              <div>
                <h1 className='text-[30px] lg:text-[50px] font-[700]'>Vision</h1>
                <p>Our vision is to lead the transition to sustainable energy by providing innovative, reliable, and accessible solar solutions. We strive to create a future where individuals and communities thrive with clean, affordable energy.</p>
              </div>
            </div>
          </div>
          {/* mission */}
          <div id='mission' data-aos='fade-left' data-aos-duration='1500' className='bg-[#415464]'>
            <hr className='h-4 border-none bg-[#A4CA62]' />
            <div className='flex flex-col md:flex-row items-start space-x-0 md:space-x-5 lg:space-x-10 text-[13px] lg:text-[15px] text-[#ffffff] p-5 lg:p-8'>
              <img src={mission} alt="" className='w-16 lg:w-20' />
              <div>
                <h1 className='text-[30px] lg:text-[50px] text-[#A4CA62] font-[700]'>Mission</h1>
                <p>We are committed to empowering Phnom Penh and beyond with innovative solar technologies. Through comprehensive services—from installation to maintenance—we provide clean, affordable, and efficient energy solutions, aligned with Sustainable Development Goal (SDG) 7.</p>
              </div>
            </div>
          </div>
        </div>

        {/* core values */}
        <div id='core_values' className='px-8 text-[#415464]'>
          <div data-aos='fade-right' data-aos-duration='1000'>
            <img src={core_values} alt="" className='w-20 h-24' />
            <h1 className='text-[30px] lg:text-[50px] font-[700]'>Core Values</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2'>
            <div data-aos='fade-up' data-aos-duration='1000' className='text-[12px] md:text-[14px] text-[#415464] hover:text-[#A4CA62] hover:bg-[#415464] p-4'>
              <h2 className='text-[16px] md:text-[20px] font-[700]'>Sustainability</h2>
              <p className=''>Sustainability is at the heart of everything we do, guiding our decisions to create a positive impact on the environment and the communities we serve.</p>
            </div>
            <div data-aos='fade-up' data-aos-duration='1200' className='text-[12px] md:text-[14px] text-[#415464] hover:text-[#A4CA62] hover:bg-[#415464] p-4'>
              <h2 className='text-[16px] md:text-[20px] font-[700]'>Women Empowerment</h2>
              <p className=''>Our team comprises 60-70% women experts, and we additionally support female end-users, experts inclusivity  and gender equality in every aspect of our operations.</p>
            </div>
            <div data-aos='fade-up' data-aos-duration='1400' className='text-[12px] md:text-[14px] text-[#415464] hover:text-[#A4CA62] hover:bg-[#415464] p-4'>
              <h2 className='text-[16px] md:text-[20px] font-[700]'>Accountability</h2>
              <p className=''>Accountability is the cornerstone of our commitment, as we hold ourselves responsible for the impact of our actions on our clients, communities, and the planet.</p>
            </div>
            <div data-aos='fade-up' data-aos-duration='1000' className='text-[12px] md:text-[14px] text-[#415464] hover:text-[#A4CA62] hover:bg-[#415464] p-4'>
              <h2 className='text-[16px] md:text-[20px] font-[700]'>Reliability</h2>
              <p className=''>Reliability is our promise, ensuring that our clients can depend on us for consistent and trustworthy solar energy solutions that meet their needs and expectations.</p>
            </div>
            <div data-aos='fade-up' data-aos-duration='1200' className='text-[12px] md:text-[14px] text-[#415464] hover:text-[#A4CA62] hover:bg-[#415464] p-4'>
              <h2 className='text-[16px] md:text-[20px] font-[700]'>Innovation</h2>
              <p className=''>Innovation is our driving force, propelling us to continuously explore cutting-edge technologies and creative approaches to enhance our services and contribute to the advancement of sustainable energy solutions.</p>
            </div>
          </div>
        </div>
      </div>

      <div id='history' className='w-full relative min-h-screen my-10 bg-cover' style={{ backgroundImage: `url(${about_bg1})` }}>
        {/* <img src={about_bg1} alt="" className='w-full min-h-screen object-cover object-center' /> */}
        <div className='absolute inset-0 w-full h-full bg-[#415464] opacity-90'></div>
        <div className='w-full h-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center md:items-start justify-center p-4 md:px-10 py-10'>
          <div className='flex flex-col text-center md:text-start space-y-1 md:space-y-20'>
            <h1 data-aos='fade-right' data-aos-duration='1000' className='w-full md:max-w-[300px] text-[30px] md:text-[40px] xl:text-[60px] font-bold text-[#ffffff] leading-none'>
              Our History
            </h1>
            <p data-aos='fade-right' data-aos-duration='1200' className='w-full md:max-w-[300px] text-[20px] md:text-[30px] xl:text-[40px] font-bold text-[#ffffff]'>
              <span className='text-[#A4CA62]'>Our Strengths</span> We focus on quality, products, services, and after sale.
            </p>
          </div>

          {/* history labtop */}
          <div className='hidden md:col-span-2 md:flex flex-col space-y-4 md:space-y-7 '>
            {timeline.map((timelines, index) => (
              <div key={index} className='relative opacity-10 hover:opacity-100 hover:scale-105 transition-all duration-500'>
                <div data-aos='fade-left' data-aos-duration='1000' className='flex flex-col md:flex-row md:space-x-4 items-center px-4'>
                  <img src={timelines.icon} alt={`Icon ${index + 1}`} className='w-20' />
                  <div className='w-full'>
                    <div className='flex items-center justify-between'>
                      <h1 className='text-[20px] xl:text-[30px] font-bold text-[#ffffff]'>{timeline[index].year}</h1>
                      <h1 className='text-[20px] xl:text-[30px] font-bold text-[#A4CA62]'>{timeline[index].month}</h1>
                    </div>
                    <hr className='h-1 my-2 bg-[#A4CA62] border-none' />
                    <p className='text-[12px] lg:text-[14px] text-[#ffffff]'>{timeline[index].description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* history mobile */}
          <div className='md:hidden swiper-history'>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
              }}
              loop={true}
              autoplay
            >
              {timeline.map((timelines, index) => (
                <SwiperSlide key={index}>
                  <div className='relative transition-all duration-500'>
                    <div className='flex flex-col md:flex-row md:space-x-4 items-center px-4'>
                      <img src={timelines.icon} alt="" className='w-20 h-[85px]' />
                      <div className='w-full'>
                        <div className='flex items-center justify-between'>
                          <h1 className='text-[20px] xl:text-[30px] font-bold text-[#ffffff]'>
                            {timeline[index].year}
                          </h1>
                          <h1 className='text-[20px] xl:text-[30px] font-bold text-[#A4CA62]'>
                            {timeline[index].month}
                          </h1>
                        </div>
                        <hr className='h-1 my-2 bg-[#A4CA62] border-none' />
                        <p className='text-[12px] lg:text-[14px] text-[#ffffff] h-[80px]'>
                          {timeline[index].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-button-prev">
                <MdKeyboardArrowLeft />
              </div>
              <div className="swiper-button-next">
                <MdKeyboardArrowRight />
              </div>

              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>

      {/* management team */}
      <div id='management_team' className='max-w-7xl mx-auto px-4'>
        <h1 data-aos='fade-right' data-aos-duration='1000' className='text-[30px] md:text-[40px] lg:text-[50px] text-[#415464] font-[700] my-10'>Our Management Team</h1>
        <div className='hidden md:grid grid-cols-3 gap-10 lg:gap-20'>
        <div data-aos='fade-up' data-aos-duration='1200' className='text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
            <div className='relative group w-full'>
              <img src={person1} alt="" className='w-full h-full object-cover cursor-pointer' onClick={() => openPopup("popup1")} />
              {/* <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start bg-[#A4CA62] shadow-lg p-4 w-full rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500'>
                <p className="text-[#415464] text-[11px] lg:text-[12px] font-[400]">Pascal&apos;s extensive experience in project management, electrical systems, and solar energy is a cornerstone of EGE Cambodia&apos;s ability to deliver high-quality, sustainable energy solutions. As Director, his leadership and expertise in commissioning and MEP ensure that EGE&apos;s projects are executed with precision and efficiency. Clients benefit from Pascal&apos;s deep technical knowledge and strategic oversight, which enable them to maximize the performance and longevity of their energy systems. His background in both Southeast Asia and China gives him a unique perspective that enhances EGE&apos;s ability to meet the diverse needs of clients across the region.</p>
              </div> */}
            </div>
            <h1 className='mt-3 mb-2'>Pascal Gizard</h1>
            <p className='bg-[#A4CA62] text-[#ffffff] py-1'>Director & Co-founder</p>
          </div>
          <div data-aos='fade-up' data-aos-duration='1000' className='text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
            <div className="relative group w-full">
              <img src={person2} alt="" className="w-full h-full object-cover cursor-pointer" onClick={() => openPopup("popup2")} />
              {/* <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-start bg-[#A4CA62] shadow-lg p-4 w-full rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500"
              >
                <p className="text-[#415464] text-[11px] lg:text-[12px] font-[400]">Chanraksmey&apos;s entrepreneurial spirit and extensive experience in the renewable energy sector make her an invaluable asset to EGE Cambodia. As the CEO and founder, she has positioned the company as a trusted solar energy distributor and developer. Her leadership and deep understanding of green energy solutions ensure that EGE&apos;s clients receive cost-effective, reliable, and impactful renewable energy solutions. Chanraksmey&apos;s multilingual skills and mentorship further strengthen EGE&apos;s ability to serve a diverse client base, driving both innovation and growth in Cambodia&apos;s energy sector.</p>
              </div> */}
            </div>

            <h1 className='mt-3 mb-2'>Chanraksmey Vorn</h1>
            <p className='bg-[#A4CA62] text-[#ffffff] py-1'>Founder & CEO</p>
          </div>
          <div data-aos='fade-up' data-aos-duration='1400' className='text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
            <div className='relative group w-full'>
              <img src={person3} alt="" className='w-full h-full object-cover cursor-pointer' onClick={() => openPopup("popup3")} />
              {/* <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start bg-[#A4CA62] shadow-lg p-4 w-full rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500'>
                <p className="text-[#415464] text-[11px] lg:text-[12px] font-[400]">As a passionate leader in the renewable energy sector, Chanthida brings a wealth of knowledge and a commitment to driving sustainable change. Her expertise in innovative energy solutions has significantly contributed to EGE Cambodia&apos;s success in advancing renewable projects. By fostering growth and collaborating with diverse stakeholders, Thida ensures that EGE&apos;s solutions are efficient and impactful, helping clients navigate the evolving energy landscape to achieve long-term sustainability.</p>
              </div> */}
            </div>
            <h1 className='mt-3 mb-2'>Chanthida Vorn</h1>
            <p className='bg-[#A4CA62] text-[#ffffff] py-1'>Head of BD & Co-Founder</p>
          </div>
        </div>
        <div id='management_team' className='md:hidden swiper-management'>
          {/* management team mobile */}
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView='auto'
            loop={true}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 200, modifier: 1, slideShadows: false }}
            pagination={true} modules={[Pagination, EffectCoverflow]}
          >
            <SwiperSlide>
              <div className='flex flex-col items-center justify-center text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
                <div className='relative group w-1/2 h-1/2'>
                  <img src={person1} alt="" className='w-full h-full object-cover cursor-pointer' onClick={() => openPopup("popup1")} />
                  {/* <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#a4ca62] w-full text-start sm:w-1/2 shadow-lg p-4 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500'>
                    <p className="text-[#415464] text-[10px] font-[400]">Pascal&apos;s extensive experience in project management, electrical systems, and solar energy is a cornerstone of EGE Cambodia&apos;s ability to deliver high-quality, sustainable energy solutions. As Director, his leadership and expertise in commissioning and MEP ensure that EGE&apos;s projects are executed with precision and efficiency. Clients benefit from Pascal&apos;s deep technical knowledge and strategic oversight, which enable them to maximize the performance and longevity of their energy systems. His background in both Southeast Asia and China gives him a unique perspective that enhances EGE&apos;s ability to meet the diverse needs of clients across the region.</p>
                  </div> */}
                </div>
                <h1 className='mt-3 mb-1'>Pascal Gizard</h1>
                <p className='w-[80%] sm:w-[60%] bg-[#A4CA62] text-[#ffffff] p-2'>Director & Co-founder</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center justify-center text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
                <div className='relative group w-1/2 h-1/2'>
                  <img src={person2} alt="" className='w-full h-full object-cover cursor-pointer' onClick={() => openPopup("popup2")} />
                  {/* <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#a4ca62] w-full text-start sm:w-1/2 shadow-lg p-4 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500'>
                    <p className="text-[#415464] text-[10px] font-[400]">Chanraksmey&apos;s entrepreneurial spirit and extensive experience in the renewable energy sector make her an invaluable asset to EGE Cambodia. As the CEO and founder, she has positioned the company as a trusted solar energy distributor and developer. Her leadership and deep understanding of green energy solutions ensure that EGE&apos;s clients receive cost-effective, reliable, and impactful renewable energy solutions. Chanraksmey&apos;s multilingual skills and mentorship further strengthen EGE&apos;s ability to serve a diverse client base, driving both innovation and growth in Cambodia&apos;s energy sector.</p>
                  </div> */}
                </div>
                <h1 className='mt-3 mb-1'>Chanraksmey Vorn</h1>
                <p className='w-[80%] sm:w-[60%] bg-[#A4CA62] text-[#ffffff] p-2'>Founder & CEO</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center justify-center text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
                <div className='relative group w-1/2 h-1/2'>
                  <img src={person3} alt="" className='w-full h-full object-cover cursor-pointer' onClick={() => openPopup("popup3")}/>
                  {/* <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#a4ca62] w-full text-start sm:w-1/2 shadow-lg p-4 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500'>
                    <p className="text-[#415464] text-[10px] font-[400]">As a passionate leader in the renewable energy sector, Chanthida brings a wealth of knowledge and a commitment to driving sustainable change. Her expertise in innovative energy solutions has significantly contributed to EGE Cambodia&apos;s success in advancing renewable projects. By fostering growth and collaborating with diverse stakeholders, Thida ensures that EGE&apos;s solutions are efficient and impactful, helping clients navigate the evolving energy landscape to achieve long-term sustainability.</p>
                  </div> */}
                </div>
                <h1 className='mt-3 mb-1'>Chanthida Vorn</h1>
                <p className='w-[80%] sm:w-[60%] bg-[#A4CA62] text-[#ffffff] p-2'>Head of BD & Co.Founder</p>
              </div>
            </SwiperSlide>

            <div className="swiper-pagination"></div>

          </Swiper>
        </div>

        {/* Popups */}
        {activePopup === "popup1" && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] px-2">
            <div className="bg-white rounded-lg shadow-lg p-6 text-start max-w-md mx-auto">
              <p className="text-[10px] md:text-[12px] font-[500] text-[#415464] mb-4">
                Pascal&apos;s extensive experience in project management, electrical systems, and solar energy is a cornerstone of EGE Cambodia&apos;s ability to deliver high-quality, sustainable energy solutions. As Director, his leadership and expertise in commissioning and MEP ensure that EGE&apos;s projects are executed with precision and efficiency. Clients benefit from Pascal&apos;s deep technical knowledge and strategic oversight, which enable them to maximize the performance and longevity of their energy systems. His background in both Southeast Asia and China gives him a unique perspective that enhances EGE&apos;s ability to meet the diverse needs of clients across the region.
              </p>
              <button
                className="bg-[#a4ca62] text-[10px] md:text-[12px] text-[#415464] px-4 py-1 md:py-2 rounded-md shadow-md"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {activePopup === "popup2" && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] px-2">
            <div className="bg-white rounded-lg shadow-lg p-6 text-start max-w-md mx-auto">
              <p className="text-[10px] md:text-[12px] font-[500] text-[#415464] mb-4">
                Chanraksmey&apos;s entrepreneurial spirit and extensive experience in the renewable energy sector make her an invaluable asset to EGE Cambodia. As the CEO and founder, she has positioned the company as a trusted solar energy distributor and developer. Her leadership and deep understanding of green energy solutions ensure that EGE&apos;s clients receive cost-effective, reliable, and impactful renewable energy solutions. Chanraksmey&apos;s multilingual skills and mentorship further strengthen EGE&apos;s ability to serve a diverse client base, driving both innovation and growth in Cambodia&apos;s energy sector.
              </p>
              <button
                className="bg-[#a4ca62] text-[10px] md:text-[12px] text-[#415464] px-4 py-1 md:py-2 rounded-md shadow-md"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {activePopup === "popup3" && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] px-2">
            <div className="bg-white rounded-lg shadow-lg p-6 text-start max-w-md mx-auto">
              <p className="text-[10px] md:text-[12px] font-[500] text-[#415464] mb-4">
                As a passionate leader in the renewable energy sector, Chanthida brings a wealth of knowledge and a commitment to driving sustainable change. Her expertise in innovative energy solutions has significantly contributed to EGE Cambodia&apos;s success in advancing renewable projects. By fostering growth and collaborating with diverse stakeholders, Thida ensures that EGE&apos;s solutions are efficient and impactful, helping clients navigate the evolving energy landscape to achieve long-term sustainability.
              </p>
              <button
                className="bg-[#a4ca62] text-[10px] md:text-[12px] text-[#415464] px-4 py-1 md:py-2 rounded-md shadow-md"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* certificate */}
      <div id='registration_docs' className='hidden md:grid grid-cols-4 gap-6 px-4 items-center max-w-7xl mx-auto my-20'>
        <div data-aos='fade-right' data-aos-duration='1000' className='md:col-span-2'>
          <img src={cert1} alt="" />
        </div>
        <div data-aos='fade-left' data-aos-duration='1000'>
          <img src={cert2} alt="" />
        </div>
        <div data-aos='fade-left' data-aos-duration='1200'>
          <img src={cert3} alt="" />
        </div>
      </div>
      <div id='registration_docs' className='md:hidden swiper-certificate'>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          style={{ width: '80%', height: '300px', margin: 'auto' }}
        >
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={cert1} alt="" className="h-full object-contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={cert2} alt="" className="h-full object-contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={cert3} alt="" className="h-full object-contain" />
            </div>
          </SwiperSlide>

          <div className="swiper-pagination"></div>

        </Swiper>
      </div>

      {/* Awards & Accreditations */}
      <div className='max-w-7xl mx-auto px-4'>
        <div className='my-10'>
          <h1 className='text-[30px] md:text-[40px] lg:text-[50px] text-[#415464] font-[700] leading-none'>Awards & <br /> Accreditations</h1>
          <p className='text-[12px] md:text-[16px] font-[500] md:max-w-[600px]'>Our industry recognition underscores our dedication to delivering reliable, eco-friendly energy solutions.</p>
        </div>
        {/* Awards & Accreditations labtop */}
        <div id='certificate' className='hidden md:grid grid-cols-5 gap-10'>
          {awards.map((award, index) => (
            <div data-aos='fade-up' data-aos-duration='1200' key={index}>
              <div className="flex flex-col items-center text-center w-full h-[150px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px]">
                <img
                  src={award.image}
                  alt=''
                  className="w-full h-full object-contain"
                />
                <p className="max-w-[200px] h-[100px] pt-7 text-[11px] lg:text-[13px] xl:text-[15px] text-[#415464] font-[500]">
                  {award.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Awards & Accreditations mobile */}
        <div id='certificate' className='md:hidden swiper-awards py-20'>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            style={{ width: '80%', height: '300px', margin: 'auto' }}
          >
            {awards.map((award, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center w-full h-[150px]">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain"
                  />
                  <p className="max-w-[200px] h-[100px] pt-7 text-[11px] text-[#415464] font-[500]">
                    {award.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}


            <div className="swiper-pagination"></div>

          </Swiper>
        </div>


        <div className='hidden md:grid grid-cols-4 gap-4 mt-40'>
          <img data-aos='fade-right' data-aos-duration='1000' src={awards6} alt="" />
          <img data-aos='fade-right' data-aos-duration='1200' src={awards7} alt="" />
          <img data-aos='fade-left' data-aos-duration='1000' src={awards8} alt="" />
          <img data-aos='fade-left' data-aos-duration='1200' src={awards9} alt="" />
        </div>
        <div className='md:hidden swiper-award'>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            style={{ width: '80%', height: '100%', margin: 'auto' }}
          >
            <SwiperSlide><img src={awards6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={awards7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={awards8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={awards9} alt="" /></SwiperSlide>

            <div className="swiper-pagination"></div>

          </Swiper>
        </div>
      </div>

      <div>
        <hr className='h-[16px] bg-[#A4CA62] mt-20 max-w-7xl mx-auto' />
        <div className='w-full h-[50vh] md:h-screen relative'>
          <img src={about_bg2} alt="" className='w-full h-full object-cover' />
          <div className='absolute right-[50%] translate-x-1/2 md:-translate-x-0 md:right-[100px] top-[50px] xl:top-[100px] text-[#ffffff]'>
            <hr data-aos='fade-left' data-aos-duration='1000' className='h-[5px] bg-[#A4CA62] border-none w-[300px]' />
            <div data-aos='fade-left' data-aos-duration='1000' className='max-w-[500px] h-[150px] md:h-[180px] xl:h-[200px] bg-black/80 py-4 pl-8 pr-20 leading-none'>
              <h1 className='text-[25px] md:text-[30px] xl:text-[40px] font-[700]'>Our warehouse</h1>
              <p>can store up to</p>
              <p className='text-[40px] md:text-[60px] xl:text-[70px] text-[#A4CA62] font-[700] py-2'>1000 kW</p>
              <p className='text-right text-[15px] font-[700]'>of solar panels</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full mx-auto h-[50vh] sm:h-[80vh] md:h-full relative mt-4'>
        <img src={about_bg3} alt="" className='w-full h-full object-cover' />
        <div className='absolute w-full md:w-[700px] px-4 top-[20px] md:top-[100px] left-1/2 -translate-x-1/2 text-center text-[#000000] text-[12px] md:text-[16px] lg:text-[20px]'>
          <h1 data-aos='fade-up' data-aos-duration='1000' className='text-[30px] md:text-[50px] lg:text-[60px] text-[#415464] font-[700]'>Future Goal</h1>
          <p data-aos='fade-up' data-aos-duration='1200'>Our future objective is to extend our solar footprint into new territories,
            speciﬁcally targeting expansion into Southeast Asia region.</p>
        </div>
      </div>

      <Banner />
      <Footer />
    </section>
  )
}

export default About