import PriceList from "../../components/Dashboard/PriceList";
import ProductList from "../../components/Dashboard/ProductList";
import Steps from "../../components/Dashboard/Steps";
import Invoice from "../../components/Dashboard/Invoice";



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