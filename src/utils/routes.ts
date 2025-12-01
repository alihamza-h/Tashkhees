import { createBrowserRouter } from "react-router";
import { Root } from "../components/Root";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Testimonials } from "../pages/Testimonials";
import { Team } from "../pages/Team";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "testimonials", Component: Testimonials },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
