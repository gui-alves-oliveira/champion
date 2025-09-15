import { Dialog as DialogPrimitive } from "radix-ui";
import type { ComponentProps } from "react";

const DialogOverlay = () => (
  <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/30" />
);

const DialogContent = ({
  children,
}: ComponentProps<typeof DialogPrimitive.Content>) => (
  <DialogPrimitive.Content className="p-4 shadow-lg bg-neutral-900 border-neutral-800 border fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg">
    {children}
  </DialogPrimitive.Content>
);

export const Dialog = Object.assign(DialogPrimitive.Root, {
  Overlay: DialogOverlay,
  Trigger: DialogPrimitive.Trigger,
  Portal: DialogPrimitive.Portal,
  Content: DialogContent,
});
