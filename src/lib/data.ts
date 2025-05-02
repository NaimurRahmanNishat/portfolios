import { AboutProps, EducationProps, ExperienceProps, NavLinks, projectCardProps, projectProps, ServiceProps, StatProps } from "@/types/types";

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

// service data
export const projects: projectProps[] = [
  {
    num: "01",
    category: "fontend",
    title: "project 1",
    description:
      "Using markup languages like HTML to create user-friendly web pages. Maintaining and improving website.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/work/thumb1.png",
    live: "",
    github: "https://github.com/NaimurRahmanNishat?tab=repositories",
  },
  {
    num: "02",
    category: "backend",
    title: "project 2",
    description:
      "Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.",
    stack: [{ name: "Next.js" }, { name: "Django" }, { name: "Typescript" }],
    image: "/work/thumb2.png",
    live: "",
    github: "https://github.com/NaimurRahmanNishat?tab=repositories",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.",
    stack: [{ name: "JavaScript" }, { name: "Python" }],
    image: "/work/thumb3.png",
    live: "",
    github: "https://github.com/NaimurRahmanNishat?tab=repositories",
  },
];

// project card data
export const projectCard:projectCardProps[] = [
  {
    id:1,
    name: "Airport Management System",
    description: "In the airport management project I used the React library Nextjs freamework. In this project I have choose TypeScript language because TypeSctipt is better than JavaScript. And for authentication I used Clerk Authentication. If you want, you can login to my technology with Google or GitHub. The main purpose of my project is to find out the distance from one airport to another, what kind of airport it is, and how much does it cost to fly from one airport to another and more discuss in details. This project has comments alongside each code so that all the features of the code can be understood better.",
    image: "/slider/airport.png",
    link: "https://airport-management-psi.vercel.app/",
    github:"https://github.com/NaimurRahmanNishat/airport_management.git",
  },
  {
    id:2,
    name: "Mern Stack Ecommerce",
    description: "In this ecommerce project, I used Reactjs for front-end development and for backend development I used Nodejs and Expressjs framework. I used in MongoDB Atlas using for Database. And use Stripe payment gatewaye for payment integration. I also used Redux Turkit for state management. In this project, you will see a separate dashboard for users and a separate dashboard for admins. If the user wants, they can upload a product and sell it, and for that they have to get permission from the admin, and if the admin wants, they can make the user an admin. And many more things have been added to this project. Modern frameworks like Famer Motion and Sechen have been used for animation.",
    image: "/slider/mernstack.png",
    link: "https://nishat-frontend.vercel.app/",
    github:"https://github.com/NaimurRahmanNishat/nishat-frontend.git",
  },
  {
    id:3,
    name: "Meta Blog",
    description: "In this project basically mern stack project. I used Reactjs for front-end development and for backend development I used Nodejs and Expressjs framework. I used in MongoDB Atlas using for Database. In this project you can read a blog and if you want to read that blog in more detail, you can do that too. In this project you can add, delete and update blogs. This blog uses the React Context API to manage statements. The technology also includes filtering and sorting systems. And you can use the project as a dark mode or white mode if you want.",
    image: "/slider/metablog.png",
    link: "https://meta-blog-frontend.vercel.app/",
    github:"https://github.com/NaimurRahmanNishat/meta-blog-frontend.git",
  },
  {
    id:4,
    name: "News Portal",
    description: "This is a news protal project and this is full stack project. This project using nextjs freamwork. In this technology, data is transferred from packets through API calls. In this technology, you can read news and if you want to read the newspaper news in more detail, you can go to the blog page and on that page, a single card page has been created by holding the ID.This project provides filtering and sorting With the help of which you can easily get the news you want.",
    image: "/slider/newsportal.png",
    link: "https://news-portal-lilac.vercel.app/",
    github:"https://github.com/NaimurRahmanNishat/news-portal.git",
  },
  {
    id:5,
    name: "Furniture Shop",
    description: "This is basically a furniture website. On this website you can find information about all types of furniture and you can also place orders to purchase furniture. In this technology, you can only see the user interface. You cannot purchase anything because this technology has no involvement with the back end. This is basically a static website. To create this technology, React JMe Work has been used and Typing Script has been used as the language and CSS has been used for the tailwindCSS framework.",
    image: "/slider/furniture.png",
    link: "https://furniture-sooty.vercel.app/",
    github:"https://github.com/NaimurRahmanNishat/furniture.git",
  },
  {
    id:6,
    name: "Seba Ghor",
    description: "This is s static website. In this project you will find doctor information and hospital information.This project was created primarily with the Nextjs framework. In this project you will see sticky header and along with it you will see a drop down button to move up with which you can easily move up by yourself. The project uses a single page to search for doctors and a single page to search for hospitals, with the help of which you can get complete information about doctors and hospitals.And in technology you will see sticky cyber with the help of which you can easily use scoring and with that filtering and sorting has been arranged in project.",
    image: "/slider/sebaghor.png",
    link: "https://amar-sebaghor.vercel.app/",
    github:"https://github.com/NaimurRahmanNishat/amar-sebaghor.git",
  },
  {
    id:7,
    name: "Seller Interactive",
    description: "This project is basically Amazon SEO Besed Project. With technology, you can easily get all the information you need about Amazon SEO. This project has added sticky headers and drop down headers. And this project uses a single page to search for products, with which you can get complete information about a job.",
    image: "/slider/seller.png",
    link: "https://sellerinteractives.vercel.app/",
    github:"https://github.com/NaimurRahmanNishat/sellerinteractive.git",
  },
  {
    id:8,
    name: "Doctor Care",
    description: "This technology is basically made of HTML CSS and JavaScript. It is basically a simple project with the help of which some things of HTML CSS and JavaScript can be learned very easily and this technology has a very beautiful use of scrolling with the help of which scaling can be done very beautifully.",
    image: "/slider/doctorcare.png",
    link: "https://doctor-care-omega.vercel.app/",
    github:"https://github.com/NaimurRahmanNishat/doctor_care.git",
  },
  {
    id:9,
    name: "Resturant Hunter",
    description: "This technology is basically made of HTML CSS and JavaScript. It is basically a simple project with the help of which some things of HTML CSS and JavaScript can be learned very easily and this technology has a very beautiful use of scrolling with the help of which scaling can be done very beautifully.",
    image: "/slider/resturent.png",
    link: "https://resturent-lemon.vercel.app/",
    github:"https://github.com/NaimurRahmanNishat/resturent.git",
  }
]