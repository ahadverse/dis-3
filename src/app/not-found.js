import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-bg-base">
      <Container className="flex flex-col items-center py-16 text-center">
        <img
          src="/404.gif"
          alt="Page not found"
          className="h-auto w-full max-w-[420px] rounded-2xl"
        />

        <h1 className="mt-8 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 max-w-[520px] text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-pill bg-gradient-primary px-7 py-3 font-semibold text-white transition-shadow hover:shadow-glowBlue"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="rounded-pill border border-border px-7 py-3 font-semibold text-text-primary transition-colors hover:border-accent-blue-500 hover:text-accent-blue-400"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </div>
  );
}
