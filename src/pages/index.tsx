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
import { TopBar } from "../elements/TopBar";

const IndexPage: React.FC<PageProps> = () => {
  const screenMode = useScreenWidth();

  if (screenMode === ScreenMode.desktop) {
    return (
      <div>
        <h1 className="text-lg p-1 border border-orange-600 rounded-sm m-1 bg-orange-200 text-orange-600">
          Desktop view
        </h1>
        <TopBar />
        <section className="flex w-full">
          <Header />
        </section>
        <section className="flex w-full bg-project-blue-200">
          <div className="flex w-full">
            <div className="flex w-full flex-row bg-project-beige-0">
              <About />
              <Gallery />
            </div>
          </div>
        </section>
        <section className="flex w-full">
          <Services />
        </section>
        <section className="flex flex-row w-full">
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
        <h1 className="text-lg p-1 border border-orange-600 rounded-sm m-1 bg-orange-200 text-orange-600">
          Tablet or Mobile view
        </h1>
        <TopBar />
        <section className="flex w-full">
          <Header />
        </section>
        <section className="flex w-full bg-project-blue-200">
          <div className="flex w-full">
            <div className="flex flex-col w-full bg-project-beige-0 items-center">
              <About />
            </div>
          </div>
        </section>
        <section className="flex w-full">
          <Services />
        </section>
        <section className="flex flex-row w-full">
          <Pricing />
        </section>
        <section className="flex flex-row w-full">
          <Gallery />
        </section>
        <section className="flex flex-row w-full">
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
