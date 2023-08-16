import { useState } from "react";
import Header from "./Header";
import { Stepper } from "./Stepper";
import { TbCurrencyNaira } from "react-icons/tb";

const steps = ["KYC", "Review", "Payment", "Complete"];

function BuyNow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [applicantType, setApplicantType] = useState("Individual");

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentStep(2);
  }
  return (
    <section className=" px-48 py-32">
      <Header title={"Dispensary counter"} />

      <main>
        <h3 className="font-semibold text-3xl mb-12">Dispensary Checkout</h3>
        <div className="flex justify-center items-center">
          <Stepper
            currentStep={currentStep}
            v
            complete={complete}
            steps={steps}
          />
        </div>
        <div className="text-xl flex flex-col gap-3 my-12">
          <h6>Dispensary counter details</h6>
          <div className="flex gap-6">
            <div className="flex border-2 h-[200px] w-[869px] shadow-lg p-6 ">
              <div className="w-[170px]">
                <img
                  src="/images/drugImage.png"
                  alt=""
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 px-6 pb-3  w-full">
                <h4 className="font-semibold text-2xl">Penicillin Ointment</h4>
                <p className="text-base">RX Pharmacy, Oshodi</p>
                <p className="font-semibold text-lg">
                  200mg l 1 Tube l 2 drops per use
                </p>

                <div className="flex items-end justify-between  font-semibold relative">
                  <p className="text-formBlue text-base">View dispensary details</p>

                  <div>
                    <p className="flex justify-evenly items-center text-formBlue">
                      <span>
                        <TbCurrencyNaira size={25} />
                      </span>
                      1000
                    </p>
                    <p className="text-lg">Available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-[#62909F]  w-[300px] h-[200px] flex flex-col gap-3">
              <p className="p-7 bg-[#F5F5F5] text-base">Quantity</p>
              <p className="p-7 text-2xl">1</p>
            </div>
            <div className="border-2 border-[#62909F]  w-[300px] h-[200px] flex flex-col ">
              <p className="p-7 bg-[#F5F5F5] text-base">Total Fee</p>
              <p className="pl-7 py-3 text-base">Due Today</p>
              <p className=" pl-7 flex justify-start items-center text-2xl ">
                <span>
                  <TbCurrencyNaira size={30} />
                </span>
                1,00,000
              </p>
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <div>
            <h3 className=" text-3xl mt-20 mb-16">Applicant Informations</h3>
            <form
              action=""
              className="flex flex-col gap-8 w-[65%]"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-4 w-2/5">
                <label htmlFor="applicant type" className="text-xl">
                  Applicant type*
                </label>
                <select
                  onChange={(e) => setApplicantType(e.target.value)}
                  name="applicant type"
                  required
                  type="text"
                  className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                >
                  <option value="Individual">Individual</option>
                  <option value="Corporate Organization">
                    Corporate Organization
                  </option>
                </select>
              </div>

              {applicantType === "Individual" && (
                <>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="applicant name" className="text-xl">
                        Applicant Name*
                      </label>
                      <input
                        name="applicant name"
                        type="text"
                        required
                        placeholder="First Name"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <input
                        name="applicant type"
                        type="text"
                        placeholder="Last Name"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <label htmlFor="applicant gender" className="text-xl">
                      Applicant gender
                    </label>
                    <select
                      name="applicant gender"
                      type="text"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <label htmlFor="applicant NIN" className="text-xl">
                      Applicant NIN
                    </label>
                    <input
                      name="applicant NIN"
                      type="text"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <label htmlFor="applicant Birth Date" className="text-xl">
                      Applicant Birth Date
                    </label>
                    <input
                      name="applicant Birth Date"
                      type="date"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none uppercase"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label
                        htmlFor="Prescribing health facility"
                        className="text-xl"
                      >
                        Prescribing health facility
                      </label>
                      <input
                        name="Prescribing health facility"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Recurring delivery" className="text-xl">
                        Recurring delivery
                      </label>
                      <select
                        name="Recurring delivery"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      >
                        <option value="i can't find the options">
                          i can't find the options
                        </option>
                        <option value="i can't find the options">
                          i can't find the options
                        </option>
                        <option value="i can't find the options">
                          i can't find the options
                        </option>
                        <option value="i can't find the options">
                          i can't find the options
                        </option>
                        <option value="i can't find the options">
                          i can't find the options
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Allergies" className="text-xl">
                        Allergies
                      </label>
                      <input
                        name="Allergies"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Frequency" className="text-xl">
                        Frequency
                      </label>
                      <input
                        name="Frequency"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Delivery address" className="text-xl">
                        Delivery address
                      </label>
                      <input
                        name="Delivery address"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Duration" className="text-xl">
                        Duration
                      </label>
                      <input
                        name="Duration"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Contact phone number" className="text-xl">
                        Contact phone number
                      </label>
                      <input
                        name="Contact phone number"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <label
                        htmlFor="Potential inspection date"
                        className="text-xl"
                      >
                        Potential inspection date
                      </label>
                      <input
                        name="Potential inspection date"
                        type="date"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none uppercase"
                      />
                    </div>
                  </div>
                </>
              )}

              {applicantType === "Corporate Organization" && (
                <>
                  <div className="flex flex-col gap-4 w-2/5">
                    <label htmlFor="Enterprise Name" className="text-xl">
                      Enterprise Name*
                    </label>
                    <input
                      name="Enterprise name"
                      type="text"
                      required
                      placeholder="Enterprise Name"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <label htmlFor="Enterprise sector" className="text-xl">
                      Enterprise sector*
                    </label>
                    <select
                      name="Enterprise sector"
                      type="text"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                    >
                      <option value="where are you">where are you</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <label
                      htmlFor="Applicant incorporation number"
                      className="text-xl"
                    >
                      Applicant incorporation number*
                    </label>
                    <input
                      name="Applicant incorporation number"
                      type="text"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <label
                      htmlFor="applicant incorporation date"
                      className="text-xl"
                    >
                      Applicant incorporation date*
                    </label>
                    <input
                      name="applicant incorporation date"
                      type="date"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <label htmlFor="Contact person" className="text-xl">
                        Contact person*
                      </label>
                      <input
                        name="Contact person"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <label
                        htmlFor="Contact person job title"
                        className="text-xl"
                      >
                        Contact person job title*
                      </label>
                      <input
                        name="Contact person job title"
                        type="text"
                        className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <label
                      htmlFor="Purpose of purchase to applicant"
                      className="text-xl"
                    >
                      Purpose of purchase to applicant*
                    </label>
                    <input
                      name="Purpose of purchase to applicant"
                      type="text"
                      className=" border-2 border-[#62909F] rounded-md p-3 focus:outline-none"
                    />
                  </div>
                </>
              )}
              <div className="text-right">
                <input
                  type="submit"
                  value="Review"
                  className="text-xl p-3 bg-formBlue text-white rounded-md w-[150px] hover:text-formBlue hover:bg-transparent border-2 border-formBlue"
                />
              </div>
            </form>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className=" text-3xl mt-20 mb-16">Applicant Informations</h3>
            <div className="flex flex-col gap-8 w-[65%]">
              {applicantType === "Individual" && (
                <>
                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant type</p>
                    <p className=" ">Individual</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Applicant Name</p>
                      <p className=" ">Adewale</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className=" ">Dada</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant gender</p>
                    <p className=" ">male</p>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant NIN</p>
                    <p className=" ">23432345678</p>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant Birth Date</p>
                    <p className="  uppercase">02/02/2002</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Prescribing health facility</p>
                      <p className=" ">water fall</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Recurring delivery</p>
                      <p className=" ">chief manager</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Allergies</p>
                      <p className=" ">none</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Frequency</p>
                      <p className=" ">1</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Delivery address</p>
                      <p className=" ">3, olayinka Street, Ajeobale</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Duration</p>
                      <p className=" ">2 weeks</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Contact phone number</p>
                      <p className=" ">09087654321</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Potential inspection date</p>
                      <p className="  uppercase">12/08/2023</p>
                    </div>
                  </div>
                </>
              )}

              {applicantType === "Corporate Organization" && (
                <>
                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant type</p>
                    <p className=" ">Corporate Organization</p>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Enterprise Name</p>
                    <p placeholder="Enterprise Name" className=" ">
                      iya bisi pharmacy
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Enterprise sector</p>
                    <p className=" ">community </p>
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant incorporation number</p>
                    <p className=" ">12345</p>
                  </div>
                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Applicant incorporation date</p>
                    <p className=" ">03/03/2003</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Contact person</p>
                      <p className=" ">olaonipekun alabode</p>
                    </div>

                    <div className="flex flex-col gap-4 w-2/5">
                      <p className="text-xl">Contact person job title</p>
                      <p className=" ">Branch Doctor</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-xl">Purpose of purchase to applicant</p>
                    <p className=" ">wetin concern you</p>
                  </div>
                </>
              )}
              <div className="flex gap-6 justify-end mt-12">
                <button
                  className="text-xl p-3 hover:bg-formBlue text-formBlue rounded-md w-[200px] text-center hover:text-white  border-2 border-formBlue "
                  onClick={() => setCurrentStep(1)}
                >
                  Edit
                </button>

                <button
                  className="text-xl p-3 bg-formBlue text-white rounded-md w-[200px] text-center hover:text-formBlue hover:bg-transparent border-2 border-formBlue "
                  onClick={() => setCurrentStep(3)}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <>
            <div className="mt-24">
              <div className="border-2 border-[#62909F] m-auto  w-[80%] flex flex-col pb-7">
                <p className="p-7 bg-[#F5F5F5]">Total Fee</p>
                <div className="flex items-end">
                  <div className="w-[35%] px-7">
                    <p className=" py-3 ">Due Today</p>
                    <p className="  flex justify-start items-center text-2xl ">
                      <span>
                        <TbCurrencyNaira size={30} />
                      </span>
                      1,00,000
                    </p>
                  </div>
                  <div className="flex gap-6 justify-end mt-12">
                    <button
                      className=" py-3 px-12 bg-formBlue text-white rounded-md text-center hover:text-formBlue hover:bg-transparent border-2 border-formBlue "
                      onClick={() => {setCurrentStep(4);
                    setComplete(true)}}
                    >
                      Proceed to application fee payment
                    </button>
                    <button
                      className=" p-3 hover:bg-formBlue text-formBlue rounded-md w-[200px] text-center hover:text-white  border-2 border-formBlue "
                      onClick={() => setCurrentStep(2)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentStep === 4 && <>

        <div className="w-[50%] text-2xl flex flex-col items-center m-auto mt-24">
            <div className="mb-12 ">
                <img src="/images/circleCheck.png" alt="" className="w-[150px]" />
            </div>
            <div className="flex flex-col gap-6 items-center text-center">
                <p>
                Success!
                </p>
                <p> Your dispensary purchase for the above listed medication/supply has been sent to the listing pharmacy. Kindly await a response as soon as possible </p>
                <p>Thank you!</p>
            </div>
        </div>
        
        </>}
      </main>
    </section>
  );
}

export default BuyNow;
