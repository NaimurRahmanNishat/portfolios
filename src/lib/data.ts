import { AboutProps, EducationProps, ExperienceProps, NavLinks, ServiceProps, StatProps } from "@/types/types";

// navLinks using headers
export const navLinks: NavLinks[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/service",
  },
  {
    name: "Projects",
    path: "/project",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

// stats data
export const stats: StatProps[] = [
  {
    num: 3,
    postfix: "+",
    text: "Years of experience",
  },
  {
    num: 45,
    postfix: "+",
    text: "Projects completed",
  },
  {
    num: 8,
    postfix: "+",
    text: "Technologies mastered",
  },
  {
    num: 500,
    postfix: "+",
    text: "Code commits",
  },
];

// service data
export const services: ServiceProps[] = [
  {
    id: "01",
    title: "Frontend Development",
    description:
      "A front-end developer is basically a web developer who has a specialization in creating user interfaces for applications and websites.A front-end developer is basically a web developer who has a specialization in creating user interfaces for applications and websites. Their responsibilities span from optimizing application performance to creating visually appealing user interfaces. Proficiency in HTML5, CSS3, and JavaScript to create dynamic and interactive web experiences. Monitor and analyze website performance metrics using tools like Lighthouse or Google PageSpeed Insights. Identify and address performance bottlenecks such as render-blocking resources, large asset sizes, and inefficient code. Utilize design tools like Adobe XD, Sketch, or Figma to create high-fidelity mockups and interactive prototypes. Troubleshoot and debug front-end issues using browser developer tools and debugging techniques.",
    href: "",
  },
  {
    id: "02",
    title: "Backend Development",
    description:
      "Back-end development covers server-side web application logic and integration and activities, like writing APIs, creating libraries, and working with system components instead of frontend development, which focuses on customer-facing services and programs. Backend developers build code that allows a database and an application to communicate with one another. Backend developers take care and maintain the back-end of a website, Including databases, servers, and apps, and they control what you don't see. A backend developer's job entails focusing on website architecture, scripting, and writing code that communicates between the website’s database and the user's browser. Data consistency and integrity must be ensured. A backend developer creates code that does relational mapping to retrieve data from a database. MySQL, PostgreSQL, SQL SERVER, MongoDB, and Oracle Database are some of the most widely used DBMS. NodeJS and ExpressJS are examples of JavaScript environments. Python is the most widely used programming language. It's adaptable and simple to use. Backend development is done with Python frameworks like Django and Flask.",
    href: "",
  },
  {
    id: "03",
    title: "Fullstack Development",
    description:
      "A Full Stack Developer not only handles frontend and backend development tasks but also plays a crucial role in creating visually appealing user interfaces. Their ability to build robust server-side applications makes them essential in bringing entire web projects to life, adding a creative touch to their technical expertise. Frontend Development: Design and develop user-facing web applications using modern frontend languages like HTML, CSS, and JavaScript, TypeScript and frameworks like React.js. Backend Development: Build and maintain server-side application logic using languages such as Node.js, Python, Ruby, Java, or PHP, and manage database interactions with MySQL, PostgreSQL, MongoDB, or other database systems. API Development and Integration: Develop and integrate RESTful APIs to connect frontend and backend components, ensuring smooth data flow and communication between different parts of the application. Database Management: Design, implement, and manage databases, ensuring data integrity, security, and optimal performance. Cross-Platform Optimization: Ensure the application is responsive and optimized for different devices, platforms, and browsers.",
    href: "",
  },
  {
    id: "04",
    title: "Software Development",
    description:
      "A software developer is an individual whose primary job is designing, developing and implementing different computer programs and applications. Companies across all industries rely on software developers to create software solutions that allow businesses to operate efficiently and provide useful services to customers. This comprehensive article explains the roles and responsibilities of software developers. Software developers start by consulting with clients, managers or stakeholders to understand their needs and the specific requirements for the new software. Once the requirements are established, developers carefully plan out the architecture and structure of the software program. This is where software developers write the actual code that will make the software work as intended. They use various programming languages like Java, C++, Python, JavaScript etc., based on the type of software being built. The software is then integrated with other relevant programs, databases or platforms as required. Once all testing is complete, software developers deploy or release the fully functional software so it is accessible to end-users. Software requires continuous maintenance and upgrades over time. Developers are responsible for managing existing software by fixing bugs, enhancing features, improving performance and adding new functionalities as requirements change.",
    href: "",
  },
];

// about data
export const about: AboutProps = {
  title: "About me",
  description:
    "This is Naimur Rahman Nishat. I am a software developer & programmer.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Naimur Rahman Nishat",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880 15684-50889)",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "NaimurRahman.34",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "naimurrahmun34@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Bangla",
    },
  ],
};


// experience data
export const experience:ExperienceProps = {
  icon: "/resume/badge.svg",
  title: "My experience",
  description: "I am a software developer & programmer.",
  items: [
    {
      company: "Selopia IT",
      position: "Font-end Developer",
      duration: "2023-Present",
    },
    {
      company: "Selopia IT",
      position: "Font-end Developer intern",
      duration: "Summer-2023",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2022-2023",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2022-2023",
    },
    {
      company: "Degital Agency",
      position: "UI/UX Designer",
      duration: "2020-2021",
    },
    {
      company: "Selopia IT",
      position: "junior Developer",
      duration: "2022-2023",
    },
  ],
};

// education data
export const education:EducationProps = {
  icon: "/resume/cap.svg",
  title: "My education",
  description: "I am a software developer & programmer.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Font-end Web Developer Bootcamp",
      duration: "2022",
    },
    {
      institution: "Codeacademy",
      degree: "Font-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2021",
    },
    {
      institution: "Selopia IT",
      degree: "Certified Web Developer",
      duration: "2023",
    },
    {
      institution: "Design School",
      degree: "Deploma in Graphic Design",
      duration: "2021-2022",
    },
    {
      institution: "Community Collage",
      degree: "Associate Degree in Computer Science",
      duration: "2020-2021",
    },
  ],
};

