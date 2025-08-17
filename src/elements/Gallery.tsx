import React from "react";
import StarVectorIcon from "../assets/starFilledVector.svg";
import { ScreenMode, useScreenWidth } from "../hooks/useScreenWidth";
import { ElementTitle } from "../components/ElementTitle";

export const Gallery = () => {
  const screenMode = useScreenWidth();

  const background = screenMode === ScreenMode.mobile ? "bg-project-blue-200" : "";

  return (
    <div className="flex flex-col items-center pt-10">
      <ElementTitle lining>Moje prace</ElementTitle>
      <div className={`w-[311px] md:w-[512px] xl:w-[400px] ${background}`}>
        <p className="text-justify font-montserrat font-light mt-5">
          W moim salonie zadbam o Twoje paznokcie, brwi i rzęsy, żebyś mogła cieszyć się naturalnym,
          zadbanym wyglądem. Lubię tworzyć luźną, przyjemną atmosferę, gdzie możesz się zrelaksować.
          Wszystko robię tak, żeby efekty pasowały do Ciebie i Twojego stylu. Mam kilkuletnie
          doświadczenie w stylizacji paznokci, laminacji brwi i rzęs, więc możesz być pewna, że
          jesteś w dobrych rękach.
        </p>
      </div>
    </div>
  );
};
