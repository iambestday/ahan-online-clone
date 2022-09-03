import Info from "../../components/footer/Info";
import Media from "../../components/footer/Media";


function FooterLayout() {
  return (
    <footer>
      <div className="px-4 pt-16 pb-8 mx-auto max-w-screen-xl bg-white sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-medium">سامانه خرید آهن</p>
              <nav className="flex flex-col mt-4 text-sm text-gray-500 space-y-2">
                <p className="hover:opacity-75" href="">درباره ما</p>
                <p className="hover:opacity-75" href="">تماس با ما</p>
                <p className="hover:opacity-75" href="">قوانین ما</p>
                <p className="hover:opacity-75" href="">افتخارات ما</p>
                <p className="hover:opacity-75" href="">همکاری با ما</p>
              </nav>
            </div>

            <div>
              <p className="font-medium">خدمات</p>
              <nav className="flex flex-col mt-4 text-sm text-gray-500 space-y-2">
                <p className="hover:opacity-75" href="">محصولات</p>
                <p className="hover:opacity-75" href="">تولیدکننذگان</p>
                <p className="hover:opacity-75" href="">دپارتمان های فروش</p>
                <p className="hover:opacity-75" href="">سفارش کنترل کیفیت</p>
              </nav>
            </div>

            <div>
              <p className="font-medium">لینک ها</p>

              <nav className="flex flex-col mt-4 text-sm text-gray-500 space-y-2">
                <p className="hover:opacity-75" href="">دانشنامه</p>
                <p className="hover:opacity-75" href="">سوالات پرتکرار</p>
                <p className="hover:opacity-75" href="">فرصت های شغلی</p>
              </nav>
            </div>
          </div>

          <div className="col-span-2">
          <div className="flex row gap-2">
          <div className="ml-3">
            <span className="block w-32 h-10 bg-gray-200 rounded-lg"></span>
            <p className="max-w-xs mt-4 text-justify text-sm text-gray-500">
              ﺷﻨﺒﻪ تا ﭼﻬﺎرﺷﻨﺒﻪ ۹ اﻟﯽ ۱۸:۰۰ | ﭘﻨﺞ‌ﺷﻨﺒﻪ ۹ اﻟﯽ ۱۳:۳۰ ﮐﺎرﺷﻨﺎﺳﺎن ما
              از ﺷﻨﺒﻪ ﺗﺎ ۵ ﺷﻨﺒﻪ در ﺳﺎﻋﺎت اداری ﭘﺎﺳﺨﮕﻮی ﺳﻮاﻟﺎت ﺷﻤﺎ ﻣﯽ‌ﺑﺎﺷﻨﺪ.
            </p>
            </div>

            <div className="flex row gap-2">
            <div className="w-32 h-40  bg-gray-200 rounded-lg"></div>
            <div className="w-32 h-40 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
          </div>

        </div>
        <div className="flex flex-row justify-between mt-8">
          <Info />
          <Media />
        </div>
      </div>
    </footer>
  );
}

export default FooterLayout;
