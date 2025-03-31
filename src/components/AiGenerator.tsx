
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { LoaderCircle } from "lucide-react";

export function AiGenerator() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = () => {
    if (!prompt) {
      toast({
        title: "Empty prompt",
        description: "Please enter a topic to generate content for.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Mock AI generation - in a real app, this would call an API
    setTimeout(() => {
      const mockContent = `# ${prompt}\n\n## Introduction\nAmazon Web Services (AWS) provides a robust platform for ${prompt}. This guide will walk you through the process of setting it up efficiently.\n\n## Getting Started\nTo begin with ${prompt}, you'll need to have an AWS account and appropriate IAM permissions.\n\n## Best Practices\n1. Always follow the principle of least privilege\n2. Use CloudFormation or Terraform for infrastructure as code\n3. Set up proper monitoring and alerting\n\n## Code Example\n\`\`\`bash\naws s3 mb s3://my-bucket-name\naws s3 cp myfile.txt s3://my-bucket-name/\n\`\`\``;
      
      setGeneratedContent(mockContent);
      setIsGenerating(false);
      toast({
        title: "Content generated",
        description: "Your AWS article has been generated successfully.",
      });
    }, 2000);
  };

  return (
    <div className="bg-card rounded-lg border p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-4">AI Article Generator</h2>
      <p className="text-muted-foreground mb-6">
        Enter a topic or question about AWS, and our AI will generate a
        comprehensive article or tutorial for you.
      </p>
      <Textarea
        placeholder="e.g., Setting up S3 buckets with proper security, or How to deploy a serverless application with Lambda and API Gateway"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="min-h-[120px] mb-4"
      />
      <Button 
        onClick={handleGenerate} 
        disabled={isGenerating || !prompt} 
        className="w-full mb-6"
      >
        {isGenerating ? (
          <>
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate AWS Article"
        )}
      </Button>
      
      {generatedContent && (
        <div className="border rounded-md p-4 bg-muted/30">
          <h3 className="text-lg font-medium mb-2">Generated Content</h3>
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap">{generatedContent}</pre>
          </div>
        </div>
      )}
      
      <p className="text-xs text-muted-foreground mt-4">
        The AI generator uses advanced language models to create informative
        content about AWS services and best practices.
      </p>
    </div>
  );
}
