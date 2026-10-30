"use client";

import React, { useRef, useState } from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import { FaStar, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "../utills/Data";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Feedback = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();
  const { headingParts, label, data = [] } =
    staticData.home?.feedbacks || {};

  const scrollToCard = (index: number) => {
    const slider = sliderRef.current;
    const card = slider?.children[index] as HTMLElement | undefined;

    if (!slider || !card) return;

    slider.scrollTo({
      left: card.offsetLeft - slider.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = Array.from(slider.children) as HTMLElement[];
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft - slider.scrollLeft - slider.offsetLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const handlePrevious = () => {
    scrollToCard(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    scrollToCard(Math.min(data.length - 1, activeIndex + 1));
  };

  return (
    <section ref={ref} className="bg-secondary-bg py-12 lg:py-16">
      <MaxWidth>
        {/* HEADING */}
        <div
          className={`transition-all duration-1000 ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
            }`}
        >
          <Heading
            isCenter
            headingParts={headingParts}
            label={label}
            className="mx-auto w-full lg:w-[65%]"
          />
        </div>

        {/* FEEDBACK CAROUSEL */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 md:gap-6 lg:gap-8
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              className={`flex min-w-0 flex-shrink-0 basis-full snap-start flex-col rounded-[20px] bg-white p-6 text-black transition-all duration-1000 md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-22px)] lg:p-8 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
                }`}
            >
              {/* STARS */}
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="mr-1 text-yellow-400" />
                ))}
              </div>

              {/* MESSAGE */}
              <p className="flex-1 pb-8 font-normal leading-8 text-[#000000]">
                <BiSolidQuoteAltLeft  className="mr-2  inline-block align-baseline text-[25px]" />
                {item.message}
                {/* <BiSolidQuoteAltRight className="ml-1 inline-block align-baseline text-[22px]" /> */}
              </p>
              {/* AUTHOR */}
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/10 pt-5">
                <div className="flex min-w-0 items-center gap-4">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={60}
                    height={50}
                    className="h-[50px] w-[50px] shrink-0 rounded-full object-cover"
                  />

                  <div className="my-auto min-w-0">
                    <h4 className="truncate text-[18px] font-medium text-[#000000]">
                      {item.name}
                    </h4>
                    <span className="text-sm text-[#000000]/80">
                      {item.designation}
                    </span>
                  </div>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-[#001029] transition-all duration-300 hover:bg-[#001029] hover:text-white">
                  <FaArrowRight size={15} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM PAGINATION */}
        {data.length > 0 && (
          <div className="mt-8 flex items-center justify-center">
            {/* PAGINATION DOTS */}
            {/* <div className="flex items-center gap-2">
              {data.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollToCard(index)}
                  aria-label={`Go to feedback ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-black/20 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div> */}

            {/* PREVIOUS / NEXT */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={activeIndex === 0}
                aria-label="Previous feedback"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[#001029] transition-all duration-300 hover:border-primary hover:bg-[#FFFFFF] hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
              >
                <FaChevronLeft size={14} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex >= data.length - 1}
                aria-label="Next feedback"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[#001029] transition-all duration-300 hover:border-primary hover:bg-[#FFFFFF] hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </MaxWidth>
    </section>
  );
};

export default Feedback;