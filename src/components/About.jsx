import Home from '../components/Home';
import Footer from '../components/Footer';
import about_bg1 from '../assets/images/about/about-bg-1.png';
import about_bg2 from '../assets/images/about/about-bg-2.png';
import about_bg3 from '../assets/images/about/about-bg-3.png';
import about_bg4 from '../assets/images/about/about-bg-4.png';
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

// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';


const timeline = [
  { year: "2019-2020", month: "SEPTEMBER", description: "We started to import solar panels French brand Eco Green Energy in Cambodia as sole distributor and supply solar equipment across 25 cities/provinces." },
  { year: "2021", month: "JANUARY", description: "EGE Cambodia Official Registration. EGE delivered 21 projects." },
  { year: "2022", month: "JANUARY", description: "Supply and distribution of solar solutions including consulting, EPC projects, and maintenance. EGE Delivered 23 projects." },
  { year: "2023", month: "JANUARY", description: "EGE developed a solar irrigation system and supplied, installed for agriculture sectors across the regions. EGE delivered 28 projects." },
  { year: "2024", month: "JANUARY", description: "Providing more than 10MW of solar in Cambodia within the year." },
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
  return (
    <section className='overflow-hidden'>
      <Home />
      <div className='max-w-7xl mx-auto px-4'>
        <hr className='h-4 bg-[#A4CA62] border-none' />
        <div className='bg-[#415464F2] px-2 xl:px-10 py-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div data-aos='fade-right' data-aos-duration='1000' className='text-[20px] sm:text-[40px] lg:text-[50px] text-[#fff] font-[600] leading-none'>
              <h1 className='text-[#A4CA62]'>EGE Cambodia Energy </h1>
              <p>Solutions.</p>
            </div>
            <div className='flex flex-row space-x-2 items-center justify-end'>
              <div data-aos='flip-up' data-aos-duration='1000' className='w-full md:w-[200px] h-[150px] lg:h-[200px] pt-2 px-1 lg:pl-2 lg:pr-10 bg-[#A4CA62] font-[700] leading-none text-[#415464]'>
                <p className='text-[12px] lg:text-[20px]'>Founded in</p>
                <p className='text-[30px] lg:text-[50px]'>2019</p>
              </div>
              <div data-aos='flip-up' data-aos-duration='1000' className='w-full md:w-[200px] h-[150px] lg:h-[200px] pt-2 pb-20 px-2 lg:pl-2 lg:pr-10 font-[400] text-[10px] lg:text-[15px] text-[#ffffff] bg-[#00AFD7]'>
                <p>our</p>
                <p className='text-[12px] lg:text-[20px] font-[700]'>warehouse</p>
                <p>can store up to of solar panels</p>
                <p className='text-[12px] lg:text-[20px] font-[700]'>1000 kW</p>
              </div>
              <div data-aos='flip-up' data-aos-duration='1000' className='w-full md:w-[200px] h-[150px] lg:h-[200px] pt-2 pb-20 px-2 lg:pl-2 lg:pr-10 font-[400] text-[10px] md:text-[11px] text-[#ffffff] bg-[#FF5900]'>
                <p>As we continue to grow, we have extended our footprint, not just within Phnom Penh but all over the country.</p>
              </div>
            </div>
          </div>
          <div data-aos='fade-right' data-aos-duration='1000' className='flex flex-col space-y-2 pt-3 text-[#ffffff] text-[12px] md:text-[15px]'>
            <p>Founded in 2019 by a visionary trio passionate about addressing the persistent electricity challenges in the city, the three founders embarked on a journey to make a meaningful impact. Fueled by a collective frustration with frequent power cuts and insufficient electricity supply, our founders envisioned a company that not only resolves complaints but also pioneers a transformative shift towards sustainable energy solutions,which is solar panels. </p>
            <p>Our commitment goes beyond mere products; we actively engage in studying projects, providing expert consultancy, and offering efficient project management solutions.</p>
            <p>With a focus on both service and product excellence, we strive to contribute significantly to cost reduction while championing eco-friendly practices and the eradication of carbon emissions.</p>
            <p>As we continue to grow, we have extended our footprint, not just within Phnom Penh but all over the country.</p>
            <p>Join us on this journey towards a greener tomorrow.</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-10'>
          {/* vision */}
          <div id='vision' data-aos='fade-right' data-aos-duration='1500' className='flex flex-col md:flex-row items-start space-x-0 md:space-x-5 lg:space-x-10 text-[13px] lg:text-[15px] text-[#415464] p-5 lg:p-10'>
            <img src={vision} alt="" className='w-16 lg:w-20' />
            <div>
              <h1 className='text-[30px] lg:text-[50px] font-[700]'>Vision</h1>
              <p>Our vision is to lead the shift to sustainable energy by offering innovative, accessible, and reliable solar solutions that empower individuals and communities</p>
            </div>
          </div>
          {/* mission */}
          <div id='mission' data-aos='fade-left' data-aos-duration='1500' className='bg-[#415464]'>
            <hr className='h-4 bg-[#A4CA62]' />
            <div className='flex flex-col md:flex-row items-start space-x-0 md:space-x-5 lg:space-x-10 text-[13px] lg:text-[15px] text-[#ffffff] p-5 lg:p-10'>
              <img src={mission} alt="" className='w-16 lg:w-20' />
              <div>
                <h1 className='text-[30px] lg:text-[50px] text-[#A4CA62] font-[700]'>Mission</h1>
                <p>We are dedicated to empowering Phnom Penh and beyond
                  with innovative solar technologies, offering comprehensive
                  services from installation to maintenance. Our commitment
                  lies in fostering a brighter, eco-friendly future through accessible,
                  affordable, clean and efficient solar energy solutions, which is also aligned with SDG number 7.
                </p>
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

      <div id='history' className='w-full relative min-h-screen my-10'>
        <img src={about_bg1} alt="" className='w-full min-h-screen object-cover object-center' />
        <div className='absolute inset-0 w-full h-full bg-[#415464] opacity-90'></div>
        <div className='absolute inset-0 w-full h-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center md:items-start justify-center p-4 md:px-10 py-10'>
          <div className='flex flex-col text-center md:text-start space-y-1 md:space-y-20'>
            <h1 data-aos='fade-right' data-aos-duration='1000' className='w-full md:max-w-[300px] text-[30px] md:text-[40px] xl:text-[60px] font-bold text-[#ffffff] leading-none'>
              Our History
            </h1>
            <p data-aos='fade-right' data-aos-duration='1200' className='w-full md:max-w-[300px] text-[20px] md:text-[30px] xl:text-[40px] font-bold text-[#ffffff]'>
              <span className='text-[#A4CA62]'>Our Strength</span> We focus on quality, products, services, and after sale.
            </p>
          </div>

          {/* history labtop */}
          <div className='hidden md:col-span-2 md:flex flex-col space-y-4 md:space-y-7 '>
            {[icon1, icon2, icon3, icon4, icon5].map((icon, index) => (
              <div key={index} className='relative opacity-10 hover:opacity-100 hover:scale-105 transition-all duration-500'>
                <div data-aos='fade-left' data-aos-duration='1000' className='flex flex-col md:flex-row md:space-x-4 items-center px-4'>
                  <img src={icon} alt={`Icon ${index + 1}`} className='w-20' />
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
              {[icon1, icon2, icon3, icon4, icon5].map((icon, index) => (
                <SwiperSlide key={index}>
                  <div className='relative transition-all duration-500'>
                    <div className='flex flex-col md:flex-row md:space-x-4 items-center px-4'>
                      <img src={icon} alt="" className='w-20 h-[85px]' />
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
          <div data-aos='fade-up' data-aos-duration='1000' className='text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
            <img src={person1} alt="" className='w-full h-auto object-cover object-center' />
            <h1 className='my-1'>Pascal Gizard</h1>
            <p className='bg-[#A4CA62] text-[#ffffff] py-1'>Director & Co-founder</p>
          </div>
          <div data-aos='fade-up' data-aos-duration='1200' className='text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
            <img src={person2} alt="" className='w-full h-auto object-cover object-center' />
            <h1 className='my-1'>Chanraksmey Vorn</h1>
            <p className='bg-[#A4CA62] text-[#ffffff] py-1'>Founder & CEO</p>
          </div>
          <div data-aos='fade-up' data-aos-duration='1400' className='text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
            <img src={person3} alt="" className='w-full h-auto object-cover object-center' />
            <h1 className='my-1'>Chanthida Vorn</h1>
            <p className='bg-[#A4CA62] text-[#ffffff] py-1'>Head of BD & Co.Founder</p>
          </div>
        </div>
        <div className='md:hidden swiper-management'>
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
                <img src={person1} alt="" className='w-40 h-auto object-cover object-center' />
                <h1 className='my-1'>Pascal Gizard</h1>
                <p className='bg-[#A4CA62] text-[#ffffff] p-2'>Director & Co-founder</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center justify-center text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
                <img src={person2} alt="" className='w-40 h-auto object-cover object-center' />
                <h1 className='my-1'>Chanraksmey Vorn</h1>
                <p className='bg-[#A4CA62] text-[#ffffff] p-2'>Founder & CEO</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col items-center justify-center text-center md:text-[15px] lg:text-[20px] font-[700] text-[#415464]'>
                <img src={person3} alt="" className='w-40 h-auto object-cover object-center' />
                <h1 className='my-1'>Chanthida Vorn</h1>
                <p className='bg-[#A4CA62] text-[#ffffff] p-2'>Head of BD & Co.Founder</p>
              </div>
            </SwiperSlide>

            <div className="swiper-pagination"></div>

          </Swiper>
        </div>
      </div>

      {/* certificate */}
      <div className='hidden md:grid grid-cols-4 gap-6 px-4 items-center max-w-7xl mx-auto my-20'>
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
        <h1 className='text-[30px] md:text-[40px] lg:text-[50px] text-[#415464] font-[700] my-10 leading-none'>Awards & <br /> Accreditations</h1>
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
        <div className='md:hidden swiper-awards py-20'>
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

export default About