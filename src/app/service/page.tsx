"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { services } from "@/lib/data";
import { useState } from "react";

const Services = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.slice(0, 200).map((service, index) => {
            const isExpanded = expanded[index];
            const description = service.description;
            const shortDescription = description?.slice(0, 200);
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-roboto font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.id}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-lightGreen transition-all duration-500 flex justify-center items-center group-hover:-rotate-135"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-lightGreen transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <div className="text-white/60 font-secondary">
                  {description.length > 200 ? (
                    <>
                      {isExpanded ? description : shortDescription + "..."}
                      <button
                        onClick={() => toggleExpand(index)}
                        className="ml-2 text-lightOrange hover:text-lightGreen transition-all ease-in-out duration-300 underline cursor-pointer"
                      >
                        {isExpanded ? "See Less" : "See More"}
                      </button>
                    </>
                  ) : (
                    description
                  )}
                </div>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
