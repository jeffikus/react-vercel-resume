export type SiteConfig = {
  name: string
  role: string
  location: string
  bio: string
  contact: {
    email: string
    phone: string
    website: string
    contactPage: string
  }
  roles: {
    primary: {
      title: string
      description: string
      resumeUrl: string
      coverLetterUrl: string
    }
    secondary: {
      title: string
      description: string
      resumeUrl: string
      coverLetterUrl: string
    }
  }
  employmentHistory: Array<{
    company: string
    roles: Array<{
      title: string
      period: string
    }>
  }>
  skills: string[]
  projects: Array<{
    name: string
    url: string
    details: string
  }>
  references: Array<{
    name: string
    title: string
    message: string
    avatar: string
  }>
  social: {
    github: string
    linkedin: string
    twitter: string
    facebook: string
    instagram: string
    wordpress: string
  }
}

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_NAME || "Your Name",
  role: "Engineering Manager & Frontend Developer",
  location: "Charlotte, NC and Remote US",
  bio: "I am an accomplished Engineering Manager with over 15 years of experience, specializing in leading high-performing teams to deliver large-scale, high-quality web products. I have a proven track record of driving innovation, fostering cross-team collaboration, and achieving outstanding results in fast-paced, evolving environments.",
  contact: {
    email: process.env.NEXT_PUBLIC_EMAIL || "email@example.com",
    phone: process.env.NEXT_PUBLIC_PHONE || "+1 234 567 8900",
    website: "https://jeffikus.com",
    contactPage: "https://jeffikus.com/contact-me/"
  },
  roles: {
    primary: {
      title: "Engineering Manager",
      description: "With over a decade of experience leading high-performing, distributed teams, I bring a blend of engineering excellence, impactful leadership, and a commitment to empowering designers and engineers through scalable and innovative solutions.",
      resumeUrl: "/jeffrey-pearce-resume.pdf",
      coverLetterUrl: "/jeffrey-pearce-cover-letter-em.pdf"
    },
    secondary: {
      title: "Frontend Developer",
      description: "With extensive experience in frontend development, I have led and contributed to widely adopted and highly rated products, leveraging customer insights to inform design and implementation, consistently prioritizing user-focused solutions.",
      resumeUrl: "/jeffrey-pearce-resume.pdf",
      coverLetterUrl: "/jeffrey-pearce-cover-letter-fd.pdf"
    }
  },
  employmentHistory: [
    {
      company: "Automattic",
      roles: [
        { title: "Technical Program Manager, Special Projects Team", period: "Oct 2023 - Oct 2024" },
        { title: "Engineering Manager, Theme Development Team", period: "Aug 2020 - Oct 2023" },
        { title: "Engineering Squad Lead, WordPress.com Theme Development Team", period: "Mar 2020 - Aug 2020" },
        { title: "Creative Technologist, Design Division", period: "Nov 2018 - Mar 2020" },
        { title: "Senior Software Developer, Theme Development Team", period: "Jul 2015 - Nov 2018" },
        { title: "Senior Software Developer, WooCommerce", period: "Dec 2009 - Jun 2015" },
      ],
    },
    {
      company: "White Wall Web",
      roles: [
        { title: "Analyst Developer", period: "Jan 2007 - Nov 2009" },
      ],
    },
    {
      company: "FLIXY",
      roles: [
        { title: "Technical Advisor/Consultant", period: "2015 - 2018" },
      ],
    },
  ],
  skills: [
    "Engineering Leadership",
    "Communication",
    "Frontend Design Systems",
    "Agile Project Management",
    "SDLC",
    "Product Management",
    "Web Development",
    "JavaScript",
    "React",
    "Computer Science",
    "Cross-Functional Coordination",
    "Strategic Planning",
    "Code Review",
    "Professional Development",
    "MySQL",
    "REST API Integration",
    "PHP",
    "CSS",
    "HTML",
    "WordPress",
    "eCommerce",
    "AI Integration",
    "GitHub",
    "Continuous Integration (CI/CD)",
    "Docker",
    "Figma",
  ],
  projects: [
    { 
      name: "WooCommerce", 
      url: "https://woocommerce.com/",
      details: "Worked on the original project brief, v1 technical code review, single product gallery slider integration, WordPress default theme integration."
    },
    { 
      name: "SenseiLMS", 
      url: "https://senseilms.com/",
      details: "Original lead developer, end to end product ownership, WooCommerce integration."
    },
    { 
      name: "Flexslider", 
      url: "https://github.com/woocommerce/FlexSlider",
      details: "Lead developer for several years, taking over after original product developer moved on."
    },
    { 
      name: "WordPress Core", 
      url: "https://wordpress.org/",
      details: "Wrote the original navigation menu system, contributed to multiple default themes, and led the team that worked on Font Library in v6.4."
    },
    { 
      name: "Gutenberg Plugin", 
      url: "https://wordpress.org/plugins/gutenberg/",
      details: "Led a core engineering team focused on improving design tools in the plugin."
    },
    { 
      name: "a8c Special Projects", 
      url: "https://specialprojects.automattic.com/",
      details: "Managed a launch team of Technical Account Managers, serving our VIP partners, focusing on high traffic eCommerce websites."
    },
    { 
      name: "WP Calypso", 
      url: "https://github.com/Automattic/wp-calypso",
      details: "Contributed to the core code base."
    },
    { 
      name: "_s Starter Theme", 
      url: "https://github.com/Automattic/_s",
      details: "Responsible for WooCommerce integration, and code review."
    },
    { 
      name: "Create Block Theme", 
      url: "https://wordpress.org/plugins/create-block-theme/",
      details: "Part of the core development team, managed the team that created the v1."
    },
    { 
      name: "Storefront Theme", 
      url: "https://wordpress.org/themes/storefront/",
      details: "Technical code review for v1, assisted with code fixes for the marketing team."
    },
  ],
  references: [
    {
      name: "John Doe",
      title: "Engineering Director",
      message: "Jeffrey is an exceptional leader who consistently delivers results.",
      avatar: "/placeholder-avatar.jpg",
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      message: "Working with Jeffrey was a pleasure. His technical expertise and leadership skills are outstanding.",
      avatar: "/placeholder-avatar.jpg",
    },
  ],
  social: {
    github: "https://github.com/jeffikus",
    linkedin: "https://linkedin.com/in/jeffikus",
    twitter: "https://twitter.com/jeffikus",
    facebook: "https://facebook.com/jeffikus",
    instagram: "https://instagram.com/jeffikus",
    wordpress: "https://profiles.wordpress.org/jeffikus/"
  }
}

