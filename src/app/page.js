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
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS } from "@/lib/seo/constants";

export const metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
  },
  twitter: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

const FAQ_ITEMS = [
  {
    question:
      "What happens if I want to cancel my subscription before the 24 months are up?",
    answer:
      "You are obligated to fulfill the 24-months subscription term. However, ongoing website support will end upon cancellation.",
  },
  {
    question: "What if I don't provide website content (texts, images) on time?",
    answer:
      "Delays in providing content may result in a surcharge to cover additional development time.",
  },
  {
    question: "Can I see and review my website before it goes live?",
    answer:
      "Yes! You'll have an opportunity to review and provide feedback during the design phase and after the website is complete.",
  },
  {
    question: "What happens if I don't pay my monthly bill on time?",
    answer:
      "If a monthly payment is missed, we will send reminders for 30 days. If the payment is not settled within this period, and no agreement is made within 60 days, legal actions may be taken to recover the dues, which could include additional legal fees.",
  },
  {
    question: "Who owns the content I put on my website?",
    answer:
      "You retain full ownership of your content. However, you grant us permission to use it for the purposes of building and maintaining your website.",
  },
  {
    question:
      "What will be the turn-around time to final delivery of the website?",
    answer:
      "The time it takes to deliver your website depends on the subscription package you select and the complexity of your website's design and features.",
  },
  {
    question: "Who will provide the hosting for my website?",
    answer:
      "The hosting will be provided by us based on the package you choose and the complexity it has.",
  },
  {
    question:
      "Why choose a monthly subscription model for web development instead of a one-time payment?",
    answer:
      "A one-time payment requires a large upfront cost and only covers development. DIS's monthly subscription model, on the other hand, spreads out your payments into smaller, more manageable amounts, ensuring your site stays up-to-date all year round.",
  },
];

export default function Home() {
  return (
    <div className='bg-bg-base'>
      <FaqJsonLd items={FAQ_ITEMS} />
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
