import { ThemeContext } from "../themeContext";
import { useContext } from "react";
import ContactImage from "../assets/tufanContact.jpeg";

const mailIcon = () => (
  <svg
    className="w-6 h-6 "
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <rect width="24" height="24" fill="white"></rect>{" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.96802 4H18.032C18.4706 3.99999 18.8491 3.99998 19.1624 4.02135C19.4922 4.04386 19.8221 4.09336 20.1481 4.22836C20.8831 4.53284 21.4672 5.11687 21.7716 5.85195C21.9066 6.17788 21.9561 6.50779 21.9787 6.83762C22 7.15088 22 7.52936 22 7.96801V16.032C22 16.4706 22 16.8491 21.9787 17.1624C21.9561 17.4922 21.9066 17.8221 21.7716 18.1481C21.4672 18.8831 20.8831 19.4672 20.1481 19.7716C19.8221 19.9066 19.4922 19.9561 19.1624 19.9787C18.8491 20 18.4706 20 18.032 20H5.96801C5.52936 20 5.15088 20 4.83762 19.9787C4.50779 19.9561 4.17788 19.9066 3.85195 19.7716C3.11687 19.4672 2.53284 18.8831 2.22836 18.1481C2.09336 17.8221 2.04386 17.4922 2.02135 17.1624C1.99998 16.8491 1.99999 16.4706 2 16.032V7.96802C1.99999 7.52937 1.99998 7.15088 2.02135 6.83762C2.04386 6.50779 2.09336 6.17788 2.22836 5.85195C2.53284 5.11687 3.11687 4.53284 3.85195 4.22836C4.17788 4.09336 4.50779 4.04386 4.83762 4.02135C5.15088 3.99998 5.52937 3.99999 5.96802 4ZM4.31745 6.27777C4.68114 5.86214 5.3129 5.82002 5.72854 6.1837L11.3415 11.095C11.7185 11.4249 12.2815 11.4249 12.6585 11.095L18.2715 6.1837C18.6871 5.82002 19.3189 5.86214 19.6825 6.27777C20.0462 6.69341 20.0041 7.32517 19.5885 7.68885L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L4.41153 7.68885C3.99589 7.32517 3.95377 6.69341 4.31745 6.27777Z"
        fill="#323232"
      ></path>{" "}
    </g>
  </svg>
);

const phoneIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M768 640v99.6c0 8.1-2.1 14.2-8.2 20.3-6.2 6.2-12.1 8.1-20.2 8.1-120.1-2.1-260.1-40.3-351.6-131.8S258.1 404.5 256 284.4c0-8.1 2-14.1 8.1-20.2s12.1-8.2 20.3-8.2H384l25.6 153.6-47.8 62.1c14.2 40.3 42.7 83.1 75.1 115.6 32.5 32.5 75.1 60.7 115.3 74.9l62.1-47.8L768 640z"></path>
    </g>
  </svg>
);

export default function Contact() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="bg-background">
      <div className="flex flex-col gap-2 sm:flex-row justify-center">
        <div className="flex-1 md:px-20">
          <div className="flex flex-col gap-2 p-4">
            <p className="text-titleColor font-bold text-center text-2xl">
              {" "}
              Contact Us{" "}
            </p>
            <p className="text-center">
              {" "}
              We are here to help you in every way possible. Feel free to leave
              a message{" "}
            </p>
            <form className="pt-4">
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full px-3 py-3 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/*<div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  Category
                </label>
                <select className="w-full text-sm font-medium mb-2 px-3 py-3 border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-blug-500 border-gray-300 ">
                  <option>Chose a category</option>
                </select>
              </div> */}

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full px-3 py-3 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  Message
                </label>
                <textarea
                  type=""
                  id="phone"
                  placeholder="Enter your message here"
                  className="w-full px-3 py-3 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-titleColor text-white py-4 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 md:p-6">
          <img src={ContactImage} className="rounded-md w-full max-h-full" />

          <div className="flex gap-8 p-4">
            <p>
              <mailIcon /> sandipchapagain797@gmail.com
            </p>
            <p>
              <phoneIcon />
              981-6032025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
