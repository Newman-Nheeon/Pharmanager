import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "./components/Select";
import ContinueWith from "./components/ContinueWith";
import PasswordInput from "./components/PasswordInput";

function SignUp() {
  const [signupAs, setSignupAs] = useState("drug buyer");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeofBuyer, setTypeofBuyer] = useState("");
  const [typeofPharmacy, setTypeofPharmacy] = useState("");

  // function handleSignUp(e) {
  //   e.preventDefault();
  //   let newUser = {
  //     firstname: firstName,
  //     lastname: lastName,
  //     email,
  //     password,
  //     phone: 8989898989
  //   };
  //   fetch(`https://pharmanager-api.onrender.com/v1/auth/register`, {
  //     method: "POST",
  //     // mode: "no-cors",
  //     headers: { "content-Type": "application/json" },
  //     body: JSON.stringify(newUser),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => {
  //       alert("Failed :" + err.message);
  //     });
  // }

  return (
    <main className="bg-[#E6F2FB] p-3  flex items-start justify-between font-Euclid text-xl ">
      <div className="w-[50%] ">
        <img src="/images/authImage2.png" alt="" className="h-[900px]" />
      </div>

      <div className="w-[50%] bg-white rounded-r-[50px] flex flex-col gap-10 p-12 items-start pl-[10%] h-[900px]">
        <h3 className="font-semibold text-2xl">Welcome to Pharmanager</h3>

        <div className="flex justify-between border-2 border-formBlue rounded-md w-[550px]">
          <div
            className={`p-3 w-[50%] text-center cursor-pointer ${
              signupAs === "drug buyer" && "bg-formBlue text-white"
            }`}
            onClick={() => setSignupAs("drug buyer")}
          >
            Sign up as a drug buyer
          </div>
          <div
            className={`p-3 w-[50%] text-center cursor-pointer ${
              signupAs === "pharmacy" && "bg-formBlue text-white"
            }`}
            onClick={() => setSignupAs("pharmacy")}
          >
            Sign up as a pharmacy
          </div>
        </div>

        <form
    
          action=""
          className="w-[550px] flex flex-col gap-8"
        >
          <div className="flex justify-between items-center gap-6 ">
            <input
              required
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-2 focus:outline-none rounded-md p-4 w-[50%]"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-2 focus:outline-none rounded-md p-4 w-[50%]"
            />
          </div>
          <input
            required
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 focus:outline-none rounded-md p-4 w-full"
          />
          <PasswordInput
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* For Drug Buyer Categories */}
          {signupAs === "drug buyer" && (
            <Select
              name="type of drug buyer"
              id="drug buyer"
              className="border-2 focus:outline-none rounded-md p-2 w-full appearance-none"
              value={typeofBuyer}
              onChange={(e) => setTypeofBuyer(e.target.value)}
            >
              <option value="">Type of Drug Buyer</option>
              <option value="Corporate Organization">
                Corporate Organization
              </option>
              <option value="Individual">Individual</option>
            </Select>
          )}

          {/* For Pharmacy Categories */}
          {signupAs === "pharmacy" && (
            <Select
              name="type of drug pharmacy"
              id="pharmacy"
              className="border-2 focus:outline-none rounded-md p-2 w-full appearance-none"
              value={typeofPharmacy}
              onChange={(e) => setTypeofPharmacy(e.target.value)}
            >
              <option value="">Type of Pharmacy</option>
              <option value="Community Pharmacy">Community Pharmacy</option>
              <option value="Hospital/Clinic Pharmacy">
                Hospital/Clinic Pharmacy
              </option>
              <option value="Distributor">Distributor</option>
            </Select>
          )}

          <input
            type="submit"
            value={"Create an Account"}
            className="w-full bg-formBlue rounded-md text-center p-4 text-white"
          />
        </form>

        <ContinueWith />

        <div className="flex justify-center gap-6 text-xl w-[550px]">
          <p>Already have an account?</p>
          <Link to={"/login"} className="text-formBlue">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
