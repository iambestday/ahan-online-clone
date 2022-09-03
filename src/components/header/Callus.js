import { BiPhoneCall } from "react-icons/bi";

function Callus() {
  const callStyle = { color: "white", fontSize: "1.3em" };

  return (
    <div className='bg-blue-600 text-white p-2 rounded-3xl animate-pulse'>
      <BiPhoneCall style={callStyle}/>
  </div>
  )
}

export default Callus