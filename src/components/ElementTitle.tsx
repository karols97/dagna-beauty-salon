import React from "react";
import StarVectorIcon from "../assets/starFilledVector.svg";
import LiningVector from "../assets/liningVector.svg";
import LightShadowVector from "../assets/lightShadowVector.svg";

type ElementTitleProps = {
  shadow?: boolean;
  lining?: boolean;
  children: string;
};

export const ElementTitle = ({ shadow = false, lining = false, children }: ElementTitleProps) => {
  return (
    <div className="flex content-center relative h-[91px] w-full overflow-visible">
      {lining && <LiningVector className="absolute left-3 md:left-[108px]" />}
      {shadow && (
        <LightShadowVector
          className="absolute bottom-0 left-[52px] md:left-[150px] xl:left-[90px]"
          fill="#BFD3EB"
        />
      )}
      <div className="flex flex-row justify-center items-center w-full">
        <StarVectorIcon className="z-50" />
        <h1 className="text-[36px] xl:text-[40px] font-gloock uppercase tracking-[4px] z-50 text-project-black mx-3">
          {children}
        </h1>
        <StarVectorIcon className="z-50" />
      </div>
    </div>
  );
};
