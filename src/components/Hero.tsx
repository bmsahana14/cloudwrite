
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Hero() {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 z-0"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            The Ultimate{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-aws-orange">
              AWS Knowledge Base
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            AI-powered guides, tutorials, and best practices for mastering
            Amazon Web Services.
          </p>
          <div className="relative max-w-md mx-auto mb-8 animate-fade-in">
            <Input
              type="search"
              placeholder="Search for AWS guides and tutorials..."
              className="pr-12"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Button size="lg" className="bg-aws-blue hover:bg-aws-blue/90">
              Explore Categories
            </Button>
            <Button variant="outline" size="lg">
              AI-Generated Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
