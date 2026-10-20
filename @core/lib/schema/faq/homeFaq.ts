const faqData = [
  {
    question: "What services does SoftQivo provide?",
    answer:
      "SoftQivo provides custom software development, web application development, SaaS development, CRM solutions, UI/UX development, API development, and other digital solutions tailored to business requirements.",
  },
  {
    question: "Can you build a custom software solution for my business?",
    answer:
      "Yes. We develop custom software solutions based on your business processes, requirements, and goals. Our solutions are designed to be scalable, secure, and easy to maintain.",
  },
  {
    question: "Do you develop SaaS applications?",
    answer:
      "Yes. We build scalable SaaS platforms with features such as multi-tenancy, authentication, subscription management, dashboards, role-based access control, APIs, and cloud-ready architecture.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We work with modern technologies including React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, PostgreSQL, and other technologies depending on the project requirements.",
  },
  {
    question: "How long does it take to develop a website or application?",
    answer:
      "The timeline depends on the scope and complexity of the project. A simple website may take a few weeks, while a larger custom application or SaaS platform can take several months.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes. We can provide ongoing maintenance, performance optimization, bug fixes, security updates, feature enhancements, and technical support after the initial development.",
  },
  {
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes. We can integrate payment gateways, authentication providers, CRMs, communication platforms, analytics tools, maps, cloud services, and other third-party APIs.",
  },
  {
    question: "How can I start a project with SoftQivo?",
    answer:
      "You can contact us with your project requirements, goals, and estimated timeline. We will discuss your requirements, suggest an appropriate solution, and plan the next steps.",
  },
];

export const homeFaqSchema = {
  "@type": "FAQPage",
  "@id": "https://www.softqivo.com/#faq",
  mainEntity: faqData.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};