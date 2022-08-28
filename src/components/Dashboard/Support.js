import Person from "../../assets/images/employees/A1.jpg";
import { BsBookmarkCheck } from "react-icons/bs";


function Support() {
  const style = { color: `var(--icon)`, fontSize: "1.5em",position:"absolute" ,top: "0.5rem" ,left:"0.5rem"};
  return (
    <div className="flex flex-col justify-between h-full p-2">
      <div className="relative">
        <img src={Person} alt="" srcset="" className="rounded-md" />
        <span class="flex h-3 w-3 absolute top-2 right-2">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
        <BsBookmarkCheck style={style}/>
      </div>

      <p className=" sm:font-extralight sm:text-sm">علی قدوسی</p>
      <p className=" sm:font-extralight sm:text-sm">
        کارشناس (آزاد-مورد اطمینان)
      </p>
    </div>
  );
}

export default Support;
