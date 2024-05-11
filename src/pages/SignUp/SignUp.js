import { Link } from "react-router-dom";
// import ButtonLoader from "../../components/buttons/ButtonLoader";
// import InputIcons from "../../components/inputs/InputIcons";
import { ASSETS } from "../../utils/assets";
import { PiPasswordBold } from "react-icons/pi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useRef } from "react";
import InputIcons from "../../components/InputIcons";
import ButtonLoader from "../../components/ButtonLoader";
// cloud 9 - tubo
const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  
  const onRegisterUser = (e) =>{
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log(confirmPasswordRef.current.value);
  }

  return (
    <form onSubmit={onRegisterUser} className="w-full min-h-[100vh] flex justify-center items-center p-4">
      <div className="p-3 rounded w-full max-w-[700px]">
        <div className="flex justify-between mb-6 mt-3 flex-col items-center">
          <div className="flex justify-center items-center mb-2">
          <img
            src={ASSETS.logo}
            alt="logo blanc"
            className="h-[50px]"
          />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 shadow-lg px-3 py-5 rounded">
          <h3 className="font-bold uppercase text-2xl text-center my-4 w-full col-span-2">Sign Up</h3>
          <InputIcons required={true} ref={nameRef} placeholder="Your name" className="sm:col-span-2" />
          <InputIcons required={true} ref={emailRef} icon={<MdOutlineMarkEmailRead size={20}/>} placeholder="Your e-mail" className="sm:col-span-2" />
          <InputIcons required={true} ref={passwordRef} icon={<PiPasswordBold size={20}/>} type="password" placeholder="Your password" />
          <InputIcons required={true} ref={confirmPasswordRef} icon={<PiPasswordBold size={20}/>} type="password" placeholder="Confirm your password" />
          {/* <Link to="/home" className="sm:col-span-2 mt-3"> */}
          <ButtonLoader  className="bg-green-500 text-white rounded my-3 sm:col-span-2">
            Sign up now
          </ButtonLoader>
          {/* </Link> */}
          <Link to="/login" className="text-center col-span-2 block mt-4 text-blue-600">I have account...</Link>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
