
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, FilterIcon } from "lucide-react";

const SearchResults = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    setSearchQuery(query);

    // In a real app this would be an API call
    setTimeout(() => {
      // Mock search results
      const mockResults = [
        {
          title: "Getting Started with Amazon EC2: A Comprehensive Guide",
          excerpt: "Learn how to launch, configure, and manage EC2 instances for your applications.",
          date: "May 15, 2023",
          slug: "getting-started-with-ec2",
          category: "Compute",
        },
        {
          title: "EC2 Instance Types Explained",
          excerpt: "Understand the different EC2 instance families and how to choose the right one for your workload.",
          date: "June 10, 2023",
          slug: "ec2-instance-types",
          category: "Compute",
        },
        {
          title: "Cost Optimization Strategies for EC2",
          excerpt: "Learn how to reduce your EC2 costs with reserved instances, spot instances, and other AWS pricing models.",
          date: "July 22, 2023",
          slug: "ec2-cost-optimization",
          category: "Compute",
        },
      ].filter(
        item =>
          query === "" ||
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(query.toLowerCase())
      );

      setResults(mockResults);
      setIsLoading(false);
    }, 800);
  }, [location.search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newUrl = `/search?q=${encodeURIComponent(searchQuery)}`;
    window.history.pushState({}, "", newUrl);
    
    setIsLoading(true);
    // We'd trigger the search here in a real app
    // For now, we'll reuse the useEffect logic by forcing a small delay
    setTimeout(() => {
      const event = new Event("popstate");
      window.dispatchEvent(event);
    }, 10);
  };

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header />
      <main className="flex-1 container py-20">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-bold mb-6">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : "Search AWS Knowledge Base"}
          </h1>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="search"
              placeholder="Search for AWS guides and tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64">
            <div className="bg-card rounded-lg border p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Filters</h3>
                <FilterIcon className="h-4 w-4" />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Categories</h4>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input id="compute" type="checkbox" className="mr-2" />
                      <label htmlFor="compute" className="text-sm">Compute</label>
                    </div>
                    <div className="flex items-center">
                      <input id="storage" type="checkbox" className="mr-2" />
                      <label htmlFor="storage" className="text-sm">Storage</label>
                    </div>
                    <div className="flex items-center">
                      <input id="networking" type="checkbox" className="mr-2" />
                      <label htmlFor="networking" className="text-sm">Networking</label>
                    </div>
                    <div className="flex items-center">
                      <input id="security" type="checkbox" className="mr-2" />
                      <label htmlFor="security" className="text-sm">Security</label>
                    </div>
                    <div className="flex items-center">
                      <input id="devops" type="checkbox" className="mr-2" />
                      <label htmlFor="devops" className="text-sm">DevOps</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Date</h4>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input id="last-week" type="radio" name="date" className="mr-2" />
                      <label htmlFor="last-week" className="text-sm">Last week</label>
                    </div>
                    <div className="flex items-center">
                      <input id="last-month" type="radio" name="date" className="mr-2" />
                      <label htmlFor="last-month" className="text-sm">Last month</label>
                    </div>
                    <div className="flex items-center">
                      <input id="last-year" type="radio" name="date" className="mr-2" />
                      <label htmlFor="last-year" className="text-sm">Last year</label>
                    </div>
                    <div className="flex items-center">
                      <input id="all-time" type="radio" name="date" className="mr-2" defaultChecked />
                      <label htmlFor="all-time" className="text-sm">All time</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            {isLoading ? (
              <div className="animate-pulse space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border rounded-lg p-6">
                    <div className="h-4 bg-muted rounded w-1/4 mb-3"></div>
                    <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                  </div>
                ))}
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Found {results.length} results
                </p>
                {results.map((result, index) => (
                  <ArticleCard key={index} {...result} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium mb-2">No results found</h2>
                <p className="text-muted-foreground mb-6">
                  Try different keywords or browse our categories
                </p>
                <Button variant="outline">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Browse Categories
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
