import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOutUser().then().catch();
  };
  const links = (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between capitalize">{user?.displayName}</a>
          </li>

          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
      {/* menu */}
      {/* lists */}
      <div className="mt-4 font-bold text-lg">
        <h1>Tasks</h1>
        <li>
          <Link to="/dashboard/addTask">
            {" "}
            <IoIosAddCircle className="text-red-500" size="25" /> Add Task
          </Link>
        </li>
      </div>
    </>
  );
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
