import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";
import JobDetails from "./Components/JobDetails/JobDetails";
import FeaturedJob from "./Components/FeaturedJob/FeaturedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        loader: () => fetch('jobs.json'),
        element: <Statistics />
      },
      {
        path: '/applied-job',
        element: <AppliedJobs />,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/job-details/:id',
        element: <JobDetails />,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path: '/apply',
        element: <FeaturedJob />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
