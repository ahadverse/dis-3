import { cn } from "../../lib/utils";
import Container from "./Container";
import Reveal from "../motion/Reveal";

const BG_VARIANTS = {
  base: "bg-bg-base",
  surface1: "bg-bg-surface1",
  transparent: "",
};

/**
 * Section wrapper: Container + vertical rhythm (--space-section) + optional
 * scroll-reveal. Replaces the repeated `mt-10 sm:mt-16 md:mt-24` + manual
 * `<hr/>` wrappers found across the service pages.
 */
const Section = ({
  children,
  className = "",
  containerClassName = "",
  background = "transparent",
  reveal = true,
  revealProps = {},
  id,
  as: Component = "section",
}) => {
  const content = (
    <Container className={containerClassName}>{children}</Container>
  );

  return (
    <Component
      id={id}
      className={cn("py-section", BG_VARIANTS[background] || "", className)}
    >
      {reveal ? <Reveal {...revealProps}>{content}</Reveal> : content}
    </Component>
  );
};

export default Section;
