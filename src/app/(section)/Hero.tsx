import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/istanbul-liverpool.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/istanbul-liverpool-banner.png"
          ></video>
        </div>
        <div className="z-40 flex h-full w-full max-w-[1300px] items-center justify-center">
          <div className="flex w-fit flex-col items-center justify-center gap-7">
            <h1 className="text-center font-oswald text-5xl font-semibold text-[#fff4e3] sm:text-5xl md:text-8xl lg:leading-[110px]">
              Welcome To
              <br />
              Istanbul Restaurant
              <br />
              Withington
            </h1>
            <Link href="/menu">
              <Button className="flex items-center justify-center gap-3 rounded-full px-6 py-7">
                View Menu <MoveRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
