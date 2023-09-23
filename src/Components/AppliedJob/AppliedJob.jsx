import PropTypes from 'prop-types'

const AppliedJob = ({ application }) => {
  console.log(application);
  const { logo, job_title, company_name, remote_or_onsite, job_type } =
    application;
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 md:items-center bg-lime-200 p-6 text-black">
        <div className="w-40">
          <img src={logo} alt="" />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">{job_title}</h3>
          <h5>{company_name}</h5>
          <div className="space-x-2">
            <button className="border-blue-500 border px-2">
              {remote_or_onsite}
            </button>
            <button className="border-blue-500 border px-2">{job_type}</button>
          </div>
        </div>
        <div className="md:ml-auto">
          <button className="px-6 py-3 bg-blue-500 text-white">View Details</button>
        </div>
      </div>
    </>
  );
};

AppliedJob.propTypes ={
  application: PropTypes.object.isRequired,
}

export default AppliedJob;
