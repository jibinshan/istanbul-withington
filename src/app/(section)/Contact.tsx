import Link from 'next/link'
import { FC } from 'react'

const Contact = ({ }) => {
    return (
        <section
            style={{
                backgroundImage: "url('/images/home/pattern.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
            }}
            className='w-full flex justify-center items-center px-3 min-h-[90vh] md:px-0 py-12 md:py-24'
        >
            <div className='w-full max-w-[1300px] h-full flex flex-col items-center gap-8'>
                <div className='w-full flex flex-col'>
                    <p className='w-full text-center text-[#FBEAD2] font-[400] uppercase tracking-[1.76px]'>Connect with us</p>
                    <p className='w-full text-center text-[#FFF4E3] font-oswald font-[700] text-5xl md:text-6xl'>Contact Us</p>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-5'>
                    <div className='w-full md:w-1/3 flex flex-col items-center justify-center gap-3 border-[1px] bg-[#0b0c0c] border-[#202121] rounded-lg py-12'>
                        <p className='text-[#FBEAD2] w-full text-center uppercase '>Booking request</p>
                        <Link href="tel:0161 526 6562" className='w-full text-[#CCAD64] text-center text-4xl'>0161 526 6562</Link>
                    </div>
                    <div className='w-full md:w-1/3 flex flex-col items-center justify-center gap-3 border-[1px] bg-[#0b0c0c] border-[#202121] rounded-lg py-12'>
                        <p className='text-[#FBEAD2] w-full text-center uppercase '>Location</p>
                        <Link href="https://maps.app.goo.gl/fNnP3wMjzsUQTnDj8" target='_blank' className='w-full text-[#848484] text-center'>455 Wilmslow Rd, Withington,<br />
                            Manchester M20 4AN, United Kingdom</Link>
                    </div>
                    <div className='w-full md:w-1/3 flex flex-col items-center justify-center gap-3 border-[1px] bg-[#0b0c0c] border-[#202121] rounded-lg py-12'>
                        <p className='text-[#FBEAD2] w-full text-center uppercase '>Opening Hours</p>
                        <p className='w-full text-[#848484] text-center'>Monday to Saturday<br />11:00am - 11:30pm<br />Sunday 12:00pm - 11:00pm</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact