import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    icon?: LucideIcon;
    title?: string;
    description: string;
    className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
    return (
        <div className={cn("p-6 rounded-2xl bg-white border border-secondary shadow-sm hover:shadow-md transition-shadow duration-300", className)}>
            <div className="flex items-start gap-4">
                {Icon && (
                    <div className="flex-shrink-0 p-3 rounded-full bg-primary/20 text-green-700">
                        <Icon size={24} />
                    </div>
                )}
                <div>
                    {title && <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>}
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}
