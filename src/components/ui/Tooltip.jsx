"use client";
import { Tooltip as MantineTooltip } from "@mantine/core";

/**
 * Dark-theme tooltip. Used for icon-only dashboard actions (edit/delete).
 */
const Tooltip = ({ label, children, ...rest }) => (
  <MantineTooltip
    label={label}
    withArrow
    color="dark"
    styles={{
      tooltip: {
        backgroundColor: "var(--bg-surface-4)",
        color: "var(--text-primary)",
        border: "1px solid var(--border-default)",
        fontSize: "0.75rem",
      },
    }}
    {...rest}
  >
    {children}
  </MantineTooltip>
);

export default Tooltip;
