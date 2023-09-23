import user from "../../assets/images/user.png";

const Banner = () => {
  return (
    <>
      <section className="mb-20">
        <div className="container mx-auto px-5">
          <div className="flex gap-7 md:gap-0 flex-col md:flex-row justify-between items-center">
            <div className="flex-1 space-y-5 order-2 md:order-1">
              <h1 className="text-4xl">
                One Step <br /> Closer To Your <br /> Dream Job
              </h1>
              <p>
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="bg-lime-300 py-2 px-3 text-black">
                Get Started
              </button>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <img src={user} alt="user" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
