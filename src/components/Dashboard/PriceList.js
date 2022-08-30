import List from "./List";
import { BiListCheck, BiBasket } from "react-icons/bi";
import { Sparklines, SparklinesLine } from "react-sparklines";


function PriceList() {
  const style = { color: `var(--body_secondary_color)`, fontSize: "1.3em" };

  return (
    <div className="flex flex-col sm:flex-row justify-between my-4 ">
      <div className="max-h-screen flex flex-col ml-2 w-full border h-auto border-solid rounded-md">
        <div className="flex flex-row justify-between px-2">
          <div className="flex flex-row items-center">
            <BiListCheck style={style} />
            <p className="sm:font-extralight sm:text-sm my-3">لیست قیمت</p>
          </div>
          <p className="sm:font-extralight sm:text-sm my-3">
            آخرین بروزرسانی : یک دقیقه پیش
          </p>
        </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="align-middle inline-block min-w-full ">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 "
                      >
                        نام محصول و تولیدکننده
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 "
                      >
                        ویژگی ها
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 "
                      >
                        قیمت
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 "
                      >
                        وضعیت موجودی
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 "
                      >
                        نمودار
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 "
                      >
                        افزودن به سبد
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {List.map((products) => (
                      <tr key={products.key}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                key={products.key}
                                src={require("../../assets/icons/companies/" +
                                  products.manufactureIcon)}
                                alt={products.productName}
                              />
                            </div>
                            <div className="ml-4 mr-1">
                              <div className="text-sm font-medium text-gray-900">
                                {products.manufactureName}
                              </div>
                              <div className="text-sm text-gray-500">
                                {products.productName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {products.productDetails}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {products.productPrice}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={
                              products.productFlag === "true"
                                ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
                            }
                          >
                            {products.productAvailable +
                              ` در انبار ` +
                              products.storeLocation}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Sparklines data={products.chartData}>
                            <SparklinesLine color="blue" />
                          </Sparklines>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
                          <p
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <BiBasket style={style} />
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceList;
