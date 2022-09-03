import { AiOutlineEye, AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

function Signup() {
  const [input, setInput] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
    
  }
  function handleClick(event){
    event.preventDefault();
    console.log(input);
    const newUser ={
      email: input.email, password: input.password
    }
    axios.post('http://localhost:8080/newuser',newUser)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <form
          action=""
          className="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4"
        >
          <p className="text-base text-center font-medium">
            ورود به پنل کاربری
          </p>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              نام کاربری :
            </label>

            <div className="relative mt-1">
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={input.email}
                autoComplete="on"
                className="w-full p-4 pl-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                placeholder="ایمیل یا شماره همراه خود را وارد کنید"
              />

              <span className="absolute inset-y-0 inline-flex items-center left-4">
                <AiOutlineUser />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              کلمه عبور :
            </label>

            <div className="relative mt-1">
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={input.password}
                autoComplete="on"
                className="w-full p-4 pl-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                placeholder="کلمه عبور خود را وارد کنید"
              />

              <span className="absolute inset-y-0 inline-flex items-center left-4">
                <p className="border-gray-200 border rounded-lg  p-2 text-xs text-gray-500 mx-2">
                  درخواست کد یکبار مصرف
                </p>
                <AiOutlineEye />
              </span>
            </div>
          </div>

          <button
            onClick={handleClick}
            className="block w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg"
          >
            ورود
          </button>
          <div className="flex flex-row my-3 justify-center">
            <p className="text-sm text-center text-gray-500">
              حساب کاربری ندارید؟
            </p>
            <p className="text-sm text-center text-gray-500 mr-1">عضویت سریع</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
