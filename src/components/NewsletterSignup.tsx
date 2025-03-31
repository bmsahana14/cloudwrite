
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've successfully signed up for our newsletter.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-muted/50 rounded-lg p-6 md:p-8 border">
      <h3 className="text-xl md:text-2xl font-bold mb-2">Stay Updated</h3>
      <p className="text-muted-foreground mb-4">
        Get the latest AWS tips, news, and tutorials delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="youremail@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background"
          required
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
