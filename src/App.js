
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import HomeLayout from "./layouts/home/HomeLayout";
import Error404 from "./layouts/pages/Error404";
import Wiki from "./layouts/pages/Wiki"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}/>
        <Route path="*" element={<Error404 />}/>
        <Route path="/dashboard" element={<DashboardLayout />}/>
        <Route path="/wiki" element={<Wiki />}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
