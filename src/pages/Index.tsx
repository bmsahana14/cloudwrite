
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { CategoryCard } from "@/components/CategoryCard";
import { AiGenerator } from "@/components/AiGenerator";
import { Server, Database, NetworkIcon, Shield, TerminalIcon } from "lucide-react";

const Index = () => {
  // Mock data for articles
  const featuredArticles = [
    {
      title: "Getting Started with Amazon EC2: A Comprehensive Guide",
      excerpt: "Learn how to launch, configure, and manage EC2 instances for your applications. This guide covers instance types, security groups, and best practices.",
      date: "May 15, 2023",
      slug: "getting-started-with-ec2",
      category: "Compute",
    },
    {
      title: "S3 Storage Classes: Choosing the Right Option for Your Data",
      excerpt: "Navigate through AWS S3 storage classes and learn when to use Standard, Intelligent-Tiering, Glacier, and more for optimal cost and performance.",
      date: "June 23, 2023",
      slug: "s3-storage-classes",
      category: "Storage",
    },
    {
      title: "Setting Up a Secure VPC in AWS",
      excerpt: "Design a secure Virtual Private Cloud with proper subnets, route tables, and network ACLs. Learn best practices for AWS networking security.",
      date: "July 5, 2023",
      slug: "secure-vpc-setup",
      category: "Networking",
    },
  ];

  const recentArticles = [
    {
      title: "AWS Lambda Best Practices for Production",
      excerpt: "Optimize your serverless applications with these proven Lambda patterns. Learn about cold starts, memory configuration, and deployment strategies.",
      date: "August 12, 2023",
      slug: "lambda-best-practices",
      category: "Compute",
    },
    {
      title: "CloudFormation vs. Terraform: Which to Choose?",
      excerpt: "Compare the two most popular infrastructure as code tools for AWS. Understand the strengths and weaknesses of each approach.",
      date: "September 3, 2023",
      slug: "cloudformation-vs-terraform",
      category: "DevOps",
    },
    {
      title: "IAM Security Best Practices",
      excerpt: "Implement the principle of least privilege and other IAM security patterns to protect your AWS resources from unauthorized access.",
      date: "September 18, 2023",
      slug: "iam-security-best-practices",
      category: "Security",
    },
    {
      title: "AWS Database Options Compared",
      excerpt: "From RDS to DynamoDB to Aurora - understand which AWS database service is right for your application workload.",
      date: "October 5, 2023",
      slug: "aws-database-comparison",
      category: "Storage",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Featured Articles */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <ArticleCard
                key={index}
                {...article}
                featured={index === 0}
              />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="container py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <CategoryCard
              title="Compute"
              description="EC2, Lambda, ECS, and all compute services"
              icon={Server}
              slug="compute"
            />
            <CategoryCard
              title="Storage"
              description="S3, EBS, EFS, and other storage options"
              icon={Database}
              slug="storage"
            />
            <CategoryCard
              title="Networking"
              description="VPC, Route 53, CloudFront, and more"
              icon={NetworkIcon}
              slug="networking"
            />
            <CategoryCard
              title="Security"
              description="IAM, KMS, Shield, and security best practices"
              icon={Shield}
              slug="security"
            />
            <CategoryCard
              title="DevOps"
              description="CloudFormation, CodePipeline, and CI/CD"
              icon={TerminalIcon}
              slug="devops"
            />
          </div>
        </section>
        
        {/* Recent Articles */}
        <section className="container py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>

        {/* AI Generator and Newsletter */}
        <section className="container py-16 border-t">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AiGenerator />
            <div>
              <h2 className="text-2xl font-bold mb-6">AWS Expertise, Delivered</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of AWS professionals who get our weekly insights, tips, and tutorials directly in their inbox.
              </p>
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
