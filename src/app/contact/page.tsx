"use client";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880 15684-50889)",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "naimurrahmun34@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Rangpur,Bangladesh",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-lightGreen">let's work together</h3>
              <p className="text-white/60">
                Software Engineer responsibilities include gathering user
                requirements, defining system functionality and writing code in
                various languages, like Java, Ruby on Rails or .NET programming
                languages (Python, C++ or JavaScript) Our ideal candidates are
                familiar with the software development life cycle (SDLC) from
                preliminary system analysis to tests and deployment.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-lightGreen font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                  type="firstname"
                  placeholder="Firstname"
                />
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-lightGreen font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                  type="lastname"
                  placeholder="Lastname"
                />
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-lightGreen font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                  type="email"
                  placeholder="Email address"
                />
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-lightGreen font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                  type="phone"
                  placeholder="Phone number"
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>select a service</SelectLabel>
                    <SelectItem value="frontend">Frontend Development</SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="fullstack">Fullstack Development</SelectItem>
                    <SelectItem value="software">Software Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your massage here."
              />
              <Button size="lg" className="max-w-40 bg-lightGreen text-md hover:bg-lightBlue cursor-pointer">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-lightGreen rounded-md flex items-center text-center justify-center">
                      <div className="text-[28px] text-center">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;