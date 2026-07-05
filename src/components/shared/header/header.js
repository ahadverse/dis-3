"use client";
import React, { useState } from "react";
import style from "./header.module.css";
import Link from "next/link";
import { Menu, Drawer } from "@mantine/core";
import { Menu as MenuIcon, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/shared/ThemeToggle";

const SERVICES_LINKS = [
  {
    href: "/services/website-design-and-development",
    label: "Website Design & Development",
  },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  {
    href: "/services/search-engine-optimization",
    label: "Search Engine Optimization (SEO)",
  },
  {
    href: "/services/social-media-marketing",
    label: "Social Media Marketing",
  },
  { href: "/services/lead-generation", label: "Lead Generation" },
  { href: "/services/training", label: "Training" },
];

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/portfolios", label: "Portfolios" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blogs", label: "Blogs" },
];

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className='sticky top-0 z-50 border-b border-border-subtle bg-bg-base/70 backdrop-blur-xl'>
      <Container className='flex h-[75px] items-center justify-between'>
        <Link href='/'>
          <img alt='DIS Private LTD logo' className='w-[60px]' src={"/logo.png"} />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex'>
          <ul className='flex w-[450px] items-center justify-between gap-4 font-semibold text-text-secondary'>
            <li>
              <Link className='text-[16px] transition-colors hover:text-text-primary' href={"/about"}>
                About
              </Link>
            </li>

            <Menu position='bottom-start' withArrow trigger='hover' className='bg-transparent'>
              <Menu.Target>
                <li className='flex cursor-pointer items-center gap-1 text-[16px] transition-colors hover:text-text-primary'>
                  Services <ChevronDown size={14} />
                </li>
              </Menu.Target>

              <Menu.Dropdown
                styles={{
                  dropdown: {
                    backdropFilter: "blur(16px)",
                    backgroundColor: "var(--bg-surface-3)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-default)",
                  },
                }}
              >
                {SERVICES_LINKS.map((service) => (
                  <Menu.Item key={service.href} className='!bg-transparent hover:!bg-white/5'>
                    <Link href={service.href} className='block w-[280px] py-1 text-[15px] text-text-secondary hover:text-accent-blue-400'>
                      {service.label}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>

            {NAV_LINKS.filter((l) => l.href !== "/about").map((link) => (
              <li key={link.href}>
                <Link className='text-[16px] transition-colors hover:text-text-primary' href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden md:flex items-center gap-3'>
          <ThemeToggle />
          <Link href={"/login"} className={style.login}>
            Login
          </Link>
        </div>

        {/* Mobile right group */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className='p-2 text-text-primary'
            aria-label='Open menu'
            onClick={() => setDrawerOpened(true)}
          >
            <MenuIcon size={24} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          opened={drawerOpened}
          onClose={() => setDrawerOpened(false)}
          position='right'
          padding='md'
          size='75%'
          styles={{
            content: { backgroundColor: "var(--bg-surface-1)", color: "var(--text-primary)" },
            header: { backgroundColor: "var(--bg-surface-1)" },
            close: { color: "var(--text-secondary)" },
          }}
        >
          <nav className='flex flex-col gap-1'>
            <Link
              href='/about'
              onClick={() => setDrawerOpened(false)}
              className='rounded px-4 py-3 text-[16px] font-semibold text-accent-blue-400 hover:bg-white/5'
            >
              About
            </Link>

            <div className='flex flex-col'>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className='flex items-center justify-between rounded px-4 py-3 text-[16px] font-semibold text-accent-blue-400 hover:bg-white/5'
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <ul className='ml-4 flex flex-col gap-2 py-2'>
                  {SERVICES_LINKS.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        onClick={() => {
                          setDrawerOpened(false);
                          setServicesOpen(false);
                        }}
                        className='block rounded px-2 py-1 text-sm text-text-secondary hover:bg-white/5'
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {NAV_LINKS.filter((l) => l.href !== "/about").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpened(false)}
                className='rounded px-4 py-3 text-[16px] font-semibold text-accent-blue-400 hover:bg-white/5'
              >
                {link.label}
              </Link>
            ))}

            <hr className='my-3 border-border-subtle' />

            <Link
              href='/login'
              onClick={() => setDrawerOpened(false)}
              className='rounded bg-gradient-primary px-4 py-3 text-center text-[16px] font-semibold text-white'
            >
              Login
            </Link>
          </nav>
        </Drawer>
      </Container>
    </div>
  );
};

export default Header;
