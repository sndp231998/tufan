import BannerImage from "../assets/rideBanner.png";
import Person from "../assets/ridePerson.jpeg";
import BannerGif from "../assets/home.gif";
import NewBannerGif from "../assets/homepage.gif";

export default function RideShare() {
  return (
    <>
      <div className="flex flex-col flex-initial max-w-7xl justify-center mx-auto">
        {/* Company description and banner image  */}
        <div className="md:p-3 flex flex-col-reverse flex-wrap md:flex-row bg-background dark:bg-background">
          <div className="flex flex-col gap-2 flex-1 shadow-sm border md:m-3 p-5 border-white rounded-lg bg-white dark:bg-[#262728] dark:border-[#262728]">
            <h2 className="text-titleColor text-lg font-bold text-center md:text-start">
              Tufan Bus Ticketing
            </h2>
            <div>
              <p className="p2 md:p-3 font-light leading-6 md:leading-[44.05px]">
                Tufan’s Ride Share introduces a subscription-based model that
                removes commission fees for both riders and drivers, offering a
                more affordable and efficient alternative to traditional
                ride-sharing services. With a strong focus on safety,
                reliability, and customer satisfaction, Tufan ensures a seamless
                travel experience for all users. Our platform empowers both
                riders and drivers, delivering a cost-effective and dynamic
                solution for modern mobility.
              </p>
              <p className="text-titleColor px-5 mb-5 mt-10">
                {" "}
                Want to share a ride with us!{" "}
              </p>
              <p className="px-5 mb-5">
                Download the Tufan Ride Share App now!{" "}
              </p>
              <div className="flex justify-center items-center flex-col gap-2">
                <img
                  className="rounded-full w-36 h-36"
                  src={Person}
                  alt="A person with phone"
                />
                <button className="p-5 bg-titleColor rounded-xl text-white font-bold">
                  {" "}
                  Download App{" "}
                </button>
                <p className="text-foreground font-bold">
                  {" "}
                  Tufan Ride Share App{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 m-3 justify-center align-center p-3">
            <img
              alt="Banner Image"
              className="w-full h-full"
              src={BannerImage}
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
              <li> Seamless Bus Ticketing</li>
              <li> Subscription-Based Ride Sharing </li>
              <li> Efficient Bus Route Management </li>
              <li> Safe and Reliable Travel Experience </li>
              <li> Cutting-Edge Technology Integration </li>
            </ol>
          </div>
          <div className="px-8 flex-1 p-8 border shadow-sm border-white rounded-md  bg-white dark:bg-[#262728] dark:border-[#262728]"></div>
        </div>
      </div>
    </>
  );
}
