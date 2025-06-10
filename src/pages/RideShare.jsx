import NewBannerGif from "../assets/homepage.gif";
import PhoneImage from "../assets/mobileImage.jpeg";
import BusImage from "../assets/busImageOne.jpeg";
import { LanguageContext } from "../themeContext";
import { useContext } from "react";

export default function RideShare() {
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
              Tufan Ride Sharing
            </h2>
            <div>
              <p className="p2 md:p-3 font-light leading-6 md:leading-[44.05px]">
                {language === "eng"
                  ? `Tufan’s Ride Share introduces a subscription-based model that
                removes commission fees for both riders and drivers, offering a
                more affordable and efficient alternative to traditional
                ride-sharing services. With a strong focus on safety,
                reliability, and customer satisfaction, Tufan ensures a seamless
                travel experience for all users. Our platform empowers both
                riders and drivers, delivering a cost-effective and dynamic
                solution for modern mobility.`
                  : `टुफान्स राइड शेयरले सदस्यता-आधारित मोडेल प्रस्तुत गरेको छ जसले यात्रु र चालक दुवैका लागि कमिशन शुल्क हटाउँछ, जसले परम्परागत राइड-शेयर सेवाहरूको तुलनामा अझ किफायती र प्रभावकारी विकल्प प्रदान गर्छ। सुरक्षा, विश्वसनीयता, र ग्राहक सन्तुष्टिमा विशेष ध्यान दिँदै, टुफानले सबै प्रयोगकर्ताका लागि सहज यात्राको अनुभव सुनिश्चित गर्छ। हाम्रो प्लेटफर्मले यात्रु र चालक दुवैलाई सशक्त बनाउँछ, आधुनिक यातायातको लागि लागत-प्रभावकारी र गतिशील समाधान प्रदान गर्छ।`}
              </p>
              <p className="text-titleColor px-5 mb-5 mt-10">
                {language === "eng"
                  ? "Want to share a ride with us!"
                  : "हामीसँग यात्रा साझा गर्न चाहनुहुन्छ?"}
              </p>
              <p className="px-5 mb-5">
                {" "}
                {language === "eng"
                  ? "Download the Tufan Ride Share App now!"
                  : "अहिल्यै टुफान राइड शेयर एप डाउनलोड गर्नुहोस्!"}
              </p>
              <div className="flex justify-center items-center flex-col gap-2">
                <img
                  className="rounded-full w-36 h-36"
                  src={BusImage}
                  alt="फोनसहितको व्यक्ति"
                />
                <button className="p-5 bg-titleColor rounded-xl text-white font-bold">
                  {language === "eng" ? "Download App" : "एप डाउनलोड गर्नुहोस्"}
                </button>
                <p className="text-foreground font-bold">
                  {" "}
                  {language === "eng"
                    ? "Tufan Ride Share App"
                    : "टुफान राइड शेयर एप"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 m-3 justify-center align-center p-3">
            <img
              alt="Banner Image"
              className="w-full h-full"
              src={PhoneImage}
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
            <p className="text-titleColor font-bold pb-3 text-xl">
              {" "}
              {language === "eng" ? "Features" : "सुविधाहरू"}
            </p>
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
