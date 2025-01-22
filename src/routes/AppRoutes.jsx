import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "../constants/path";
import Home from "../pages/Home";
import About from "../pages/About"
import Faq from "../pages/faq";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";
import Blog from "../pages/blog";

export default function AppRoutes(){
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
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
