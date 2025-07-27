import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const TopBarDesktop = () => {
  return (
    <div className="flex flex-row w-full h-[102px] bg-project-beige-0 px-20 py-4">
      <div className="flex flex-row justify-between items-center w-[300px] h-[70px]">
        <div className="flex flex-col w-[157px] h-full">
          <div className="w-full h-[55px]">
            <h1 className="text-center text-[40px]">Dagna</h1>
          </div>
          <div className="w-full h-[15px]">
            <h2 className="text-[12px] text-center font-light uppercase font-montserrat tracking-[4px]">
              Beauty Salon
            </h2>
          </div>
        </div>
        <div className="flex w-[112px] h-[48px] justify-between">
          <a
            className="w-[48px] h-[48px] bg-project-blue-200 rounded-lg"
            href="https://www.facebook.com/profile.php?id=61553391995539"
            target="_blank">
            <StaticImage
              src="../images/facebookIcon.png"
              alt="Facebook redirect icon"
              placeholder="none"
            />
          </a>
          <a
            className="grid w-[48px] h-[48px] bg-project-blue-200 rounded-lg place-content-center"
            href="https://www.instagram.com/dagna_beautysalon/"
            target="_blank">
            <StaticImage
              src="../images/instagramIcon.png"
              alt="Instagram redirect icon"
              placeholder="none"
              width={28}
              height={28}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
