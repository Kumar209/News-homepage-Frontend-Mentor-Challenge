// eslint-disable-next-line no-unused-vars
import React from "react";
import imageWebDesktop from "./assets/images/image-web-3-desktop.jpg";
import imageWebMobile from "./assets/images/image-web-3-mobile.jpg";

const MainSection = () => {
  return (
    <main role="main" className="md:h-[75%] flex flex-col md:flex-row md:gap-5 mt-2 px-10 z-10">
      <div className="md:w-[60%] lg:w-[70%] flex flex-col">
        <div>
          <img
            className="hidden md:flex md:w-[100%] h-[95%]"
            src={imageWebDesktop}
            alt="imageDesktop"
          />
          <img
            className="md:hidden flex w-[100%] h-[40vh]"
            src={imageWebMobile}
            alt="imageMobile"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-7">
          <h1 className="font-Inter font-extrabold text-3xl mt-3 md:mt-0 md:text-6xl pr-5 w--[90%] md:w-[50%]">
            The Bright Future of <br /> Web 3.0?
          </h1>

          <div className="flex flex-col mb-5 justify-start w-[90%] md:w-[50%]">
            <p className="font-Inter text-gray-400 w-[90%]">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <button className="w-[170px] h-[45px] bg-SoftRed hover:bg-VeryDarkBlue text-OffWhite mt-10 rounded-sm text-[18px]">
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-[40%] lg:w-[30%] bg-VeryDarkBlue">
        <h1 className="text-SoftOrange text-4xl font-Inter font-extrabold mt-5 pl-5">
          New
        </h1>

        <div className="flex flex-col pl-5 mt-7">
          <div className="border-b-2 border-b-gray-500 mr-8 pb-7">
            <h2 className="text-white text-xl font-Inter font-bold hover:text-SoftOrange cursor-pointer">
              Hydrogen VS Electric Cars
            </h2>
            <p className="text-gray-400 font-Inter font-md mt-2 cursor-pointer">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>

          <div className="border-b-2 border-b-gray-500 mr-8 pb-7 mt-4">
            <h2 className="text-white text-xl font-Inter font-bold hover:text-SoftOrange cursor-pointer">
              The Downsides of AI Artistry
            </h2>
            <p className="text-gray-400 font-Inter font-md mt-2 cursor-pointer">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>

          <div className="mr-8 pb-7 mt-4">
            <h2 className="text-white text-xl font-Inter font-bold hover:text-SoftOrange cursor-pointer">
              {" "}
              Is VC Funding Drying Up?
            </h2>
            <p className="text-gray-400 font-Inter font-md mt-2 cursor-pointer">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
