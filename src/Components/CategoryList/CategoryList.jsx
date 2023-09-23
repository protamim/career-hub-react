import Category from "../Category/Category";
import PropTypes from "prop-types";

const CategoryList = ({data}) => {
  return (
    <>
      <section className="mb-20">
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-4 justify-center items-center mb-7">
            <h2 className="text-3xl">Job Category List</h2>
            <p className="text-center md:text-left">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5">
            {data.slice(0,4).map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

CategoryList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default CategoryList;
