import Logo from "../../components/Header/Logo";
import NavItems from "../../components/Header/NavItems";
import { useNavigate } from "react-router-dom";

function HeaderLayout() {
    const navigate = useNavigate();

  return (
    <header>
  <div className="px-4 py-8 mx-auto max-w-screen-xl sm:py-10 sm:px-6 lg:px-8">
    <div className="sm:justify-between sm:items-center sm:flex">
      <div className="text-center sm:text-left">
     <Logo />
      </div>

      <div className="flex flex-col mt-4 gap-4 sm:flex-row sm:mt-0 sm:items-center">
        <NavItems/>

        <button
          className="block px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg transition hover:bg-blue-700 focus:outline-none focus:ring"
          type="button"
          onClick={() => navigate('signup')}
        >
          ورود به پنل کاربری
        </button>
      </div>
    </div>
  </div>
</header>

  )
}

export default HeaderLayout