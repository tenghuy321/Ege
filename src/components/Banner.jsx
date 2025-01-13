import about_bg4 from '../assets/images/about/about-bg-4.png';
const Banner = () => {
    return (
        <div className='w-full min-h-[40vh] md:min-h-[80vh] relative mt-4 bg-cover bg-center md:bg-fixed' style={{ backgroundImage: `url(${about_bg4})` }}>
            {/* <img src={about_bg4} alt="" className='w-full h-full' /> */}
            <div className='absolute inset-0 w-full h-full bg-[#000000]/70 bg-blend-multiply'></div>
            <div data-aos='fade-up' data-aos-duration='1200' className='absolute inset-0 w-full h-full flex items-center text-center justify-center text-[30px] sm:text-[50px] md:text-[60px] lg:text-[100px] leading-none text-[#ffffff] font-[700] italic'>
                Innovation meets <br />
                sustainability.
            </div>
        </div>
    )
}

export default Banner