
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiGenerator } from "@/components/AiGenerator";
import { Bot, BrainCircuit, FileCode, FileText, Share } from "lucide-react";

const AiGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header />
      <main className="flex-1 container py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI-Powered AWS Content Generator</h1>
          <p className="text-xl text-muted-foreground">
            Generate technical articles, tutorials, and documentation for AWS services
            with our advanced AI system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="bg-primary/10 inline-flex p-3 rounded-full mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Technical Articles</h3>
            <p className="text-muted-foreground text-sm">
              Generate in-depth articles on AWS services, architecture, and best practices.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="bg-primary/10 inline-flex p-3 rounded-full mb-4">
              <FileCode className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Code Snippets</h3>
            <p className="text-muted-foreground text-sm">
              Get working AWS CLI commands, CloudFormation templates, and Terraform code.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="bg-primary/10 inline-flex p-3 rounded-full mb-4">
              <BrainCircuit className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Architecture Guidance</h3>
            <p className="text-muted-foreground text-sm">
              Receive recommendations on best practices for AWS architecture design.
            </p>
          </div>
        </div>

        <div className="bg-muted/30 border rounded-lg p-8 mb-12">
          <div className="flex items-start gap-6">
            <div className="bg-primary/10 p-4 rounded-full hidden sm:flex">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground flex items-center justify-center rounded-full h-6 w-6 text-sm font-medium shrink-0">1</span>
                  <p>
                    <span className="font-medium">Enter a topic or question</span> - Be specific about what AWS service or concept you want to learn about.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground flex items-center justify-center rounded-full h-6 w-6 text-sm font-medium shrink-0">2</span>
                  <p>
                    <span className="font-medium">Our AI analyzes your request</span> - We'll process your query using our advanced language models.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground flex items-center justify-center rounded-full h-6 w-6 text-sm font-medium shrink-0">3</span>
                  <p>
                    <span className="font-medium">Get instant content</span> - Receive a comprehensive article with code examples and best practices.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary text-primary-foreground flex items-center justify-center rounded-full h-6 w-6 text-sm font-medium shrink-0">4</span>
                  <p>
                    <span className="font-medium">Save or share</span> - Use the generated content in your projects, documentation, or learning materials.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <AiGenerator />

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Want to share this tool with others?
          </p>
          <button className="mt-2 flex items-center mx-auto text-primary">
            <Share className="h-4 w-4 mr-1" />
            <span>Share this generator</span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiGeneratorPage;
