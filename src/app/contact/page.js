import React, { Suspense } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Container from "../../components/ui/Container";
import Calender_Modal from "../../components/calendermodal/calendermodal";
import Reveal from "../../components/motion/Reveal";
import StaggerGrid, { StaggerItem } from "../../components/motion/StaggerGrid";
import ContactForm from "../../components/contact/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DIS Private Limited to discuss website design, maintenance, SEO, and digital marketing for your business. Book a free 30-minute consultation today.",
  keywords: ["contact dis private limited", "book a consultation", "get a quote seo web design"],
  alternates: { canonical: "/contact" },
};

const Contact = () => {
  return (
    <div className='bg-bg-base py-section'>
      <Container>
        <div className='mx-auto max-w-4xl'>
          <div className='text-center'>
            <Reveal direction='up'>
              <h1 className='font-display text-display-sm font-bold text-text-primary sm:text-display-md'>
                Let's Talk About Your Project
              </h1>
            </Reveal>
            <Reveal direction='up' delay={0.08}>
              <p className='mx-auto mt-6 max-w-2xl text-base text-text-secondary sm:text-lg'>
                Fill in the form below and we'll get back to you within one
                business day. Or book a free 30-minute call if you'd prefer
                to talk it through first.
              </p>
            </Reveal>
          </div>

          <Reveal direction='up' delay={0.12}>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start'>
              {/* Contact Form */}
              <div className='lg:col-span-3 rounded-xl border border-border bg-bg-surface2 p-6 shadow-card'>
                <h2 className='font-display text-xl font-bold text-text-primary mb-6'>
                  Send us a message
                </h2>
                <Suspense>
                  <ContactForm />
                </Suspense>
              </div>

              {/* Schedule Call */}
              <div className='lg:col-span-2 rounded-xl border border-border bg-bg-surface2 p-6 shadow-card'>
                <h2 className='font-display text-xl font-bold text-text-primary mb-3'>
                  Or book a free call
                </h2>
                <p className='text-sm text-text-secondary mb-6'>
                  Prefer to talk? Pick a time that suits you and we'll have a
                  no-obligation 30-minute conversation about your project.
                </p>
                <Calender_Modal />
              </div>
            </div>
          </Reveal>
        </div>

        <StaggerGrid className='mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2'>
          <StaggerItem className='rounded-xl border border-border bg-bg-surface2 p-6 shadow-card'>
            <Mail className='text-accent-blue-400' size={22} />
            <h3 className='mt-3 font-semibold text-text-primary'>Email Us</h3>
            <div className='mt-2 space-y-1 text-sm text-text-secondary'>
              <a href='mailto:disprivateltd@gmail.com' className='block hover:text-accent-blue-400'>
                disprivateltd@gmail.com
              </a>
              <a href='mailto:ziaulhaquecpa@gmail.com' className='block hover:text-accent-blue-400'>
                ziaulhaquecpa@gmail.com
              </a>
            </div>
          </StaggerItem>

          <StaggerItem className='rounded-xl border border-border bg-bg-surface2 p-6 shadow-card'>
            <Phone className='text-accent-blue-400' size={22} />
            <h3 className='mt-3 font-semibold text-text-primary'>Call Us</h3>
            <div className='mt-2 space-y-1 text-sm text-text-secondary'>
              <p>AUS: +61 483 955 567</p>
              <p>US: +1 (347) 656-3882</p>
            </div>
          </StaggerItem>

          <StaggerItem className='rounded-xl border border-border bg-bg-surface2 p-6 shadow-card'>
            <MapPin className='text-accent-blue-400' size={22} />
            <h3 className='mt-3 font-semibold text-text-primary'>Our Offices</h3>
            <div className='mt-2 space-y-1 text-sm text-text-secondary'>
              <p>AUS: 59 Marshall St, Cobar NSW 2835</p>
              <p>US: 8000 Baymeadows Cir E, Apt# 22, Jacksonville, FL 32256</p>
            </div>
          </StaggerItem>

          <StaggerItem className='rounded-xl border border-border bg-bg-surface2 p-6 shadow-card'>
            <Clock className='text-accent-blue-400' size={22} />
            <h3 className='mt-3 font-semibold text-text-primary'>Response Time</h3>
            <p className='mt-2 text-sm text-text-secondary'>
              We reply to most enquiries within one business day across both
              our Australian and U.S. offices.
            </p>
          </StaggerItem>
        </StaggerGrid>

        <div className='mx-auto mt-20 max-w-3xl'>
          <Reveal direction='up'>
            <h2 className='font-display text-2xl font-bold text-text-primary sm:text-3xl'>
              What Happens After You Reach Out
            </h2>
          </Reveal>
          <Reveal direction='up' delay={0.08}>
            <div className='mt-6 space-y-6 text-base leading-relaxed text-text-secondary'>
              <p>
                We deliberately keep our intake process simple, because the
                businesses that come to us are usually busy running those
                businesses — not looking for another lengthy form to fill out.
                Book a 30-minute consultation using the button above, send us
                an email, or call either office directly. Whichever you
                choose, here's what to expect next.
              </p>
              <p>
                <strong className='text-text-primary'>Step one — the conversation.</strong>{" "}
                On the call, we'll ask about your business, what your current
                site is (or isn't) doing for you, and what success looks like
                a few months from now. We're not trying to sell you the
                biggest package available; we're trying to understand whether
                a new build, a redesign, or a maintenance plan actually solves
                the problem you came to us with.
              </p>
              <p>
                <strong className='text-text-primary'>Step two — the proposal.</strong>{" "}
                Within a few business days, you'll receive a written proposal
                covering scope, timeline, and pricing for either a one-off
                project or one of our subscription plans. There's no pressure
                to decide on the spot — take it to your team, sit with it, and
                come back with questions whenever you're ready.
              </p>
              <p>
                <strong className='text-text-primary'>Step three — kickoff.</strong>{" "}
                Once you're ready to move forward, we'll send over a short
                intake form to collect branding assets, content, and access
                details, and assign you a single point of contact for the
                duration of the project. From there, our standard process
                takes over: discovery, design, build, launch, and — if you're
                on a subscription — ongoing maintenance after that.
              </p>
            </div>
          </Reveal>
        </div>

        <div className='mx-auto mt-20 max-w-3xl'>
          <Reveal direction='up'>
            <h2 className='font-display text-2xl font-bold text-text-primary sm:text-3xl text-center'>
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal direction='up' delay={0.08}>
            <div className='mt-8 space-y-6'>
              <div>
                <h3 className='font-semibold text-text-primary'>
                  I'm not sure if I need a new website or just maintenance — can we talk it through?
                </h3>
                <p className='mt-2 text-sm text-text-secondary'>
                  Absolutely, and honestly this is one of the most common
                  conversations we have. A surprising number of businesses
                  that think they need a full rebuild actually just need
                  better content, faster hosting, and a maintenance plan to
                  stop the slow decay that happens when nobody's updating a
                  site. We'll tell you honestly which one applies to you, even
                  if it means a smaller invoice for us.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-text-primary'>
                  Do you only work with businesses in Australia and the U.S.?
                </h3>
                <p className='mt-2 text-sm text-text-secondary'>
                  Those are where our offices are based, but our team works
                  remotely with clients internationally. If you're outside
                  either region, reach out anyway — time zone differences
                  rarely get in the way of a good working relationship.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-text-primary'>
                  Is the 30-minute consultation actually free?
                </h3>
                <p className='mt-2 text-sm text-text-secondary'>
                  Yes, with no obligation attached. It's a real conversation
                  about your project, not a disguised sales pitch — if we're
                  not the right fit, we'll say so and, where we can, point you
                  toward what kind of help you should be looking for instead.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-text-primary'>
                  What information should I bring to the call?
                </h3>
                <p className='mt-2 text-sm text-text-secondary'>
                  Nothing formal is required. It helps to have a rough idea of
                  your budget range, any existing branding or website you want
                  us to look at, and a sense of what you want visitors to do
                  once they land on your site — but if you don't have those
                  answers yet, that's part of what the conversation is for.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-text-primary'>
                  Can you handle everything — design, development, SEO, and hosting?
                </h3>
                <p className='mt-2 text-sm text-text-secondary'>
                  Yes. Our subscription plans are structured around being a
                  single point of accountability rather than making clients
                  manage separate relationships for each piece. Design,
                  development, and hosting coordination are all included at
                  the plan level. SEO is included in select plans or available
                  as an add-on — we'll outline what's covered in the proposal
                  based on your specific situation.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-text-primary'>
                  What if I've had a bad experience with a previous agency?
                </h3>
                <p className='mt-2 text-sm text-text-secondary'>
                  We hear this often, and it's one of the main reasons we
                  keep our processes transparent. The most common complaints
                  are: missed deadlines with no warning, no real point of
                  contact, sites that looked good on demo day but loaded
                  slowly or broke in search results, and being charged for
                  revisions that should have been included. None of those are
                  acceptable outcomes, and we'd rather lose a deal by being
                  honest about what we can deliver than win one by
                  overpromising. If your last agency burned you on a specific
                  issue, bring it up on the call — we'll tell you honestly
                  how we handle it differently.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-text-primary'>
                  How do I know if a subscription makes more sense than a one-off project?
                </h3>
                <p className='mt-2 text-sm text-text-secondary'>
                  For most businesses, a subscription makes more sense — not
                  because it's a better deal for us, but because a website
                  that nobody is watching after launch tends to quietly
                  accumulate problems: outdated plugins, security
                  vulnerabilities, search rankings that slip as competitors
                  update their content, and small bugs that go unfixed because
                  there's no budget left from the project to address them. A
                  one-off project makes sense if you have a trusted technical
                  resource in-house who can take over after launch. If you
                  don't, a subscription gives you that coverage without
                  needing to hire someone full-time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className='mx-auto mt-20 max-w-3xl'>
          <Reveal direction='up'>
            <h2 className='font-display text-2xl font-bold text-text-primary sm:text-3xl'>
              Who We Typically Work With
            </h2>
            <p className='mt-4 text-base text-text-secondary'>
              Our clients are usually in one of three situations: they're a
              new business that needs a professional site from scratch and
              doesn't want to spend months finding, briefing, and managing
              multiple freelancers; an established business whose current site
              no longer represents what they do and is actively costing them
              customers; or a growing business that has outgrown its original
              DIY setup and needs something that can scale with them. If any
              of those sound familiar, a 30-minute call is the fastest way to
              figure out what the right next step looks like for your
              specific situation. There's no obligation, and no minimum spend
              required to have the conversation.
            </p>
          </Reveal>
        </div>

        <div className='mx-auto mt-16 max-w-3xl text-center'>
          <Reveal direction='up'>
            <h2 className='font-display text-2xl font-bold text-text-primary sm:text-3xl'>
              Ready When You Are
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-base text-text-secondary'>
              There's no perfect time to fix a website that isn't working for
              you — the longer it sits unfinished, the more it costs in missed
              enquiries and lost search rankings. A 30-minute call costs
              nothing and gives you a clear picture of what's possible, what
              it costs, and how quickly it could be in front of your
              customers. Book a time that suits you and let's figure out the
              right next step together.
            </p>
            <div className='mt-8 flex justify-center'>
              <div className='w-full max-w-[415px]'>
                <Calender_Modal />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
