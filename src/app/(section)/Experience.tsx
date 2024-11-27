import Image from "next/image"

const Experience = ({ }) => {
    return (
        <section className="relative flex flex-col h-full max-w-[1400px] items-center justify-center px-7 py-10 lg:py-20 lg:px-24 bg-[#000000] gap-7">
            <div className="h-full w-full z-10 flex flex-col gap-5">
                <h3 className="font-oswald uppercase">we offer</h3>
                <h1 className="font-oswald font-bold text-4xl sm:text-7xl md:text-start lg:leading-[80px]">
                    Unforgettable
                    <br />
                    Dining{' '}
                    <span className="text-primary">Experience</span>
                </h1>
                <p className="max-w-[500px] font-light leading-[160%] text-white md:text-start">
                    Enjoy an unforgettable dining experience where every dish is a celebration of flavor and craftsmanship. From the ambiance to each carefully curated plate, we strive to make every moment memorable.
                </p>
            </div>
            <div
                className="hidden w-0 lg:flex lg:flex-col lg:w-full lg:gap-7"
            >
                <div
                    className="relative w-full rounded-3xl"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/30"></div>
                    <Image
                        src="/images/home/food2.jpeg"
                        width={1600}
                        height={1066}
                        alt="side-close-up"
                        className="h-[564px] w-full rounded-lg md:rounded-3xl object-cover"
                    />

                    <div className="absolute bottom-7 left-3 lg:bottom-28 lg:left-24 flex flex-col gap-3 lg:gap-12 z-20">
                        <h1 className="text-2xl lg:text-6xl font-extrabold font-oswald">Food</h1>
                        <p className="max-w-[350px] text-xs lg:text-lg lg:max-w-[500px]">Our food is a tribute to authentic flavors, crafted with the finest ingredients and a passion for tradition. Each dish is prepared with care, bringing a taste of rich culinary heritage to your table.</p>
                    </div>
                </div>

                <div
                    className="relative w-full rounded-3xl"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
                    <Image
                        src="/images/home/drinks2.jpeg"
                        width={1600}
                        height={1066}
                        alt="side-close-up"
                        className="w-full rounded-3xl h-[550px] object-cover"
                    />
                    <div className="absolute bottom-7 left-3 lg:bottom-28 lg:left-24 flex flex-col gap-3 lg:gap-12 z-20">
                        <h1 className="text-2xl lg:text-6xl font-extrabold font-oswald">Drinks</h1>
                        <p className="max-w-[350px] text-xs lg:text-lg lg:max-w-[500px]">Discover a selection of expertly crafted drinks, designed to complement every meal with rich, refreshing flavors. From signature cocktails to fine wines, each sip enhances the dining experience, bringing a perfect balance to your palate. </p>
                    </div>
                </div>
                <div
                    className="relative w-full rounded-3xl"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
                    <Image
                        src="/images/home/atmosphere2.jpg"
                        width={3412}
                        height={1934}
                        alt="side-close-up"
                        className="rounded-3xl h-[550px] w-[1300px] object-cover"
                    />
                    <div className="absolute bottom-7 left-3 lg:bottom-28 lg:left-24 flex flex-col gap-3 lg:gap-12 z-20">
                        <h1 className="text-2xl lg:text-6xl font-extrabold font-oswald">Atmosphere</h1>
                        <p className="max-w-[350px] text-xs lg:text-lg lg:max-w-[500px]">Step into an atmosphere that blends warmth and elegance, designed to make every guest feel at home. With carefully curated decor and inviting lighting, our space sets the perfect backdrop for a memorable dining experience.</p>
                    </div>
                </div>
            </div>


            <div
                className="flex flex-col w-full gap-7 lg:hidden lg:w-0 lg:h-0"
            >
                <div
                    className="relative w-full rounded-3xl"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
                    <Image
                        src="/images/home/food2.jpeg"
                        width={1600}
                        height={1066}
                        alt="side-close-up"
                        className="h-auto w-full rounded-lg md:rounded-none"
                    />
                    <div className="absolute w-full h-full top-0 left-0 lg:bottom-28 lg:left-24 flex justify-center items-center gap-3 lg:gap-12 z-20">
                        <h1 className="text-3xl font-extrabold font-oswald">Food</h1>
                        {/* <p className="max-w-[320px] text-md">Our food is a tribute to authentic flavors, crafted with the finest ingredients and a passion for tradition. Each dish is prepared with care, bringing a taste of rich culinary heritage to your table.</p> */}
                    </div>
                </div>
                <div
                    className="relative w-full rounded-3xl"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
                    <Image
                        src="/images/home/drinks2.jpeg"
                        width={1600}
                        height={1066}
                        alt="side-close-up"
                        className="h-auto w-full rounded-lg md:rounded-none"
                    />
                    <div className="absolute w-full h-full top-0 left-0  lg:bottom-28 lg:left-24 flex justify-center items-center gap-3 lg:gap-12 z-20">
                        <h1 className="text-3xl font-extrabold font-oswald">Drinks</h1>
                        {/* <p className="max-w-[320px] text-md ">Discover a selection of expertly crafted drinks, designed to complement every meal with rich, refreshing flavors. From signature cocktails to fine wines, each sip enhances the dining experience, bringing a perfect balance to your palate.</p> */}
                    </div>
                </div>
                <div
                    className="relative w-full rounded-3xl"
                >
                    <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/60"></div>
                    <Image
                        src="/images/home/atmosphere2.jpg"
                        width={3412}
                        height={1934}
                        alt="side-close-up"
                        className="h-auto w-full rounded-lg md:rounded-none"
                    />
                    <div className="absolute w-full top-0 left-0 h-full lg:bottom-28 lg:left-24 flex justify-center items-center gap-3 lg:gap-12 z-20">
                        <h1 className="text-3xl font-extrabold font-oswald">Atmosphere</h1>
                        {/* <p className="max-w-[320px] text-md">Step into an atmosphere that blends warmth and elegance, designed to make every guest feel at home. With carefully curated decor and inviting lighting, our space sets the perfect backdrop for a memorable dining experience.</p> */}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Experience