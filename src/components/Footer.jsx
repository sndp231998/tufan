import { Link } from "react-router-dom";
import Logo from "../assets/tufanLogo.png";
import { PATHS } from "../constants/path";
const FacebookIcon = () => (
  <svg
    className="w-8 h-8 pb-1"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlnsXlink="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier"></g>
    <g id="SVGRepo_tracerCarrier"></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
        fill="currentColor"
      ></path>{" "}
    </g>
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-8 h-8"
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        fill="currentColor"
      ></path>{" "}
      <path
        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
        fill="currentColor"
      ></path>{" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
        fill="currentColor"
      ></path>{" "}
    </g>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlnsXlink="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier"></g>
    <g id="SVGRepo_tracerCarrier"></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
        fill="currentColor"
      ></path>{" "}
    </g>
  </svg>
);

const TikTokIcon = () => (
  <svg
    className="w-7 h-7"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlnsXlink="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier"></g>
    <g id="SVGRepo_tracerCarrier"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Zm-3.281,8.725h0c-.109.011-.219.016-.328.017A3.571,3.571,0,0,1,14.4,9.129v5.493a4.061,4.061,0,1,1-4.06-4.06c.085,0,.167.008.251.013v2a2.067,2.067,0,1,0-.251,4.119A2.123,2.123,0,0,0,12.5,14.649l.02-9.331h1.914A3.564,3.564,0,0,0,17.719,8.5Z"></path>
    </g>
  </svg>
);

const YoutubeIcon = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 -3 20 20"
    version="1.1"
    xmlnsXlink="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <g id="SVGRepo_bgCarrier"></g>
    <g id="SVGRepo_tracerCarrier"></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <title>youtube [#168]</title> <desc>Created with Sketch.</desc>{" "}
      <defs> </defs>{" "}
      <g id="Page-1" stroke="none" fill="currentColor">
        {" "}
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-300.000000, -7442.000000)"
          fill="currentColor"
        >
          {" "}
          <g id="icons" transform="translate(56.000000, 160.000000)">
            {" "}
            <path
              d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
              id="youtube-[#168]"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#262728] dark:border-background border border-[#DCDCDC]">
      <div className="container mx-auto p-3">
        <div className="flex flex-wrap flex-col md:flex-row">
          <div className="flex-1 flex-col md:ml-20">
            <Link to={PATHS.HOME}>
              <img className="w-32 m-0" src={Logo} />
            </Link>
          </div>
          <div className="flex-1 p-3 space-y-1">
            <h1 className="w-full text-titleColor font-bold">Our Services </h1>
            <ol>
              <Link to={PATHS.BUSTICKET}>
                <li>Bus Ticketing</li>{" "}
              </Link>
              <Link to={PATHS.RIDESHARE}>
                <li>Ride Sharing</li>{" "}
              </Link>
            </ol>
          </div>
          <div className="flex-1 p-3 space-y-1">
            <h1 className="w-full text-titleColor font-bold">Documentation </h1>
            <ol>
              <li>Branch Extension</li>
            </ol>
          </div>
          <div className="flex-1 md:mr-20 p-3">
            <h1 className="w-full text-titleColor font-bold space-y-1">
              Quick Links{" "}
            </h1>
            <ol>
              <Link to={PATHS.CONTACT}>
                <li>Contact</li>
              </Link>
              <Link to={PATHS.FAQ}>
                <li>FAQ</li>
              </Link>
              <Link to={PATHS.TC}>
                <li>T&C</li>
              </Link>
              <Link to={PATHS.PRIVACYPOLICY}>
                <li>Privacy Policy</li>
              </Link>
              <Link to={PATHS.DeleteUser}>
                <li>Delete User Account</li>
              </Link>
            </ol>
          </div>
        </div>
        <div className="flex flex-col pl-20 pr-20">
          <h1 className="w-full text-start text-titleColor font-bold text-md">
            Follow us on{" "}
          </h1>
          <div className="flex flex-wrap gap-3 pt-2">
            {" "}
            <a href="https://www.facebook.com/share/16CdnTT54e/">
              {" "}
              <FacebookIcon />
            </a>
            <LinkedInIcon />
            <YoutubeIcon />
            <TikTokIcon />
            {/* <InstagramIcon /> */}
          </div>
        </div>
        <div className="flex flex-col mt-10 leading-6 gap-2">
          <p className="text-titleColor font-extrabold text-center text-sm">
            RIDE SMART || TRAVEL SAFE
          </p>
          <p className="text-titleColor text-sm text-center ">
            YOUR TRAVEL PARTNER
          </p>
          <p className="text-center text-xs">
            {" "}
            &copy; Powered by:{" "}
            <a href="https://www.a1itinnovation.com.np">A1 IT Innovation</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
