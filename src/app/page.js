import About_section from "../components/about_section/about_section";
import Banner1 from "../components/banner/banner1";
import FAQ from "../components/faq/faq";
import Hero from "../components/hero/hero";
import Projects from "../components/projects/projects";
import Subcribe from "../components/subscribe/subcribe";
import Services_Overview from "../components/services_overview/services_overview";
import Why_have_website from "../components/why_have_website/why_have_website";
import Work_flow from "../components/work_flow/work_flow";
import Our_Distinctive_Edge from "../components/ourdistinctiveegde/ourdistinctiveegde";

export const metadata = {
  title: "DIS Private LTD",
  description: "",
};

export default function Home() {
  return (
    <div className='bg-bg-base'>
      <Hero />

      <Services_Overview />

      <Projects />
      <hr className='my-10 border-border-subtle' />
      <About_section />

      <Our_Distinctive_Edge />
      <Work_flow />
      <FAQ />
      <Banner1 />

      <Why_have_website />
      <Subcribe />
    </div>
  );
}
