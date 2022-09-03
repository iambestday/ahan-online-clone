import ctaBanner from "../../assets/images/cta-banner.svg";

function CTA() {
  return (
    <div className=" bg-gray-50">
    <div className=" grid grid-cols-2 justify-items-center px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      
      <div className="p-8 md:p-12 lg:px-5 lg:py-10">
        <div className="max-w-2xl mx-auto text-center sm:text-left">
          <h2 className="text-2xl font-bold text-right text-gray-900 md:text-3xl">
            از اولین کلیک تا تحویل بار در کنار شما هستیم
          </h2>
          <p className="hidden text-justify text-gray-500 md:mt-4 md:block">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <div className="mt-4 md:mt-8">
            <p className="inline-block px-12 py-3 text-sm font-medium text-white rounded transition bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400">
              همین حالا عضو شوید
            </p>
          </div>
        </div>
      </div>

      <img alt="#" src={ctaBanner} className="w-60 h-full sm:h-full" />
    </div>
     </div>
  );
}

export default CTA;
