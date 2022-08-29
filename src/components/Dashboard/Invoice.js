import React from "react";
import List from "./List"
import {AiOutlineAudit} from  "react-icons/ai";

function Invoice() {
  const style = { color: `var(--body_secondary_color)`, fontSize: "1.3em" };
  return (
      <div className="flex sm:flex-row max-h-screen sm:w-full ">
        <div className="flex flex-col ml-2 w-full h-auto border border-solid rounded-md" >
        <div className="flex flex-row items-center justify-between px-2">
         <div className="flex flex-row items-center"> 
          <AiOutlineAudit style={style}/>
        <p className="sm:font-extralight sm:text-sm my-3 mr-1">فاکتور جاری</p></div>
        <p className="sm:font-extralight sm:text-sm my-3">زمان اعتبار فاکتور : پنج دقیقه</p>
        </div>      
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full ">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500"> نام </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500">مقدار </th>
                 <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500"> وضعیت موجودی</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500">کارخانه </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">ویرایش</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {List.map(products => (
                  <tr key={products.key}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full"   key={products.key}
                                src={require("../../assets/icons/companies/" +products.manufactureIcon)}
                                alt={products.productName} />
                        </div>
                        <div className="ml-4 mr-1">
                          <div className="text-sm font-medium text-gray-900">{products.manufactureName}</div>
                          <div className="text-sm text-gray-500">{products.productName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{products.fakeCount}</div>
                      </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> {products.productAvailable} در انبار </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="text-sm text-gray-500">{products.manufactureName}</div>
        
                      
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <p className="text-indigo-600 hover:text-indigo-900">ویرایش</p>
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
    
  );
}

export default Invoice;
