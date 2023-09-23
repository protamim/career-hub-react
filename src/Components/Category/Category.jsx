import PropTypes from "prop-types";
import { GrTechnology } from "react-icons/gr";
import { SiAntdesign } from "react-icons/si";
import { FcAdvertising, FcOnlineSupport } from "react-icons/fc";

const Category = ({ category }) => {
  const { id, job_category, job_volume } = category;
  return (
    <>
      <div className="bg-slate-300 p-4 text-black">
        <div className="bg-slate-400 p-2 inline-block">
          <span>
            {id === 1 && <GrTechnology />}
            {id === 2 && <SiAntdesign />}
            {id === 3 && <FcAdvertising />}
            {id === 4 && <FcOnlineSupport />}
          </span>
        </div>
        <h2 className="text-lg font-bold"> {job_category} </h2>
        <span>{job_volume} jobs available</span>
      </div>
    </>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
