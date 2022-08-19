import React from 'react'

function Menu() {
  return (
    <div className="flex flex-col h-full justify-between ">
        <div>
            <p className="sm:text-xs sm:font-extralight ">آقای مهندس اصغری خوش آمدید</p>
            <ul  className="sm:text-xs sm:font-extralight my-5">
               <li>ثبت سفارش</li>
                <li>فاکتورها</li>
                <li>پرداختی/دریافتی ها</li>
                <li>آدرس ها</li>
                <li>کارشناس ها</li>
                <li>تنظیمات حساب کاربری</li>
            </ul>
        </div>

        <p className="bottom-0 relative sm:text-xs sm:font-extralight ">آخرین ورود شما :      
        </p>
    </div>
  )
}

export default Menu