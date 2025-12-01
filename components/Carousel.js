"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const studentTestimonials = [
  {
    image: "/reviews/NirutaB.jpeg",
    name: "Neeruta",
    description:
      "Your advice has been invaluable and I am so grateful to have you as a mentor. Your support has been an important part of my journey and I want to express my deepest gratitude for your mentorship.",
  },
  {
    image: "/reviews/PraseshL.jpeg",
    name: "Prasesh",
    description:
      "Thank you Dai, for your quick and active support in helping me secure accommodation in Germany. Your assistance made the process much easier. I really appreciate it.",
  },
  {
    image: "/reviews/KushalK.jpeg",
    name: "Kushal Kandel",
    description:
      "Very kind person who assists you in every way possible without any hindrance. Highly recommended!",
  },
  {
    image: "/reviews/AyushmaanG.webp",
    name: "Ayushmaan Giri",
    description:
      "Thanks Dai for helping me, I didn't take any consultancy but with the help of seniors from Nepalese in Germany and peers I got to know many things about Visa procedure and Financial Documents.",
  },
  {
    image: "/reviews/SwarupK.jpeg",
    name: "Swarup Koirala",
    description:
      "I have done all the processes for my master's degree program until I get the visa by consulting TGG. He is very helpful guy and gives replies to you on time. ",
  },
  {
    image: "/reviews/KhagenKi.webp",
    name: "Khagen Kirati",
    description:
      "Huge thanks to TGG for providing me mentorship and guidance throughout my journey to Germany. It would be extremely difficult to get things done without the help of TGG. I will be always grateful towards TGG.",
  },
  {
    image: "/reviews/ShreejanJ.jpg",
    name: "Shreejan Joshi",
    description:
      "I am thrilled to share my journey of securing a student visa for my Master's in International Business Administration in Frankfurt, Germany, thanks to the expert guidance of The German Guy Consultancy. Their personalized support and meticulous approach made the entire application process seamless, turning my dream into a reality. ",
  },
  {
    image: "/reviews/ChiranjibiS.jpg",
    name: "Chiranjibi Singh",
    description:
      "TGG was very helpful all the time. They provided proper guidance whenever I needed one. Like whenever I had any doubt I used to ask to TGG or directly to Awanish dai and they replied ASAP. Lastly I would say that I got all my doubt solved and 95% of them were free of cost. Thanks TGG and specially Awanish dai.",
  },
  {
    image: "/reviews/PritamM.webp",
    name: "Pritam Maharjan",
    description:
      "TGG played a vital role in my student visa processing. Their guidance, expertise, and constant support made the whole journey smooth and stress free. I truly believe I got my visa because of them. They are simply great at what they do!",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Aayushma Giri",
    description:
      "Thank you for your help and support without any hesitation, during the processing periods. Your help and suggestions means a lot for me. ",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Pukar Tha Shrestha",
    description:
      "I am getting constant valuable replies and suggestions from TGG. I am really thankful to them for their support and guidance.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Sanjeev Kumar Thakur",
    description:
      "The German Guy helped throughout my Germany visa process. I got quick responses anytime I had a query. I am really thankful to TGG for their support and guidance.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Maya ojha",
    description:
      "Awanish provided me guidance with some stuff I had with my insurance. With his assistance and my professor's help, I got through it. I am really glad that it worked out and thanks Awanish for taking your time helping out random stranger like me.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Jenisha",
    description:
      "He was very helpful during the process of application. He guided me and cleared any doubts that arose during the process. I am very thankful to him for his help and support.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Yoshan Kharel",
    description:
      "I wanted to take a moment to sincerely thank The german guy and the team for your invaluable help with my visa processing. Your guidance, prompt responses, and willingness to assist made a significant difference in making the process smoother and less stressful. I truly appreciate your time and effort, especially in navigating the requirements and ensuring everything was in order. Your support reflects a high level of professionalism and kindness, for which I am very grateful.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Karki",
    description:
      "I was struggling to book visa interview for Germany at that time I didn’t know anyone to whom I can get guidance. My sister told me about TGG and with the help of TGG I got my visa. They are literally guiding students and shaping the way of that any other consultancy couldn’t do.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Aakriti Bagdas",
    description:
      "TGG has played a vital role in my journey toward studying in Germany. He is a Nepali person who helps students in a simple, clear, and polite way especially those who dream of going abroad for their education. His way of explaining everything, from the visa process to choosing the right Ausbildung or university, makes things much easier and less stressful.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Tilotama Shrestha",
    description:
      "I am glad that I found you as my visa guidance. I am positive throughout this journey only because of your guidance so sure I recommend you to my colleagues as well to those who need help. Thanks to you dai.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Bhattarai Ankit",
    description:
      "One-to-one support I got from TGG was really helpful for me. Initially, I was totally blank about where and how to begin, the mentorship and guidance provided by the team helped to find the better ways in terms of documentation, and processing. I, therefore undoubtedly give all credits to them for my visa issuance, and also recommend others who are willing to continue their higher studies in Germany.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Surakshya Regmi",
    description:
      "TGG made my journey from university application to visa approval smooth and stress free ❤️. A genuinely helpful person. May many more students benefit from his assistance 🍀",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Jalma",
    description: "Got azu visa easily assisted by Awanish.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Kala karki",
    description:
      "It was quite a good experience and all the members are helpful.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Annu Srivastava",
    description:
      "I had an amazing experience with The German Guy. From the very beginning, they provided free and genuine guidance throughout my entire process. They patiently cleared every single doubt and were always ready to help at any time, no matter how small my query was.What I truly appreciated was how responsive and supportive they were, they answered all my questions quickly and made sure I understood everything clearly. When I was really worried about slot booking through the old method because of APS, they guided me calmly and helped me handle the situation without stress.At a time when most other consultancies were asking for huge fees just to book a slot, they never charged a penny and instead focused completely on helping me. From preparing all my documents to providing proper direction at every step, their support made the entire journey smooth and worry-free.Highly recommend The German Guy to anyone starting their journey, they really care and go above and beyond to help.",
  },
  {
    image: "/reviews/placeholder.webp",
    name: "Resha",
    description:
      "TGG guided me through out the visa processing and I was satisfied with your services and guidance. You were always available for simple and even dumb questions😂. The only thing I wished for was more research from your team as well when we didn’t or couldn’t find some infos while preparing for application for Uni. Otherwise, I would definitely recommend TGG.",
  },
];

