import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Numbers } from "./Numbers";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      <Container className="flex flex-col lg:flex-row gap-4 lg:gap-12">
        {/* Background effects */}
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        {/* Hero Text */}
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                     lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight tracking-tight text-center lg:text-left">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 drop-shadow-md">
              JOBA
            </div>
            <div className="mt-3 text-heading-1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold opacity-90">
              Better matching. Smarter hiring.
            </div>
          </h1>

          <Paragraph className="mt-8 max-w-xl text-base sm:text-lg text-center lg:text-left">
            JOBA connects companies and candidates through skills, culture, and values — ensuring a two‑way fit.
            Our AI-powered platform helps SMEs hire smarter, faster, and fairer.
          </Paragraph>
        </div>

        {/* Hero Image */}
        <div className="flex flex-1 lg:w-1/2 justify-center items-center">
          <div className="relative max-w-[400px] w-full">
            <img
              src="/assets/hero-joba.png"
              alt="Hero image"
              className="w-full h-auto object-contain rounded-3xl"
            />
            <span 
              className="absolute bottom-5 left-0 w-full h-8 rounded-b-2xl 
                        bg-gray-300 blur-2xl opacity-70"
            />
          </div>
        </div>
      </Container>
      <Numbers />
    </section>
  );
};