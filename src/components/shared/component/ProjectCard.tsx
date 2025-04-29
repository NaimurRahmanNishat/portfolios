import React, { useState } from "react";
import { projectCard } from "../../../lib/data";
import { projectCardProps } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {projectCard.map((item: projectCardProps, index: number) => {
        const shortDescription = item.description?.slice(0, 200);
        const isExpanded = expandedService === index;
        return (
          <div
            key={index}
            className="bg-white/90 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-full cursor-pointer object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Name */}
              <h1 className="bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent font-secondary font-bold text-2xl mb-2">
                {item.name}
              </h1>

              {/* Description */}
              <p className="text-darkBlack">
                  {isExpanded ? item.description : shortDescription}...
                  {item.description && item.description.length > 200 && (
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

              {/* Links */}
              <div className="flex justify-between pt-5">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-lightGreen text-lightGreen font-semibold rounded hover:bg-lightGreen hover:text-white transition-colors duration-300"
                >
                  Live Demo
                </Link>
                <Link
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors duration-300"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
