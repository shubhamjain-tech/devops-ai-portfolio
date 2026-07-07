import awsThreeTier from "../assets/projects/aws-three-tier.png";
import eks from "../assets/projects/eks.png";
import terraform from "../assets/projects/terraform.png";
import cicd from "../assets/projects/cicd.png";
import monitoring from "../assets/projects/monitoring.png";
import githubActions from "../assets/projects/github-actions.png";

const portfolioData = {
  personal: {
    name: "Shubham Jain",
    title: "Cloud & DevOps Engineer",
    subtitle: "AWS | Kubernetes | Docker | Terraform | Jenkins",
    email: "shubhamjain9005@outlook.com",
    phone: "+91 7558468948",
    location: "Pune, Maharashtra",

    github: "https://github.com/shubhamjain-tech",

    linkedin:
      "https://www.linkedin.com/in/shubham-jain-685520148/",

    medium:
      "https://medium.com/@shubhamjain9005",
  },

  stats: [
    {
      number: "4+",
      title: "Years Experience",
    },

    {
      number: "20+",
      title: "Projects",
    },

    {
      number: "10+",
      title: "Technologies",
    },

    {
      number: "100%",
      title: "Learning Mindset",
    },
  ],

  skills: [
  {
    category: "☁ Cloud",
    items: ["AWS", "Azure", "GCP"],
  },
  {
    category: "⚙ DevOps & CI/CD",
    items: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI",
    ],
  },
  {
    category: "🏗 Infrastructure as Code",
    items: [
      "Terraform",
      "Ansible",
      "Helm",
      "CloudFormation",
    ],
  },
  {
    category: "📊 Monitoring",
    items: [
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "ELK",
    ],
  },
  {
    category: "💻 Languages & OS",
    items: [
      "Linux",
      "Bash",
      "Python",
    ],
  },
  {
    category: "🗄 Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    category: "🔧 Version Control",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
    ],
  },
  {
    category: "🤖 AI Tools",
    items: [
      "ChatGPT",
      "GitHub Copilot",
      "Claude",
      "Gemini",
      "Cursor",
      "Amazon Q",
      "Windsurf",
    ],
  },
],
  projects: [
  {
    id: 1,
    title: "AWS Three-Tier Web Application",
    description:
      "Designed and deployed a secure and scalable three-tier architecture on AWS using EC2, Auto Scaling, Application Load Balancer, RDS, IAM, VPC, Route 53, and S3 following AWS best practices.",

    tech: [
      "AWS",
      "EC2",
      "ALB",
      "Auto Scaling",
      "RDS",
      "VPC",
      "IAM",
      "Route53",
      "S3",
    ],

    github: "https://github.com/shubhamjain-tech",
    demo: "",
    image: "awsThreeTier",
  },

  {
    id: 2,
    title: "Kubernetes Three-Tier Deployment",

    description:
      "Containerized React, Node.js and MongoDB applications using Docker and deployed them on Amazon EKS with Kubernetes Deployments, Services, Ingress Controller and AWS Load Balancer.",

    tech: [
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "Ingress",
      "ECR",
      "Helm",
    ],

    github: "https://github.com/shubhamjain-tech",
    demo: "",
    image: "eks",
  },

  {
    id: 3,
    title: "Infrastructure Automation using Terraform",

    description:
      "Provisioned complete AWS infrastructure using reusable Terraform modules including VPC, EC2, NAT Gateway, RDS, ALB, IAM and S3 integrated with Jenkins pipelines.",

    tech: [
      "Terraform",
      "AWS",
      "Jenkins",
      "GitHub",
      "VPC",
      "EC2",
    ],

    github: "https://github.com/shubhamjain-tech",
    demo: "",
    image: "terraform",
  },

  {
    id: 4,
    title: "Enterprise CI/CD Pipeline",

    description:
      "Implemented enterprise-grade CI/CD pipelines using Jenkins, SonarQube, Docker, Flyway, JFrog Artifactory and GitHub for automated build, testing and deployment.",

    tech: [
      "Jenkins",
      "Docker",
      "SonarQube",
      "JFrog",
      "Flyway",
      "GitHub",
    ],

    github: "https://github.com/shubhamjain-tech",
    demo: "",
    image: "cicd",
  },

  {
    id: 5,
    title: "Monitoring & Observability Stack",

    description:
      "Implemented monitoring and observability using Prometheus, Grafana, AlertManager and CloudWatch to monitor infrastructure health, application metrics and alerts.",

    tech: [
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "AlertManager",
      "Linux",
    ],

    github: "https://github.com/shubhamjain-tech",
    demo: "",
    image: "monitoring",
  },

  {
    id: 6,
    title: "GitHub Actions CI/CD",

    description:
      "Built automated CI/CD workflows using GitHub Actions for build, testing, Docker image creation and deployment to GitHub Pages and AWS environments.",

    tech: [
      "GitHub Actions",
      "Docker",
      "AWS",
      "GitHub",
    ],

    github: "https://github.com/shubhamjain-tech",
    demo: "",
    image: "githubActions",
  },
],

  experience: [

    {
      id: 1,
      company: "Accenture",
      role: "DevOps Engineer",
      duration: "Jun 2026 - Present",
      location: "Pune, Maharashtra",

      description:
        "Currently working on enterprise DevOps practices, GitHub Actions, Azure DevOps, CI/CD automation, Linux administration, Agile delivery and performance engineering.",

      technologies: [
        "GitHub Actions",
        "Azure DevOps",
        "CI/CD",
        "Linux",
        "Automation"
      ]
    },

    {
      id: 2,
      company: "Capgemini",
      role: "DevOps Engineer",
      duration: "Apr 2025 - Jun 2026",
      location: "Pune, Maharashtra",

      description:
        "Worked on the National Stock Exchange (NSE) project using Jenkins, Docker, SonarQube, JFrog, Flyway, Prometheus and Grafana.",

      technologies: [
        "Jenkins",
        "Docker",
        "JFrog",
        "SonarQube",
        "Flyway",
        "Prometheus",
        "Grafana"
      ]
    },

    {
      id: 3,
      company: "Infosys BPM",
      role: "Cloud Support Engineer",
      duration: "Oct 2021 - Nov 2024",
      location: "Pune, Maharashtra",

      description:
        "Supported AWS cloud infrastructure, Linux administration, monitoring and production support.",

      technologies: [
        "AWS",
        "Linux",
        "CloudWatch",
        "EC2",
        "IAM"
      ]
    }

  ],

  services: [
  {
    id: 1,
    title: "AWS Cloud Infrastructure",
    description:
      "Design and deploy secure, scalable, and highly available AWS infrastructure using best practices.",
  },

  {
    id: 2,
    title: "CI/CD Pipeline Automation",
    description:
      "Build automated CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI, SonarQube, and Docker.",
  },

  {
    id: 3,
    title: "Docker & Kubernetes",
    description:
      "Containerize applications and deploy them on Kubernetes and Amazon EKS with high availability.",
  },

  {
    id: 4,
    title: "Infrastructure as Code",
    description:
      "Automate cloud infrastructure provisioning using Terraform and reusable modules.",
  },

  {
    id: 5,
    title: "Monitoring & Observability",
    description:
      "Implement monitoring dashboards and alerting using Prometheus, Grafana, and CloudWatch.",
  },

  {
    id: 6,
    title: "DevOps Consulting",
    description:
      "Help teams adopt DevOps best practices, automation, cloud migration, and deployment strategies.",
  },
],

  certifications: [
   {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    badge: "☁️",
    verify: "#"
  },

  {
    id: 2,
    title: "Terraform Associate",
    issuer: "HashiCorp",
    year: "Learning",
    badge: "🏗️",
    verify: "#"
  },

  {
    id: 3,
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Linux Foundation",
    year: "Learning",
    badge: "☸️",
    verify: "#"
  },

  {
    id: 4,
    title: "Jenkins CI/CD",
    issuer: "DevOps",
    year: "Hands-on",
    badge: "🚀",
    verify: "#"
  }
]

}

export default portfolioData;