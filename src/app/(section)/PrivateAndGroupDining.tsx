import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";


const PrivateAndGroupDining = ({ }) => {
    return (
        <section className="flex h-screen w-full items-center justify-center px-4 pt-12 lg:pt-20 lg:px-10">
            <div className="relative flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row rounded-3xl"
                style={{
                    backgroundImage: `url('/images/home/private_group.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
                <div className="flex h-full w-full flex-col items-start justify-center gap-[2.5rem] p-6 lg:px-32 z-20">
                    <h3 className="font-oswald uppercase">Booking</h3>
                    <h1 className="max-w-[500px] font-oswald font-bold text-6xl sm:text-7xl md:text-start">
                        Private &<br />
                        Group Dining
                    </h1>
                    <p className="hidden md:flex max-w-[500px] font-light leading-[160%] text-white md:text-start">
                        Our private and group dining options offer an intimate setting for any occasion, from celebrations to business gatherings. Each space is designed to provide privacy and comfort, allowing you to enjoy every moment with your guests. With personalized service and tailored menus, we ensure a seamless and memorable dining experience for groups of all sizes.
                    </p>
                    <Link href='/table-booking'>
                        <Button className="flex items-center font-extrabold font-oswald justify-center gap-3 px-6 py-7 rounded-full bg-white text-black">Book Now <MoveRight className="text-primary" /></Button>
                    </Link>
                </div >
            </div >
        </section >
    );
};

export default PrivateAndGroupDining;