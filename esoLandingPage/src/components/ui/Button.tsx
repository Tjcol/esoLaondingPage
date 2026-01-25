import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "default" | "lg";
    fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", fullWidth, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

        // Using configured colors from globals.css/tailwind
        // Primary is Sage Green (#d0e0d5), Foreground is Dark Charcoal (#1f2937)
        const variants = {
            primary: "bg-primary text-primary-foreground hover:brightness-95 shadow-sm",
            outline: "border-2 border-primary bg-transparent text-foreground hover:bg-primary/20",
            ghost: "text-foreground hover:text-green-800 hover:bg-gray-100/50",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            default: "px-8 py-3 text-base",
            lg: "px-10 py-4 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth && "w-full",
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
