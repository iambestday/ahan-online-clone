import React from "react";
import AhanonlineLogo from "../../assets/images/logo.png";

function logo() {
  return (
    <div className="flex flex-row h-10">
      <img className="h-auto w-auto my-1" src={AhanonlineLogo} alt="" />
      <div className="flex flex-col justify-center pr-2">
        <p className="text-md font-bold	">سامانه خرید آهن</p>
        <p className="sm:text-xs sm:font-extralight ">خریدی که پیچیدگی ندارد</p>
        </div>
        </div>
  );
}

export default logo;
