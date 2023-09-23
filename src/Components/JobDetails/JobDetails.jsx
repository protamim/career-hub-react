import { useLoaderData, useParams } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailLock, MdLocationOn } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedApplication } from "../Utilities/storedAppliedJobs";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const currentJob = jobs.find((current) => current.id === parseInt(id));
  // console.log(currentJob)
  const { job_description, job_title } = currentJob;

  const handleAppliedJob = ()=> {
        toast('Applied successfully!');
        savedApplication(parseInt(id))
  }

  return (
    <>
      <section className="pt-9 pb-20">
        <div className="container mx-auto px-5">
          <div>
            <h2 className="text-center text-5xl font-semibold">Job details</h2>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="container mx-auto px-5">
          <div className="flex justify-between gap-4">
            <div className="flex-1 space-y-4">
              <p> <strong>Job Description:</strong> <br /> {job_description}</p>
              <p>
                <strong>Job Responsibility:</strong> <br /> Collaborating with cross-functional teams:
                UI/UX designers often work closely with other teams, including
                product management, engineering, and marketing, to ensure that
                the user interface is aligned with business and technical
                requirements. You will need to be able to effectively
                communicate your design ideas and gather feedback from other
                team members.
              </p>
              <p>
                <strong>Educational Requirements:</strong> <br /> Bachelor degree to complete any reputational university.
              </p>
              <p>
                <strong>Experiences:</strong> <br /> 2-3 Years in this field.
              </p>
            </div>
            <div className="px-12 py-4 flex-shrink space-y-3 bg-slate-400 text-black">
                <ToastContainer />
              <div className="border-b-gray-500 border-b pb-2">
                <h3 className="text-xl">Job details</h3>
              </div>
              <div>
                <h4><strong>Job Title:</strong> {job_title}</h4>
              </div>
              <div className="border-b-gray-500 border-b pb-2">
                <h5 className="text-xl">Contact Information</h5>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex gap-2 items-center justify-center">
                  <span>
                    <FiPhoneCall />
                  </span>
                  <p>
                    <strong>Phone:</strong> 01700-587498
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <span>
                    <MdOutlineMailLock />
                  </span>
                  <p>
                    <strong>Email:</strong> info@gmail.com
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <span>
                    <MdLocationOn />
                  </span>
                  <p>
                    <strong>Address:</strong> Dhanmondi 32, Sukrabad Dhaka,
                    Bangladesh
                  </p>
                </div>
              </div>
                <div>
                    <button onClick={handleAppliedJob} className={`bg-purple-500 text-black px-3 py-2`}>Apply Now</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
