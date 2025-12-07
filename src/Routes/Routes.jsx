import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import Layout2 from "../Layout/Layout2";
import Layout3 from "../Layout/Layout3";
import DestinationPage from "../Pages/DestinationPage";
import TourPage from "../Pages/TourPage";
import TourDetailsPage from "../Pages/TourDetailsPage";
import ActivitiesPage from "../Pages/ActivitiesPage";
import ContactPage from "../Pages/ContactPage";
import BlogGrid from "../Pages/BlogGrid";
import BlogSidebarPage from "../Pages/BlogSidebarPage";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout3,
      children: [ 
        {
          path: "/about",
          Component: AboutPage
        },
        {
          path: "/dinhcu",
          Component: DestinationPage
        },      
        {
          path: "/tour",
          Component: TourPage
        },
        {
          path: "/tour/tour-details",
          Component: TourDetailsPage
        },
        {
          path: "/events",
          Component: ActivitiesPage
        },
        {
          path: "/contact",
          Component: ContactPage
        },
        {
          path: "/news",
          Component: BlogGrid
        },
        {
          path: "/rating",
          Component: BlogSidebarPage
        },


      ],
    },
    {
      path: '/',
      Component: Layout2,
      children: [
        {
          index: true,
          Component: Home,
        },                           
      ],
    },    

  ]);