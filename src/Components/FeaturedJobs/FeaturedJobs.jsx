import { useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import PropTypes from "prop-types";

const FeaturedJobs = ({ data }) => {
  const [dataLength, setDataLength] = useState(4);
  return (
    <>
      <section className="mb-10">
        <div className="container mx-auto px-5">
          <div className="flex gap-3 flex-col items-center justify-center mb-6">
            <h2 className="text-3xl">Featured Jobs</h2>
            <p className="text-center md:text-left">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {data.slice(0, dataLength).map((job) => (
              <FeaturedJob key={job.id} job={job} />
            ))}
          </div>
          <div className="text-center mt-5 text-black">
            <button
              onClick={() => setDataLength(data.length)}
              className={`${dataLength == data.length ? "hidden" : "inline"} 
              px-3 py-1 bg-purple-500 text-lime-100`}>
              View All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

FeaturedJobs.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FeaturedJobs;
