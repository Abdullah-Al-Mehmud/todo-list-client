import { Link } from "react-router-dom";
import logo from "../../assets/images/ToDo List.png";

const Navbar = () => {
  const links = (
    <>
      <li className="font-bold text-lg">
        <Link
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#dc4c3e]" : ""
          }>
          Home
        </Link>
      </li>
      <li className="font-bold text-lg">
        <Link
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#dc4c3e]" : ""
          }>
          Reviews
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="drawer fixed z-10 bg-black bg-opacity-20 md:px-20 py-2">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 text-white stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-1  px-2 mx-2 font-bold md:text-2xl text-white">
              <Link to="/" className="flex gap-2 items-center">
                <img className="w-12" src={logo} alt="" />
                DO_IT
              </Link>
            </div>
            <div className="flex gap-28">
              <div className="flex-none hidden lg:block">
                <ul className="flex text-white items-center gap-5 menu-horizontal">
                  {/* Navbar menu content here */}
                  {links}
                </ul>
              </div>
              {/* login and register */}
              <div className="flex gap-5">
                <button className="bg-[#e94c3d] rounded-lg font-bold px-6 py-3 text-white  ">
                  Login
                </button>
                <button className="bg-[#e94c3d] rounded-lg font-bold px-6 py-3 text-white ">
                  Register
                </button>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {/* Content */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
