import { StaticImage } from "gatsby-plugin-image";
import StarVectorIcon from "../assets/starFilledVector.svg";
import React from "react";

export const About = () => {
  return (
    <div className="flex flex-col items-center w-[311px] md:w-[512px] xl:w-[400px]">
      <div className="flex flex-row items-center w-[235px] justify-between">
        <StarVectorIcon />
        <h1 className="text-[36px] xl:text-[40px] font-gloock uppercase tracking-[4px]">O mnie</h1>
        <StarVectorIcon />
      </div>
      <p className="text-justify font-montserrat font-light mt-5">
        W moim salonie zadbam o Twoje paznokcie, brwi i rzęsy, żebyś mogła cieszyć się naturalnym,
        zadbanym wyglądem. Lubię tworzyć luźną, przyjemną atmosferę, gdzie możesz się zrelaksować.
        Wszystko robię tak, żeby efekty pasowały do Ciebie i Twojego stylu. Mam kilkuletnie
        doświadczenie w stylizacji paznokci, laminacji brwi i rzęs, więc możesz być pewna, że jesteś
        w dobrych rękach.
      </p>
    </div>
  );
};
