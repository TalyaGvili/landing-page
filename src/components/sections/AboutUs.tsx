import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const AboutUs = () => {
  return (
    <section id="about-us">
      <Container className="flex flex-col md:flex-row gap-y-2 md:gap-x-10 lg:gap-x-12 items-center md:items-start lg:items-center py-4 lg:py-16">
        
        {/* Image Section */}
        <div className="w-full md:w-5/12 lg:w-1/2 flex justify-center items-center">
          <img
            src="/assets/AboutUs.png"
            className="w-2/3 sm:w-3/4 md:w-full lg:w-[90%] xl:w-[500px] h-auto object-contain"
            alt="About Our Mission"
          />
        </div>

        {/* Text & Info Section */}
        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center">
          <Title> JOBA's Solution </Title>
          <Paragraph>
            JOBA creates a two‑way match—aligning skills, culture, and values for both companies and candidates.
            Our smart filters and custom questionnaires ensure only the right opportunities and talent connect.
            We empower SMEs to hire by compatibility, and help job seekers find roles where they truly belong.
          </Paragraph>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Mission"
              description="Our mission is to use AI for the good of humanity and the planet."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>

            <Info
              title="Vision"
              description="Our vision is to drive business innovation and growth."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};
