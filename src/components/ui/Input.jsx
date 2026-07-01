import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className = "", type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "w-full rounded-md border border-border bg-bg-surface2 px-4 py-2.5 text-text-primary placeholder:text-text-muted",
      "outline-none transition-colors duration-200 focus:border-accent-blue-500 focus:ring-2 focus:ring-accent-blue-500/20",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export default Input;
