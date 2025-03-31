
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  className?: string;
}

export function CategoryCard({
  title,
  description,
  icon: Icon,
  slug,
  className,
}: CategoryCardProps) {
  return (
    <Link
      to={`/categories/${slug}`}
      className={cn(
        "block group overflow-hidden rounded-lg border bg-card hover:shadow-md transition-all duration-200 p-6",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-primary/10 text-primary rounded-full p-3">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  );
}
