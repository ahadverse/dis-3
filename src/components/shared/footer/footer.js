import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";

const Footer = () => {
  return (
    <footer className='relative isolate mt-section overflow-hidden border-t border-border-subtle bg-bg-surface1 py-16 text-text-secondary'>
      <div className='pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-blue-500/10 blur-[120px]' />

      <Container className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        {/* Contact Us Section */}
        <div>
          <h4 className='mb-4 text-lg font-bold text-text-primary'>
            Contact Us
          </h4>
          <p className='mb-4 flex gap-2 text-sm'>
            <MapPin
              size={16}
              className='mt-0.5 shrink-0 text-accent-blue-400'
            />
            <span>
              <strong className='text-text-primary'>AUS:</strong> 59 Marshall
              St, Cobar NSW 2835
              <span className='mt-1 flex items-center gap-1.5'>
                <Phone size={13} /> +61 483 955 567
              </span>
            </span>
          </p>
          <p className='flex gap-2 text-sm'>
            <MapPin
              size={16}
              className='mt-0.5 shrink-0 text-accent-blue-400'
            />
            <span>
              <strong className='text-text-primary'>US:</strong> 8000 BAYMEADOWS
              cir E, Apt# 22, Jacksonville, FL 32256, USA
              <span className='mt-1 flex items-center gap-1.5'>
                <Phone size={13} /> +1 (347) 656-3882
              </span>
            </span>
          </p>
        </div>

        <div>
          <h4 className='mb-4 text-lg font-bold text-text-primary'>
            Drop us a line
          </h4>
          <div className='flex flex-col gap-2 text-sm'>
            <a
              href='mailto:ziaulhaquecpa@gmail.com'
              className='flex items-center gap-2 hover:text-accent-blue-400'
            >
              <Mail size={14} /> ziaulhaquecpa@gmail.com
            </a>
            <a
              href='mailto:disprivateltd@gmail.com'
              className='flex items-center gap-2 hover:text-accent-blue-400'
            >
              <Mail size={14} /> disprivateltd@gmail.com
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4 className='mb-3 text-lg font-bold text-text-primary'>Services</h4>
          <ul className='space-y-1.5 text-sm'>
            <li>E-commerce Web Development</li>
            <li>Business Web Development</li>
            <li>Website Maintenance</li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className='mb-3 text-lg font-bold text-text-primary'>
            Important Links
          </h4>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='/terms' className='hover:text-accent-blue-400'>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href='/privacy-policy' className='hover:text-accent-blue-400'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='mb-3 text-lg font-bold text-text-primary'>Company</h4>
          <ul className='space-y-1.5 text-sm'>
            <li>
              <a href='/about' className='hover:text-accent-blue-400'>
                About
              </a>
            </li>
            <li>
              <a href='/portfolios' className='hover:text-accent-blue-400'>
                Portfolios
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:text-accent-blue-400'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <hr className='mx-auto mt-10 w-11/12 max-w-[1200px] border-border-subtle' />

      <Container className='mt-4 flex flex-col items-center justify-between gap-2 pt-2 text-center text-sm sm:flex-row'>
        <p>
          &copy; {new Date().getFullYear()} DIS Private LTD. All rights
          reserved.
        </p>
        <p>
          Design and Develop By{" "}
          <Link
            href={"https://ahad-hossain.netlify.app/"}
            className='text-accent-blue-400 hover:underline'
          >
            Ahad Hossain
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
