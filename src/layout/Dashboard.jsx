import { Outlet } from "react-router-dom";
import DashboardNavbar from "../assets/pages/Dashboard/DashboardNavbar/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="flex h-auto">
      <DashboardNavbar></DashboardNavbar>
      <div className="flex-1 bg-main-blue-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
