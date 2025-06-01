import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
import { CompetitorTable } from "./components/sections/CompetitorTable";
import { BusinessModel } from "./components/sections/BusinessModel";

function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands />
      <CompetitorTable />
      <BusinessModel />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
}

export default App;
