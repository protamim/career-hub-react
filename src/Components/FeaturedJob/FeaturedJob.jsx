import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const FeaturedJob = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, job_type } = job;
  return (
    <>
      <div className="bg-gray-400 text-black p-5 space-y-3 flex flex-col justify-between">
        <div className="w-28">
          <img src={logo} alt={company_name} />
        </div>
        <h2 className="text-2xl">{job_title}</h2>
        <h3>{company_name}</h3>
        <div className="flex gap-2">
          <button className="border py-1 px-2 bg-gray-400">
            {remote_or_onsite}
          </button>
          <button className="border py-1 px-2 bg-gray-400">{job_type}</button>
        </div>
        <div>
          <Link to={`/job-details/${id}`}>
            <button className="bg-pink-400 px-4 py-2">View Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};

FeaturedJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default FeaturedJob;
