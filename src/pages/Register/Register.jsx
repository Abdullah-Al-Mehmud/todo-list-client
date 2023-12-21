import { Link } from "react-router-dom";
import registerImg from "../../assets/images/register.png";

const Register = () => {
  const handleRegister = () => {};
  return (
    <div>
      <div className=" bg-[#160938] py-10 flex h-auto items-center">
        <div className=" bg-white shadow-xl max-w-5xl px-10 py-10 mx-auto flex items-center gap-4">
          <div className="w-full">
            <img src={registerImg} alt="" />
          </div>
          <div className="w-full">
            <div className="w-full max-w-sm p-4 bg-white rounded-lg sm:p-6 md:p-8 ">
              <form onSubmit={handleRegister} className="space-y-4">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Register in to our platform
                </h5>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border-2 border-red-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5  font-bold"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="photo"
                    className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    className="border-2 border-red-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5  font-bold"
                    placeholder="Photo URL"
                    required=""
                  />
                </div>
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
                    className="border-2 border-red-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5  font-bold"
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
                    // type={show ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="border-2 border-red-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5  font-bold"
                    required=""
                  />
                  {/* <div
                  onClick={() => setShow(!show)}
                  className="absolute cursor-pointer ml-72 -mt-7">
                  {show ? (
                    <BiSolidHide></BiSolidHide>
                  ) : (
                    <BiSolidShow></BiSolidShow>
                  )}
                </div> */}
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-[#e93f58] hover:bg-[#d14157] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#e93f58] dark:hover:bg-[#e93f58] dark:focus:ring-[#e93f58]">
                  Register account
                </button>
                <div>
                  {/* {error ? <p className="font-bold text-red-600">{error}</p> : ""} */}
                </div>

                <div className="text-sm font-bold ">
                  Have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#e93f58] hover:underline dark:text-[#e93f58]">
                    Login Here
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

export default Register;
