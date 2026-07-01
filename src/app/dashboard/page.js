"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, MessageSquare, Mail, CalendarDays } from "lucide-react";
import { getAllBlogs } from "../../lib/actions/blogActions";
import { getContacts } from "../../lib/actions/contactActions";
import { getConsultations } from "../../lib/actions/consultationActions";
import { getSubscribers } from "../../lib/actions/subscriberActions";
import Card from "@/components/ui/Card";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import Reveal from "@/components/motion/Reveal";

// Static lookup for stat-card accent classes — dynamic template strings like
// `bg-${color}-50` are not detected by Tailwind's JIT compiler, so each
// variant must be spelled out here (same pattern as Button's VARIANT_CLASSES).
const STAT_COLOR_CLASSES = {
  blue: {
    iconWrap: "bg-accent-blue-500/15 text-accent-blue-400",
    border: "hover:border-accent-blue-500/40",
  },
  green: {
    iconWrap: "bg-success/15 text-success",
    border: "hover:border-success/40",
  },
  purple: {
    iconWrap: "bg-accent-blue-500/15 text-accent-blue-400",
    border: "hover:border-accent-blue-500/40",
  },
  amber: {
    iconWrap: "bg-amber-500/15 text-amber-400",
    border: "hover:border-amber-500/40",
  },
};

export default function DashboardPage() {
  const [stats, setStats] = useState({
    blogs: 0,
    contacts: 0,
    consultations: 0,
    subscribers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      const [blogsResult, contactsResult, consultationsResult, subscribersResult] =
        await Promise.all([
          getAllBlogs(),
          getContacts({ limit: 1 }),
          getConsultations({ limit: 1 }),
          getSubscribers({ limit: 1 }),
        ]);

      setStats({
        blogs: blogsResult.blogs?.length || 0,
        contacts: contactsResult.pagination?.totalCount || 0,
        consultations: consultationsResult.pagination?.totalCount || 0,
        subscribers: subscribersResult.pagination?.totalCount || 0,
      });
      setLoading(false);
    }

    loadStats();
  }, []);

  const statCards = [
    {
      label: "Total Blogs",
      value: stats.blogs,
      icon: FileText,
      link: "/dashboard/blogs",
      color: "blue",
    },
    {
      label: "Contact Messages",
      value: stats.contacts,
      icon: MessageSquare,
      link: "/dashboard/contacts",
      color: "green",
    },
    {
      label: "Consultations",
      value: stats.consultations,
      icon: CalendarDays,
      link: "/dashboard/consultations",
      color: "amber",
    },
    {
      label: "Subscribers",
      value: stats.subscribers,
      icon: Mail,
      link: "/dashboard/subscribers",
      color: "purple",
    },
  ];

  return (
    <div>
      <h1 className="font-display text-4xl font-bold text-text-primary mb-8">
        Dashboard
      </h1>

      {loading ? (
        <div className="text-center py-12 text-text-secondary">
          Loading statistics...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, i) => {
            const Icon = card.icon;
            const colorClasses =
              STAT_COLOR_CLASSES[card.color] || STAT_COLOR_CLASSES.blue;
            return (
              <Reveal key={card.label} direction="up" delay={i * 0.08}>
                <Link href={card.link}>
                  <Card className={colorClasses.border}>
                    <div className="flex items-center justify-between p-6">
                      <div>
                        <p className="text-text-secondary text-sm">
                          {card.label}
                        </p>
                        <p className="text-4xl font-bold text-text-primary mt-2">
                          <AnimatedCounter value={card.value} />
                        </p>
                      </div>
                      <div
                        className={`rounded-full p-4 ${colorClasses.iconWrap}`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      )}

      <Card hover={false} className="p-6">
        <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/dashboard/blogs"
            className="p-4 bg-accent-blue-500/10 text-accent-blue-400 rounded-lg hover:bg-accent-blue-500/20 transition-colors duration-200 font-semibold text-center"
          >
            View Blogs
          </Link>
          <Link
            href="/dashboard/contacts"
            className="p-4 bg-success/10 text-success rounded-lg hover:bg-success/20 transition-colors duration-200 font-semibold text-center"
          >
            View Contacts
          </Link>
          <Link
            href="/dashboard/consultations"
            className="p-4 bg-amber-500/10 text-amber-400 rounded-lg hover:bg-amber-500/20 transition-colors duration-200 font-semibold text-center"
          >
            View Consultations
          </Link>
          <Link
            href="/dashboard/subscribers"
            className="p-4 bg-accent-blue-500/10 text-accent-blue-400 rounded-lg hover:bg-accent-blue-500/20 transition-colors duration-200 font-semibold text-center"
          >
            View Subscribers
          </Link>
        </div>
      </Card>
    </div>
  );
}
