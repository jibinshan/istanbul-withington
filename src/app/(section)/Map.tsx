import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Map = ({ }) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center overflow-hidden">
            <div className="relative flex flex-col gap-4 h-fit lg:min-h-[60vh]  w-full  items-center justify-center px-4 lg:px-0 py-12 lg:py-24">
                <div className="w-full flex">
                    {/* <Image
                        src="/images/home/map/map.png"
                        width={1462}
                        height={597}
                        alt="map"
                    />
                    <Button className="hidden absolute rounded-full lg:flex flex-col h-fit lg:top-1/3 lg:left-1/2 px-2 py-2 lg:px-7 lg:py-7"><span>Get<br />Direction<br /></span> <ArrowUpRight /></Button> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.912285059763!2d-2.2278417999999993!3d53.4342766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb37c7dc545eb%3A0x8f81a1186eacf1bf!2sIstanbul%20Restaurant!5e0!3m2!1sen!2sin!4v1732012005411!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[500px] grayscale invert hover:grayscale hover:invert"
                    ></iframe>
                </div>


                <div className="w-full max-w-[1300px] px-3 md:px-0 flex flex-col gap-9 py-12 md:py-24">
                    <p className="w-full text-center font-oswald text-3xl md:text-5xl">Our Other Branches</p>
                    <div className="w-full flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2 py-6 md:px-24 flex flex-col gap-6">
                            <p className="w-full font-oswald text-3xl text-center">Istanbul Restaurent Blackburn</p>
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-center">  1 Nab Lane, Blackburn, BB2 1LN</p>
                                    <Link href='https://www.google.com/maps/place/Istanbul+Restaurant+Blackburn/@53.7485213,-2.4879008,196m/data=!3m3!1e3!4b1!5s0x487b9fb1474ed9eb:0x7fc9abe13bf8038e!4m6!3m5!1s0x487b9f6684d0dd9d:0xd012981c7555c737!8m2!3d53.7485213!4d-2.4879008!16s%2Fg%2F11kqvq9gy9?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D' target="_blank" className="underline">Get direction</Link>
                                </div>
                                <div className="w-full flex gap-2 justify-center">
                                    <p className="font-semibold">Phone :</p>
                                    <Link href='tel:0125 424 1298' target="_blank">0125 424 1298</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-6 md:px-24 flex flex-col gap-6">
                            <p className="w-full font-oswald text-3xl text-center">Istanbul Restaurent Manchester</p>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-center"> 2 Bury Old Rd, Manchester M8 9JN,
                                        <br />
                                        United Kingdom</p>
                                    <Link href='https://www.google.com/maps/place/Istanbul+Restaurant+Manchester/@53.5111071,-2.2442094,15z/data=!4m2!3m1!1s0x0:0x614d0e8514d9a215?sa=X&ved=1t:2428&ictx=111' target="_blank" className="underline">Get direction</Link>
                                </div>
                                <div className="w-full flex gap-2 justify-center">
                                    <p className="font-semibold">Phone :</p>
                                    <Link href='tel:+441617955502'>+441617955502</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section >
    );
};

export default Map;