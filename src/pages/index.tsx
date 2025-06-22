import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return <div className="w-full text-2xl">Something</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Dagna Beauty Salon</title>;
