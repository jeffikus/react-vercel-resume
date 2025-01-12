export type SiteConfig = {
  name: string
  role: string
  location: string
  bio: string
  metadata: {
    title: string
    description: string
  }
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
  careerHighlights: Array<{
    title: string
    description: string
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
  footer: {
    credits: string
  }
}

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_NAME || "Your Name",
  role: process.env.NEXT_PUBLIC_ROLE || "Engineering Manager & Frontend Developer",
  location: "Charlotte, NC and Remote USA",
  metadata: {
    title: `${process.env.NEXT_PUBLIC_NAME || "Your Name"} - ${process.env.NEXT_PUBLIC_ROLE || "Engineering Manager & Frontend Developer"}`,
    description: `Professional portfolio of ${process.env.NEXT_PUBLIC_NAME || "Your Name"}, experienced Engineering Manager & Frontend Developer based in Charlotte, NC.`
  },
  bio: "I am an accomplished Engineering Manager with over 15 years of experience, specializing in leading high-performing teams to deliver large-scale, high-quality web products. I have a proven track record of driving innovation, fostering cross-team collaboration, and achieving outstanding results in fast-paced, evolving environments.",
  contact: {
    email: process.env.NEXT_PUBLIC_EMAIL || "email@example.com",
    phone: process.env.NEXT_PUBLIC_PHONE || "+1 234 567 8900",
    website: process.env.NEXT_PUBLIC_WEBSITE || "https://example.com",
    contactPage: process.env.NEXT_PUBLIC_CONTACT_PAGE || "https://example.com/contact"
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
      ],
    },
    {
      company: "WooCommerce",
      roles: [
        { title: "Senior Software Developer, WooCommerce", period: "Dec 2009 - Jun 2015 (acquired by Automattic in 2015)" },
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
  careerHighlights: [
    {
      title: "Building Trusted, Customer-Centric Products",
      description: "I have led and contributed to the development of widely adopted and highly rated frontend products, including WooCommerce, Sensei LMS, Flexslider, over 100 WordPress themes, and the WordPress core Navigation Menu System. By leveraging customer insights to inform design and implementation, I have consistently prioritised user-focused solutions that drive adoption, enhance satisfaction, and build trust in our offerings."
    },
    {
      title: "Driving Design Systems Excellence",
      description: "I led engineering teams in creating scalable design system implementations, including in WordPress themes and VIP partner projects, that ensure consistency and ease of maintenance. My teams contributed key design tools to WordPress core, enabling editable global styles, ensuring reusable component consistency, and enhancing workflows."
    },
    {
      title: "Proven Leadership and Team Influence",
      description: "I have a proven track record of mentoring technical leaders and maximizing team potential. My influence extended to key contributors in the WordPress open-source project, driving high-quality, scalable results across PHP, JavaScript, and React teams."
    },
    {
      title: "Streamlining Processes",
      description: "I introduced agile methodologies to my teams, accelerating shipping velocity from 10 products annually to 12 per month, and developed automated processes for product releases to boost efficiency and consistency."
    },
    {
      title: "Empowering Cross-Functional Teams",
      description: "My teams automated product release workflows by integrating APIs into an intuitive dashboard, enabling designers to independently launch multiple products. This strengthened collaboration between design and development teams, accelerating product launches."
    },
    {
      title: "Strategic Product Leadership",
      description: "I led the retirement of legacy products such as the Canvas WordPress theme and the WordPress.com Premium Theme Marketplace, collaborating with finance, legal, and executive stakeholders to ensure seamless execution and minimal customer disruption, aligning the product portfolio with long-term company goals."
    },
    {
      title: "Deep eCommerce Expertise",
      description: "At WooCommerce, I contributed to the core codebase, authored technical documentation for third-party developers, and managed high-traffic implementations, delivering scalable, reliable solutions for a global customer base."
    },
    {
      title: "Implementing AI Efficiencies",
      description: "My recent work with AI tools has significantly improved team productivity. I implemented AI to streamline project retrospectives, transform large volumes of web content, and accelerate team status updates, resulting in measurable workload reductions."
    }
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
    "Mobile App Development",
  ] as const,
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
    {
      name: "Free WordPress Themes",
      details: "Made by Automattic for WordPress.org and WordPress.com.",
      url: "https://github.com/Automattic/themes"
    },
    {
      name: "This Resume",
      details: "Built with React, Next.js, Shadcn UI, v0.dev, using Cursor IDE.",
      url: "https://github.com/jeffikus/react-vercel-resume"
    },
  ],
  references: [
    {
      name: "Kjell Reigstad",
      title: "Senior Staff Product Designer at Shopify",
      message: "I worked extensively with Jeff as both his lead and also as his peer at Automattic. He's is an expert in the WordPress themes space, and is an organized, thoughtful leader with an eye for improving processes."
    },
    {
      name: "Beau Lebens",
      title: "Head of Engineering, WooCommerce",
      message: "Jeffrey is a pleasure to work with, and brings a combined design and engineering perspective to his work that is uniquely powerful. I've appreciated his thoughtful approach over the years that we've worked together."
    },
    {
      name: "Andrew Keggie",
      title: "CIO at Lula",
      message: `Jeff is a hard working individual, dependable and self managed. He has a passion for development and aptitude for analyzing business requirements.

I have worked with Jeff in completing a number of successful websites and would happily work with him again.`
    },
    {
      name: "Warren Holmes",
      title: "Head of Product, WooCommerce",
      message: `I had the privilege of working closely with Jeff in the early days of WooCommerce, and I can confidently say that he is one of the best technical engineers I've worked with. He consistently demonstrates a deep understanding of not just the "how" but the "why" behind the work, which makes him incredibly effective at solving problems and building meaningful solutions.

Beyond his technical expertise, Jeff is a true team player. He's always willing to take on whatever role is needed to get the job done, and he does so with a positive attitude and genuine care for the people around him. His humor and kindness bring a sense of humanity to any team, making him not just a great colleague, but a good person to work with.

He has an incredible work ethic and is exactly the type of engineer who helps you build great products. I'll always be grateful for how he mentored me early in my career and for the support he provided during a particularly tough moment when WooCommerce.com, a site I managed, was hacked. His calm demeanor and guidance were invaluable in helping us recover.

Any company would be lucky to have Jeff on their team.`
    },
    {
      name: "Daniel Dudzic",
      title: "Senior Full Stack Engineer",
      message: `I highly recommend Jeff, who is both a former colleague and a friend. He is an exceptional technical engineer. Jeff leads with empathy and a calm approach, which makes him great at helping teams navigate challenges.

One of Jeff's standout qualities is his ability to uplift those around him, positively influencing team dynamics. He blends his technical skills with a collaborative attitude, consistently producing high-quality work while creating a supportive atmosphere.

Any organization would be lucky to have Jeff. He is not only a highly skilled professional but also an inspiring colleague who encourages others to excel. If you have the chance to bring Jeff onto your team, I strongly recommend you take it.`
    },
    {
      name: "Matt Cohen",
      title: "Head of Platform Engineering, WooCommerce",
      message: `Jeffrey and I worked together across WooThemes/WooCommerce and Automattic, for almost 15 years. We shared an office and spent many hours in planning sessions to build version 1 of Sensei, among many other digital products.

Jeff has a methodical and thoughtful approach to his work. He puts the customer first, and brings a clear intention toward the outcomes his work will help customers to achieve. Jeff is an emphatic and thoughtful leader who puts his team first and aligns the group around a shared mission and objective.

I would recommend Jeff as a strong team leader and software engineering director.`
    },
    {
      name: "Andy Schär",
      title: "Founder at Debatable",
      message: "Jeff is a really great guy and a genuine expert in his field. I had the pleasure of his consultancy from time to time during the development of FLIXY and Jeff's role was predominantly as my technical advisor. That proved invaluable as I navigated some pretty technical development terrain. His knowledge and calm demeanour made it easy for me to make important time-sensitive decisions and I recommend him highly."
    },
    {
      name: "Andrew Lind",
      title: "Senior Analytics Engineer, Automattic",
      message: `Jeff achieved legendary status at Woo and Automattic, as confirmed by several memes being created in his honour!

I had the fortune of having Jeff as a mentor when I joined Automattic, and his generous support and care helped me acclimatise to the distributed and somewhat chaotic culture of the company.

He was always available for some handy insight and guidance whenever I needed it!`
    },
    {
      name: "Christy Nyiri",
      title: "Design Lead, Automattic Special Projects",
      message: `Jeff was my team lead during part of my time at Automattic, and it was refreshing to report to someone with an engineering background who not only understood all my technical frustrations, but worked with me to systematically solve those problems, both for myself, and for our larger team.

I'll miss him and his terrible puns!`
    },
    {
      name: "Josepha Haden Chomphosy",
      title: "Open source software executive | Councilmember",
      message: `Jeffrey stepped into leadership role for a team in transition and did a great job of rebuilding their sense of psychological safety. He has a good instinct for mid-level strategic gaps, and proactively seeks thought partnership for solving those key problems.

He's a clear and thoughtful communicator and quick to implement changes based on feedback received. I would work with him again any day.`
    },
    {
      name: "Beatriz Fialho",
      title: "Product Designer, Automattic",
      message: `I had the pleasure of working with Jeff while he led the Themes Development team, where he consistently bridged gaps between design and development with his approachable, empathetic nature.

Jeff was always ready to help solve complex development problems, foster open communication across teams, and effectively prioritize and delegate tasks.

I highly recommend Jeff for any role that requires solid leadership, development and project management skills, as well as deep knowledge of WordPress.`
    },
    {
      name: "Sarah Norris",
      title: "Engineering Lead, Automattic",
      message: `I had the pleasure of working with Jeff for just over 2 years on the Theme Dev team at Automattic. I appreciated his kindness and thoughtfulness as my team lead, and he always gave the team his full support.

He has many years of experience with WordPress, especially all things themes, and he has a keen eye for organisation and process.`
    },
    {
      name: "Kyle Runner",
      title: "Agency Partner Manager, Automattic",
      message: `I am honored to say that I got to work with Jeff over the past year when he came in as my team lead! Jeff is a compassionate and dedicated leader that is always willing to dig in and problem solve.

He is relational, humorous and full of insight in that tends to bring the best out of his team members. Any team should be thrilled to bring in someone of such a high caliber!`
    },
    {
      name: "Chloé Bringmann",
      title: "Pyschotherapist | Executive Performance Coach",
      message: `I have had the pleasure of collaborating with Jeff during his tenure working with themes in the WordPress open source Project. His approach to block themes was characterized by curiosity and creativity, mirrored in his leadership.

Jeff is a valued colleague and a driver of innovation and impact, which I look forward to seeing carried over in his work as a leader in Automattic's Special Projects.`
    },
    {
      name: "Magnus Jepson",
      title: "Co-Founder, WooCommerce",
      message: "From the moment Jeffrey joined our team at Woo, he has been a great asset to the team, a mentor to new employees and a great friend over the years."
    }
  ],
  social: {
    github: "https://github.com/jeffikus",
    linkedin: "https://linkedin.com/in/jeffikus",
    twitter: "https://twitter.com/jeffikus",
    facebook: "https://facebook.com/jeffikus",
    instagram: "https://instagram.com/jeffikus",
    wordpress: "https://profiles.wordpress.org/jeffikus"
  },
  footer: {
    credits: "Built with React, Next.js, Shadcn UI, and v0.dev"
  }
}

