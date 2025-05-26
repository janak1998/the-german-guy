import CalculatePrice from "@/components/CalculatePrice";
import CarouselSection from "@/components/Carousel";
import RingBtn from "@/components/RingBtn";
import Image from "next/image";

const Page = () => {
  const services = [
    {
      title: "Chancenkarte",
      description:
        "The Chancenkarte(Oppurtunity card) allows professionals to travel to Germany for the purpose of finding employment. With this visa, you have up to twelve months to search for a job in your field. You must have a recognized university degree or an equivalent qualification and demonstrate adequate financial means to support yourself during your stay. A language certificate may not be necessary, but it is advantageous. Once you secure a job, you can convert your visa into a residence permit for employment.",
      icon: "/assets/job_seeker.svg",
      link: "https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2305548",
    },
    {
      title: "Study Visa",
      description:
        "This visa allows you to pursue higher education in Germany. You need to provide proof of high school or diploma and have an acceptance letter from a university before applying for the visa. Your grades are important, and depending on the university, you may need to show either an IELTS score or a Goethe Institute German language certification. If you're aiming for a public university, you will first attend a Studienkolleg. You must demonstrate financial means to support yourself during your stay, which can be shown through sponsorship, family income, or a scholarship.",
      icon: "/assets/study_visa_icon.svg",
      link: "https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225320",
    },

    {
      title: "Ausbildung Visa",
      description:
        "Similar to a study visa, this visa allows you to complete an Ausbildung (vocational training) in Germany. You will be studying and working at the same place, gaining practical experience alongside theoretical knowledge. You need to provide proof of language proficiency, either through IELTS or a German language certification like Goethe. Your workplace will pay you during the course of your contract.",
      icon: "/assets/ausbildung_icon.svg",
      link: "https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2305548",
    },
    {
      title: "Au Pair Visa",
      description:
        "This visa allows you to come to Germany as an Au-Pair. You will assist a family mainly with taking care of their children. You will receive a visa for one year, which can later be extended or switched to another permit. Depending on the family, you might need a language certificate. No financial documents are required; however, there are age restrictions. You will live with your host family and receive additional funds to cover personal expenses.",
      icon: "/assets/au_pair_icon.svg",
      link: "https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225336",
    },
    {
      title: "Skilled Professional Visa",
      description:
        "This visa allows professionals to come to Germany for employment purposes. You need to have a signed work contract with a German company, and the contract should require your presence in Germany. Depending on the company, you may or may not need a language certification. You must provide proof of your qualifications, and no separate financial means are required as long as your gross salary meets the specified minimum.",
      icon: "/assets/job_seeker.svg",
      link: "https://kathmandu.diplo.de/np-en/service/01-visaeinreise/2225316-2225316",
    },
    {
      title: "Voluntary Service Visa",
      description:
        "The Voluntary Service Visa allows young individuals to engage in meaningful social, ecological, or cultural projects in Germany. Ideal for those seeking to gain practical work experience and immerse themselves in German culture, this visa covers programs like the FSJ (Freiwilliges Soziales Jahr) and VFD (Voluntary Federal Service). Participants contribute to community welfare, improve their language skills, and build professional networks, making it a rewarding experience both personally and professionally.",
      icon: "/assets/voluntary_service_icon.svg",
    },
    {
      title: "Personal Guidance Plan",
      description:
        "Our Personal Guidance Plan offers comprehensive support for your visa journey. Exclusive 2 hours of 1:1 video calls per month, unlimited 1:1 chat for any questions or concerns, help in choosing the right university, feedback on your financial documents, and assistance with your visa application. With personalized guidance tailored to your needs, we'll ensure you navigate the process smoothly and successfully.",
      icon: "/assets/voluntary_service_icon.svg",
    },
    {
      title: "Speciality Cook Visa",
      description:
        "Our Specialty Cook Visa Guidance provides expert support for your visa journey. Get 2 hours of 1:1 video calls per month, unlimited 1:1 chat for all your questions, assistance with job placement and employer requirements, thorough review of necessary documents, and dedicated guidance on your visa application. With personalized support tailored to your skills, we ensure you secure your visa smoothly and successfully.",
      icon: "/assets/voluntary_service_icon.svg",
      link: "https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225360",
    },
    {
      title: "Family Reunion Visa",
      description:
        "Our Family Reunion Visa Guidance offers complete support to reunite you with your loved ones. Enjoy 2 hours of 1:1 video calls per month, unlimited 1:1 chat for any concerns, assistance in understanding eligibility requirements, thorough review of supporting documents, and expert guidance on your visa application. With step-by-step personal assistance, we help make your family’s reunion seamless and stress-free.",
      icon: "/assets/au_pair_icon.svg",
      link: "https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225298",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center">Our Services</h1>
      <div className="flex flex-wrap mx-3 gap-5 justify-center mt-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mb-6 w-full max-w-[350px] px-5 ring_effect transition-transform duration-300 hover:scale-105 border border-gray-300 dark:border-gray-600"
          >
            <span className="bg-gray-400 flex justify-center items-center w-[75px] h-[75px] rounded-full mb-4">
              <Image
                className="flex justify-center items-center"
                src={service.icon}
                width={50}
                height={50}
                alt="Service Icon"
              />
            </span>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
            {service.link && (
              <p className="text-gray-600 dark:text-gray-400">
                For more details,{" "}
                <a href={service.link} className="hover:underline">
                  click here ↗
                </a>
                .
              </p>
            )}
          </div>
        ))}
      </div>

      <CalculatePrice />

      <div className="flex justify-center flex-col items-center gap-5 mt-5">
        <h3 className="text-lg text-gray-800 dark:text-gray-200 font-bold">
          What Visa You Are Most Likely To Get?
        </h3>
        <p className="px-20 text-center text-gray-600 dark:text-gray-400">
          What visa suits your profile best? More importantly, what are your
          chances of obtaining each visa type? Let’s talk and get to know your
          background better. Your grades, academic history, work experience, and
          age all play a crucial role in selecting the right visa. Let us guide
          you through the process.
        </p>

        <RingBtn />
      </div>

      {/* <CarouselSection /> */}
    </main>
  );
};
export default Page;
