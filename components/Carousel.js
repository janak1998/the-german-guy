import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";
import Image from "next/image";

const studentTestimonials = [
  {
    image: "https://via.placeholder.com/150?text=Neeruta",
    name: "Neeruta",
    description:
      "Your advice has been invaluable and I am so grateful to have you as a mentor.Your support has been an important part of my journey and I want to express my deepest gratitude for your mentorship.",
  },
  {
    image: "https://via.placeholder.com/150?text=Prasesh",
    name: "Prasesh",
    description:
      "Thank you Dai, for your quick and active support in helping me secure accommodation in Germany. Your assistance made the process much easier. I really appreciate it.",
  },
  {
    image: "https://via.placeholder.com/150?text=Kushal+K",
    name: "Kushal Kandel",
    description:
      "Very kind person who assists you in every way possible without any hindrance. Highly recommended!",
  },
  {
    image: "https://via.placeholder.com/150?text=Aayushma+G",
    name: "Aayushma Giri",
    description:
      "Thank you for your  help and support without any hesitation, during the processing periods. Your help and suggestions means alot for me. ",
  },
  {
    image: "https://via.placeholder.com/150?text=Pukar+S",
    name: "Pukar Tha Shrestha",
    description: "I am getting constant valuable replies and suggestions ",
  },
  {
    image: "https://via.placeholder.com/150?text=Sanjeev+T",
    name: "Sanjeev Kumar Thakur",
    description:
      "The German Guy helped throughout my germany visa process. I got quick responses anytime i messaged. ",
  },
  {
    image: "https://via.placeholder.com/150?text=Maya+O",
    name: "Maya ojha",
    description:
      "Awanish provided me guidance with some stuffs I had with my insurance. With his assistance and my professor's help, I got through it. I am really glad that it worked out and thanks Awanish for taking your time helping out random stranger like me.",
  },
  {
    image: "https://via.placeholder.com/150?text=Swarup+K",
    name: "Swarup Koirala",
    description:
      "I have done all the processes for my masters degree programme till I get the visa by consulting TGG. He is very helpful guy and give replies to you on time. ",
  },
];

const CarouselSection = () => {
  return (
    <section className="container px-4 py-10 mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        Success Stories
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%] lg:w-full lg:max-w-[1200px] mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {studentTestimonials.map((person, index) => (
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
                  <CardTitle className="text-center">{person.name}</CardTitle>
                  <CardContent className="flex-grow flex items-center justify-center p-6">
                    <span className="text-md font-semibold">
                      {person.description}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CarouselSection;
