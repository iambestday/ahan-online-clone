import Alert from "./Alert";
import Callus from "./Callus";
import Logo from "./Logo";
import NavItems from "./NavItems";

function Header() {
  return (
    <header className="flex flex-col border-b border-b-gray-300">
      <Alert/>
      <nav className="flex flex-row items-center max-h-screen justify-between">
        <div className="flex flex-row">
        <Logo/>
        <div className="flex flex-col justify-center pr-2">
        <p className="text-md font-bold	">سامانه خرید آهن</p>
        <p className="text-xs">خریدی که پیچیدگی ندارد</p>
        </div>
        </div>
        <div className="flex flex-row items-center xl:flex-row-reverse">
        <Callus />
        <NavItems />      
        </div>
        </nav>
      </header>
     
  );
}

export default Header;
