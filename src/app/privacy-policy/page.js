import React from "react";
import Container from "../../components/ui/Container";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how DIS Private Limited collects, uses, and protects your personal data when you use our website design, maintenance, SEO, and marketing services.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const Section = ({ title, children }) => (
  <section>
    <h2 className='mb-4 font-display text-2xl font-bold text-text-primary'>{title}</h2>
    <div className='space-y-4'>{children}</div>
  </section>
);

const Privacy = () => {
  return (
    <div className='bg-bg-base py-section'>
      <Container>
        <div className='mx-auto max-w-4xl rounded-xl border border-border bg-bg-surface2 p-6 text-text-secondary shadow-card sm:p-10 lg:p-14'>
          <h1 className='mb-2 font-display text-display-sm font-bold text-text-primary sm:text-display-md'>
            Privacy Policy
          </h1>
          <p className='mb-10 text-sm text-text-muted'>Last updated: 30 June 2026</p>

          <div className='space-y-10 leading-relaxed'>
            <Section title='1. Introduction'>
              <p>
                DIS Private LTD ("DIS", "we", "us", or "our") provides subscription-based website design,
                website maintenance, SEO, and digital marketing services to clients in Australia, the
                United States, and around the world. We take the privacy of everyone who visits our website
                or uses our Services seriously, and this Privacy Policy explains what personal data we
                collect, why we collect it, how we use and protect it, and the choices you have.
              </p>
              <p>
                By visiting our website, submitting an enquiry, or subscribing to any of our Services, you
                acknowledge that you have read and understood this Privacy Policy. If you do not agree with
                how we handle personal data as described here, please do not use our website or Services.
                We may update this Privacy Policy from time to time; the "Last updated" date above reflects
                the most recent revision, and material changes will be highlighted on this page.
              </p>
            </Section>

            <Section title='2. What Personal Data We Collect'>
              <p>We collect personal data in a few different ways, depending on how you interact with us:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong className='text-text-primary'>Information you give us directly</strong> — your
                  name, email address, phone number, business name, and project details when you fill out a
                  contact form, request a consultation, or sign up for a Subscription Plan;
                </li>
                <li>
                  <strong className='text-text-primary'>Billing information</strong> — billing name, address,
                  and payment details, processed securely by our third-party payment provider (we do not
                  store full card numbers on our own servers);
                </li>
                <li>
                  <strong className='text-text-primary'>Content you provide</strong> — logos, images, copy,
                  and other material you upload for use on your website;
                </li>
                <li>
                  <strong className='text-text-primary'>Technical and usage data</strong> — your IP address,
                  browser type, device type, pages visited, referring URL, and timestamps, collected
                  automatically through standard server logs and analytics tools when you browse our Site;
                  and
                </li>
                <li>
                  <strong className='text-text-primary'>Communications</strong> — records of emails, support
                  tickets, and calls between you and our team, kept so we can maintain continuity of
                  service.
                </li>
              </ul>
            </Section>

            <Section title='3. Cookies and Similar Technologies'>
              <p>
                Like most websites, we use cookies and similar technologies to remember your preferences,
                understand how visitors use our Site, and improve performance. This includes essential
                cookies required for the Site to function, and analytics cookies (such as Google Analytics)
                that help us understand traffic patterns in aggregate. You can disable cookies through your
                browser settings at any time; doing so may affect some functionality of the Site.
              </p>
            </Section>

            <Section title='4. How We Use Your Personal Data'>
              <p>We use the personal data we collect to:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Provide, operate, and maintain the website design and marketing Services you've subscribed to;</li>
                <li>Communicate with you about your project, invoices, and account, including responding to support requests;</li>
                <li>Process payments and manage billing for Subscription Plans and one-off projects;</li>
                <li>Improve our Site, Services, and customer experience based on usage trends;</li>
                <li>Send you service updates and, where you've opted in, marketing communications about new packages or offers; and</li>
                <li>Detect, investigate, and prevent fraud, abuse, or activity that violates our Terms & Conditions.</li>
              </ul>
              <p>
                We do not sell your personal data to third parties, and we only use your email address to
                send marketing communications if you have opted in; you can unsubscribe at any time using
                the link in any marketing email or by contacting us directly.
              </p>
            </Section>

            <Section title='5. How We Share Your Information'>
              <p>
                We disclose personal data only where necessary to operate our business, and always under
                appropriate confidentiality and security obligations. This may include:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>
                  <strong className='text-text-primary'>Service providers</strong> — hosting companies,
                  payment processors, email delivery platforms, and analytics providers who process data on
                  our behalf, solely to help us deliver the Services;
                </li>
                <li>
                  <strong className='text-text-primary'>Professional advisers</strong> — accountants or legal
                  counsel, where reasonably necessary;
                </li>
                <li>
                  <strong className='text-text-primary'>Legal and regulatory bodies</strong> — where required
                  to comply with applicable law, a court order, or a valid governmental request; and
                </li>
                <li>
                  <strong className='text-text-primary'>A successor business</strong> — in the event of a
                  merger, acquisition, or sale of assets, subject to the same privacy commitments described
                  here.
                </li>
              </ul>
              <p>
                We never share or rent your personal data to third parties for their own independent
                marketing purposes without your explicit consent.
              </p>
            </Section>

            <Section title='6. Data Security'>
              <p>
                We implement reasonable technical and organisational measures to protect personal data
                against unauthorised access, alteration, disclosure, or destruction, including encrypted
                connections, access controls limiting data access to authorised personnel only, and secure
                hosting infrastructure. No method of transmission or storage is completely secure, and while
                we work hard to protect your data, we cannot guarantee its absolute security.
              </p>
            </Section>

            <Section title='7. Data Retention'>
              <p>
                We retain personal data for as long as necessary to provide the Services, maintain our
                business records, and comply with legal, accounting, or reporting obligations (such as tax
                law). When personal data is no longer needed for these purposes, we securely delete or
                anonymise it. If you cancel your Subscription Plan, we may retain billing records for the
                period required by applicable law, even after deleting other account data.
              </p>
            </Section>

            <Section title='8. Your Rights'>
              <p>Depending on where you are located, you may have the right to:</p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Request access to the personal data we hold about you;</li>
                <li>Request correction of inaccurate or incomplete personal data;</li>
                <li>Request deletion of your personal data, subject to our legal retention obligations;</li>
                <li>Object to or restrict certain processing of your personal data; and</li>
                <li>Withdraw consent at any time where we rely on consent to process your data.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us using the details in Section 11. We will respond
                to verified requests within a reasonable timeframe and in accordance with applicable privacy
                law, which may include the Australian Privacy Act 1988 and relevant U.S. state privacy laws
                depending on your location.
              </p>
            </Section>

            <Section title='9. International Data Transfers'>
              <p>
                As we operate across Australia and the United States and rely on service providers in
                various locations, your personal data may be processed and stored outside the country in
                which you reside. Where this occurs, we take reasonable steps to ensure your data continues
                to receive an appropriate level of protection, consistent with this Privacy Policy and
                applicable law.
              </p>
            </Section>

            <Section title="10. Children's Privacy">
              <p>
                Our Services are intended for businesses and individuals over the age of 18, and our Site is
                not directed at children. We do not knowingly collect personal data from anyone under the
                age of 16. If you believe a child has provided us with personal data, please contact us and
                we will take steps to delete it.
              </p>
            </Section>

            <Section title='11. Contact Us'>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we
                handle your personal data, please reach out to us at{" "}
                <a href='mailto:disprivateltd@gmail.com' className='text-accent-blue-400 hover:underline'>
                  disprivateltd@gmail.com
                </a>{" "}
                or{" "}
                <a href='mailto:ziaulhaquecpa@gmail.com' className='text-accent-blue-400 hover:underline'>
                  ziaulhaquecpa@gmail.com
                </a>
                . You can also reach us by phone or post at either of the addresses listed in our website
                footer — our Australia office at 59 Marshall St, Cobar NSW 2835, or our U.S. office at 8000
                Baymeadows Cir E, Apt# 22, Jacksonville, FL 32256.
              </p>
            </Section>

            <Section title='12. Changes to This Policy'>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices, Services,
                or legal requirements. We will post the revised policy on this page with an updated "Last
                updated" date, and where changes are material, we will make reasonable efforts to notify
                active clients directly.
              </p>
            </Section>

            <p className='border-t border-border pt-8 text-sm text-text-muted'>
              This Privacy Policy works alongside our{" "}
              <a href='/terms' className='text-accent-blue-400 hover:underline'>
                Terms &amp; Conditions
              </a>
              . If anything here is unclear, please get in touch — we're happy to walk through it with you.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;
