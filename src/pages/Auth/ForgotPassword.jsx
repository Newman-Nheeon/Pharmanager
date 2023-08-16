import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [step, setStep] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    setStep(2);
  }
  return (
    <main className="bg-[#E6F2FB] p-3  flex items-start justify-between font-Euclid text-xl   ">
      <div className="w-[50%] ">
        <img src="/images/authImage1.png" alt="" className="h-[850px]" />
      </div>

      <div className="w-[50%] bg-white rounded-r-[50px] flex flex-col  gap-12 p-12 py-32 items-start pl-[10%] h-[850px] relative">
        <h3 className="font-semibold text-3xl">Recover Password</h3>

        {step === 1 && (
          <>
            <p className="w-[550px]">
              Kindy enter email address to get a password reset link sent to
              you.
            </p>

            <form
              action=""
              onSubmit={handleSubmit}
              className="w-[550px] flex  flex-col gap-10"
            >
              <input
                required
                type="email"
                placeholder="Email address"
                className="border-2 focus:outline-none rounded-md p-4 w-full"
              />

              <input
                type="submit"
                value={"Send password recovery mail"}
                className="w-full bg-formBlue rounded-md text-center p-4 text-white"
              />
            </form>
          </>
        )}
        {step === 2 && (
          <div className="w-[550px] flex flex-col gap-32">
            <p>
              Check your email for a password reset link. If it doesn’t appear
              within a few minutes, check your spam folder.
            </p>

            <Link
              to={"/login"}
              className="w-full bg-formBlue rounded-md text-center p-4 text-white"
            >
              Return to Login
            </Link>
          </div>
        )}

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

export default ForgotPassword;
