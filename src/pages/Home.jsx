import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import Navbar from "../components/Navbar";
import Misson from "../components/Misson";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const features = [
    {id:0, text:"Seamless Bus Ticketing"},
    {id:1, text:"Subscription-Based Ride Sharing"},
    {id:2, text:"Efficient Bus Route Management"},
    {id:3, text:"Safe and Reliable Travel Experience"},
    {id:4, text:"Cutting-Edge Technology Integration"},
  ]
  return (
    <>
      <div className="flex flex-col flex-initial max-w-7xl justify-center mx-auto">
        {/* Company description and banner image  */}
        <div className="md:p-3 flex flex-col-reverse flex-wrap md:flex-row bg-background dark:bg-background">
          <div className="flex flex-col gap-2 flex-1 border md:m-3 p-5 border-[#DCDCDC] rounded-lg bg-white dark:bg-[#262728] dark:border-[#262728]">
            <h2 className="text-titleColor text-lg font-bold">
              Company Overview
            </h2>
            <div>
              <p className="p2 md:p-3 font-light leading-6 md:leading-[44.05px]">
                Tufan is redefining transportation with innovative solutions.
                Our seamless bus ticketing system and subscription-based
                ride-sharing model prioritize safety, efficiency, and customer
                satisfaction. By leveraging cutting-edge technology, Tufan
                ensures a reliable, dynamic, and cost-effective travel
                experience for both passengers and operators. Join us to ride
                smart and travel safe with Tufan.
              </p>
            </div>
          </div>
          <div className="flex flex-1 borde m-3 justify-center align-center p-3">
            <img
              alt="Banner Image"
              className="w-full h-full"
              src="/src/assets/toofanBanner.png"
            />
          </div>
        </div>
        {/* End Company description and banner image */}

        {/* Uselsee Container */}
        <div className="md:p-3">
          <div className="border-[#DCDCDC] h-[472px] border rounded-lg bg-white dark:bg-background mt-3 mb-3 p-5"></div>
        </div>

        {/* Features */}
        <div className="md:p-3 flex flex-col flex-wrap md:flex-row bg-background dark:bg-background">
          <div className="flex-1 border md:m-3 p-5 border-[#DCDCDC] rounded-lg bg-white dark:bg-[#262728] dark:border-[#262728]">
            <h2 className="text-titleColor text-lg font-bold">Our Features</h2>
            <div className="p-3 ml-5 font-light leading-[44.05px]">
              <ol className="list-decimal">
                {features.map((feature) => (
                  <li className="∂" key={feature.id}>
                    {feature.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="flex flex-1 m-3 justify-center align-center p-3">
            <img
              alt="Banner Image"
              className=""
              src="/src/assets/toofanBanner.png"
            />
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