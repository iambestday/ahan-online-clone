import Header from "../../components/Header";
import Dashboard from "../../components/Dashboard";
import Footer from "../../components/Footer";

function DashboardLayout() {
  return (
    <div className="container px-2 sm:px-5 sm:py-2">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default DashboardLayout;
