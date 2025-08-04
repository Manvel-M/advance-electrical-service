import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/80",
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        primaryAlt:
          "bg-primary-foreground text-primary hover:bg-primary-foreground/80",
        destructive: "bg-error text-error-foreground hover:bg-error/80",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-11 rounded-md px-8 font-bold text-lg",
        icon: "h-10 w-10",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "md",
    },
  },
);

type ButtonProps<C extends ElementType = "button"> = {
  as?: C;
  className?: string;
} & VariantProps<typeof buttonVariants> &
  Omit<ComponentPropsWithoutRef<C>, "as" | "className">;

const Button = forwardRef(
  <C extends ElementType = "button">(
    { as, className, variant, size, rounded, ...props }: ButtonProps<C>,
    ref: React.Ref<any>,
  ) => {
    const Component = as ?? ((props as any).href ? "a" : "button");

    return (
      <Component
        ref={ref}
        className={twMerge(
          buttonVariants({ variant, size, rounded }),
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
