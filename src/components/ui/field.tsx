import type { ComponentProps, ReactNode } from "react";

interface FieldRootProps extends ComponentProps<"input"> {
  children: ReactNode;
}

function FieldRoot({ children, ...props }: FieldRootProps) {
  return <div {...props}>{children}</div>;
}

interface FieldLabelProps extends ComponentProps<"label"> {
  children: ReactNode;
}

function FieldLabel({ children, ...props }: FieldLabelProps) {
  return (
    <label className="block mb-1 text-sm" {...props}>
      {children}
    </label>
  );
}

export const Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
});
