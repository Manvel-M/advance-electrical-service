import { Input, Label, Select, Textarea } from "@/components/ui";
import { forwardRef, type ReactNode } from "react";
import type { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type FormFieldBaseProps = {
  id: string;
  label: string;
  className?: string;
  error?: FieldError;
  children?: ReactNode;
};

type InputProps = React.ComponentProps<"input"> & {
  as?: "input";
};

type TextareaProps = React.ComponentProps<"textarea"> & {
  as?: "textarea";
};

type SelectProps = React.ComponentProps<"select"> & {
  as?: "select";
  options?: { value: string; label: string }[];
};

type FormFieldProps = FormFieldBaseProps &
  (InputProps | TextareaProps | SelectProps);

const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FormFieldProps
>(({ id, label, error, className, children, as = "input", ...props }, ref) => {
  const FieldComponent =
    as === "textarea" ? Textarea : as === "select" ? Select : Input;

  return (
    <div className={twMerge("flex flex-col gap-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children ?? (
        <FieldComponent
          id={id}
          ref={ref}
          aria-invalid={!!error}
          {...(props as any)}
        />
      )}
      {error && <p className="text-sm text-error">{error.message}</p>}
    </div>
  );
});

FormField.displayName = "FormField";

export default FormField;
