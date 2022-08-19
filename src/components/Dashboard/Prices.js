import Support from "./Support";
import people from "./people";
import { BiListCheck } from "react-icons/bi";

function Prices() {
  const style = { color: `var(--icon)`, fontSize: "1.5em" };

  return ( 
   <div className="flex flex-col sm:flex-row justify-between my-4 ">
      <div className="max-h-screen flex flex-col ml-2 sm:w-4/5 border h-auto border-solid rounded-md">
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
                       محل بارگیری
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {person.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.department}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                          >
                            موجود در انبار
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {person.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            ویرایش
                          </a>
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

      <div className="bg-blue-50		 max-h-screen sm:w-1/5 border border-solid rounded-md p-2">
        <Support />
      </div>
    </div>
  );
}

export default Prices;
