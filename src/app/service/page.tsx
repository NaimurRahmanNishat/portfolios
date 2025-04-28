"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { services } from "@/lib/data";
import { useState } from "react";

const Services = () => {
  // Track which service is expanded by its index
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.slice(0, 200).map((service, index) => {
            const shortDescription = service.description?.slice(0, 200);
            const isExpanded = expandedService === index;
            
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.id}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-lightGreen transition-all duration-500 flex justify-center items-center group-hover:-rotate-135"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-lightGreen transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">
                  {isExpanded ? service.description : shortDescription}...
                  {service.description && service.description.length > 200 && (
                    <button
                      onClick={() => 
                        isExpanded 
                          ? setExpandedService(null) 
                          : setExpandedService(index)
                      }
                      className="ml-2 text-lightOrange hover:text-lightGreen underline cursor-pointer"
                    >
                      {isExpanded ? "See Less" : "See More"}
                    </button>
                  )}
                </p>
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