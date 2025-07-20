import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-col w-full font-gloock text-project-beige-0 bg-gradientImage bg-cover">
      <div className="flex relative w-full h-[350px] md:h-[417px] xl:h-[784px] justify-center items-end rounded-bl-[48px]">
        <div className="flex flex-col w-80 md:w-[512px] xl:w-[960px] items-center">
          <h1 className="text-center text-[36px] xl:text-[96px] xl:h-[230px] tracking-widest">
            Mobilny salon kosmetyczny
          </h1>
          <p className="text-[80px] xl:text-[128px] xl:h-[175px] font-sans text-project-black">
            Dagna
          </p>
          <div className="flex bottom-0 items-end w-[270px] md:w-[512px] xl:w-[960px] h-[110px] md:h-[182px] xl:h-[340px]">
            <StaticImage
              src="../images/topBarPicture.png"
              alt="Manicure pictures"
              placeholder="none"
            />
          </div>
        </div>
      </div>
      <div className="flex bg-project-beige-0 h-[48px] rounded-tr-[48px]"></div>
    </div>
  );
};
