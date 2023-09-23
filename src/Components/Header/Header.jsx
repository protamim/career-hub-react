import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Statistics</Link>
            </li>
            <li>
              <Link to={"/applied-job"}>Applied Jobs</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
        <Link to={'/'}><a className="normal-case text-xl">Career Hub</a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Statistics</Link>
          </li>
          <li>
            <Link to={"/applied-job"}>Applied Jobs</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link>
          <a className="border border-lime-300 py-1 px-2 hover:bg-lime-300 hover:text-black">
            Start Applying
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
