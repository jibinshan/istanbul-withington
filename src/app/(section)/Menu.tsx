import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Menu = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden py-12 pl-0 lg:pr-8">
      <div
        className="absolute left-0 z-10 h-full w-full"
        style={{
          // background: "linear-gradient(to bottom, black, rgba(0, 0, 0, 0.5), black)",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))",
          // background: "background: linear-gradient(90deg, rgba(7, 7, 7, 0.00) 0.02%, rgba(7, 7, 7, 0.78) 37.14%, #070707 99.98%);"
        }}
      ></div>
      <div className="absolute left-5 z-10 flex h-full w-full flex-col items-start justify-center gap-5 lg:left-44 lg:pr-16">
        <h3 className="font-oswald uppercase">Explore menu</h3>
        <h1 className="max-w-[500px] font-oswald text-6xl font-bold sm:text-7xl md:text-start">
          Istanbul
          <br />
          <span className="text-primary">Menu</span>
        </h1>
        <p className="max-w-[300px] font-light leading-[160%] text-white md:text-start lg:max-w-[500px]">
          Our Istanbul menu is crafted from a deep passion for Turkish flavors,
          with a focus on authenticity and quality. Every dish celebrates the
          rich culinary heritage of Turkey, prepared by skilled chefs who
          carefully select fresh, local ingredients. We invite you to experience
          the vibrant tastes of Istanbul, where each meal is a true labor of
          love.
        </p>
        <Link href="/menu">
          <Button className="flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-7 font-oswald font-bold text-[#282828]">
            View Menu{" "}
            <Icons.rightArrow className="text-[#282828] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
          </Button>
        </Link>
      </div>
      <div className="flex w-full gap-2 lg:gap-4">
        <div
          className="h-[598px] w-1/3 rounded-3xl"
          style={{
            backgroundImage: "url(/images/home/image.png)",
            backgroundPosition: "center",
            backgroundSize: "cover", // Ensures the image covers the container while maintaining aspect ratio
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-[598px] w-1/3 rounded-3xl"
          style={{
            backgroundImage: "url(/images/home/image1.png)",
            backgroundPosition: "center",
            backgroundSize: "cover", // Ensures the image covers the container while maintaining aspect ratio
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-[598px] w-1/3 rounded-3xl"
          style={{
            backgroundImage: "url(/images/home/image3.png)",
            backgroundPosition: "center",
            backgroundSize: "cover", // Ensures the image covers the container while maintaining aspect ratio
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Menu;
