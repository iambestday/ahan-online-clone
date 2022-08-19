import { AiOutlineShoppingCart  , AiOutlineCaretLeft,AiOutlineFlag ,AiOutlineFileDone,AiOutlineCreditCard,AiOutlineNodeIndex} from "react-icons/ai";

function Steps() {
  return (
    <div className="flex sm:flex-col  mb-4 max-h-screen sm:w-full h-auto border border-solid rounded-md py-1 px-5">
        <section className="flex flex-row justify-between items-center	 p-2">
      <div className="flex flex-row items-center">
      <AiOutlineShoppingCart/>
      <p className="sm:font-extralight sm:text-sm  mr-2">ثبت سفارش آنلاین</p>
      </div>
      <AiOutlineCaretLeft/>
      <div className="flex flex-row items-center"><AiOutlineFileDone/>
      <p className="sm:font-extralight sm:text-sm mr-2">تماس کارشناسان جهت صدور پیش فاکتور</p>
      </div>
      <AiOutlineCaretLeft/>
      <div className="flex flex-row items-center">
<AiOutlineCreditCard/>
<p className="sm:font-extralight sm:text-sm mr-2">پرداخت و تسویه آنلاین</p>
      </div>
      <AiOutlineCaretLeft/>
      <div className="flex flex-row items-center">
<AiOutlineNodeIndex/>
<p className="sm:font-extralight sm:text-sm mr-2">ارسال بار به مقصد</p>
      </div>
      <AiOutlineCaretLeft/>
      <div className="flex flex-row items-center"><AiOutlineFlag/>
      <p className="sm:font-extralight sm:text-sm mr-2">تسویه نهایی</p>
      </div>
      </section>
    </div>
  );
}

export default Steps;
