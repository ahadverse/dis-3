"use client";
import { MantineProvider } from "@mantine/core";
import { useTheme } from "@/lib/ThemeContext";

export default function MantineThemeWrapper({ children }) {
  const { theme } = useTheme();
  return <MantineProvider forceColorScheme={theme}>{children}</MantineProvider>;
}
