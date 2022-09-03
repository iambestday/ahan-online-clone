import { BsFillFilePersonFill } from "react-icons/bs";
import { Link } from "react-router-dom"

function Account() {
    const accountStyle = { color: "white", fontSize: "1.3em" };
  return (
    <div className='bg-blue-600 text-white p-2 rounded-3xl mr-2'>
   <Link to="/signup"><BsFillFilePersonFill style={accountStyle}/></Link>
</div>
  )
}

export default Account