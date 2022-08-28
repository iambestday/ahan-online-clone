
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import HomeLayout from "./layouts/home/HomeLayout";
import Error404 from "./layouts/pages/Error404";
import Wiki from "./layouts/pages/Wiki"
import Join from "./layouts/pages/Join"
import Contact from "./layouts/pages/Contact";
import About from "./layouts/pages/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}/>
        <Route path="*" element={<Error404 />}/>
        <Route path="/dashboard" element={<DashboardLayout />}/>
        <Route path="/wiki" element={<Wiki />}/>
        <Route path="/join-us" element={<Join/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
