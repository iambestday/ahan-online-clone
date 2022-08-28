import React from "react";

const myArray = [
  {
    key:"1",
    number: 1,
    title: "image-1",
    
  },
  {
    key:"2",
    number: 2,
    title: "image-2",
  },
  {
    key:"3",
    number: 3,
    title: "image-3",
    
  },
  {
    key:"4",
    number: 4,
    title: "image-4",
   
  },
  {
    key:"5",
    number: 5,
    title: "image-5",
   
  },
  {
    key:"6",
    number: 6,
    title: "image-6",
  
  },
];

function ProductList() {
  return (
    <div className="max-h-screen flex flex-row justify-between sm:w-full sm:ml-2 border border-solid rounded-md p-2">
      <div className="flex flex-row  items-center">
      <p className="sm:font-extralight sm:text-sm mb-2 ml-5">انتخاب محصول</p>
      {myArray.map((item, index) => (
        <img className="h-10"
          key={index}
          src={require("../../assets/images/products/p" +
            item.number +
            ".webp")}
          alt={item.title}
        />
      ))}
      </div>


      <div>
        <p>آخرین قیمت‌های رسمی کارخانجات</p>
        <p className="sm:font-extralight sm:text-sm text-sky-500">تمامی قیمت‌ها با احتساب ۹ درصد مالیات بر ارزش افزوده می‌باشد.</p>
      </div>
    </div>
  );
}

export default ProductList;
