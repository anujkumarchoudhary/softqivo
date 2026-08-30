import client_01 from "../../public/images/clients/logoipsum-286-1.png";
import client_02 from "../../public/images/clients/logoipsum-286-1.png";
import client_03 from "../../public/images/clients/logoipsum-286-1.png";
import client_04 from "../../public/images/clients/logoipsum-286-1.png";
import client_05 from "../../public/images/clients/logoipsum-286-1.png";
import client_06 from "../../public/images/clients/logoipsum-286-1.png";
//card img
import card_img_01 from "../../public/images/work-5224077_1920.jpg";
import card_img_02 from "../../public/images/vision.jpg";

//team
import team from "../../public/images/team/team_1.jpg";

//support
import support_1 from "../../public/images/support/support_1.png";

//feedback data
import feedback01 from "../../public/images/software-developer-at-office.jpg";
import feedback02 from "../../public/images/software-developer-at-office.jpg";
import feedback03 from "../../public/images/software-developer-at-office.jpg";
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
          text: "Transform Ideas  ",
          color: "#FFFFFF",
          // style: "normal",
          font: "playfair",
          style: "italic",
          size: "clamp(32px, 6vw, 54px)",
          weight: "400",
        },
        {
          text: "  Into Powerful Digital Solutions.",
          color: "#FFFFFF",
          size: "clamp(32px, 6vw, 54px)",
          weight: "700",
          // gradient:
          //   "linear-gradient(90deg, #A855F7 0%, #7C3AED 50%, #2563EB 100%)",
        },
      ],
      description:
        "We create fast, scalable, and intelligent digital solutions engineered to solve real business challenges and drive measurable growth.",
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
          size: "clamp(36px, 5vw, 52px)",
          weight: "600",
        },
        {
          text: " grow your business.",
          color: "#111118",
          style: "normal",
          size: "clamp(36px, 5vw, 52px)",
          weight: "600",
          gradient:
            "linear-gradient(90deg, #A855F7 0%, #7C3AED 50%, #2563EB 100%)",
        },
      ],
      description:
        "From strategy and design to development and deployment, we build digital products that are fast, scalable and purpose-driven.",
      list: [
        {
          title: "Web Development",
          description:
            "We build fast, responsive websites and web applications with modern technologies, clean architecture, strong security, seamless experiences, and scalable performance for growth.",
          href: "/services/web-development",
          icon: "Code2",
        },
        {
          title: "Software Development",
          description:
            "We create custom software solutions tailored to your business workflows, combining secure architecture, powerful functionality, scalable technology, and reliable performance for growth.",
          href: "/services/software-development",
          icon: "Layers3",
        },
        {
          title: "Mobile Applications",
          description:
            "We develop intuitive mobile applications with seamless experiences, powerful features, responsive interfaces, and reliable performance across modern devices and platforms for businesses.",
          href: "/services/mobile-applications",
          icon: "Smartphone",
        },
        {
          title: "UI/UX Design",
          description:
            "We design intuitive digital experiences through thoughtful research, clear interfaces, engaging interactions, and user-focused design that improves usability, engagement, and conversions.",
          href: "/services/ui-ux-design",
          icon: "Palette",
        },
        {
          title: "API & Backend",
          description:
            "We develop secure, scalable backend systems and APIs that power applications, enable integrations, manage data efficiently, and deliver reliable performance at scale.",
          href: "/services/api-backend",
          icon: "Boxes",
        },
        {
          title: "Cloud & DevOps",
          description:
            "We build reliable cloud infrastructure and DevOps workflows that improve deployment speed, scalability, security, monitoring, automation, and overall operational efficiency for businesses.",
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
          size: "clamp(36px, 5vw, 52px)",
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
          size: "clamp(24px, 4vw, 46px)",
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
          color: "#FFFFFF",
          style: "normal",
          size: "clamp(36px, 5vw, 52px)",
          weight: "600",
        },
        {
          text: " We build with purpose.",
          color: "#FFFFFF",
          style: "normal",
          size: "clamp(36px, 5vw, 52px)",
          weight: "600",
          gradient:
            "linear-gradient(90deg, #6B7280 0%, #D1D5DB 50%, #6B7280 100%)",
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
          size: "clamp(36px, 5vw, 52px)",
          weight: "700",
        },
        {
          text: " Big ideas.",
          color: "#111118",
          size: "clamp(36px, 5vw, 52px)",
          weight: "700",
          gradient:
            "linear-gradient(90deg, #A855F7 0%, #7C3AED 50%, #2563EB 100%)",
        },
      ],

      description:
        "A focused team of designers, developers, and problem-solvers working together to turn ambitious ideas into meaningful digital experiences.",

      members: [
        {
          name: "Anuj Kumar Choudhary",
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
    support: {
      label: "Dedicated Support",

      heading:
        "We provide dedicated support throughout the development process",

      highlight: "and beyond.",

      description:
        "Our team stays with you beyond launch — helping you solve problems, improve your product, and keep your digital experience moving forward.",

      mainImage: support_1,

      teamImage: support_1,

      videoHref: "/",

      features: [
        {
          icon: "clock" as const,
          title: "24 Hours Support",
          description:
            "Our team is available whenever you need help, guidance, or technical assistance.",
        },
        {
          icon: "infinity" as const,
          title: "Unlimited Revision",
          description:
            "We refine and improve your product until everything feels right and works as expected.",
        },
      ],
    },
    whoWeAre: {
      image: "",
      label: "Who We Are",
      headingParts: [
        {
          text: "we specialize in providing tailor-made software solutions Custom Needed",
          color: "#001845",
          size: "clamp(24px, 4vw, 46px)",
          weight: "700",
        },
      ],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      ],
      data: [
        {
          name: "15 Years Experience",
          description: "Lorem ipsum dolor sit amet consectetur",
        },
        {
          name: "Best Certification Team",
          description: "Lorem ipsum dolor sit amet consectetur",
        },
        {
          name: "Unlimited Revision",
          description: "Lorem ipsum dolor sit amet consectetur",
        },
      ],
    },
    whatWeDo: {
      label: "What We Do",
      headingParts: [
        {
          text: "Discover Our Best Service Provided From Expert",
          color: "#001845",
          size: "clamp(24px, 4vw, 46px)",
          weight: "700",
        },
      ],
      data: [
        {
          icon: "",
          name: "Web Development",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          button: "Learn More",
        },
        {
          icon: "",
          name: "App Development",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          button: "Learn More",
        },
        {
          icon: "",
          name: "Payment Gateway",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          button: "Learn More",
        },
        {
          icon: "",
          name: "CRM Software",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          button: "Learn More",
        },

        {
          icon: "",
          name: "Frontend Development",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          button: "Learn More",
        },
        {
          icon: "",
          name: "Backend Development",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          button: "Learn More",
        },
        {
          icon: "",
          name: "API Integration",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          button: "Learn More",
        },
        {
          icon: "",
          name: "HRMS Software",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          button: "Learn More",
        },
      ],
    },
    bringIdea: {
      label: "Bring Your Ideas",
      headingParts: [
        {
          text: "We Have Expertise To Build Customization Software From Idea",
          color: "#FFFFFF",
          size: "clamp(24px, 4vw, 46px)",
          weight: "700",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      button: "Get a Quote",
    },
    expertSkill: {
      label: "Expert Skill We Have",
      headingParts: [
        {
          text: "we have the skills and expertise to deliver high-quality Custom software",
          color: "#001845",
          size: "clamp(24px, 4vw, 46px)",
          weight: "700",
        },
      ],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ],
      button: "Get a Quote",
    },
    takeTheTime: {
      label: "take the time to understand",
      headingParts: [
        {
          text: "We work closely with you to develop a customized solution",
          color: "#001845",
          size: "clamp(24px, 4vw, 46px)",
          weight: "700",
        },
      ],
      list: {
        name: "” Lorem ipsum dolor sit amet, consectetur adipiscing elit sed “",
        data: [
          "Lorem ipsum dolor sit amet",
          "Sit amet consectetur",
          "Lorem ipsum dolor sit amet",
        ],
      },
      details: {
        name: "Experienced Developer",
        data: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        ],
      },
    },
    pricingPlan: {
      label: "Pricing Plan",
      headingParts: [
        {
          text: "Choose Our Flexible Pricing Plan For Customizing Software",
          color: "#FFFFFF",
          size: "clamp(24px, 4vw, 46px)",
          weight: "700",
        },
      ],
      data: [
        {
          label: "Starter",
          description: "Lorem ipsum dolor sit amet",
          rate: "15",
          button: "Get Started",
          service: [
            "Full Custimization",
            "Clean Code",
            "Exclusive Programs",
            "Expert Consultation",
          ],
        },
        {
          label: "Medium",
          description: "Lorem ipsum dolor sit amet",
          rate: "32",
          button: "Get Started",
          service: [
            "Full Custimization",
            "Clean Code",
            "Exclusive Programs",
            "Expert Consultation",
          ],
        },
        {
          label: "Expert",
          description: "Lorem ipsum dolor sit amet",
          rate: "69",
          button: "Get Started",
          service: [
            "Full Custimization",
            "Clean Code",
            "Exclusive Programs",
            "Expert Consultation",
          ],
        },
      ],
    },
    dedicatedSupport: {
      label: "Dedicated Support",
      headingParts: [
        {
          text: "We provide dedicated support throughout the development process and beyond",
          color: "#001845",
          size: "clamp(24px, 4vw, 46px)",
          weight: "700",
        },
      ],
      data: [
        {
          //   icon: <TbClock24 />,
          title: "24 Hours Support",
          desc: "Lorem ipsum dolor sit amet consectetur",
        },
        {
          //   icon: <PiClockCounterClockwiseFill />,
          title: "Unlimited Revision",
          desc: "Lorem ipsum dolor sit amet consectetur",
        },
      ] as SupportItem[],
    },
    blogs: {
      label: "Our Insights",

      headingParts: [
        {
          text: "Ideas, insights & digital thinking.",
          color: "#000000",
          size: "clamp(24px, 4vw, 46px)",
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
    feedbacks: {
      label: "Client Feedback",

      headingParts: [
        {
          text: "What our clients say.",
          color: "#000000",
          size: "clamp(24px, 4vw, 46px)",
          weight: "700",
        },
      ],

      data: [
        {
          img: "/images/review/review_1.jpg",
          message:
            "SoftQivo understood our vision quickly and turned it into a polished digital product that exceeded our expectations.",

          name: "Arjun Mehta",

          comment:
            "The team was responsive, professional, and technically strong throughout the entire project. We were impressed with the quality and attention to detail.",

          designation: "Founder & CEO, Nexora",
        },

        {
          img: "/images/review/review_2.webp",
          message:
            "Working with SoftQivo made the entire development process simple, transparent, and genuinely enjoyable for our team.",

          name: "Sarah Williams",

          comment:
            "From design to development and delivery, everything was handled with care. They consistently delivered thoughtful solutions and were always open to feedback.",

          designation: "Director, BrightLabs",
        },

        {
          img: "/images/review/review_3.jpg",
          message:
            "SoftQivo delivered a modern, scalable solution that gave our business the technology foundation we needed to grow.",

          name: "Rahul Sharma",

          comment:
            "Their combination of design thinking and technical expertise really stood out. The final product feels fast, intuitive, and built for the future.",

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
          size: "clamp(24px, 4vw, 46px)",
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
  contact: {
    label: "Stay Tuned With us",
    headingParts: [
      {
        text: "Get Information & Lets Get In Touch With Our Team",
        color: "#001845",
        size: "clamp(24px, 4vw, 46px)",
        weight: "700",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    button: "Send Message",
    data: [
      {
        icon: <FaMapLocationDot size={40} className="text-[#001845]" />,
        title: "Head Office Address",
        description: "Lumbung Hidup St. 42 East java Madiun Cituy 10000",
      },
      {
        icon: <IoIosMailOpen size={40} className="text-[#001845]" />,
        title: "Email Address",
        description: "info@softtech.com",
      },
      {
        icon: <FaHeadphonesSimple size={40} className="text-[#001845]" />,
        title: "Office Hour",
        description: "Monday - Friday, 9:00 AM - 6:00 PM",
      },
    ],
  },
  serviceDetails: {
    pointOfService: {
      title:
        "Point Of Sales Customization Software Development Web Based Service",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur",
      ],
    },
    weCreate: {
      title:
        "We create a detailed design of the software including user interface functionality",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur",
      ],
      cardData: [
        {
          title: "UI UX Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Development Proccess",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
      cardImges: [card_img_01, card_img_02],
    },

    teamWork: {
      label: "Dedicated Team Work",
      title:
        "We're excited to Give The Best Work Result For Your Projects Work With us",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      ],
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
        "Lorem ipsum dolor sit amet, consectetur",
      ],
    },
  },
};
