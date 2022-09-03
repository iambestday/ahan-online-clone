import Steps from "../../components/dashboard/Steps";
import Invoice from "../../components/dashboard/Invoice";
import PriceList from "../../components/dashboard/PriceList";
import ProductList from "../../components/dashboard/ProductList";



function AddNewLayout() {
  return (
    <>
       <ProductList/>
       <div className="my-4">
        <PriceList/>
        </div>
        <Steps />
        <Invoice />
    </>
  )
}

export default AddNewLayout