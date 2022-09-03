import Menu from "./Menu";
import { Outlet } from "react-router-dom";


function Dashboard() {
  return (
   
    <div className="flex flex-row w-full sm:my-3">
      <div className="w-2/12 pl-2 border-l	divide-slate-400 ">
        <Menu />
      </div>

      <div className="flex flex-col w-10/12 sm:mr-3">
      <Outlet />
      </div>
    </div>
  
  );
}

export default Dashboard;
