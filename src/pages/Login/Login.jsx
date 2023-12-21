import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.png";
import googleImg from "../../assets/images/google.png";
import { useContext, useState } from "react";

import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState(true);
  const { loginUser, googleAuth } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login user
    loginUser(email, password)
      .then(() => {
        Swal.fire("Awesome!!", "Login Successful !", "success");
        navigate("/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleGoogleRegister = () => {
    // register with google
    googleAuth()
      .then(() => {
        Swal.fire("Woohoo!!", "Registration Successful !", "success");
        navigate("/");
      })
      .catch();
  };
  return (
    <div>
      <div className=" bg-[#160938] py-20 flex h-auto items-center">
        <div className=" bg-white shadow-xl max-w-5xl px-10 py-10 mx-auto md:flex items-center gap-4">
          <div className="w-full">
            <img src={loginImg} alt="" />
          </div>
          <div className="w-full">
            <div className="w-full max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 ">
              <form onSubmit={handleLogIn} className="space-y-6" action="#">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Login in to our platform
                </h5>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-2 border-red-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5  font-bold "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                    Your password
                  </label>
                  <input
                    type={show ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="border-2 border-red-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5  font-bold "
                    required=""
                  />
                  <div
                    onClick={() => setShow(!show)}
                    className="absolute cursor-pointer ml-72 -mt-7">
                    {show ? (
                      <BiSolidHide></BiSolidHide>
                    ) : (
                      <BiSolidShow></BiSolidShow>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-[#e93f58] hover:bg-[#d14157] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#e93f58] dark:hover:bg-[#e93f58] dark:focus:ring-[#e93f58]">
                  Login account
                </button>
                <div>
                  {error ? (
                    <p className="font-bold text-red-600">{error}</p>
                  ) : (
                    ""
                  )}
                </div>
                {/* google login */}
                <div>
                  <p className="text-center font-bold">Also Register With</p>
                  <div className="flex mt-4 justify-center">
                    <img
                      onClick={handleGoogleRegister}
                      className="h-10 cursor-pointer"
                      src={googleImg}
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-sm font-bold ">
                  Not Registered?{" "}
                  <Link
                    to="/register"
                    className="text-[#e93f58] hover:underline dark:text-[#e93f58]">
                    Create account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
