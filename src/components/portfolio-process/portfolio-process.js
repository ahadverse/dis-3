import React from "react";
import Reveal from "../motion/Reveal";
import StaggerGrid, { StaggerItem } from "../motion/StaggerGrid";
import Container from "../ui/Container";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    body: "Before a single pixel is designed, we spend time understanding the business: who the customer is, what they're being asked to do on the site (book a call, buy a product, request a quote), and what's currently getting in the way. This usually surfaces requirements a generic template would have missed entirely.",
  },
  {
    n: "02",
    title: "Design",
    body: "We design around the content and the conversion goal first, then layer in visual identity — colour, type, imagery — so the site looks distinctive without sacrificing clarity. Clients see real layouts early, not abstract mood boards, so feedback happens before development time is spent.",
  },
  {
    n: "03",
    title: "Build",
    body: "Development happens in component-based code, which is what lets us hit real-world performance targets: fast load times, clean markup for search engines, and a structure that's straightforward to extend later without a rebuild. Every build is tested across devices and browsers before it goes anywhere near a client review.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Launch day includes a full technical checklist — redirects, analytics, search console setup, SSL, sitemap submission — the unglamorous details that determine whether a new site actually performs in search results from day one instead of losing months of ranking.",
  },
  {
    n: "05",
    title: "Maintain",
    body: "This is where most agencies stop and where our subscription model keeps going: security patches, uptime monitoring, content updates, and a monthly check-in so small issues get caught before they become an emergency call.",
  },
];

const PortfolioProcess = () => {
  return (
    <div className='py-section'>
      <Container>
        <Reveal direction='up'>
          <h2 className='font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center text-text-primary'>
            How These Projects Actually Get Built
          </h2>
        </Reveal>
        <Reveal direction='up' delay={0.08}>
          <p className='mx-auto mt-4 max-w-3xl text-center text-base text-text-secondary'>
            Every project in our portfolio went through the same five-stage
            process. It's not the fastest way to ship a website, but it's the
            only way we've found to ship one that still works well a year
            after launch.
          </p>
        </Reveal>

        <StaggerGrid className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5'>
          {STEPS.map((step) => (
            <StaggerItem
              key={step.n}
              className='rounded-xl border border-border bg-bg-surface2 p-5 shadow-card'
            >
              <span className='font-display text-3xl font-bold text-accent-blue-400'>{step.n}</span>
              <h3 className='mt-3 text-lg font-bold text-text-primary'>{step.title}</h3>
              <p className='mt-2 text-sm text-text-secondary'>{step.body}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal direction='up' delay={0.1}>
          <div className='mx-auto mt-14 max-w-3xl space-y-4 text-base text-text-secondary'>
            <h3 className='font-display text-xl font-bold text-text-primary'>
              What We Look For Before Taking On a Project
            </h3>
            <p>
              Not every project is a good fit, and we'd rather say so upfront
              than take on work we can't do well. We look for clients who have
              a clear sense of what their customers need to do on the site —
              book a job, request a quote, complete a purchase — even if they
              don't yet have the words or visuals to express it. That clarity
              is what lets a project move quickly through design and into
              build without endless rounds of guesswork.
            </p>
            <p>
              We also pay close attention to what happens after launch.
              Businesses that treat their website as a living part of the
              business — updating it as offers change, watching how visitors
              actually use it, acting on the data — get dramatically more out
              of the investment than businesses that launch and forget. Our
              maintenance subscriptions are built around the former group, and
              we try to set that expectation honestly during the first
              conversation rather than after the contract is signed.
            </p>
            <p>
              Finally, we look for projects where performance is measurable.
              An online store can track conversion rate. A service business
              can track enquiry volume. A content site can track organic
              traffic and time on page. Whatever the goal, we want a number we
              can point to a few months after launch — not just a screenshot
              we're proud of.
            </p>
          </div>
        </Reveal>

        <Reveal direction='up' delay={0.12}>
          <div className='mx-auto mt-16 max-w-3xl'>
            <h3 className='font-display text-xl font-bold text-text-primary text-center'>
              Common Questions About Our Project Work
            </h3>
            <div className='mt-8 space-y-6'>
              <div>
                <h4 className='font-semibold text-text-primary'>
                  How long does a typical project take from kickoff to launch?
                </h4>
                <p className='mt-2 text-sm text-text-secondary'>
                  A standard business website usually takes two to four weeks
                  once content and branding assets are in hand; e-commerce
                  builds with product catalogs, payment integration, and
                  shipping logic typically run four to eight weeks. The
                  biggest variable isn't our build time — it's how quickly a
                  client can turn around copy, images, and feedback rounds.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-text-primary'>
                  Do you build on a specific platform or framework?
                </h4>
                <p className='mt-2 text-sm text-text-secondary'>
                  We choose the platform based on what the project actually
                  needs rather than defaulting to one stack for everything. A
                  marketing-heavy brand site might be best served by a modern
                  component-based framework for speed and flexibility, while a
                  client who needs to manage their own catalog day-to-day
                  might be better served by a more accessible CMS. We'll
                  recommend the option that fits how the business will
                  actually use the site, not the option that's easiest for us.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-text-primary'>
                  What happens if I need changes after the project ships?
                </h4>
                <p className='mt-2 text-sm text-text-secondary'>
                  Clients on a maintenance subscription can request reasonable
                  content and design updates as part of their plan. Larger
                  feature additions — a new booking system, a redesign of a
                  major section — are scoped and quoted separately, but
                  they're built on top of the existing site rather than
                  requiring a rebuild, since everything is structured to be
                  extended.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-text-primary'>
                  Can you work with branding we already have?
                </h4>
                <p className='mt-2 text-sm text-text-secondary'>
                  Absolutely — many of the projects in our portfolio started
                  with an existing logo, colour palette, or brand guideline
                  document, and our job was translating that identity into a
                  site that performs well rather than starting branding from
                  scratch. If you don't have established branding yet, we can
                  help shape a simple, consistent visual identity as part of
                  the design phase.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-text-primary'>
                  How involved do I need to be during the build?
                </h4>
                <p className='mt-2 text-sm text-text-secondary'>
                  As involved as you want to be. Some clients review every
                  milestone in detail; others prefer to give us direction up
                  front and review the finished result. Either way, we keep a
                  single point of contact throughout so you're never chasing
                  down different people for design questions, development
                  questions, and billing questions.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-text-primary'>
                  Will my site actually rank well in search results?
                </h4>
                <p className='mt-2 text-sm text-text-secondary'>
                  Every site we build starts with technical SEO fundamentals
                  baked in from day one — clean semantic markup, fast load
                  times, proper heading structure, descriptive metadata, and a
                  submitted sitemap — rather than treated as an afterthought
                  bolted on after launch. That foundation won't guarantee a
                  first-page ranking by itself, since rankings also depend on
                  competition and content over time, but it removes the
                  technical ceiling that quietly caps how well a poorly-built
                  site can ever perform, no matter how much content gets added
                  to it later. Clients on our SEO-inclusive plans also get
                  ongoing keyword and content recommendations as part of their
                  monthly subscription.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
};

export default PortfolioProcess;
