
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Partners } from "./sections/Partners";
import { Shilling } from "./sections/Shilling";
import { Footer } from "./sections/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <Shilling />
      <Footer />
    </>
  );
}

export { Home };
