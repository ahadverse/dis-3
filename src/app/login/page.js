"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "../../lib/actions/authActions";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ParallaxBlob from "@/components/motion/ParallaxBlob";
import Reveal from "@/components/motion/Reveal";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await loginAdmin(email, password);

      if (result.success) {
        router.push("/dashboard");
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setError("An error occurred during login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-base px-4 py-24">
      <ParallaxBlob />

      <Reveal direction="up" className="w-full max-w-md">
        <Card hover={false} className="w-full p-8">
          <h1 className="font-display text-3xl font-bold text-text-primary mb-2 text-center">
            Admin Login
          </h1>
          <p className="text-text-secondary text-center mb-8">
            Digital IT Solutions Dashboard
          </p>

          {error && (
            <div className="mb-4 p-4 bg-error/10 border border-error/30 text-error rounded-md text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@dis.com"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              variant="primary"
              className="w-full"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-bg-surface3 rounded-md border border-border text-sm text-text-secondary">
            <p className="font-semibold mb-2 text-text-primary">
              Demo Credentials:
            </p>
            <p>Email: admin@dis.com</p>
            <p>Password: admin123</p>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}
