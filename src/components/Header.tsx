
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate search functionality
  useEffect(() => {
    if (searchQuery.length > 1) {
      // Mock search results - in a real app, this would query an API
      const mockResults = [
        "EC2 Instance Types Explained",
        "S3 Storage Classes and When to Use Them",
        "Setting up AWS Lambda with TypeScript",
      ].filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(mockResults);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 theme-transition ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-aws-orange font-bold text-2xl">CloudWrite</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/categories/compute" className="text-foreground/80 hover:text-foreground transition-colors link-hover">
            Compute
          </Link>
          <Link to="/categories/storage" className="text-foreground/80 hover:text-foreground transition-colors link-hover">
            Storage
          </Link>
          <Link to="/categories/networking" className="text-foreground/80 hover:text-foreground transition-colors link-hover">
            Networking
          </Link>
          <Link to="/categories/security" className="text-foreground/80 hover:text-foreground transition-colors link-hover">
            Security
          </Link>
          <Link to="/categories/devops" className="text-foreground/80 hover:text-foreground transition-colors link-hover">
            DevOps
          </Link>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center space-x-2">
          {showSearch ? (
            <div className="relative">
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-[200px] md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchResults.length > 0 && (
                <div className="absolute top-full right-0 mt-1 w-[300px] bg-card shadow-lg rounded-md py-2 z-50">
                  {searchResults.map((result, i) => (
                    <Link 
                      key={i} 
                      to={`/search?q=${encodeURIComponent(result)}`}
                      className="block px-4 py-2 hover:bg-muted text-sm"
                      onClick={() => {
                        setSearchQuery("");
                        setShowSearch(false);
                      }}
                    >
                      {result}
                    </Link>
                  ))}
                </div>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery("");
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(true)}
              className="text-foreground/80 hover:text-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-background border-t animate-fade-in">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/categories/compute" className="px-4 py-2 hover:bg-muted rounded-md">
              Compute
            </Link>
            <Link to="/categories/storage" className="px-4 py-2 hover:bg-muted rounded-md">
              Storage
            </Link>
            <Link to="/categories/networking" className="px-4 py-2 hover:bg-muted rounded-md">
              Networking
            </Link>
            <Link to="/categories/security" className="px-4 py-2 hover:bg-muted rounded-md">
              Security
            </Link>
            <Link to="/categories/devops" className="px-4 py-2 hover:bg-muted rounded-md">
              DevOps
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
