import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import Reveal from "../motion/Reveal";

const AccordianFa = () => {
  const data = [
    {
      id: 1,
      title:
        "What happens if I want to cancel my subscription before the 24 months are up?",
      desc: "You are obligated to fulfill the 24-months subscription term. However, ongoing website support will end upon cancellation.",
    },

    {
      id: 3,
      title: "Can I see and review my website before it goes live?",
      desc: "Yes! You’ll have an opportunity to review and provide feedback during the design phase and after the website is complete.",
    },

    {
      id: 5,
      title: "Who owns the content I put on my website?",
      desc: "You retain full ownership of your content. However, you grant us permission to use it for the purposes of building and maintaining your website.",
    },

    {
      id: 7,
      title: "Who will provide the hosting for my website?",
      desc: "The hosting will be provided by us based on the package you choose and the complexity it has. ",
    },
  ];

  const data2 = [
    {
      id: 2,
      title: "What if I don't provide website content (texts, images) on time?",
      desc: "Delays in providing content may result in a surcharge to cover additional development time.",
    },
    {
      id: 4,
      title: "What happens if I don't pay my monthly bill on time?",
      desc: "If a monthly payment is missed, we will send reminders for 30 days. If the payment is not settled within this period, and no agreement is made within 60 days, legal actions may be taken to recover the dues, which could include additional legal fees.",
    },
    {
      id: 6,
      title:
        "What will be the turn-around time to final delivery of the website?",
      desc: "The time it takes to deliver your website depends on the subscription package you select and the complexity of your website’s design and features.",
    },
    {
      id: 8,
      title:
        "Why choose a monthly subscription model for web development instead of a one-time payment?",
      desc: "A one-time payment requires a large upfront cost and only covers development. DIS’s monthly subscription model, on the other hand, spreads out your payments into smaller, more manageable amounts, ensuring your site stays up-to-date all year round.",
    },
  ];

  return (
    <div className='flex flex-col sm:flex-row items-start gap-5 mt-16'>
      {" "}
      <div className='flex flex-col gap-5 w-full sm:w-6/12'>
        {data?.map((a) => (
          <Reveal direction='up' key={a?.id}>
            <Accordion
              type='single'
              collapsible
              className='rounded-t-3xl border border-border-subtle bg-bg-surface2'
            >
              <AccordionItem value={a?.id} className='p-5 border-b-0'>
                <AccordionTrigger className='text-xl text-start hover:no-underline'>
                  {a?.title}
                </AccordionTrigger>
                <AccordionContent className='text-text-secondary'>{a?.desc}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
        ))}
      </div>
      <div className='flex flex-col gap-5 w-full sm:w-6/12'>
        {data2?.map((a) => (
          <Reveal direction='up' key={a?.id}>
            <Accordion
              type='single'
              collapsible
              className='rounded-t-3xl border border-border-subtle bg-bg-surface2'
            >
              <AccordionItem value={a?.id} className='p-5 border-b-0'>
                <AccordionTrigger className='text-xl text-start hover:no-underline'>
                  {a?.title}
                </AccordionTrigger>
                <AccordionContent className='text-text-secondary'>{a?.desc}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default AccordianFa;
