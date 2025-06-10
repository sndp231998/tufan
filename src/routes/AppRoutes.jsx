import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "../constants/path";
import Home from "../pages/Home";
import About from "../pages/About";
import Faq from "../pages/faq";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";
import Blog from "../pages/Blog";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import OtpPage from "../pages/auth/OtpPage";
import PasswordPage from "../pages/auth/PasswordPage";
import RideShare from "../pages/RideShare";
import BusTicket from "../pages/BusTicket";
import Policy from "../pages/Policy";
import TC from "../pages/TC";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Layout />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.FAQ} element={<Faq />} />
          <Route path={PATHS.CONTACT} element={<Contact />} />
          <Route path={PATHS.NOTFOUNT} element={<NotFound />} />
          <Route path={PATHS.BLOG} element={<Blog />} />
          <Route path={PATHS.LOGIN} element={<LoginPage />} />
          <Route path={PATHS.REGISTER} element={<RegisterPage />} />
          <Route path={PATHS.OTPPAGE} element={<OtpPage />} />
          <Route path={PATHS.PASSWORDPAGE} element={<PasswordPage />} />
          <Route path={PATHS.RIDESHARE} element={<RideShare />} />
          <Route path={PATHS.BUSTICKET} element={<BusTicket />} />
          <Route path={PATHS.PRIVACYPOLICY} element={<Policy />} />
          <Route path={PATHS.TC} element={<TC/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
