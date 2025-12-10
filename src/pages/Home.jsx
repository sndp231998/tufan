import { useContext, useEffect, useState } from "react";
import { LanguageContext, ThemeContext } from "../themeContext";
import Misson from "../components/Misson";
import tufanBikes from "../assets/tufanbikes.jpeg";
import NewBannerGif from "../assets/homepage.gif";
import { Helmet } from "react-helmet";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const features = [
    {
      id: 0,
      textEng: "Subscription-Based Ride Sharing",
      textNep: "सदस्यता-आधारित सवारी साझेदारी",
    },
    {
      id: 1,
      textEng: "Safe and Reliable Travel Experience",
      textNep: "सुरक्षित र भरपर्दो यात्रा अनुभव",
    },
    {
      id: 2,
      textEng: "Cutting-Edge Technology Integration",
      textNep: "अत्याधुनिक प्रविधि एकीकरण",
    },
  ];
  const { language } = useContext(LanguageContext);

  return (
    <> 
    {/* SEO Start */}
      <Helmet>
        <title>Tufan Ride Share | Affordable and Safe Travel</title>
        <meta
          name="description"
          content="Experience hassle-free ride sharing with Tufan. Safe, reliable, and cost-effective transportation."
        />
        <meta
          name="keywords"
          content="Tufan, Ride Share, Travel Nepal, Safe Travel"
        />
      </Helmet>
      {/* SEO End */}
      <div className="flex flex-col flex-initial max-w-7xl justify-center mx-auto">
        {/* Company description and banner image  */}
        <div className="md:p-3 flex flex-col-reverse flex-wrap md:flex-row bg-background dark:bg-background">
          <div className="flex flex-col gap-2 flex-1 shadow-sm border md:m-3 p-5 border-white rounded-lg bg-white dark:bg-[#262728] dark:border-[#262728]">
            <h2 className="text-titleColor text-lg font-bold text-center md:text-start">
              {language === "eng" ? <>Company Overview</> : <>कम्पनीको परिचय</>}
            </h2>
            <div>
              <p className="p2 md:p-3 font-light leading-6 md:leading-[44.05px]">
                {language === "eng" ? (
                  <span>
                    Tufan is redefining transportation with innovative
                    solutions. Our subscription-based ride-sharing model prioritizes
                    safety, efficiency, and customer satisfaction. By leveraging
                    cutting-edge technology, Tufan ensures a reliable, dynamic,
                    and cost-effective travel experience for both passengers and
                    operators. Join us to ride smart and travel safe with Tufan.
                  </span>
                ) : (
                  <span>
                    तुफान नविन समाधानहरू मार्फत यातायातलाई नयाँ परिभाषा दिइरहेको
                    छ। हाम्रो सदस्यता-आधारित सवारी-साझेदारी मोडेलले सुरक्षा, दक्षता, र ग्राहक
                    सन्तुष्टिलाई प्राथमिकता दिन्छ। अत्याधुनिक प्रविधिको उपयोग
                    गरेर, तुफानले यात्रु र सञ्चालनकर्ताहरूका लागि भरपर्दो,
                    गतिशील, र किफायती यात्रा अनुभव सुनिश्चित गर्दछ। तुफानसँग
                    स्मार्ट यात्रा गरौँ र सुरक्षित यात्रा सुनिश्चित गरौँ।
                  </span>
                )}{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-1 m-3 justify-center align-center p-3">
            <img
              alt="Banner Image"
              className="w-full h-full"
              src={tufanBikes}
            />
          </div>
        </div>
        {/* End Company description and banner image */}

        {/* Uselsee Container */}
        <div className="md:p-6 p-3">
          <img
            className="w-full border-[#DCDCDC] border rounded-lg bg-white dark:bg-background "
            src={NewBannerGif}
          />
        </div>

        {/* Features */}
        <div className="md:p-3 flex flex-col flex-wrap md:flex-row bg-background dark:bg-background">
          <div className="flex-1 border md:m-3 p-5 border-white rounded-lg bg-white dark:bg-[#262728] dark:border-[#262728]">
            <h2 className="text-titleColor text-lg font-bold">
              {language === "eng" ? <>Our Features</> : <>हाम्रा विशेषताहरू</>}{" "}
            </h2>
            <div className="p-3 ml-5 font-light leading-[44.05px]">
              <ol className="list-decimal">
                {features.map((feature) => (
                  <li className="∂" key={feature.id}>
                    {language === "eng" ? feature.textEng : feature.textNep}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="flex flex-1 m-3 justify-center align-center p-3">
            <img alt="Banner Image" className="" src={tufanBikes} />
          </div>
        </div>
        {/* Feature End */}

        {/* MISSION | VISION | VALUES */}
        <div className="md:p-3 flex flex-col flex-wrap md:flex-row bg-background dark:bg-background">
          <Misson />
        </div>
      </div>
    </>
  );
}
