import { Icons } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

const Glimpse = ({ }) => {
  return (
    <section className="relative flex h-full flex-col items-start justify-center gap-7 bg-[#000000] py-10 pl-5 lg:flex-row lg:py-20 lg:pl-48">
      <div className="w-full lg:w-1/2">
        <div className="z-10 flex h-full w-full flex-col gap-5">
          <h3 className="font-oswald uppercase text-[#fff4e3]">Gallery</h3>
          <h1 className="font-oswald text-5xl font-bold text-[#fff4e3] sm:text-7xl md:text-start lg:leading-[80px]">
            A Glimpse
            <br />
            of Istanbul
          </h1>
          <Link
            href="https://www.instagram.com/istanbulwithington/"
            className="mr-5 flex max-w-full items-center justify-center gap-2 rounded-full bg-[#0a0a0a] py-5 md:py-7 font-oswald font-bold leading-[160%] text-white md:text-start lg:mr-0 lg:max-w-[330px]"
          >
            <Icons.instagram className="text-primary" />
            Check out our instagram
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-2 md:h-[565px] rounded-xl overflow-hidden">

        <Image
          src="/images/home/grid1.png"
          width={1360}
          height={564}
          alt="side-close-up"
          className="w-full h-full md:h-[282.5px] object-cover"
        />
        <Image
          src="/images/home/grid2.png"
          width={1360}
          height={564}
          alt="side-close-up"
          className="w-full h-full md:h-[282.5px] object-cover"
        />
        <Image
          src="/images/home/grid3.png"
          width={1360}
          height={564}
          alt="side-close-up"
          className="w-full h-full object-cover"
        />
        <Image
          src="/images/home/grid4.png"
          width={1360}
          height={564}
          alt="side-close-up"
          className="w-full h-full object-cover"
        />
      </div>
    </section >
  );
};

export default Glimpse;

