import React from "react";

function Invoice() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="ml-2 max-h-screen sm:w-4/5 h-80 border border-solid rounded-md p-2">
        <p className="text-sm	font-semibold">فاکتور</p>

      </div>

     
      <div className="max-h-screen sm:w-1/5 border border-solid rounded-md p-2">
        <p className="text-sm	 font-semibold">کارشناس</p>


      </div>
    </div>
  );
}

export default Invoice;
