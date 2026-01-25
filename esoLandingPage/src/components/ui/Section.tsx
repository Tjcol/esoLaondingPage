import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    container?: boolean;
    size?: "sm" | "default" | "lg";
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, size = "default", children, ...props }, ref) => {
        const paddings = {
            sm: "py-12",
            default: "py-16 md:py-24",
            lg: "py-24 md:py-32",
        };

        return (
            <section
                ref={ref}
                className={cn(paddings[size], className)}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
