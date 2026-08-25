import client_01 from "../../public/images/clients/logoipsum-286-1.png";
import client_02 from "../../public/images/clients/logoipsum-286-1.png";
import client_03 from "../../public/images/clients/logoipsum-286-1.png";
import client_04 from "../../public/images/clients/logoipsum-286-1.png";
import client_05 from "../../public/images/clients/logoipsum-286-1.png";
import client_06 from "../../public/images/clients/logoipsum-286-1.png";
//card img
import card_img_01 from "../../public/images/work-5224077_1920.jpg";
import card_img_02 from "../../public/images/vision.jpg";
//feedback data
import feedback01 from "../../public/images/software-developer-at-office.jpg";
import feedback02 from "../../public/images/software-developer-at-office.jpg";
import feedback03 from "../../public/images/software-developer-at-office.jpg";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { TbClock24 } from "react-icons/tb";
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
      label: "Custom Software Development",
      heading: "Build Powerful Digital Solutions That Grow Your Business",
      description:
        "We design and develop fast, scalable, and modern websites, web applications, and custom software tailored to your business needs.",
      button: "Get a Quote",
      button2: "See Projects",
    },
    ourClients: {
      heading: "Our Clients",
      data: [client_01, client_02, client_03, client_04, client_05, client_06],
    },
    aboutUs: {
      label: "About Us",
      heading:
        "Welcome to our custom software development service For Any Needs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    whoWeAre: {
      image: "",
      label: "Who We Are",
      heading:
        "we specialize in providing tailor-made software solutions Custom Needed",
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
      heading: "Discover Our Best Service Provided From Expert",
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
      heading: "We Have Expertise To Build Customization Software From Idea",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      button: "Get a Quote",
    },
    expertSkill: {
      label: "Expert Skill We Have",
      heading:
        "we have the skills and expertise to deliver high-quality Custom software",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ],
      button: "Get a Quote",
    },
    takeTheTime: {
      label: "take the time to understand",
      heading: "We work closely with you to develop a customized solution",
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
      heading: "Choose Our Flexible Pricing Plan For Customizing Software",
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
      heading:
        "We provide dedicated support throughout the development process and beyond",
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
    feedbacks: {
      label: "Feedback",
      heading: "We provide our clients with the most innovative and effective",
      data: [
        {
          img: feedback01,
          message:
            "Excellent experience working with the team. Excellent experience working with the team.",
          name: "John Doe",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          designation: "CEO, Company",
        },
        {
          img: feedback02,
          message:
            "Excellent experience working with the team. Excellent experience working with the team.",
          name: "John Doe",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          designation: "CEO, Company",
        },
        {
          img: feedback03,
          message:
            "Excellent experience working with the team. Excellent experience working with the team.",
          name: "John Doe",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          designation: "CEO, Company",
        },
      ],
    },
  },
  contact: {
    label: "Stay Tuned With us",
    heading: "Get Information & Lets Get In Touch With Our Team",
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
