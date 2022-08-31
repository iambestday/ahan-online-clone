import { Outlet } from "react-router-dom"
import FooterLayout from "./FooterLayout"
import HeaderLayout from "./HeaderLayout"

function HomeLayout() {
  return (
    <div className="container">
      <HeaderLayout/>
      <Outlet />
      <FooterLayout />
    </div>
  )
}

export default HomeLayout