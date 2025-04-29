"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

//components
import Socials from "../components/shared/component/Socials";
import Photo from "../components/shared/component/Photo";
import Stats from "../components/shared/component/Stats";
import TypeWritter from "@/components/shared/component/TypeWritter";
import Slider from "@/components/shared/component/Slider";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="bg-gradient-to-r from-violet-400 to-orange-500 bg-clip-text text-transparent text-2xl">Software Developer</span>
            <h1 className="h1 mb-6 text-2xl text-lightGreen">
              Hello I'm <br />{" "}
              <span className="bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent font-secondary font-bold text-4xl">
                <TypeWritter>
                  Naimur Rahman Nishat
                </TypeWritter>
              </span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80">
              <TypeWritter>
                A Full-Stack Developer handles both front-end and back-end
                development, ensuring seamless integration and functionality of
                web applications. When crafting your resume, highlight your
                experience with specific programming languages, notable projects
                you have completed, and any relevant certifications.
              </TypeWritter>
            </p>
            {/* btn and social icons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-lightGreen bg-darkBlack text-lightGreen hover:bg-lightGreen hover:text-white rounded-full"
              >
                <Link href={"/cv.pdf"} download target="_blank">
                  <span>Download CV</span>
                </Link>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-lightGreen rounded-full flex justify-center items-center text-lightGreen text-base hover:bg-lightGreen hover:text-lightBlue hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <div className="container mx-auto pt-12">
        <Slider/>
      </div>
    </section>
  );
};

export default Home;
