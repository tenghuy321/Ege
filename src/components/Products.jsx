import Home from "../components/Home";
import Banner from "../components/Banner";
import reasonBg from '../assets/images/products/reason-bg-1.png';
// import about_bg4 from '../assets/images/about/about-bg-4.png';

import products1 from '../assets/images/products/products-1.png';
import products2 from '../assets/images/products/products-2.png';
import products3 from '../assets/images/products/products-3.png';
import products4 from '../assets/images/products/products-4.png';
import products5 from '../assets/images/products/products-5.png';
import products6 from '../assets/images/products/products-6.png';
import products7 from '../assets/images/products/products-7.png';
import products8 from '../assets/images/products/products-8.png';
// import products9 from '../assets/images/products/products-9.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import '../components/products.css'
import Footer from "./Footer";

const products = [
  {
    image: products1,
    text: [
      {
        title: "Key Specifications",
        description: "Wattage, efficiency, compatibility, and lifespan"
      },
      {
        title: "Benefits",
        description: "Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses."
      },
      {
        title: "Use Cases",
        description: "Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps."
      }
    ]
  },
  {
    image: products2,
    text: [
      {
        title: "Key Specifications",
        description: "Wattage, efficiency, compatibility, and lifespan"
      },
      {
        title: "Benefits",
        description: "Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses."
      },
      {
        title: "Use Cases",
        description: "Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps."
      }
    ]
  },
  {
    image: products3,
    text: [
      {
        title: "Key Specifications",
        description: "Wattage, efficiency, compatibility, and lifespan"
      },
      {
        title: "Benefits",
        description: "Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses."
      },
      {
        title: "Use Cases",
        description: "Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps."
      }
    ]
  },
  {
    image: products4,
    text: [
      {
        title: "Key Specifications",
        description: "Wattage, efficiency, compatibility, and lifespan"
      },
      {
        title: "Benefits",
        description: "Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses."
      },
      {
        title: "Use Cases",
        description: "Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps."
      }
    ]
  },
  {
    image: products5,
    text: [
      {
        title: "Key Specifications",
        description: "Wattage, efficiency, compatibility, and lifespan"
      },
      {
        title: "Benefits",
        description: "Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses."
      },
      {
        title: "Use Cases",
        description: "Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps."
      }
    ]
  },
  {
    image: products6,
    text: [
      {
        title: "Key Specifications",
        description: "Wattage, efficiency, compatibility, and lifespan"
      },
      {
        title: "Benefits",
        description: "Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses."
      },
      {
        title: "Use Cases",
        description: "Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps."
      }
    ]
  },
  {
    image: products7,
    text: [
      {
        title: "Key Specifications",
        description: "Wattage, efficiency, compatibility, and lifespan"
      },
      {
        title: "Benefits",
        description: "Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses."
      },
      {
        title: "Use Cases",
        description: "Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps."
      }
    ]
  },
  {
    image: products8,
    text: [
      {
        title: "Key Specifications",
        description: "Wattage, efficiency, compatibility, and lifespan"
      },
      {
        title: "Benefits",
        description: "Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses."
      },
      {
        title: "Use Cases",
        description: "Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps."
      }
    ]
  },
  // {
  //   image: products9
  // },
]

