import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { Header } from "../elements/Header";
import { About } from "../elements/About";
import { Gallery } from "../elements/Gallery";
import { Services } from "../elements/Services";
import { Pricing } from "../elements/Pricing";
import { Mobility } from "../elements/Mobility";
import { Footer } from "../elements/Footer";
import { TopBar } from "../elements/TopBar";

const IndexPage: React.FC<PageProps> = () => {
  const isDesktop = useScreenWidth();

  return isDesktop ? (
    <div>
      <h1 className="text-3xl">Desktop view</h1>
      <TopBar />
      <section className="flex w-full">
        <Header />
      </section>
      <section className="flex flex-row w-full">
        <About />
        <Gallery />
      </section>
      <section className="flex w-full">
        <Services />
      </section>
      <section className="flex flex-row w-full">
        <Pricing />
        <Mobility />
      </section>
      <Footer />
    </div>
  ) : (
    <div>
      <h1 className="text-2xl">Tablet or Mobile view</h1>
      <TopBar />
      <section className="flex w-full">
        <Header />
      </section>
      <section className="flex flex-row w-full">
        <About />
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
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dagna Beauty Salon</title>;
