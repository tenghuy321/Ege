// import { ScaleLoader } from "react-spinners";
// import Logo from '../assets/images/logo.png';
const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#D9ECEE]">
            {/* <img src={Logo} alt="Loading" className="w-24 mb-5" /> */}
            {/* <ScaleLoader color={"#A4CA62"} /> */}
            <div className="w-10 h-10 border-4 border-t-transparent border-[#A3C962] rounded-full animate-spin"></div>
        </div>

    );
};

export default Loading;


