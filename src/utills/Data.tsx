import client_01 from "../../public/images/clients/logoipsum-286-1.png";
import client_02 from "../../public/images/clients/logoipsum-286-1.png";
import client_03 from "../../public/images/clients/logoipsum-286-1.png";
import client_04 from "../../public/images/clients/logoipsum-286-1.png";
import client_05 from "../../public/images/clients/logoipsum-286-1.png";
import client_06 from "../../public/images/clients/logoipsum-286-1.png";
import card_img_01 from "../../public/images/work-5224077_1920.jpg";
import card_img_02 from "../../public/images/vision.jpg";
import support_1 from "../../public/images/support/support_1.png";
import { FaMapLocationDot, FaHeadphonesSimple } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

type SupportItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export const staticData = {
  home: {
    banner: {
      label: "SOFTWARE • DESIGN • INNOVATION",

      headingParts: [
        {
          text: "Transform Ideas ",
          color: "#FFFFFF",
          font: "playfair",
          style: "italic",
          weight: "400",
        },

        {
          text: " Into Powerful Digital Solutions.",
          color: "#FFFFFF",
          weight: "600",
          // gradient:
          //   "linear-gradient(90deg, #A855F7 0%, #7C3AED 50%, #2563EB 100%)",
        },
      ],

      description:
        "We design and develop fast, scalable digital products that solve real business challenges, improve customer experiences, and create lasting business value.",

      button: "Get a Quote",
      button2: "See Projects",
    },
    services: {
      label: "What We Do",

      headingParts: [
        {
          text: "End-to-end digital solutions to",
          color: "#111118",
          style: "normal",
          weight: "600",
        },
        {
          text: " grow your business.",
          color: "#111118",
          style: "normal",
          weight: "600",
          gradient:
            "linear-gradient(90deg, #A855F7 0%, #7C3AED 50%, #2563EB 100%)",
        },
      ],

      description:
        "From strategy and design to development and deployment, we build reliable digital products that combine great experiences, scalable technology, and measurable business value.",

      list: [
        {
          title: "Web Development",
          description:
            "We build fast, responsive websites and web applications with modern technologies, clean architecture, strong security, and scalable performance across devices.",
          href: "/services/web-development",
          icon: "Code2",
        },
        {
          title: "Software Development",
          description:
            "We develop custom software tailored to your business workflows, combining secure architecture, powerful functionality, integrations, and scalable technology.",
          href: "/services/software-development",
          icon: "Layers3",
        },
        {
          title: "Mobile Applications",
          description:
            "We develop intuitive mobile applications with engaging user experiences, reliable performance, scalable architecture, and business-focused features for modern platforms.",
          href: "/services/mobile-applications",
          icon: "Smartphone",
        },
        {
          title: "UI/UX Design",
          description:
            "We design intuitive digital experiences through research, clear interfaces, thoughtful interactions, and user-focused design that improves usability and engagement.",
          href: "/services/ui-ux-design",
          icon: "Palette",
        },
        {
          title: "API & Backend",
          description:
            "We build secure, scalable backend systems and APIs that power applications, connect third-party services, manage data efficiently, and support reliable performance.",
          href: "/services/api-backend",
          icon: "Boxes",
        },
        {
          title: "Cloud & DevOps",
          description:
            "We build reliable cloud infrastructure and DevOps workflows that improve deployment, scalability, security, monitoring, automation, and operational efficiency.",
          href: "/services/cloud-devops",
          icon: "Cloud",
        },
      ],
    },
    caseStudies: {
      label: "Our Work",

      headingParts: [
        {
          text: "Turning ideas into digital products",
          color: "#FFFFFF",
          style: "normal",
          weight: "600",
        },
      ],
      list: [
        {
          title: "Web Development",
          description:
            "Modern, responsive and high-performance web applications.",
          href: "/services/web-development",
          icon: "Code2",
        },
        {
          title: "Software Development",
          description:
            "Scalable, secure and custom software built for your business.",
          href: "/services/software-development",
          icon: "Layers3",
        },
        {
          title: "Mobile Applications",
          description: "Powerful mobile apps with great user experiences.",
          href: "/services/mobile-applications",
          icon: "Smartphone",
        },
        {
          title: "UI/UX Design",
          description:
            "Beautiful, intuitive and user-focused digital experiences.",
          href: "/services/ui-ux-design",
          icon: "Palette",
        },
        {
          title: "API & Backend",
          description: "Robust APIs and backend systems built for performance.",
          href: "/services/api-backend",
          icon: "Boxes",
        },
        {
          title: "Cloud & DevOps",
          description:
            "Reliable infrastructure, deployment and cloud solutions.",
          href: "/services/cloud-devops",
          icon: "Cloud",
        },
      ],
    },
    ourClients: {
      heading: "Our Clients",
      data: [client_01, client_02, client_03, client_04, client_05, client_06],
    },
    aboutUs: {
      label: "About Us",
      headingParts: [
        {
          text: "Welcome to our custom software development service For Any Needs",
          color: "#001845",
          weight: "700",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    process: {
      label: "Our Process",
      headingParts: [
        {
          text: "We don't just build.",
          color: "#ffffff",
          style: "normal",
          weight: "600",
        },
        {
          text: " We build with purpose.",
          style: "normal",
          weight: "600",
          gradient: "linear-gradient(90deg, #A855F7, #3B82F6)",

        },
      ],

      description:
        "A focused process that turns ideas into meaningful digital products — from the first conversation to continuous growth.",

      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "We start by understanding your business, your audience, and the opportunity behind your idea.",
          tag: "CLARITY",
        },
        {
          number: "02",
          title: "Define",
          description:
            "We turn ideas into a focused direction — defining the experience, structure, and technology required.",
          tag: "STRATEGY",
        },
        {
          number: "03",
          title: "Create",
          description:
            "We design and build the product with precision, combining thoughtful UX with reliable technology.",
          tag: "EXECUTION",
        },
        {
          number: "04",
          title: "Evolve",
          description:
            "We launch, learn, refine, and continue improving the product as your business moves forward.",
          tag: "GROWTH",
        },
      ],

      result: {
        label: "The Result",
        text: "A digital product that doesn't just look good —",
        highlight: " it works for your business.",
      },
    },
    team: {
      label: "Meet The Team",

      headingParts: [
        {
          text: "Small team.",
          color: "#111118",
          weight: "700",
        },
        {
          text: " Big ideas.",
          color: "#111118",
          weight: "700",
          gradient:
            "linear-gradient(90deg, #A855F7 0%, #7C3AED 50%, #2563EB 100%)",
        },
      ],

      description:
        "A focused team of designers, developers, and problem-solvers working together to turn ambitious ideas into meaningful digital experiences.",

      members: [
        {
          name: "Anuj Choudhary",
          role: "Founder & CEO",
          image: "/images/author/softqivo_ceo.png",
          linkedin: "FaLinkedinIn",
          instagram: "BsInstagram",
          twitter: "FaTwitter",
        },
        {
          name: "Sherry Lin",
          role: "UI/UX Designer",
          image: "/images/team/team_1.png",
          linkedin: "FaLinkedinIn",
          instagram: "BsInstagram",
          twitter: "FaTwitter",
        },
        {
          name: "John Smith",
          role: "Lead Developer",
          image: "/images/team/team_2.png",
          linkedin: "FaLinkedinIn",
          instagram: "BsInstagram",
          twitter: "FaTwitter",
        },
        {
          name: "Team Member",
          role: "Sales & Marketing",
          image: "/images/team/team_3.png",
          linkedin: "FaLinkedinIn",
          instagram: "BsInstagram",
          twitter: "FaTwitter",
        },
      ],
    },

    blogs: {
      label: "Our Insights",

      headingParts: [
        {
          text: "Ideas, insights & digital thinking.",
          color: "#000000",
          weight: "700",
        },
      ],

      list: [
        {
          img: "/images/blogs/blog_01.png",
          category: "Web Development",
          title:
            "Building Modern Web Applications That Scale With Your Business",
          excerpt:
            "Discover how the right technology, architecture, and development approach can help businesses build faster, more secure, and scalable web applications.",
          date: "Aug 28, 2026",
          readTime: "6 min read",
          href: "/blog/building-modern-web-applications-that-scale",
        },

        {
          img: "/images/blogs/blog_02.png",
          category: "UI/UX Design",
          title:
            "Why Great UI/UX Design Is More Than Just a Beautiful Interface",
          excerpt:
            "Learn how thoughtful user experiences, intuitive interactions, and purposeful design can create digital products people enjoy using and trust.",
          date: "Aug 21, 2026",
          readTime: "5 min read",
          href: "/blog/why-great-ui-ux-design-matters",
        },

        {
          img: "/images/blogs/blog_03.png",
          category: "Software Development",
          title:
            "From Idea to Product: Building Software That Creates Real Business Value",
          excerpt:
            "Explore the key decisions behind successful software products, from validating an idea and choosing technology to building for long-term growth.",
          date: "Aug 14, 2026",
          readTime: "7 min read",
          href: "/blog/from-idea-to-product",
        },
      ],
    },
    blogs2: {
      label: "Our Insights",

      headingParts: [
        {
          text: "Ideas, insights & digital thinking.",
          color: "#000000",
          weight: "700",
        },
      ],

      list: [
        {
          img: "/images/blogs/blog_01.png",
          category: "Web Development",
          title:
            "Building Modern Web Applications That Scale With Your Business",
          excerpt:
            "Discover how the right technology, architecture, and development approach can help businesses build faster, more secure, and scalable web applications.",
          date: "Aug 28, 2026",
          readTime: "6 min read",
          href: "/blog/building-modern-web-applications-that-scale",
        },

        {
          img: "/images/blogs/blog_02.png",
          category: "UI/UX Design",
          title:
            "Why Great UI/UX Design Is More Than Just a Beautiful Interface",
          excerpt:
            "Learn how thoughtful user experiences, intuitive interactions, and purposeful design can create digital products people enjoy using and trust.",
          date: "Aug 21, 2026",
          readTime: "5 min read",
          href: "/blog/why-great-ui-ux-design-matters",
        },

        {
          img: "/images/blogs/blog_03.png",
          category: "Software Development",
          title:
            "From Idea to Product: Building Software That Creates Real Business Value",
          excerpt:
            "Explore the key decisions behind successful software products, from validating an idea and choosing technology to building for long-term growth.",
          date: "Aug 14, 2026",
          readTime: "7 min read",
          href: "/blog/from-idea-to-product",
        },

        {
          img: "/images/blogs/blog_03.png",
          category: "Mobile Development",
          title:
            "How to Build Mobile Apps People Actually Want to Use",
          excerpt:
            "Explore the principles behind useful mobile applications, from user-focused experiences and performance to reliable architecture and long-term maintenance.",
          date: "Aug 7, 2026",
          readTime: "6 min read",
          href: "/blog/how-to-build-mobile-apps-people-use",
        },

        {
          img: "/images/blogs/blog_02.png",
          category: "Backend Development",
          title:
            "Why a Strong Backend Is the Foundation of a Reliable Digital Product",
          excerpt:
            "Understand how APIs, databases, authentication, and backend architecture work together to create secure and dependable digital products.",
          date: "Jul 31, 2026",
          readTime: "7 min read",
          href: "/blog/strong-backend-reliable-digital-products",
        },

        {
          img: "/images/blogs/blog_01.png",
          category: "API Development",
          title:
            "Designing APIs That Are Ready for Growth and Integration",
          excerpt:
            "Learn how thoughtful API architecture, consistent standards, security, and documentation can make applications easier to integrate and scale.",
          date: "Jul 24, 2026",
          readTime: "6 min read",
          href: "/blog/designing-apis-for-growth-and-integration",
        },

        {
          img: "/images/blogs/blog_01.png",
          category: "Cloud & DevOps",
          title:
            "How Cloud Infrastructure Helps Modern Businesses Scale Faster",
          excerpt:
            "Discover how cloud infrastructure, automation, monitoring, and deployment practices can improve reliability while supporting business growth.",
          date: "Jul 17, 2026",
          readTime: "8 min read",
          href: "/blog/cloud-infrastructure-for-business-growth",
        },

        {
          img: "/images/blogs/blog_02.png",
          category: "Web Development",
          title:
            "Choosing the Right Technology Stack for Your Web Project",
          excerpt:
            "A practical look at the factors businesses should consider when selecting frameworks, languages, databases, and infrastructure for a new web product.",
          date: "Jul 10, 2026",
          readTime: "7 min read",
          href: "/blog/choosing-the-right-technology-stack",
        },

        {
          img: "/images/blogs/blog_03.png",
          category: "UI/UX Design",
          title:
            "Designing Digital Experiences That Turn Visitors Into Customers",
          excerpt:
            "Learn how research, information architecture, visual hierarchy, and clear interactions can create experiences that guide users toward meaningful actions.",
          date: "Jul 3, 2026",
          readTime: "6 min read",
          href: "/blog/designing-experiences-that-convert-visitors",
        },

        {
          img: "/images/blogs/blog_10.png",
          category: "Software Development",
          title:
            "MVP Development: Turning a Business Idea Into a Working Product",
          excerpt:
            "Learn how an MVP can help businesses validate product ideas, understand users, reduce unnecessary development, and build a foundation for future growth.",
          date: "Jun 26, 2026",
          readTime: "6 min read",
          href: "/blog/mvp-development-business-ideas",
        },

        {
          img: "/images/blogs/blog_11.png",
          category: "Web Performance",
          title:
            "Why Website Performance Matters for Business Growth",
          excerpt:
            "Explore how loading speed, optimized assets, efficient code, and responsive experiences can improve usability and create better digital experiences.",
          date: "Jun 19, 2026",
          readTime: "5 min read",
          href: "/blog/why-website-performance-matters",
        },

        {
          img: "/images/blogs/blog_12.png",
          category: "Cybersecurity",
          title:
            "Essential Security Practices for Modern Web Applications",
          excerpt:
            "Understand the fundamental security practices businesses can use to protect applications, user data, APIs, authentication systems, and infrastructure.",
          date: "Jun 12, 2026",
          readTime: "8 min read",
          href: "/blog/web-application-security-practices",
        },

        {
          img: "/images/blogs/blog_13.png",
          category: "Product Development",
          title:
            "What Makes a Digital Product Ready for Long-Term Growth",
          excerpt:
            "Explore the technical and product decisions that help digital solutions remain maintainable, adaptable, reliable, and ready for changing business needs.",
          date: "Jun 5, 2026",
          readTime: "7 min read",
          href: "/blog/digital-product-long-term-growth",
        },

        {
          img: "/images/blogs/blog_14.png",
          category: "Mobile Development",
          title:
            "Native vs Cross-Platform App Development: What Businesses Should Know",
          excerpt:
            "Compare the key considerations behind native and cross-platform mobile development, including performance, development speed, maintenance, and scalability.",
          date: "May 29, 2026",
          readTime: "8 min read",
          href: "/blog/native-vs-cross-platform-app-development",
        },

        {
          img: "/images/blogs/blog_15.png",
          category: "Cloud & DevOps",
          title:
            "Continuous Deployment: Building a Faster Software Delivery Process",
          excerpt:
            "Learn how automated testing, continuous integration, and deployment workflows can help development teams release software more consistently and efficiently.",
          date: "May 22, 2026",
          readTime: "7 min read",
          href: "/blog/continuous-deployment-software-delivery",
        },

        {
          img: "/images/blogs/blog_16.png",
          category: "UI/UX Design",
          title:
            "The Role of User Research in Creating Better Digital Products",
          excerpt:
            "Discover how understanding user needs, behaviors, and challenges can help teams make better design decisions and create more useful digital experiences.",
          date: "May 15, 2026",
          readTime: "6 min read",
          href: "/blog/user-research-better-digital-products",
        },

        {
          img: "/images/blogs/blog_17.png",
          category: "Software Development",
          title:
            "Custom Software vs Off-the-Shelf Solutions: What Businesses Need to Consider",
          excerpt:
            "Explore the differences between custom software and ready-made solutions and the factors businesses should consider before making a technology investment.",
          date: "May 8, 2026",
          readTime: "7 min read",
          href: "/blog/custom-software-vs-off-the-shelf",
        },

        {
          img: "/images/blogs/blog_18.png",
          category: "Database Development",
          title:
            "Building a Database Architecture That Can Grow With Your Application",
          excerpt:
            "Learn how thoughtful database design, indexing, data relationships, backups, and scalability planning can support reliable application growth.",
          date: "May 1, 2026",
          readTime: "8 min read",
          href: "/blog/database-architecture-for-scalable-applications",
        },

        {
          img: "/images/blogs/blog_19.png",
          category: "Digital Transformation",
          title:
            "How Businesses Can Turn Digital Ideas Into Scalable Solutions",
          excerpt:
            "Discover a practical approach to transforming business ideas into digital products through strategy, design, development, testing, and continuous improvement.",
          date: "Apr 24, 2026",
          readTime: "7 min read",
          href: "/blog/digital-ideas-into-scalable-solutions",
        },

        {
          img: "/images/blogs/blog_20.png",
          category: "Technology",
          title:
            "Technology Decisions That Can Shape the Future of Your Digital Product",
          excerpt:
            "Explore the technology, architecture, design, and development decisions that can influence how effectively a digital product evolves over time.",
          date: "Apr 17, 2026",
          readTime: "6 min read",
          href: "/blog/technology-decisions-for-digital-products",
        },
      ],
    },
    technologes: {
      label: "Technology",

      headingParts: [
        {
          text: "Built with technology that moves your business forward.",
          color: "#ffffff",
          weight: "600",
        },
      ],

      description:
        "We use modern, reliable technologies to create fast, scalable, secure, and maintainable digital products.",

      technologies: [
        {
          name: "React",
          category: "Frontend",
          icon: "/images/technology/icon_1.webp",
          description: "Flexible interfaces built for modern web experiences.",
        },
        {
          name: "Next.js",
          category: "Framework",
          icon: "/images/technology/icon_2.png",
          description:
            "High-performance applications with powerful full-stack capabilities.",
        },
        {
          name: "TypeScript",
          category: "Language",
          icon: "/images/technology/icon_4.svg",
          description:
            "Reliable and maintainable code for scalable applications.",
        },
        {
          name: "Node.js",
          category: "Backend",
          icon: "/images/technology/icon_3.png",
          description: "Fast and scalable backend systems and APIs.",
        },
        {
          name: "MongoDB",
          category: "Database",
          icon: "/images/technology/icon_5.png",
          description:
            "Flexible data architecture built for growing applications.",
        },
        {
          name: "PostgreSQL",
          category: "Database",
          icon: "/images/technology/icon_7.webp",
          description:
            "Powerful relational data solutions for complex systems.",
        },
        {
          name: "AWS",
          category: "Cloud",
          icon: "/images/technology/icon_6.webp",
          description:
            "Secure and scalable cloud infrastructure for production.",
        },
        {
          name: "Docker",
          category: "DevOps",
          icon: "/images/technology/icon_9.png",
          description:
            "Consistent and reliable application deployment environments.",
        },
        {
          name: "Figma",
          category: "Design",
          icon: "/images/technology/icon_8.png",
          description:
            "Collaborative product design and prototyping workflows.",
        },
        // {
        //   name: "Git",
        //   category: "Development",
        //   icon: "/images/technology/icon_2.png",
        //   description:
        //     "Reliable version control for collaborative development.",
        // },
        // {
        //   name: "REST API",
        //   category: "Backend",
        //   icon: "/images/technology/icon_2.png",
        //   description:
        //     "Clean and scalable APIs connecting products and services.",
        // },
        // {
        //   name: "Cloudflare",
        //   category: "Infrastructure",
        //   icon: "/images/technology/icon_2.png",
        //   description:
        //     "Performance, security, and reliable edge infrastructure.",
        // },
      ],
    },

    feedbacks: {
      label: "Client Feedback",

      headingParts: [
        {
          text: "What our clients say.",
          color: "#000000",
          weight: "700",
        },
      ],

      data: [
        {
          img: "/images/review/review_1.jpg",

          message:
            "SoftQivo understood our vision quickly and turned our ideas into a polished digital product that matched our goals.",

          name: "Arjun Mehta",

          comment:
            "The team was responsive, professional, and technically strong throughout the project. Their attention to detail and willingness to understand our requirements made the development process smooth.",

          designation: "Founder & CEO, Nexora",
        },

        {
          img: "/images/review/review_2.webp",

          message:
            "Working with SoftQivo made our development process clear, collaborative, and straightforward from design through delivery.",

          name: "Sarah Williams",

          comment:
            "The team handled design, development, and delivery with care. They listened to our feedback, communicated clearly, and consistently worked toward practical solutions for our product.",

          designation: "Director, BrightLabs",
        },

        {
          img: "/images/review/review_3.jpg",

          message:
            "SoftQivo helped us build a modern, scalable solution that gave our business a stronger technology foundation.",

          name: "Rahul Sharma",

          comment:
            "Their combination of design thinking and technical expertise stood out throughout the project. The final product is fast, intuitive, and aligned with the way our business operates.",

          designation: "Co-Founder, ElevateX",
        },
      ],
    },

    finalCta: {
      label: "Let's Build",

      headingParts: [
        {
          text: "Have an idea worth building?",
          color: "#FFFFFF",
          weight: "700",
        },
      ],

      description:
        "Tell us what you're building. We'll help turn your idea into a thoughtful, scalable digital product designed for real business growth.",

      buttonText: "Start a Project",

      buttonHref: "/contact",

      image: "/images/cta/final-cta.jpg",

      imageAlt: "Digital product development at SoftQivo",
    },
  },

  about: {
    banner: {
      label: "About SoftQivo",
      headingParts: [
        {
          text: "Building digital products",
          color: "#000000",
          font: "playfair",
        },
        {
          text: " that help businesses grow.",
          gradient: "linear-gradient(90deg, #A855F7, #3B82F6)",
        },
      ],
    },

    description:
      "SoftQivo is a software development and digital product company helping startups, businesses, and entrepreneurs turn ideas into reliable digital products. We design and develop modern websites, web applications, custom software, mobile applications, APIs, and scalable cloud solutions with a focus on performance, usability, and long-term growth.",

    button: "Book a Consultation",

    blogs: {
      label: "Our Insights",

      headingParts: [
        {
          text: "Ideas, insights & digital thinking.",
          color: "#000000",
          weight: "700",
        },
      ],

      list: [
        {
          img: "/images/blogs/blog_01.png",
          category: "Web Development",
          title:
            "Building Modern Web Applications That Scale With Your Business",
          excerpt:
            "Explore how thoughtful architecture, modern technologies, performance optimization, and scalable development practices help businesses build reliable web applications for long-term growth.",
          date: "Sep 26, 2026",
          readTime: "8 min read",
          href: "/blog/building-modern-web-applications-that-scale",
        },

        {
          img: "/images/blogs/blog_02.png",
          category: "UI/UX Design",
          title:
            "Why Great UI/UX Design Is More Than Just a Beautiful Interface",
          excerpt:
            "Discover how user research, intuitive navigation, accessibility, and purposeful interactions can turn a visually appealing interface into a digital product people actually enjoy using.",
          date: "Sep 20, 2026",
          readTime: "7 min read",
          href: "/blog/why-great-ui-ux-design-matters",
        },

        {
          img: "/images/blogs/blog_03.png",
          category: "Software Development",
          title:
            "From Idea to Product: Building Software That Creates Real Business Value",
          excerpt:
            "Learn how product strategy, user experience, technology choices, and continuous improvement can transform an early idea into a reliable software product built for real business needs.",
          date: "Sep 15, 2026",
          readTime: "8 min read",
          href: "/blog/from-idea-to-product",
        },
      ],
    },
  },

  contact: {
    label: "LET'S CONNECT",
    headingParts: [
      {
        text: "Let’s Build  ",
        color: "#001845",
        size: "clamp(24px, 4vw, 46px)",
        weight: "700",
      },
      {
        text: "Together.",
        gradient: "linear-gradient(90deg, #A855F7, #7C3AED, #2563EB)",
        size: "clamp(24px, 4vw, 46px)",
        weight: "700",
      },
    ],
    description:
      "Have an idea, a project, or a business challenge in mind? Tell us what you’re looking to build, and our team will get back to you with the right direction.",
    button: "Send Message",
    data: [
      {
        icon: <FaMapLocationDot size={40} className="text-[#001845]" />,
        title: "Head Office",
        description:
          "A-21, 2nd Floor, BSI Business Park, Sector-63, Noida, Uttar Pradesh, India",
      },
      {
        icon: <IoIosMailOpen size={40} className="text-[#001845]" />,
        title: "Email Us",
        description: "softqivo@gmail.com",
      },
      {
        icon: <FaHeadphonesSimple size={40} className="text-[#001845]" />,
        title: "Working Hours",
        description: "Monday - Friday, 9:00 AM - 6:00 PM",
      },
    ],
  },

  serviceDetails: {
    pointOfService: {
      title: "Custom Point of Sale (POS) Software Development",
      description: [
        "Build a modern point-of-sale system tailored to your business operations, products, customers, and sales processes. SoftQivo develops custom POS solutions that help businesses manage transactions, inventory, customers, staff, and reporting from a centralized platform.",
        "Whether you need a retail POS, restaurant POS, multi-location sales system, or a customized business management solution, we design and develop software around your actual workflows instead of forcing your business to adapt to a generic system.",
      ],
      list: [
        "Custom billing and sales management workflows",
        "Inventory and product management",
        "Customer and staff management",
        "Real-time sales and business reporting",
        "Multi-location and multi-user support",
        "Third-party API and payment integrations",
      ],
    },

    weCreate: {
      title:
        "We Design and Build POS Software Around Your Business Workflow",
      description: [
        "A successful POS system needs more than a billing screen. We combine intuitive UI/UX design with reliable backend architecture to create software that is easy for employees to use and flexible enough to support changing business requirements.",
        "From product and inventory management to sales reporting, customer records, user permissions, and integrations, every part of the application is planned around your operational needs. Our development approach also considers security, performance, scalability, and future feature expansion.",
      ],
      list: [
        "User-friendly POS interface designed for fast daily operations",
        "Scalable backend architecture for growing transaction volumes",
        "Role-based access and user permission management",
        "Integration with payment gateways, APIs, and third-party systems",
        "Responsive web-based POS applications for different devices",
        "Analytics and reporting for better business decisions",
      ],

      cardData: [
        {
          title: "UI/UX Design",
          description:
            "We design simple, intuitive POS interfaces that help staff complete sales and manage daily operations quickly and efficiently.",
        },
        {
          title: "POS Development",
          description:
            "Our developers build secure, scalable POS applications with reliable frontend, backend, database, API, and integration architecture.",
        },
      ],

      cardImges: [card_img_01, card_img_02],
    },

    teamWork: {
      label: "Dedicated Development Team",
      title:
        "Build a POS Solution That Grows With Your Business",
      description: [
        "Our team works closely with you to understand your business processes, define the right features, design the experience, develop the platform, and continuously improve the product as your requirements evolve.",
        "Whether you are replacing an outdated POS system or building a new solution from the ground up, SoftQivo can provide the development expertise needed to turn your requirements into reliable business software.",
      ],
      list: [
        "Requirement analysis and product planning",
        "UI/UX design and interactive prototypes",
        "Frontend and backend development",
        "Database and API development",
        "Testing, deployment, and optimization",
        "Ongoing maintenance and feature improvements",
      ],
    },
  },

};
