import { NavLinks, StatProps } from "@/types/types";

// navLinks using headers
export const navLinks:NavLinks[] = [
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
]


// stats data
export const stats:StatProps[] = [
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
