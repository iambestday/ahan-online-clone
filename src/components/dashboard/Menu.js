import {
  BiCart,
  BiBarChartAlt2,
  BiSortAlt2,
  BiMapPin,
  BiUser,
  BiCog,
  BiLayer,
} from "react-icons/bi";
import Support from "./Support";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="flex flex-col h-full justify-between ">
      <div>
        <div className="p-3 w-full h-auto  bg-gray-100 rounded-lg">
        <p className="sm:text-xs sm:font-extralight">آقای مهندس اصغری خوش آمدید</p>
        <p className=" sm:text-xs sm:font-extralight">آخرین ورود شما :</p>
        </div>
        
        <ul className="sm:font-extralight sm:text-sm text-gray-500 my-5 ">
          <Link to="new">
            <li className="flex flex-row py-2 items-center pr-1 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <BiCart />
              <p className="px-2">ثبت سفارش</p>
            </li>
          </Link>
          <Link to="invoices">
            <li className="flex flex-row py-2 items-center pr-1 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <BiLayer />
              <p className="px-2">فاکتورها</p>
            </li>
          </Link>
          <Link to="prices">
            <li className="flex flex-row py-2 items-center pr-1 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <BiBarChartAlt2 />
              <p className="px-2">نمودار قیمت ها</p>
            </li>
          </Link>
          <Link to="turnover">
            <li className="flex flex-row py-2 items-center pr-1 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <BiSortAlt2 />
              <p className="px-2">پرداختی/دریافتی ها</p>
            </li>
          </Link>
          <Link to="locations">
            <li className="flex flex-row py-2 items-center pr-1 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <BiMapPin />
              <p className="px-2">آدرس ها</p>
            </li>
          </Link>
          <Link to="supports">
            <li className="flex flex-row py-2 items-center pr-1 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <BiUser />
              <p className="px-2">کارشناس ها</p>
            </li>
          </Link>
          <Link to="settings">
            <li className="flex flex-row py-2 items-center pr-1 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <BiCog />
              <p className="px-2">تنطیمات کاربری</p>
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-col mb-2 sm:text-sm sm:font-extralight">
        <div className=" border border-solid rounded-md mb-2 p-2">
          محاسبه هزینه حمل
        </div>
        <div className=" border border-solid rounded-md mb-2 p-2">
          محاسبه وزن
        </div>
        <div className=" border border-solid rounded-md mb-2 p-2">
          متره برآورد
        </div>
        <div className=" border border-solid rounded-md mb-2 p-2">
          محاسبه زمان
        </div>
      </div>

      <div className="bg-neutral-100 border border-solid rounded-md ">
        <Support />
      </div>
    </div>
  );
}

export default Menu;
