
const GetQuote = () => {
    return (
        <section className="">
            <div className="w-full min-h-screen bg-[#D9ECEE]">
                <div className="max-w-5xl mx-auto py-10 md:py-20">
                    <div className="px-5 2xl:px-0">
                        <h1 className="text-[#A4CA62] text-[20px] sm:text-[25px] md:text-[30px] font-[700]">Request for Quote</h1>
                        <p className="text-[13px] sm:text-[14px] md:text-[16px] text-gray-400 font-[600]">Please take a moment to fill
                            the form</p>
                        <hr className="h-px my-4 border-b-2 border-[#A4CA62]" />
                    </div>

                    <form
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 px-5 2xl:px-0">

                        <div className="w-full">
                            <label htmlFor="name" className="text-[14px] font-[600]">Name <span className="text-red-800">*</span></label>
                            <input type="text" name="name" id="name"
                                className="w-full block border-transparent focus:outline-none hover:border-[#A4CA62] p-1 rounded text-[13px]"
                                placeholder="Your Name" required />
                        </div>

                        <div className="w-full">
                            <label htmlFor="phone_number" className="text-[14px] font-[600]">Phone Number<span
                                className="text-red-800">*</span></label>
                            <input type="text" name="phone_number" id="phone_number"
                                className="w-full block border-transparent focus:outline-none hover:border-[#A4CA62] p-1 rounded text-[13px]"
                                placeholder="012 345 6789" />

                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="text-[14px] font-[600]">Email <span
                                className="text-red-800">*</span></label>
                            <input type="email" name="email" id="email"
                                className="w-full block border-transparent focus:outline-none hover:border-[#A4CA62] p-1 rounded text-[13px]"
                                placeholder="eg: name@example.com" required />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="service_type" className="text-[14px] font-[600]">Service Type <span
                                className="text-red-800">*</span></label>
                            <select name="service_type"
                                className="border-transparent block focus:outline-none hover:border-[#A4CA62] p-1 rounded text-[13px]" required>
                                <option value="">Select an option</option>
                                <option value="Feasibility-Studies-and-Site-Survey">Feasibility Studies & Site Survey</option>
                                <option value="Project-Management">Project Management</option>
                                <option value="Installation-and-Maintenance">Installation and Maintenance</option>
                                <option value="Cleaning-and-Maintenance">Cleaning and Maintenance</option>
                            </select>
                        </div>

                        <div className="w-full col-span-1 md:col-span-2">
                            <label htmlFor="messages" className="text-[14px] font-[600]">Message</label>
                            <textarea id="messages" name="messages" rows="4"
                                className="w-full block border-transparent focus:outline-none hover:border-[#A4CA62] p-1 rounded text-[13px]"
                                placeholder="Message ..." required></textarea>
                        </div>

                        <div className="col-span-1 md:col-span-2 text-center mt-5">
                            <button type="submit"
                                className="bg-[#A4CA62] text-white py-2 px-5 text-[14px] tracking-[1px] rounded hover:bg-[#7da23d]">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default GetQuote