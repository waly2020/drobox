import { Link } from "react-router-dom";
import {ASSETS } from "../../utils/assets";
import { PiPasswordBold } from "react-icons/pi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import ButtonLoader from "../../components/ButtonLoader";
import InputIcons from "../../components/InputIcons";

// cloud 9 - tubo
const Login = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center p-4">
      <form className="p-3 rounded w-full max-w-[700px]">
        <div className="flex justify-between mb-6 mt-3 flex-col items-center">
          <div className="flex justify-center items-center mb-2">
          <img
            src={ASSETS.logo}
            alt="logo blanc"
            className="h-[50px]"
          />
          </div>
        </div>
        <div className="shadow-xl px-2 py-4">
          <h3 className="font-bold uppercase text-2xl py-3 text-center">Login</h3>
          <InputIcons icon={<MdOutlineMarkEmailRead size={20}/>} placeholder="Your e-mail" className="my-4" />
          <InputIcons icon={<PiPasswordBold size={20}/>} placeholder="Your password" className="my-4"/>
          <Link to="/" className="mt-3">
          <ButtonLoader className="bg-green-500 text-white rounded">
          Sign up now
          </ButtonLoader>
          </Link>
          <Link to="/signup" className="text-center block mt-4 text-blue-600">I want create account...</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
