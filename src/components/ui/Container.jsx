import { cn } from "../../lib/utils";

/**
 * Replaces the repeated `xl:w-[1200px] w-11/12 m-auto` literal used across
 * almost every section component.
 */
const Container = ({ children, className = "", as: Component = "div", ...rest }) => (
  <Component className={cn("mx-auto w-11/12 max-w-[1200px]", className)} {...rest}>
    {children}
  </Component>
);

export default Container;
