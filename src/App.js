
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import HomeLayout from "./layouts/home/HomeLayout";
import Error404 from "./layouts/pages/Error404";
import Wiki from "./layouts/pages/Wiki"
import Join from "./layouts/pages/Join"
import Contact from "./layouts/pages/Contact";
import About from "./layouts/pages/About";
import Signup from "./layouts/pages/Signup";
import AddNewLayout from "./layouts/dashboard/AddNewLayout";
import InvoicesLayout from "./layouts/dashboard/InvoicesLayout";
import PricesLayout from "./layouts/dashboard/PricesLayout";
import TurnoverLayout from "./layouts/dashboard/TurnoverLayout";
import LocationsLayout from "./layouts/dashboard/LocationsLayout";
import SupportsLayout from "./layouts/dashboard/SupportsLayout";
import SettingsLayout from "./layouts/dashboard/SettingsLayout";
import StatLayout from "./layouts/dashboard/StatLayout";
import MainLayout from "./layouts/home/MainLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
        <Route index element={<MainLayout />} />
        <Route path="*" element={<Error404 />}/>
        <Route path="/wiki" element={<Wiki />}/>
        <Route path="/join-us" element={<Join/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<StatLayout />} />
        <Route path="new" element={<AddNewLayout />} />
        <Route path="invoices" element={<InvoicesLayout />} />
        <Route path="prices" element={<PricesLayout />} />
        <Route path="turnover" element={<TurnoverLayout />} />
        <Route path="locations" element={<LocationsLayout />} />
        <Route path="supports" element={<SupportsLayout />} />
        <Route path="settings" element={<SettingsLayout />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
