import { useContext, useState } from "react";
import blogImage from "../assets/blogImage.jpeg";
export default function Blog() {
  const [RecentPost, setRecentPost] = useState([
    { id: 0, title: "Test Title", body: "test body" },
    { id: 1, title: "Test Title", body: "test body" },
    { id: 2, title: "Test Title", body: "test body" },
    { id: 3, title: "Test Title", body: "test body" },
  ]);
  return (
    <>
      <div className="flex flex-col gap-3 md:gap-8 w-full  p-4">
        <form>
          <input
            className="w-full py-5 px-6 border border-gray-300 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Type something"
          />
        </form>
      </div>

      <div className="flex flex-wrap-reverse mt-4">
        <div className="flex flex-col gap-3 md:gap-8 w-full md:w-1/3 p-4">
          <div className="flex flex-col justify-center p-4 border border-gray-300 gap-3 rounded-md">
            <p className="text-lg md:text-2xl font-bold text-center">
              {" "}
              RECENT POSTS{" "}
            </p>
            {RecentPost.map((item) => (
              <div
                className="flex flex-col p-3 bg-background border bg-white dark:bg-[#222222] rounded-lg"
                key={item.id}
              >
                <p className="text-md md:text-lg font-bold">{item.title}</p>
                <p className="text-sm p-2">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center p-4 border border-gray-300 gap-3 rounded-md">
            <p className="text-lg md:text-2xl font-bold text-center">
              {" "}
              POPULAR POSTS{" "}
            </p>
            <div className="flex p-3 gap-2 max-h-20 border bg-white dark:bg-[#222222] rounded-lg">
              <img className="h-full" src={blogImage} />
              <p className="py-4  w-full align-center flex font-bold">
                This is the most popular blog post
              </p>
            </div>
            <div className="flex p-3 gap-2  max-h-20 border bg-white dark:bg-[#222222] rounded-lg">
              <img className="h-full" src={blogImage} />
              <p className="py-4 w-full align-center flex font-bold">
                This is the most popular blog post
              </p>
            </div>
            <div className="flex p-3 gap-2  max-h-20 border bg-white  dark:bg-[#222222] rounded-lg">
              <img className="h-full" src={blogImage} />
              <p className="py-4  w-full align-center flex font-bold">
                This is the most popular blog post
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-8 border rounded-lg">
          <div className="w-full max-w-7xl mx-auto">
            <div className="relative w-full px-4 sm:px-6 lg:px-8">
              <h1 className="text-lg lg:text-xl font-bold mb-6">
                REVOLUTIONIZING TRAVEL: HOW RIDE-SHARING AND ONLINE BUS
                TICKETING ARE CHANGING THE WAY WE COMMUTE
              </h1>
              <div className="w-full h-64 md:h-96 relative overflow-hidden">
                <img
                  src={blogImage}
                  alt="Motorcycle Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="px-4 sm:px-6 lg:px-8 py-8">
              <p className="text-lg leading-relaxed mb-6">
                Strengthening connections within communities by offering
                solutions that address local mobility needs. Our innovative
                approach combines modern ride-sharing technology with
                streamlined online bus ticketing systems to create a more
                accessible and efficient transportation network.
              </p>
              <p className="text-md leading-relaxed mb-6">
                By integrating these services, we're making it easier for people
                to move within their communities while reducing the
                environmental impact of daily commutes. Our platform brings
                together various transportation options, allowing users to
                choose the most convenient and cost-effective solution for their
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-4 md:mt-5">
        <div className="md:w-1/3 border min-h-40 bg-background">
          <p className="p-3 text-2xl text-center">Blog 3</p>
        </div>
        <div className="min-h-40 md:w-1/3 bg-background border text-center">
          {" "}
          <p className="p-3 text-2xl text-center">Blog 3</p>
        </div>
        <div className="min-h-40 md:w-1/3 bg-background border text-center">
          {" "}
          <p className="p-3 text-2xl text-center">Blog 3</p>
        </div>
      </div>
    </>
  );
}
