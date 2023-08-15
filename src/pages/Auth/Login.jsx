import { Link } from "react-router-dom";
import ContinueWith from "./components/ContinueWith";
import PasswordInput from "./components/PasswordInput";


function Login() {
 
  

  return (
    <main className="bg-[#E6F2FB] p-3  flex items-start justify-between font-Euclid text-xl   ">
      <div className="w-[50%] ">
        <img src="/images/authImage1.png" alt="" className="h-[850px]" />
      </div>

      <div className="w-[50%] bg-white rounded-r-[50px] flex flex-col justify-center gap-12 p-12 items-start pl-[10%] h-[850px]">
        <h3 className="font-semibold text-3xl">Welcome Back to Pharmanager</h3>


        <form action="" className="w-[550px] flex  flex-col gap-10">
    
          <input
            required
            type="text"
            placeholder="Email address/Unique Identification Number"
            className="border-2 focus:outline-none rounded-md p-4 w-full"
          />
          <PasswordInput placeholder='Password' required />

          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
            <input
                  type="checkbox"
                  className="cursor-pointer [&:not(input:checked)]:appearance-none outline-none  bg-white h-5 w-5 border border-slate-400 rounded-md mr-2"
                />

                <label htmlFor="prescription" className="text">
                  Remember
                </label>
            </div>

            <Link to={'/forgot-password'} className="text-formBlue ">
                Forgot password?
            </Link>
          </div>


          
    
       

          <input
            type="submit"
            value={"Login"}
            className="w-full bg-formBlue rounded-md text-center p-4 text-white"
          />
        </form>

        <ContinueWith />

        <div className="flex justify-center gap-6 text-xl w-[550px]">
          <p>Don't have an account?</p>
          <Link to={"/sign-up"} className="text-formBlue">
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
