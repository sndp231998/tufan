import { LanguageContext } from "../themeContext";
import NewBannerGif from "../assets/homepage.gif";
import NewMobileImage from "../assets/mobileImageone.jpeg";
import ManPhone from "../assets/TufanPerson.jpeg";
import { useContext } from "react";

export default function BusTicket() {
  const { language } = useContext(LanguageContext);
  const features = [
    {
      id: 0,
      textEng: "Seamless Bus Ticketing",
      textNep: "झन्झटमुक्त बस टिकट सेवा",
    },
    {
      id: 1,
      textEng: "Subscription-Based Ride Sharing",
      textNep: "सदस्यता-आधारित सवारी साझा सेवा",
    },
    {
      id: 2,
      textEng: "Efficient Bus Route Management",
      textNep: "प्रभावकारी बस रुट व्यवस्थापन",
    },
    {
      id: 3,
      textEng: "Safe and Reliable Travel Experience",
      textNep: "सुरक्षित र भरपर्दो यात्रा अनुभव",
    },
    {
      id: 4,
      textEng: "Cutting-Edge Technology Integration",
      textNep: "नवीनतम प्रविधिको एकीकरण",
    },
  ];
  return (
    <>
      <div className="flex flex-col flex-initial max-w-7xl justify-center mx-auto">
        {/* Company description and banner image  */}
        <div className="md:p-3 flex flex-col-reverse flex-wrap md:flex-row bg-background dark:bg-background">
          <div className="flex flex-col gap-2 flex-1 shadow-sm border md:m-3 p-5 border-white rounded-lg bg-white dark:bg-[#262728] dark:border-[#262728]">
            <h2 className="text-titleColor text-lg font-bold text-center md:text-start">
              {language === "eng" ? "Tufan Bus Ticketing" : "टुफान राइड टिकटिङ"}
            </h2>
            <div>
              <p className="p2 md:p-3 font-light leading-6 md:leading-[44.05px]">
                {language === "eng"
                  ? `Tufan’s Bus Ticketing system provides a seamless and efficient
                solution for managing long-distance bus routes. By utilizing
                advanced technology, it allows bus owners to list their buses,
                manage ticket sales through agents, and streamline ticket
                validation. Passengers can effortlessly purchase tickets
                directly, ensuring a smooth and hassle-free experience. With a
                commitment to reliability, efficiency, and customer
                satisfaction, Tufan’s Bus Ticketing transforms the way bus
                operations are managed, delivering enhanced convenience for both
                operators and travelers.`
                  : `टुफानको बस टिकटिङ प्रणालीले लामो दुरीका बस रुटहरू व्यवस्थापन गर्न सहज र प्रभावकारी समाधान प्रदान गर्छ। उन्नत प्रविधिको उपयोग गरेर, यसले बस मालिकहरूलाई आफ्ना बसहरू सूचीबद्ध गर्न, एजेन्सीमार्फत टिकट बिक्री व्यवस्थापन गर्न, र टिकट प्रमाणीकरणलाई सहज बनाउँछ। यात्रुहरूले सजिलैसँग सिधै टिकट किन्ने सुविधा पाउँछन्, जसले सहज र झन्झटमुक्त अनुभव सुनिश्चित गर्छ। विश्वसनीयता, दक्षता, र ग्राहक सन्तुष्टिमा प्रतिबद्धता सहित, टुफानको बस टिकटिङले बस सञ्चालनको तरिका परिवर्तन गर्छ, जसले सञ्चालनकर्ताहरू र यात्रुहरूको लागि सुविधाजनक बनाउँछ.`}{" "}
              </p>
              <p className="text-titleColor px-5 mb-5 mt-10">
                {" "}
                {language === "eng"
                  ? "Want to share a ride with us"
                  : "हामीसँग यात्रा साझा गर्न चाहनुहुन्छ?"}{" "}
              </p>
              <p className="px-5 mb-5">
                {language === "eng"
                  ? "Book a ticket to your destination"
                  : "आफ्नो गन्तव्यको लागि टिकट बुक गर्नुहोस्"}
              </p>
              <div className="flex justify-center items-center flex-col gap-2">
                <img
                  className="rounded-full w-36 h-36"
                  src={ManPhone}
                  alt="A person with phone"
                />
                <button className="p-5 bg-titleColor rounded-xl text-white font-bold">
                  {" "}
                  {language === "eng"
                    ? "Download App"
                    : "एप डाउनलोड गर्नुहोस्"}{" "}
                </button>
                <p className="text-foreground font-bold">
                  {" "}
                  {language === "eng"
                    ? "Tufan Ride Share App"
                    : "टुफान राइड शेयर एप"}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 m-3 justify-center align-center p-3">
            <img
              alt="Banner Image"
              className="w-full h-full"
              src={NewMobileImage}
            />
          </div>
        </div>
        {/* End Company description and banner image */}

        {/* Uselsee Container */}
        <div className="md:p-6 p-3">
          <img
            className="w-full border-[#DCDCDC] border rounded-lg bg-white dark:bg-background"
            src={NewBannerGif}
          />
        </div>
        <div className="flex gap-3 p-8">
          <div className="px-8 flex-1 p-8 border shadow-sm border-white rounded-md  bg-white dark:bg-[#262728] dark:border-[#262728]">
            <p className="text-titleColor font-bold pb-3 text-xl"> Features </p>
            <ol className="list-decimal px-4">
              {features.map((feature) => (
                <li key={feature.id}>
                  {language === "eng" ? feature.textEng : feature.textNep}
                </li>
              ))}
            </ol>
          </div>
          <div className="px-8 flex-1 p-8 border shadow-sm border-white rounded-md  bg-white dark:bg-[#262728] dark:border-[#262728]"></div>
        </div>
      </div>
    </>
  );
}
