"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Mail,
  LogOut,
  Menu,
  CalendarDays,
} from "lucide-react";
import { logoutAdmin } from "../../lib/actions/authActions";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    setLoading(true);
    console.log("sdfsdfg");
    const result = await logoutAdmin();

    if (result.success) {
      router.push("/login");
      router.refresh();
    }
    setLoading(false);
  }

  const isActive = (path) => pathname === path;

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Blogs", path: "/dashboard/blogs", icon: FileText },
    { label: "Contacts", path: "/dashboard/contacts", icon: MessageSquare },
    { label: "Consultations", path: "/dashboard/consultations", icon: CalendarDays },
    { label: "Subscribers", path: "/dashboard/subscribers", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-bg-base flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-bg-surface1 border-r border-border-subtle text-text-primary transition-transform duration-300 ease-out lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-border-subtle">
          <h1 className="font-display text-2xl font-bold text-text-primary">
            DIS Admin
          </h1>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  active
                    ? "bg-accent-blue-500/15 text-accent-blue-400 border border-accent-blue-500/30"
                    : "text-text-secondary border border-transparent hover:bg-white/5 hover:text-text-primary"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-subtle">
          <button
            onClick={handleLogout}
            disabled={loading}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-error/15 text-error border border-error/30 hover:bg-error/25 transition-colors duration-200 disabled:opacity-50"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">
              {loading ? "Logging out..." : "Logout"}
            </span>
          </button>
        </div>
      </aside>

      {/* Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-bg-surface1 border-b border-border-subtle px-6 py-4 lg:py-6 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-white/5 hover:text-text-primary transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex-1 text-center lg:text-left lg:ml-8">
            <h2 className="font-display text-xl font-bold text-text-primary">
              Dashboard
            </h2>
          </div>

          <div className="text-right text-sm text-text-muted">
            <p>Logged in</p>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 lg:p-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
