import { Outlet } from "react-router-dom"
import FooterLayout from "./FooterLayout"
import HeaderLayout from "./HeaderLayout"

function HomeLayout() {
  return (
    <div className="px-4 py-4">
      <HeaderLayout/>
      <Outlet />
      <FooterLayout />
    </div>
  )
}

export default HomeLayout
