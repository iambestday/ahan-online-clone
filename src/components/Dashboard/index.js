import React from "react";
import Invoice from "./Invoice";
import Menu from "./Menu";
import Prices from "./Prices";
import ProductList from "./ProductList";
import Steps from "./Steps";


function Dashboard() {
  return (
   
    <div className="flex flex-row w-full sm:my-3">
      <div className="w-2/12 pl-2 border-l	divide-slate-400 ">
        <Menu />
      </div>

      <div className="flex flex-col w-10/12 sm:mr-3">
        <ProductList />
        <Prices />
        <Steps />
        <Invoice />
      </div>
    </div>
  
  );
}

export default Dashboard;
