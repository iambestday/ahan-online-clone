import Account from "./Account";
import Alert from "./Alert";
import Callus from "./Callus";
import Logo from "./Logo";
import NavItems from "./NavItems";

function Header() {
  return (
    <>
      <header className="flex flex-col border-b divide-slate-400">
        <Alert />
        <nav className="flex flex-row items-center max-h-screen justify-between">
          <Logo />
          <div className="flex flex-row items-center xl:flex-row-reverse">
            <Account />
            <Callus />
            <NavItems />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
