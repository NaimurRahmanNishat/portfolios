// navLinks data types
export interface NavLinks {
  name: string;
  path: string;
}

// stats data types
export interface StatProps {
  num: number;
  postfix: string;
  text: string;
}

// service data types
export interface ServiceProps {
  id: string;
  title: string;
  description: string;
  href: string;
}

// about data types
export interface AboutProps {
  title: string;
  description: string;
  info: {
    fieldName: string;
    fieldValue: string;
  }[];
}

// experience data types
export interface ExperienceProps {
  icon: string;
  title: string;
  description: string;
  items: {
    company: string;
    position: string;
    duration: string;
  }[];
}

// education data types
export interface EducationProps {
  icon: string;
  title: string;
  description: string;
  items: {
    institution: string;
    degree: string;
    duration: string;
  }[];
}