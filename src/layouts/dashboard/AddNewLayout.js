import PriceList from "../../components/dashboard/PriceList.js";
import ProductList from "../../components/dashboard/ProductList.js";
import Steps from "../../components/dashboard/Steps.js";
import Invoice from "../../components/dashboard/Invoice.js";



function AddNewLayout() {
  return (
    <>
      <ProductList />
      <div className="my-4">
        <PriceList />
      </div>
      <Steps />
    <Invoice />
    </>
  )
}

export default AddNewLayout