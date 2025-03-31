
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  className?: string;
  featured?: boolean;
}

export function ArticleCard({
  title,
  excerpt,
  date,
  slug,
  category,
  className,
  featured = false,
}: ArticleCardProps) {
  return (
    <Link
      to={`/article/${slug}`}
      className={cn(
        "block group overflow-hidden rounded-lg border bg-card hover:shadow-md transition-all duration-200",
        featured ? "md:col-span-2 lg:col-span-3" : "",
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
            {category}
          </span>
          <div className="flex items-center text-muted-foreground text-xs">
            <Calendar className="mr-1 h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-200 mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
        <div className="mt-4 flex items-center text-primary font-medium text-sm">
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
