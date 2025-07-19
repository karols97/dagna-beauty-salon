import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-center items-end bg-gradientImage bg-cover w-full h-[350px] md:h-[417px] xl:h-[784px] font-gloock text-beige">
      <div className="flex flex-col w-80 md:w-[512px] xl:w-[960px] items-center">
        <h1 className="text-center text-[36px] h-[86px] xl:text-[96px] xl:h-[230px] tracking-widest">
          Mobilny salon kosmetyczny
        </h1>
        <p className="text-[80px] xl:text-[128px] h-[109px] xl:h-[175px] font-sans text-gray-800">
          Dagna
        </p>
        <div className="w-[311px] md:w-[512px] xl:w-[960px] h-[110px] md:h-[182px] xl:h-[340px]">
          <StaticImage
            src="../images/topBarPicture.png"
            alt="Manicure pictures"
            placeholder="none"
          />
        </div>
      </div>
    </div>
  );
};
