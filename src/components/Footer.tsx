
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t mt-20 py-10 theme-transition">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-aws-orange font-bold text-2xl">CloudWrite</span>
            </Link>
            <p className="mt-3 text-muted-foreground text-sm">
              AI-powered blog and knowledge base focused on AWS technologies.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/compute" className="text-muted-foreground hover:text-foreground transition-colors">
                  Compute
                </Link>
              </li>
              <li>
                <Link to="/categories/storage" className="text-muted-foreground hover:text-foreground transition-colors">
                  Storage
                </Link>
              </li>
              <li>
                <Link to="/categories/networking" className="text-muted-foreground hover:text-foreground transition-colors">
                  Networking
                </Link>
              </li>
              <li>
                <Link to="/categories/security" className="text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/categories/devops" className="text-muted-foreground hover:text-foreground transition-colors">
                  DevOps
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/ai-generator" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Generator
                </Link>
              </li>
              <li>
                <a
                  href="https://aws.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AWS Official Docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-5 border-t text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} CloudWrite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
