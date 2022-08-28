import { BiCart ,BiBarChartAlt2,BiSortAlt2,BiMapPin ,BiUser,BiCog,BiLayer} from "react-icons/bi";

function Menu() {
  return (
    <div className="flex flex-col h-full justify-between ">
        <div>
            <p className="sm:text-xs sm:font-extralight ">آقای مهندس اصغری خوش آمدید</p>
            <ul  className="sm:font-extralight sm:text-sm my-5">
               <li className="flex flex-row py-2 items-center"><BiCart/><p className="px-2">ثبت سفارش</p></li>
                <li className="flex flex-row py-2 items-center"><BiLayer/><p className="px-2">فاکتورها</p></li>
                <li className="flex flex-row py-2 items-center"><BiBarChartAlt2/><p className="px-2">نمودار قیمت ها</p></li>
                <li className="flex flex-row py-2 items-center"><BiSortAlt2/><p className="px-2">پرداختی/دریافتی ها</p></li>
                <li className="flex flex-row py-2 items-center"><BiMapPin/><p className="px-2">آدرس ها</p></li>
                <li className="flex flex-row py-2 items-center"><BiUser/><p className="px-2">کارشناس ها</p></li>
                <li className="flex flex-row py-2 items-center"><BiCog/><p className="px-2">تنطیمات کاربری</p></li>
            </ul>
        </div>

        <p className="bottom-0 relative sm:text-xs sm:font-extralight ">آخرین ورود شما :      
        </p>
    </div>
  )
}

export default Menu