const MAX_LENGTH = 200;

const CarouselSection = () => {
  const [expanded, setExpanded] = useState({});
  const [api, setApi] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const handleToggle = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // ---- Auto Slide Logic ----
  useEffect(() => {
    if (!api) return;

    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        if (!api || isPaused) return;
        const canScrollNext = api.canScrollNext();
        if (canScrollNext) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 3000);
    };

    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [api, isPaused]);

  // ---- Pause Handlers ----
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleButtonClick = (direction) => {
    setIsPaused(true);
    if (direction === "next") api?.scrollNext();
    else api?.scrollPrev();

    // Resume auto-slide after short delay (2s)
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section className="container px-4 py-10 mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        Success Stories
      </h2>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-[80%] lg:w-full lg:max-w-[1200px] mx-auto"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {studentTestimonials.map((person, index) => {
              const isLong = person.description.length > MAX_LENGTH;
              const isExpanded = expanded[index];
              const displayText = isExpanded
                ? person.description
                : person.description.slice(0, MAX_LENGTH) +
                  (isLong ? "..." : "");

              return (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
                >
                  <div className="p-1">
                    <Card className="flex flex-col min-h-[400px] justify-between">
                      <CardHeader className="flex justify-center items-center">
                        <Image
                          src={person.image}
                          alt={person.name}
                          className="rounded-full"
                          height={150}
                          width={150}
                        />
                      </CardHeader>
                      <CardTitle className="text-center">
                        {person.name}
                      </CardTitle>
                      <CardContent className="flex-grow flex flex-col items-center justify-center p-6">
                        <span className="text-md font-semibold text-center">
                          {displayText}
                          {isLong && (
                            <button
                              className="ml-2 text-blue-600 underline text-sm font-normal"
                              onClick={() => handleToggle(index)}
                            >
                              {isExpanded ? "Show less" : "Read more"}
                            </button>
                          )}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious onClick={() => handleButtonClick("prev")} />
          <CarouselNext onClick={() => handleButtonClick("next")} />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;