const Products = () => {
  return (
    <section className="overflow-hidden">
      <Home />
      {/* products */}
      <div id="product" className="max-w-7xl mx-auto px-4">
        <hr className="h-4 bg-[#A4CA62] border-none" />
        <div className="bg-[#4B5D6C] px-4 md:px-20 py-5">
          <div className="px-5" data-aos='fade-right' data-aos-duration='1000'>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-[#A4CA62] font-[700]">Our Products</h1>
            <p className="text-[14px] md:text-[16px] text-[#ffffff]">We supply the following <br />
              products  </p>
          </div>
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-5 pb-20">
            <div className="relative group" data-aos='fade-up' data-aos-duration='1000'>
              <img src={products1} alt="" className="w-full h-full" />
              <div className="absolute sm:bottom-1/2 md:bottom-2/3 left-1/2 transform w-[90%] p-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#A4CA62] text-[#415464] text-sm rounded duration-300 ease-in-out z-50">
                <div className="flex flex-col space-y-2 text-[10px]">
                  <p><span className="font-[600]"> Key Specifications: </span> Wattage, efficiency, compatibility, and lifespan</p>
                  <p><span className="font-[600]">Benefits: </span> Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses.</p>
                  <p><span className="font-[600]">Use Cases: </span> Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps.</p>
                </div>
              </div>
            </div>
            <div className="relative group" data-aos='fade-up' data-aos-duration='1200'>
              <img src={products2} alt="" className="w-full h-full" />
              <div className="absolute sm:bottom-1/2 md:bottom-2/3 left-1/2 transform w-[90%] p-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#A4CA62] text-[#415464] text-sm rounded duration-300 ease-in-out z-50">
                <div className="flex flex-col space-y-2 text-[10px]">
                  <p><span className="font-[600]"> Key Specifications: </span> Wattage, efficiency, compatibility, and lifespan</p>
                  <p><span className="font-[600]">Benefits: </span> Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses.</p>
                  <p><span className="font-[600]">Use Cases: </span> Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps.</p>
                </div>
              </div>
            </div>
            <div className="relative group" data-aos='fade-up' data-aos-duration='1400'>
              <img src={products3} alt="" className="w-full h-full" />
              <div className="absolute sm:bottom-1/2 md:bottom-2/3 left-1/2 transform w-[90%] p-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#A4CA62] text-[#415464] text-sm rounded duration-300 ease-in-out z-50">
                <div className="flex flex-col space-y-2 text-[10px]">
                  <p><span className="font-[600]"> Key Specifications: </span> Wattage, efficiency, compatibility, and lifespan</p>
                  <p><span className="font-[600]">Benefits: </span> Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses.</p>
                  <p><span className="font-[600]">Use Cases: </span> Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps.</p>
                </div>
              </div>
            </div>

            <div className="relative group" data-aos='fade-up' data-aos-duration='1600'>
              <img src={products4} alt="" className="w-full h-full" />
              <div className="absolute sm:bottom-1/2 md:bottom-2/3 left-1/2 transform w-[90%] p-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#A4CA62] text-[#415464] text-sm rounded duration-300 ease-in-out z-50">
                <div className="flex flex-col space-y-2 text-[10px]">
                  <p><span className="font-[600]"> Key Specifications: </span> Wattage, efficiency, compatibility, and lifespan</p>
                  <p><span className="font-[600]">Benefits: </span> Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses.</p>
                  <p><span className="font-[600]">Use Cases: </span> Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps.</p>
                </div>
              </div>
            </div>

            <div className="relative group" data-aos='fade-up' data-aos-duration='1000'>
              <img src={products5} alt="" className="w-full h-full" />
              <div className="absolute sm:bottom-1/2 md:bottom-2/3 left-1/2 transform w-[90%] p-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#A4CA62] text-[#415464] text-sm rounded duration-300 ease-in-out z-50">
                <div className="flex flex-col space-y-2 text-[10px]">
                  <p><span className="font-[600]"> Key Specifications: </span> Wattage, efficiency, compatibility, and lifespan</p>
                  <p><span className="font-[600]">Benefits: </span> Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses.</p>
                  <p><span className="font-[600]">Use Cases: </span> Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps.</p>
                </div>
              </div>
            </div>

            <div className="relative group" data-aos='fade-up' data-aos-duration='1200'>
              <img src={products6} alt="" className="w-full h-full" />
              <div className="absolute sm:bottom-1/2 md:bottom-2/3 left-1/2 transform w-[90%] p-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#A4CA62] text-[#415464] text-sm rounded duration-300 ease-in-out z-50">
                <div className="flex flex-col space-y-2 text-[10px]">
                  <p><span className="font-[600]"> Key Specifications: </span> Wattage, efficiency, compatibility, and lifespan</p>
                  <p><span className="font-[600]">Benefits: </span> Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses.</p>
                  <p><span className="font-[600]">Use Cases: </span> Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps.</p>
                </div>
              </div>
            </div>

            <div className="relative group" data-aos='fade-up' data-aos-duration='1400'>
              <img src={products7} alt="" className="w-full h-full" />
              <div className="absolute sm:bottom-1/2 md:bottom-2/3 left-1/2 transform w-[90%] p-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#A4CA62] text-[#415464] text-sm rounded duration-300 ease-in-out z-50">
                <div className="flex flex-col space-y-2 text-[10px]">
                  <p><span className="font-[600]"> Key Specifications: </span> Wattage, efficiency, compatibility, and lifespan</p>
                  <p><span className="font-[600]">Benefits: </span> Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses.</p>
                  <p><span className="font-[600]">Use Cases: </span> Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps.</p>
                </div>
              </div>
            </div>

            <div className="relative group" data-aos='fade-up' data-aos-duration='1600'>
              <img src={products8} alt="" className="w-full h-full" />
              <div className="absolute sm:bottom-1/2 md:bottom-2/3 left-1/2 transform w-[90%] p-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#A4CA62] text-[#415464] text-sm rounded duration-300 ease-in-out z-50">
                <div className="flex flex-col space-y-2 text-[10px]">
                  <p><span className="font-[600]"> Key Specifications: </span> Wattage, efficiency, compatibility, and lifespan</p>
                  <p><span className="font-[600]">Benefits: </span> Explain how the product solves specific problems, reduces costs, or improves efficiency for households or businesses.</p>
                  <p><span className="font-[600]">Use Cases: </span> Perfect for small agri-businesses looking to cut energy costs by up to 80–100% by replacing diesel-powered pumps.</p>
                </div>
              </div>
            </div>

            {/* <div data-aos='fade-up' data-aos-duration='1400'>
              <img src={products9} alt="" className="w-full h-full" />
            </div> */}
          </div>

          <div className="sm:hidden swiper-products relative">
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
              modules={[EffectCoverflow, Autoplay, Pagination]}
              autoplay
              style={{ width: '80%', height: 'auto', margin: 'auto' }}
            >

              {products.map((product, index) => (
                <SwiperSlide key={index} className="group relative">
                  <img src={product.image} alt="" className="w-full h-full" />
                  <div className="absolute bottom-1/3 left-1/2 transform w-[100%] p-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#A4CA62] text-[#4B5D6C] text-sm rounded duration-300 ease-in-out z-50">
                    <div className="flex flex-col space-y-2">
                      {product.text.map((detail, i) => (
                        <div key={i}>
                          <p><span className="font-[600]">{detail.title} :</span> {detail.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>

            </Swiper>
          </div>
        </div>
      </div>

      {/* 6 reason to choose us */}
      <div id="reason" className="w-full relative my-10 bg-cover bg-center" style={{ backgroundImage: `url(${reasonBg})` }}>
        <div className="bg-[#2A4352]/90">
          <div data-aos='fade-right' data-aos-duration='1000' className="w-full lg:w-[80%] xl:w-2/3 mr-auto p-4 md:px-24 py-6 text-start">
            <h1 className="text-[25px] md:text-[40px] lg:text-[50px] text-[#A4CA62] font-[700]">6 Reasons to choose us</h1>
            <p className="text-[14px] md:text-[16px] text-[#ffffff]">Why We&#39;re the Right Partner for Your Success</p>
          </div>
        </div>
        {/* laptop */}
        <div className="hidden sm:block">
          <div className="bg-[#415464]/90">
            <div className="w-full lg:w-[90%] xl:w-2/3 mr-auto px-4 md:px-20 py-6 flex items-center space-x-2 sm:space-x-4 text-start"
              data-aos='fade-right' data-aos-duration='1200'>
              <h1 className="text-[80px] sm:text-[100px] md:text-[150px] text-[#A4CA62] font-[700] leading-none tracking-tighter">01</h1>
              <hr className="h-[6rem] md:h-[9rem] w-1 md:w-[6px] bg-[#ffffff]" />
              <div className="text-[#ffffff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                <h1 className="text-[16px] md:text-[30px] xl:text-[40px] font-[600]">High Quality</h1>
                <p>We adhere to French standards, offering products with long-term warranties and full efﬁciency, guaranteeing the utmost quality and durability.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2A4352]/90">
            <div className="w-full lg:w-[90%] xl:w-2/3 ml-auto px-4 md:px-20 py-6 flex items-center space-x-2 sm:space-x-4 text-end"
              data-aos='fade-left' data-aos-duration='1200'>
              <div className="text-[#ffffff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                <h1 className="text-[16px] md:text-[30px] xl:text-[40px] font-[600]">Always Available in Stock</h1>
                <p>We maintain a continuous supply of our products, ensuring they are always readily available for our clients needs.</p>
              </div>
              <hr className="h-[6rem] md:h-[9rem] w-1 md:w-[6px] bg-[#ffffff]" />
              <h1 className="text-[80px] sm:text-[100px] md:text-[150px] text-[#A4CA62] font-[700] leading-none tracking-tighter">02</h1>
            </div>
          </div>
          <div className="bg-[#415464]/90">
            <div className="w-full lg:w-[90%] xl:w-2/3 mr-auto px-4 md:px-20 py-6 flex items-center space-x-2 sm:space-x-4 text-start"
              data-aos='fade-right' data-aos-duration='1200'>
              <h1 className="text-[80px] sm:text-[100px] md:text-[150px] text-[#A4CA62] font-[700] leading-none tracking-tighter">03</h1>
              <hr className="h-[6rem] md:h-[9rem] w-1 md:w-[6px] bg-[#ffffff]" />
              <div className="text-[#ffffff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                <h1 className="text-[16px] md:text-[30px] xl:text-[40px] font-[600]">Excellent Service Delivery</h1>
                <p>Our commitment to excellent service delivery ensures prompt and efﬁcient assistance, meeting our clients needs with professionalism and reliability.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2A4352]/90">
            <div className="w-full lg:w-[90%] xl:w-2/3 ml-auto px-4 md:px-20 py-6 flex items-center space-x-2 sm:space-x-4 text-end"
              data-aos='fade-left' data-aos-duration='1200'>
              <div className="text-[#ffffff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                <h1 className="text-[16px] md:text-[30px] xl:text-[40px] font-[600]">Packaged Price with Installation</h1>
                <p>We provide transparent and convenient packaged prices that include seamless installation, offering our clients a hassle-free experience from purchase to set up.</p>
              </div>
              <hr className="h-[6rem] md:h-[9rem] w-1 md:w-[6px] bg-[#ffffff]" />
              <h1 className="text-[80px] sm:text-[100px] md:text-[150px] text-[#A4CA62] font-[700] leading-none tracking-tighter">04</h1>
            </div>
          </div>
          <div className="bg-[#415464]/90">
            <div className="w-full lg:w-[90%] xl:w-2/3 mr-auto px-4 md:px-20 py-6 flex items-center space-x-2 sm:space-x-4 text-start"
              data-aos='fade-right' data-aos-duration='1200'>
              <h1 className="text-[80px] sm:text-[100px] md:text-[150px] text-[#A4CA62] font-[700] leading-none tracking-tighter">05</h1>
              <hr className="h-[6rem] md:h-[9rem] w-1 md:w-[6px] bg-[#ffffff]" />
              <div className="text-[#ffffff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                <h1 className="text-[16px] md:text-[30px] xl:text-[40px] font-[600] leading-none">Highly Experienced Team with More Than 20 Years of Expertise</h1>
                <p>Our team boasts extensive experience, with each member contributing over 15 years of expertise to deliver top-notch solutions and support.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2A4352]/90">
            <div className="w-full lg:w-[90%] xl:w-2/3 ml-auto px-4 md:px-20 py-6 flex items-center space-x-2 sm:space-x-4 text-end"
              data-aos='fade-left' data-aos-duration='1200'>
              <div className="text-[#ffffff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                <h1 className="text-[16px] md:text-[30px] xl:text-[40px] font-[600]">After Sales Service</h1>
                <p>Our dedication extends beyond the sale with a comprehensive after-sales service, including product exchange, to ensure our clients continued satisfaction.</p>
              </div>
              <hr className="h-[6rem] md:h-[9rem] w-1 md:w-[6px] bg-[#ffffff]" />
              <h1 className="text-[80px] sm:text-[100px] md:text-[150px] text-[#A4CA62] font-[700] leading-none tracking-tighter">06</h1>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="md:hidden">
          <div className="bg-[#415464]/90">
            <div className="w-full px-4 py-6 flex flex-col items-center space-y-2 text-start" data-aos='fade-right' data-aos-duration='1200'>
              <h1 className="text-[80px] text-[#A4CA62] font-[700] leading-none tracking-tighter">01</h1>
              <hr className="w-[20rem] h-[2px] bg-[#ffffff]" />
              <div className="text-[#ffffff] text-[10px] text-center">
                <h1 className="text-[16px] font-[600]">High Quality</h1>
                <p className="pt-1">We adhere to French standards, offering products with long-term warranties and full efﬁciency, guaranteeing the utmost quality and durability.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2A4352]/90">
            <div className="w-full px-4 py-6 flex flex-col items-center space-y-2 text-start" data-aos='fade-left' data-aos-duration='1200'>
              <h1 className="text-[80px] text-[#A4CA62] font-[700] leading-none tracking-tighter">02</h1>
              <hr className="w-[20rem] h-[2px] bg-[#ffffff]" />
              <div className="text-[#ffffff] text-[10px] text-center">
                <h1 className="text-[16px] font-[600]">Always Available in Stock</h1>
                <p className="pt-1">We maintain a continuous supply of our products, ensuring they are always readily available for our clients needs.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#415464]/90">
            <div className="w-full px-4 py-6 flex flex-col items-center space-y-2 text-start" data-aos='fade-right' data-aos-duration='1200'>
              <h1 className="text-[80px] text-[#A4CA62] font-[700] leading-none tracking-tighter">03</h1>
              <hr className="w-[20rem] h-[2px] bg-[#ffffff]" />
              <div className="text-[#ffffff] text-[10px] text-center">
                <h1 className="text-[16px] font-[600]">Excellent Service Delivery</h1>
                <p className="pt-1">Our commitment to excellent service delivery ensures prompt and efﬁcient assistance, meeting our clients needs with professionalism and reliability.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2A4352]/90">
            <div className="w-full px-4 py-6 flex flex-col items-center space-y-2 text-start" data-aos='fade-left' data-aos-duration='1200'>
              <h1 className="text-[80px] text-[#A4CA62] font-[700] leading-none tracking-tighter">04</h1>
              <hr className="w-[20rem] h-[2px] bg-[#ffffff]" />
              <div className="text-[#ffffff] text-[10px] text-center">
                <h1 className="text-[16px] font-[600]">Packaged Price with Installation</h1>
                <p className="pt-1">We provide transparent and convenient packaged prices that include seamless installation, offering our clients a hassle-free experience from purchase to set up.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#415464]/90">
            <div className="w-full px-4 py-6 flex flex-col items-center space-y-2 text-start" data-aos='fade-right' data-aos-duration='1200'>
              <h1 className="text-[80px] text-[#A4CA62] font-[700] leading-none tracking-tighter">05</h1>
              <hr className="w-[20rem] h-[2px] bg-[#ffffff]" />
              <div className="text-[#ffffff] text-[10px] text-center">
                <h1 className="text-[16px] font-[600]">Highly  Expertise Team with More Than 15 Years Experiences </h1>
                <p className="pt-1">Our team boasts extensive experience, with each member contributing over 15 years of expertise to deliver top-notch solutions and support.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2A4352]/90">
            <div className="w-full px-4 py-6 flex flex-col items-center space-y-2 text-start" data-aos='fade-left' data-aos-duration='1200'>
              <h1 className="text-[80px] text-[#A4CA62] font-[700] leading-none tracking-tighter">06</h1>
              <hr className="w-[20rem] h-[2px] bg-[#ffffff]" />
              <div className="text-[#ffffff] text-[10px] text-center">
                <h1 className="text-[16px] font-[600]">After Sales Service</h1>
                <p className="pt-1">Our dedication extends beyond the sale with a comprehensive after-sales service, including product exchange, to ensure our clients continued satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* banner */}
      <Banner />
      <Footer />
    </section>
  )
}

export default Products