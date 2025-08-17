import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ScreenMode, useScreenWidth } from "../hooks/useScreenWidth";
import { Header } from "../elements/Header";
import { About } from "../elements/About";
import { Gallery } from "../elements/Gallery";
import { Services } from "../elements/Services";
import { Pricing } from "../elements/Pricing";
import { Mobility } from "../elements/Mobility";
import { Footer } from "../elements/Footer";
import { TopBarMobile } from "../elements/TopBarMobile";
import { TopBarDesktop } from "../elements/TopBarDesktop";

const IndexPage: React.FC<PageProps> = () => {
  const screenMode = useScreenWidth();

  if (screenMode === ScreenMode.desktop) {
    return (
      <div>
        <TopBarDesktop />
        <section className="flex w-full bg-project-blue-200">
          <Header />
        </section>
        <section className="h-[650px] bg-project-blue-200">
          <div className="flex w-full h-full flex-row justify-around bg-project-beige-0 rounded-bl-[48px]">
            <About />
            <Gallery />
          </div>
        </section>
        <section className="flex w-full bg-project-beige-0">
          <Services />
        </section>
        <section className="flex flex-row w-full bg-project-blue-200">
          <Pricing />
          <Mobility />
        </section>
        <section className="flex flex-row w-full">
          <Footer />
        </section>
      </div>
    );
  } else if (screenMode === ScreenMode.mobile) {
    return (
      <div>
        <TopBarMobile />
        <section className="flex w-full bg-project-blue-200">
          <Header />
        </section>
        <section className="flex w-full h-[407px] md:h-[360px] bg-project-blue-200">
          <div className="flex flex-col w-full bg-project-beige-0 rounded-bl-[48px] items-center">
            <About />
          </div>
        </section>
        <section className="flex w-full h-full bg-project-beige-0">
          <Services />
        </section>
        <section className="flex flex-row w-full bg-project-blue-200">
          <Pricing />
        </section>
        <section className="flex w-full h-[642px] md:h-[768px] bg-project-beige-0">
          <div className="flex flex-col w-full bg-project-blue-200 rounded-bl-[48px] items-center">
            <Gallery />
          </div>
        </section>
        <section className="flex flex-row w-full bg-project-blue-200">
          <Mobility />
        </section>
        <section className="flex flex-row w-full">
          <Footer />
        </section>
      </div>
    );
  } else return <h1>Loading screen</h1>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dagna Beauty Salon</title>;
