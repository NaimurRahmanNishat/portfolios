"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { stats } from "@/lib/data";

const Stats = () => {
  // Keep track of which items have finished counting
  const [finished, setFinished] = useState<boolean[]>(Array(stats.length).fill(false));

  const handleEnd = (index: number) => {
    setFinished((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              {/* Number + Postfix together */}
              <div className="text-4xl xl:text-6xl font-extrabold flex items-center">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  onEnd={() => handleEnd(index)}
                />
                {/* Show postfix only after count up finishes */}
                {finished[index] && item.postfix}
              </div>
              {/* Text */}
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
