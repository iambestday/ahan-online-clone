import Header from "../../components/header";
import Dashboard from "../../components/dashboard";
import Footer from "../../components/footer";

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
