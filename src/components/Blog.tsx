"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import blog from "../../public/images/blog_1.jpg";
import blog2 from "../../public/images/blog2.jpg";
import blog3 from "../../public/images/blog3.jpg";
import Image from "next/image";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import Button from "./common/Button";
import { useRouter } from "next/navigation";

const data = [
  {
    id: 1,
    label: "Freelancer",
    image: blog,
    title: "Tips Recommendation Remote Worker Today",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    date: "2024-01-01",
    link: "/blog/1",
  },
  {
    id: 2,
    label: "Freelancer",
    image: blog2,
    title: "Best Choosing Frontend Framework Tools",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    date: "2024-01-02",
    link: "/blog/2",
  },
  {
    id: 3,
    label: "Freelancer",
    image: blog3,
    title: "Tips To Get Clean Code Programs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    date: "2024-01-03",
    link: "/blog/3",
  },
];

const Blog = () => {
  const router = useRouter();
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className=" py-[3rem] lg:py-[6rem]">
      <MaxWidth>
        {/* HEADING */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Heading
            isCenter
            headingParts={[
              {
                text: "Let's Read Our Blog Post Content & Writing Resource",
                color: "#001845",
                size: "clamp(24px, 4vw, 46px)",
                weight: "700",
              },
            ]}
            label="Blog Content"
            className="w-[100%] lg:w-[60%] mx-auto"
          />
        </div>

        {/* BLOG CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1rem] lg:gap-[2rem] mt-4 lg:mt-12">
          {data.map((item, index) => (
            <div
              key={item.id}
              style={{
                transitionDelay: `${index * 300}ms`, // stagger: first, second, third
              }}
              className={`relative mt-0 lg:mt-10 bg-[#001845] text-white rounded-xl overflow-hidden shadow-lg
              transition-all duration-700 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* IMAGE + LABEL */}
              <div className="relative">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[15rem] lg:h-[20rem] object-cover"
                  />
                )}

                {/* LABEL BADGE */}
                <span className="absolute top-4 left-4 bg-[#5C677D] px-4 py-2 uppercase font-semibold rounded">
                  {item.label}
                </span>

                {/* DATE BADGE */}
                <p className="absolute top-[45%] left-2 bg-[#023E7D] p-5 font-bold text-[1.5rem] rounded">
                  {new Date(item.date).getDate()} <br />
                  <span className="text-[1rem]">
                    {new Date(item.date).toLocaleString("en-US", {
                      month: "short",
                    })}
                  </span>
                </p>
              </div>

              {/* CONTENT */}
              <div className="px-[1.5rem] lg:px-[2.5rem] py-[1.25rem] lg:py-[2rem]">
                <h4 className="text-[#FFFFFF] mt-2">{item.title}</h4>
                <p className="my-4 text-[#FFFFFF]">{item.description}</p>
                <Button
                  handleClick={() => router.push(item.link)}
                  name="Read More"
                  className="mt-4 inline-block text-blue-400 font-semibold"
                />
              </div>
            </div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Blog;
