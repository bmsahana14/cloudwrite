
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { 
  Server, 
  Database, 
  NetworkIcon, 
  Shield, 
  TerminalIcon 
} from "lucide-react";

interface CategoryInfo {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const categoryInfo: Record<string, CategoryInfo> = {
  compute: {
    title: "Compute",
    description: "Resources for EC2, Lambda, ECS, EKS, Batch, and Lightsail services in AWS.",
    icon: <Server className="h-10 w-10" />,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
  },
  storage: {
    title: "Storage",
    description: "Everything about S3, EBS, EFS, FSx, Storage Gateway, and more.",
    icon: <Database className="h-10 w-10" />,
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
  },
  networking: {
    title: "Networking",
    description: "Learn about VPC, Route 53, CloudFront, API Gateway, and AWS networking.",
    icon: <NetworkIcon className="h-10 w-10" />,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
  },
  security: {
    title: "Security",
    description: "Security best practices with IAM, KMS, WAF, Shield, and other AWS security services.",
    icon: <Shield className="h-10 w-10" />,
    color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
  },
  devops: {
    title: "DevOps",
    description: "CI/CD pipelines with CodePipeline, CloudFormation, and other DevOps tools on AWS.",
    icon: <TerminalIcon className="h-10 w-10" />,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300",
  },
};

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call to fetch articles in the category
    setTimeout(() => {
      // Mock data based on category
      const mockArticles = {
        compute: [
          {
            title: "Getting Started with Amazon EC2: A Comprehensive Guide",
            excerpt: "Learn how to launch, configure, and manage EC2 instances for your applications.",
            date: "May 15, 2023",
            slug: "getting-started-with-ec2",
            category: "Compute",
          },
          {
            title: "AWS Lambda Best Practices for Production",
            excerpt: "Optimize your serverless applications with these proven Lambda patterns.",
            date: "August 12, 2023",
            slug: "lambda-best-practices",
            category: "Compute",
          },
          {
            title: "Understanding EC2 Instance Types and Families",
            excerpt: "Dive deep into the various EC2 instance families and learn which type is best for your workload.",
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
          {
            title: "Container Orchestration with Amazon ECS",
            excerpt: "Set up and manage Docker containers at scale with Amazon Elastic Container Service.",
            date: "September 5, 2023",
            slug: "container-orchestration-ecs",
            category: "Compute",
          },
          {
            title: "Running Kubernetes on AWS with EKS",
            excerpt: "Deploy, manage, and scale containerized applications using Kubernetes on Amazon EKS.",
            date: "October 18, 2023",
            slug: "kubernetes-on-eks",
            category: "Compute",
          },
        ],
        storage: [
          {
            title: "S3 Storage Classes: Choosing the Right Option for Your Data",
            excerpt: "Navigate through AWS S3 storage classes for optimal cost and performance.",
            date: "June 23, 2023",
            slug: "s3-storage-classes",
            category: "Storage",
          },
          {
            title: "AWS Database Options Compared",
            excerpt: "From RDS to DynamoDB to Aurora - understand which AWS database service is right for your application.",
            date: "October 5, 2023",
            slug: "aws-database-comparison",
            category: "Storage",
          },
          {
            title: "Data Backup Strategies with AWS",
            excerpt: "Learn how to implement reliable backup solutions using AWS services like S3, Glacier, and Backup.",
            date: "July 14, 2023",
            slug: "aws-backup-strategies",
            category: "Storage",
          },
          {
            title: "Amazon EFS vs EBS: When to Use Each Storage Service",
            excerpt: "Compare elastic file systems and block storage to choose the right solution for your workload.",
            date: "August 29, 2023",
            slug: "efs-vs-ebs",
            category: "Storage",
          },
        ],
        networking: [
          {
            title: "Setting Up a Secure VPC in AWS",
            excerpt: "Design a secure Virtual Private Cloud with proper subnets, route tables, and network ACLs.",
            date: "July 5, 2023",
            slug: "secure-vpc-setup",
            category: "Networking",
          },
          {
            title: "AWS Direct Connect vs VPN: Connectivity Options Compared",
            excerpt: "Understand the differences between dedicated connections and VPN options for connecting to AWS.",
            date: "September 12, 2023",
            slug: "direct-connect-vs-vpn",
            category: "Networking",
          },
          {
            title: "Content Delivery with CloudFront",
            excerpt: "Accelerate your website or application with AWS's global content delivery network.",
            date: "August 8, 2023",
            slug: "content-delivery-cloudfront",
            category: "Networking",
          },
        ],
        security: [
          {
            title: "IAM Security Best Practices",
            excerpt: "Implement the principle of least privilege and other IAM security patterns.",
            date: "September 18, 2023",
            slug: "iam-security-best-practices",
            category: "Security",
          },
          {
            title: "Securing Your AWS S3 Buckets",
            excerpt: "Comprehensive guide to preventing unauthorized access to your S3 data.",
            date: "July 30, 2023",
            slug: "securing-s3-buckets",
            category: "Security",
          },
          {
            title: "AWS Key Management Service (KMS) Explained",
            excerpt: "Learn how to create and control encryption keys to secure your data in AWS.",
            date: "October 3, 2023",
            slug: "kms-explained",
            category: "Security",
          },
        ],
        devops: [
          {
            title: "CloudFormation vs. Terraform: Which to Choose?",
            excerpt: "Compare the two most popular infrastructure as code tools for AWS.",
            date: "September 3, 2023",
            slug: "cloudformation-vs-terraform",
            category: "DevOps",
          },
          {
            title: "CI/CD Pipelines with AWS CodePipeline",
            excerpt: "Build, test, and deploy your applications automatically with AWS's integrated CI/CD service.",
            date: "August 20, 2023",
            slug: "cicd-codepipeline",
            category: "DevOps",
          },
          {
            title: "Infrastructure as Code Best Practices on AWS",
            excerpt: "Learn patterns and practices for maintaining reliable, repeatable infrastructure deployments.",
            date: "October 10, 2023",
            slug: "infrastructure-as-code-best-practices",
            category: "DevOps",
          },
        ],
      };

      if (slug && slug in mockArticles) {
        setArticles(mockArticles[slug as keyof typeof mockArticles]);
      } else {
        // Handle unknown category
        setArticles([]);
      }
    }, 500);
  }, [slug]);

  if (!slug || !(slug in categoryInfo)) {
    return (
      <div className="min-h-screen flex flex-col theme-transition">
        <Header />
        <main className="flex-1 container py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="text-muted-foreground">
              The category you're looking for doesn't exist.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categoryInfo[slug];

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header />
      <main className="flex-1">
        <div className="container py-20">
          <div className="mb-12 max-w-3xl">
            <div className={`inline-flex items-center justify-center p-4 rounded-full ${category.color} mb-6`}>
              {category.icon}
            </div>
            <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
            <p className="text-xl text-muted-foreground">
              {category.description}
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="animate-pulse space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border rounded-lg p-6">
                  <div className="h-4 bg-muted rounded w-1/4 mb-3"></div>
                  <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          )}

          <div className="mt-16 max-w-xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
