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
      name: "AWS",
      level: 95,
      category: "Cloud",
    },

    {
      name: "Docker",
      level: 95,
      category: "Containers",
    },

    {
      name: "Kubernetes",
      level: 90,
      category: "Containers",
    },

    {
      name: "Terraform",
      level: 90,
      category: "IaC",
    },

    {
      name: "Jenkins",
      level: 95,
      category: "CI/CD",
    },

    {
      name: "Linux",
      level: 90,
      category: "OS",
    },

    {
      name: "Git",
      level: 95,
      category: "Version Control",
    },

    {
      name: "Python",
      level: 75,
      category: "Programming",
    },

    {
      name: "Grafana",
      level: 85,
      category: "Monitoring",
    },

    {
      name: "Prometheus",
      level: 85,
      category: "Monitoring",
    },
  ],

  projects: [
  {
    id: 1,
    title: "AWS Three-Tier Application",
    description:
      "Designed and deployed a secure, scalable three-tier architecture on AWS using EC2, ALB, Auto Scaling, RDS, VPC, IAM, and Route 53.",
    tech: [
      "AWS",
      "EC2",
      "RDS",
      "ALB",
      "VPC",
      "IAM",
      "Route53",
    ],
    github: "",
    image: "",
    featured: true,
  },

  {
    id: 2,
    title: "Kubernetes Three-Tier Deployment",
    description:
      "Containerized React, Node.js, and MongoDB applications using Docker and deployed them on Kubernetes with Ingress and Load Balancer.",
    tech: [
      "Docker",
      "Kubernetes",
      "EKS",
      "Ingress",
      "ECR",
    ],
    github: "",
    image: "",
    featured: true,
  },

  {
    id: 3,
    title: "Terraform Infrastructure Automation",
    description:
      "Automated AWS infrastructure provisioning using reusable Terraform modules integrated with Jenkins pipelines.",
    tech: [
      "Terraform",
      "AWS",
      "Jenkins",
    ],
    github: "",
    image: "",
    featured: true,
  },

  {
    id: 4,
    title: "CI/CD Pipeline",
    description:
      "Implemented CI/CD pipelines using Jenkins, Docker, SonarQube, Flyway and JFrog Artifactory.",
    tech: [
      "Jenkins",
      "Docker",
      "SonarQube",
      "JFrog",
      "Flyway",
    ],
    github: "",
    image: "",
    featured: true,
  },

  {
    id: 5,
    title: "GitHub Actions CI/CD",
    description:
      "Built CI/CD workflows using GitHub Actions for automated build, testing and deployment.",
    tech: [
      "GitHub Actions",
      "Docker",
      "AWS",
    ],
    github: "",
    image: "",
    featured: true,
  }
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