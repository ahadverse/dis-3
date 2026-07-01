"use client";
import { Modal as MantineModal } from "@mantine/core";

/**
 * Thin dark-theme restyle over Mantine's Modal — keeps Mantine's
 * focus-trap/portal handling, only overrides presentation.
 */
const Modal = ({ opened, onClose, title, children, size = "md", ...rest }) => (
  <MantineModal
    opened={opened}
    onClose={onClose}
    title={title}
    size={size}
    centered
    overlayProps={{ backgroundOpacity: 0.65, blur: 6 }}
    radius="lg"
    withCloseButton={!!title}
    styles={{
      content: {
        backgroundColor: "var(--bg-surface-2)",
        border: "1px solid var(--border-default)",
        color: "var(--text-primary)",
      },
      header: title
        ? {
            backgroundColor: "var(--bg-surface-2)",
            color: "var(--text-primary)",
            borderBottom: "1px solid var(--border-subtle)",
          }
        : { display: "none", padding: 0, minHeight: 0 },
      title: { fontWeight: 600 },
      close: { color: "var(--text-secondary)" },
    }}
    {...rest}
  >
    {children}
  </MantineModal>
);

export default Modal;
