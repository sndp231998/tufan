import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/*
Component to make the Nabvar available to all the pages in the project. 
*/

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen mx-2 md:mx-20 lg:mx-28">
        <Navbar />
        <main className="flex flex-col flex-grow mt-20 gap-2 p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
