import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplications } from "../Utilities/storedAppliedJobs";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [application, setApplication] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleDisplayJobs = (filter) => {
    if (filter === "all") {
      setDisplayJobs(application);
    } else if (filter === "remote") {
      const remoteJobs = application.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = application.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs)
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredApplications();
    const jobsApplied = jobs.filter((appliedJob) =>
      storedJobIds.includes(appliedJob.id)
    );
    // console.log(jobsApplied);
    setApplication(jobsApplied);
    setDisplayJobs(jobsApplied);
  }, [jobs]);

  return (
    <>
      <section className="mb-24 mt-10">
        <div className="container mx-auto px-5">
          <div>
            <h2 className="text-center text-3xl font-semibold">Applied jobs</h2>
          </div>
        </div>
      </section>
      <section className="my-12">
        <div className="container mx-auto px-5">
          <div className="text-end mb-5">
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1">
                Filter
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
              >
                <li onClick={()=> handleDisplayJobs('all')}>
                  <a>All</a>
                </li>
                <li onClick={()=> handleDisplayJobs('remote')}>
                  <a>Remote</a>
                </li>
                <li onClick={()=> handleDisplayJobs('onsite')}>
                  <a>Onsite</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            {displayJobs.map((job) => (
              <AppliedJob key={application.id} application={job} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppliedJobs;
