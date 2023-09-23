import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Statistics = () => {
  const jobs = useLoaderData();
  // console.log(jobs)
  return (
    <>
      <Banner />
      <CategoryList data={jobs} />
      <FeaturedJobs data={jobs} />
    </>
  );
};

export default Statistics;
