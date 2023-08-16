import { Link } from "react-router-dom";
import PasswordInput from "./components/PasswordInput";

function CreateNewPassword() {

  return (
    <main className="bg-[#E6F2FB] p-3  flex items-start justify-between font-Euclid text-xl   ">
      <div className="w-[50%] ">
        <img src="/images/authImage1.png" alt="" className="h-[850px]" />
      </div>

      <div className="w-[50%] bg-white rounded-r-[50px] flex flex-col  gap-12 p-12 py-32 items-start pl-[10%] h-[850px] relative">
        <h3 className="font-semibold text-3xl">Create New Password</h3>

       
            <p className="w-[550px]">
            Kindy enter new password to reset your password.
            </p>

            <form
              action=""
              
              className="w-[550px] flex  flex-col gap-10 pt-12"
            >
              <PasswordInput placeholder='Enter new password'/>

              <input
                type="submit"
                value={"Confirm password reset"}
                className="w-full bg-formBlue rounded-md text-center p-4 text-white"
              />
            </form>
         

        <div className="flex justify-center gap-6 text-xl w-[550px] absolute bottom-32">
          <p>Don't have an account?</p>
          <Link to={"/sign-up"} className="text-formBlue">
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CreateNewPassword;
