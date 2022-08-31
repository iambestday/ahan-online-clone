import React from "react";

function StatLayout() {
  return (
    <section className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-screen-xl md:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            کارتابل اکانت شما
          </h2>
          <p className="mt-4 text-gray-500 sm:text-xl">
           امروز  1401/05/01 با تشکر از انتخاب مجموعه ما اطلاعات اکانت شده به شرح زیر می باشد
          </p>
        </div>
        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
              <dt className="order-last text-lg font-medium text-gray-500">
                مجموع خرید شما
              </dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              4 میلیارد تومان
              </dd>
            </div>
            <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
              <dt className="order-last text-lg font-medium text-gray-500">
                مجموع فاکتورهای نهایی شده
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                24 مورد
              </dd>
            </div>
            <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
              <dt className="order-last text-lg font-medium text-gray-500">
                مجموع توناژ خریداری شده
              </dt>
              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                86 تن
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default StatLayout;
