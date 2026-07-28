import React from "react";
import Container from "../../components/ui/Container";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing the use of DIS Private Limited's website design, maintenance, SEO, and digital marketing subscription services.",
  alternates: { canonical: "/terms" },
};

const Section = ({ title, children }) => (
  <section>
    <h2 className='mb-4 font-display text-2xl font-bold text-text-primary'>{title}</h2>
    <div className='space-y-4'>{children}</div>
  </section>
);

const Terms = () => {
  return (
    <div className='bg-bg-base py-section'>
      <Container>
        <div className='mx-auto max-w-4xl rounded-xl border border-border bg-bg-surface2 p-6 text-text-secondary shadow-card sm:p-10 lg:p-14'>
          <img className='mx-auto h-24 w-auto' src='/logo.png' alt='DIS Logo' />

          <h1 className='my-8 font-display text-2xl font-bold text-text-primary sm:text-3xl'>
            Terms &amp; Conditions
          </h1>
          <p className='-mt-4 mb-10 text-sm text-text-muted'>Last updated: 30 June 2026</p>

          <div className='space-y-10 leading-relaxed'>
            <Section title='1. Introduction and Acceptance'>
              <p>
                These Terms &amp; Conditions ("Terms") govern your access to and use of the website
                located at this domain (the "Site") and the website design, website maintenance, search
                engine optimisation, and digital marketing services (collectively, the "Services") provided
                by DIS Private LTD ("DIS", "the Company", "we", "us", or "our"), a company providing
                subscription-based web design and digital marketing services to clients in Australia, the
                United States, and internationally.
              </p>
              <p>
                By accessing this Site, requesting a consultation, signing a proposal, or subscribing to any
                of our packages, you ("Client", "you", or "your") confirm that you have read, understood,
                and agree to be bound by these Terms and our Privacy Policy. If you do not agree with any
                part of these Terms, you should discontinue use of the Site and refrain from engaging our
                Services.
              </p>
              <p>
                We may update these Terms from time to time to reflect changes in our Services, legal
                requirements, or business practices. Where changes are material, we will make reasonable
                efforts to notify active subscribers by email at least 14 days before the changes take
                effect. Continued use of the Services after that point constitutes acceptance of the revised
                Terms.
              </p>
            </Section>

            <Section title='2. Definitions'>
              <p>
                "Subscription Plan" means any recurring website design, maintenance, SEO, or marketing
                package purchased through the Site or via a signed proposal. "Deliverables" means the
                websites, designs, content, reports, or other work product created by DIS for the Client
                under a Subscription Plan or one-off project. "Content" means any text, images, logos,
                trademarks, or other material supplied by the Client for use in the Deliverables.
                "Confidential Information" means any non-public business, technical, or financial
                information disclosed by either party in connection with the Services.
              </p>
            </Section>

            <Section title='3. Our Services'>
              <p>
                DIS provides subscription-based packages covering business websites, e-commerce websites,
                ongoing website maintenance, technical SEO, content-driven SEO, and digital marketing
                support. The exact scope of Deliverables, timelines, and monthly fees for your engagement
                are set out in your selected package, order confirmation, or signed proposal, which forms
                part of these Terms by reference. Where there is a conflict between a signed proposal and
                these Terms, the signed proposal takes precedence for the specific items it covers.
              </p>
              <p>
                We reserve the right to adjust, rebrand, discontinue, or introduce new packages and
                features at our discretion. Where a change materially reduces what is included in your
                active Subscription Plan, we will notify you in advance and offer a reasonable alternative
                or adjustment.
              </p>
            </Section>

            <Section title='4. Client Responsibilities'>
              <p>
                To deliver your project on schedule, we rely on timely cooperation from you. You agree to:
              </p>
              <ul className='list-disc space-y-2 pl-6'>
                <li>Provide accurate business information, branding assets, and Content in a timely manner;</li>
                <li>Respond to requests for feedback, approvals, or revisions within a reasonable timeframe;</li>
                <li>Ensure you have the legal right to use any Content, trademarks, or third-party material you provide to us;</li>
                <li>Keep your account, billing, and contact details current; and</li>
                <li>Use the Deliverables and any associated admin access in a lawful manner.</li>
              </ul>
              <p>
                Delays caused by the Client in providing Content, feedback, or approvals may extend agreed
                delivery timelines proportionally, and DIS will not be liable for delays arising from such
                circumstances.
              </p>
            </Section>

            <Section title='5. Fees, Billing, and Payment'>
              <p>
                Subscription fees are billed monthly or as otherwise agreed in your selected package, and
                are due on the billing date shown on your invoice. One-off project work typically requires
                a deposit of 50% of the total project fee before work begins, with the balance due on
                delivery or as scheduled in the proposal.
              </p>
              <p>
                We accept payment via major debit and credit cards, bank transfer, and other methods made
                available at checkout or by invoice. If a payment is not received within 10 days of the due
                date, we will send a reminder; if payment remains outstanding after 20 days, we may suspend
                Services and, ultimately, terminate the agreement. A project paused due to non-payment may
                be reinstated upon payment of the outstanding balance plus a reinstatement fee, details of
                which will be provided at the time.
              </p>
              <p>
                Subscription fees are billed in advance and are non-refundable for the period already
                billed, except where required by applicable consumer protection law. Deposits for one-off
                projects are non-refundable once design or development work has commenced, reflecting the
                time and resources already committed. Refunds, where applicable, are issued to the original
                payment method and exclude any third-party costs already incurred on your behalf (such as
                domain registration, hosting, stock assets, or paid plugin licences).
              </p>
            </Section>

            <Section title='6. Ownership and Intellectual Property'>
              <p>
                Upon full payment for a Deliverable, ownership of the final website design and custom code
                created specifically for you transfers to the Client, excluding any pre-existing tools,
                frameworks, templates, or proprietary systems owned by DIS or third-party licensors, which
                remain the property of their respective owners and are licensed to you for use in
                connection with your website. Until full payment is received, all Deliverables remain the
                property of DIS.
              </p>
              <p>
                You retain ownership of all Content you provide to us. You grant DIS a limited licence to
                use that Content solely for the purpose of designing, building, hosting, and marketing your
                website during the term of our engagement. Unless you opt out in writing, DIS may reference
                completed projects (including screenshots and a brief description) in our portfolio and
                marketing materials.
              </p>
            </Section>

            <Section title='7. Revisions and Change Requests'>
              <p>
                Each package includes a defined number of revision rounds, as set out in your Subscription
                Plan or proposal. Reasonable revisions within the original project scope are included at no
                extra charge. Requests that materially expand the original scope, add new pages or
                features, or fall outside your plan's monthly maintenance allowance will be quoted
                separately before any additional work begins.
              </p>
            </Section>

            <Section title='8. Website Maintenance and Hosting'>
              <p>
                For Clients on a maintenance plan, DIS will perform agreed maintenance tasks such as
                software and plugin updates, security monitoring, routine backups, and minor content
                updates within the limits of your plan. Maintenance plans do not cover damage caused by
                third-party plugins not installed by us, unauthorised changes made by the Client or a third
                party, or issues arising from hosting providers outside our control. Where we manage hosting
                on your behalf, hosting fees are billed separately or included in your plan as specified at
                signup.
              </p>
            </Section>

            <Section title='9. Cancellation and Termination'>
              <p>
                You may cancel a Subscription Plan at any time by providing written notice (email is
                sufficient) at least 14 days before your next billing date; cancellation will take effect at
                the end of the current billing cycle, and no partial refunds are issued for the remainder of
                a billed period. DIS may suspend or terminate Services immediately for non-payment, breach
                of these Terms, unlawful use of the Services, or abusive conduct toward our team.
              </p>
              <p>
                Upon termination, DIS will, upon request and subject to outstanding fees being settled,
                provide a copy of your website files and Content within a reasonable timeframe. We are not
                obligated to continue hosting, maintaining, or providing support for a cancelled or
                terminated account.
              </p>
            </Section>

            <Section title='10. Limitation of Liability'>
              <p>
                The Services and Deliverables are provided on an "as is" and "as available" basis. To the
                fullest extent permitted by law, DIS excludes all warranties not expressly stated in these
                Terms or in your proposal, and shall not be liable for indirect, incidental, special, or
                consequential damages, including loss of profits, business, or data, arising from your use
                of the Site, Services, or Deliverables, even where such loss was foreseeable.
              </p>
              <p>
                Nothing in these Terms excludes or limits liability for death or personal injury caused by
                our negligence, fraud, or any liability that cannot lawfully be excluded under Australian
                Consumer Law, U.S. state consumer protection law, or other applicable law. Where such laws
                apply and cannot be excluded, our liability is limited, at our option, to re-supply of the
                relevant Services or the cost of having the Services re-supplied.
              </p>
            </Section>

            <Section title='11. Third-Party Services and Links'>
              <p>
                Our Deliverables may integrate or link to third-party platforms, plugins, payment
                processors, hosting providers, or analytics tools. DIS is not responsible for the
                availability, security, content, or practices of third-party services, and your use of them
                is governed by their own terms and privacy policies. We encourage you to review those
                policies before relying on third-party services connected to your website.
              </p>
            </Section>

            <Section title='12. Confidentiality'>
              <p>
                Each party agrees to keep the other's Confidential Information secret and to use it only as
                necessary to perform under these Terms, except where disclosure is required by law or
                agreed in writing. This obligation survives termination of our engagement.
              </p>
            </Section>

            <Section title='13. Force Majeure'>
              <p>
                Neither party will be liable for delay or failure to perform an obligation under these
                Terms where such delay or failure results from circumstances beyond that party's reasonable
                control, including natural disasters, acts of government, internet or utility outages, or
                widespread disruption to hosting or payment infrastructure. The affected party will notify
                the other as soon as reasonably possible and resume performance once the circumstances
                cease.
              </p>
            </Section>

            <Section title='14. Governing Law'>
              <p>
                These Terms are governed by the laws applicable in New South Wales, Australia, for Clients
                contracting with our Australian entity, or the laws of the State of Florida, United States,
                for Clients contracting with our U.S. entity, without regard to conflict-of-law principles.
                Nothing in this clause limits any mandatory consumer protections available to you under the
                law of your country of residence.
              </p>
            </Section>

            <Section title='15. Changes to These Terms'>
              <p>
                We may revise these Terms from time to time, and the updated version will be posted on this
                page with a new "Last updated" date. Material changes affecting active subscribers will be
                communicated by email in advance, as described in Section 1.
              </p>
            </Section>

            <Section title='16. Contact Us'>
              <p>
                If you have questions about these Terms, please contact us at{" "}
                <a href='mailto:disprivateltd@gmail.com' className='text-accent-blue-400 hover:underline'>
                  disprivateltd@gmail.com
                </a>{" "}
                or at one of the addresses listed in our website footer.
              </p>
            </Section>

            <p className='border-t border-border pt-8 text-sm text-text-muted'>
              By using this Site or subscribing to our Services, you acknowledge that you have read and
              understood these Terms &amp; Conditions and agree to be bound by them. Your statutory consumer
              rights are not affected.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
