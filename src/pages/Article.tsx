
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { CodeSnippet } from "@/components/CodeSnippet";
import { ArticleCard } from "@/components/ArticleCard";
import { Calendar, Clock, Share } from "lucide-react";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);

  useEffect(() => {
    // Simulate API fetch of article content
    // In a real app, this would fetch from a backend
    setTimeout(() => {
      // Mock article data - normally would be fetched based on slug
      setArticle({
        title: "Getting Started with Amazon EC2: A Comprehensive Guide",
        date: "May 15, 2023",
        readTime: "8 min read",
        category: "Compute",
        content: [
          {
            type: "paragraph",
            content: "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. Amazon EC2's simple web service interface allows you to obtain and configure capacity with minimal friction.",
          },
          {
            type: "heading",
            content: "Key Features of EC2",
          },
          {
            type: "paragraph",
            content: "Amazon EC2 provides a number of features including:",
          },
          {
            type: "list",
            items: [
              "Virtual computing environments, known as instances",
              "Preconfigured templates for your instances, known as Amazon Machine Images (AMIs)",
              "Various configurations of CPU, memory, storage, and networking capacity, known as instance types",
              "Secure login information for your instances using key pairs",
              "Storage volumes for temporary data that's deleted when you stop or terminate your instance, known as instance store volumes",
              "Persistent storage volumes for your data using Amazon Elastic Block Store (Amazon EBS)",
              "Multiple physical locations for your resources, such as instances and Amazon EBS volumes, known as Regions and Availability Zones",
            ],
          },
          {
            type: "heading",
            content: "Launching Your First EC2 Instance",
          },
          {
            type: "paragraph",
            content: "Here's a simple AWS CLI command to launch an EC2 instance:",
          },
          {
            type: "code",
            language: "bash",
            title: "Creating an EC2 instance with AWS CLI",
            content: `aws ec2 run-instances \\
    --image-id ami-0c55b159cbfafe1f0 \\
    --instance-type t2.micro \\
    --key-name MyKeyPair \\
    --security-group-ids sg-903004f8 \\
    --subnet-id subnet-6e7f829e`,
          },
          {
            type: "paragraph",
            content: "If you prefer infrastructure as code, here's a Terraform example:",
          },
          {
            type: "code",
            language: "hcl",
            title: "Creating an EC2 instance with Terraform",
            content: `provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "example-instance"
  }
}`,
          },
          {
            type: "heading",
            content: "Security Best Practices",
          },
          {
            type: "paragraph",
            content: "When working with EC2 instances, security should be a top priority. Here are some key security best practices:",
          },
          {
            type: "list",
            items: [
              "Regularly patch your instances with the latest security updates",
              "Use security groups as a firewall to control inbound and outbound traffic",
              "Implement the principle of least privilege for IAM roles attached to EC2 instances",
              "Consider using Amazon Inspector for automated security assessments",
              "Enable detailed monitoring and logging with CloudWatch and CloudTrail",
              "Use private subnets for instances that don't need to be publicly accessible",
            ],
          },
          {
            type: "heading",
            content: "Conclusion",
          },
          {
            type: "paragraph",
            content: "Amazon EC2 is a foundational service in the AWS ecosystem, providing flexible compute resources for almost any workload. By understanding the key concepts and best practices outlined in this guide, you'll be well on your way to effectively leveraging EC2 for your applications.",
          },
        ],
      });

      // Mock related articles
      setRelatedArticles([
        {
          title: "Understanding EC2 Instance Types and Families",
          excerpt: "Dive deep into the various EC2 instance families and learn which type is best for your specific workload requirements.",
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
      ]);
    }, 500);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col theme-transition">
        <Header />
        <main className="flex-1 container py-20">
          <div className="animate-pulse space-y-4 max-w-4xl mx-auto">
            <div className="h-10 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header />
      <main className="flex-1">
        <article className="container py-20 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded">
                {article.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center text-muted-foreground mb-10 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm">{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{article.readTime}</span>
              </div>
              <button className="flex items-center text-sm ml-auto">
                <Share className="h-4 w-4 mr-1" />
                <span>Share</span>
              </button>
            </div>
            <div className="prose prose-lg max-w-none">
              {article.content.map((section: any, index: number) => {
                switch (section.type) {
                  case "paragraph":
                    return <p key={index}>{section.content}</p>;
                  case "heading":
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>;
                  case "list":
                    return (
                      <ul key={index} className="my-4 list-disc pl-8">
                        {section.items.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  case "code":
                    return (
                      <CodeSnippet
                        key={index}
                        code={section.content}
                        language={section.language}
                        title={section.title}
                      />
                    );
                  default:
                    return null;
                }
              })}
            </div>

            <div className="border-t border-b py-6 my-10">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-medium">{article.category}</p>
                </div>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                  <button className="px-3 py-1 bg-muted rounded-full text-sm">AWS</button>
                  <button className="px-3 py-1 bg-muted rounded-full text-sm">EC2</button>
                  <button className="px-3 py-1 bg-muted rounded-full text-sm">Cloud</button>
                </div>
              </div>
            </div>

            <div className="my-10">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((article, index) => (
                  <ArticleCard key={index} {...article} />
                ))}
              </div>
            </div>

            <div className="my-16">
              <NewsletterSignup />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
