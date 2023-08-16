import { MdLocationPin } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TbCloudUpload } from "react-icons/tb";
import Select from "../../Auth/components/Select";


function HomeMain({setDisplay}) {


  function handleSubmit(e){
    e.preventDefault();
  
    setDisplay('search result')
  }
    return (
        <main className="font-Euclid ">
        <section>
          <div className="flex pl-48 py-6 ">
            <div className="pt-12">
              <h1 className="font-bold text-6xl mb-12">
                Simplify Your Pharma Experience
              </h1>
              <p className="text-lg ">
                Stay ahead of the curve with our comprehensive pharmacy
                software.
              </p>
              <form
                action=""
                className="w-full flex  items-center relative pt-12 text-sm"
                onSubmit={handleSubmit}
              >
                <CiSearch
                  className="absolute left-2 text-slate-500"
                  size={25}
                />
                <input
                  className="w-[50%] bg-slate-100 p-4 pl-10 focus:outline-none rounded-l-md "
                  type="text"
                  name="medication name"
                  id=""
                  placeholder="What medication are you looking to buy?"
                  required
                />
                <MdLocationPin
                  className="absolute left-[50%]  text-slate-400 z-10"
                  size={25}
                />
              
                <Select className='w-[30%] bg-slate-100 p-2 pl-8 focus:outline-none appearance-none'>
                  <option value="">Location</option>
                  <option value="">Lagos</option>
                  <option value="">Oyo</option>
                  <option value="">Ogun</option>
                  <option value="">Osun</option>
                </Select>
                <input
                  className="w-[20%] bg-[#E6F2FB] p-4 focus:outline-none rounded-r-md  text-center"
                  type="submit"
                  name="submit"
                  id=""
                  value={"Submit"}
                />
              </form>
              <p className="text-center my-2">Or</p>
              <form
                action=""
                className="w-full bg-slate-100 text-slate-300 text-lg p-4 border-2 border-slate-200 border-dashed rounded-md cursor-pointer flex justify-center items-center gap-3"
              >
                <TbCloudUpload size={25} />
                <label htmlFor="prescription" className="">
                  Click here to upload prescription list
                  <input id="prescription" type="file" className="hidden" />
                </label>
              </form>

              <div className="flex items-center my-12">
                <div className="flex flex-col text-sm gap-2 border-r-2 border-primaryCol pr-10">
                  <h5 className="font-semibold">Safe Delivery</h5>
                  <p className="">As soon as man mar 20</p>
                </div>
                <div className="flex flex-col text-sm gap-2 border-r-2 border-primaryCol pr-10 pl-10">
                  <h5 className="font-semibold">Multiple Choices</h5>
                  <p className="">Compare various prices</p>
                </div>
                <div className="flex flex-col text-sm gap-2 pl-10">
                  <h5 className="font-semibold">Need online advisory</h5>
                  <p className="">
                    We allow you to speak the pharmacist from anywhere
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/heroImage.png" alt="pharmacy" />
            </div>
          </div>
          <div className="flex items-center  gap-24 pl-48 p-3 bg-[#F9FAFB]">
            <p>Trusted By</p>
            <img src="/images/mophethLogo.png" alt="" className="w-32" />
            <img src="/images/greenplusLogo.png" alt="" className="w-32" />
            <img src="/images/alphapharmacyLogo.png" alt="" className="w-32" />
            <img src="/images/drugstoreLogo.png" alt="" className="w-32" />
            <img src="/images/wikimediaLogo.png" alt="" className="w-32" />
            <img src="/images/mophethLogo.png" alt="" className="w-32" />
          </div>
        </section>

        <section className="py-12 px-48 bg-[#F0F2F5]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h3 className="font-semibold text-3xl">
              Choose From Our Top Categories
            </h3>
            <p className="text-2xl">
              Our best selling products for Business/Individual.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6 my-12">
            <div>
              <img src="/images/oralDug.png" alt="" />
            </div>
            <div>
              <img src="/images/injection.png" alt="" />
            </div>
            <div>
              <img src="/images/firstAid.png" alt="" />
            </div>
            <div>
              <img src="/images/baby.png" alt="" />
            </div>
            <div>
              <img src="/images/beauty.png" alt="" />
            </div>
            <div>
              <img src="/images/womenhealth.png" alt="" />
            </div>
            <div>
              <img src="/images/vaccines.png" alt="" />
            </div>
            <div>
              <img src="/images/telehealth.png" alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#27A6FF] text-white text-xl py-4 px-10 rounded-full ">
              SHOW ALL PRODUCTS
            </button>
          </div>
        </section>
        <section className="py-12 px-48 ">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h3 className="font-semibold text-3xl">
              Some of Our Happy 5,000+ Customers
            </h3>
            <p className="text-2xl">
              Get a glimpse of our satisfactory service and product.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-6 my-6">
            <div className="row-span-2 col-span-2">
              <img src="/images/image1.png" alt="" />
            </div>
            <div>
              <img src="/images/image2.png" alt="" />
            </div>
            <div>
              <img src="/images/image3.png" alt="" />
            </div>
            <div>
              <img src="/images/image4.png" alt="" />
            </div>
            <div>
              <img src="/images/image5.png" alt="" />
            </div>
            <div>
              <img src="/images/image6.png" alt="" />
            </div>
            <div>
              <img src="/images/image7.png" alt="" />
            </div>
            <div>
              <img src="/images/image8.png" alt="" />
            </div>
            <div>
              <img src="/images/image9.png" alt="" />
            </div>
            <div>
              <img src="/images/image10.png" alt="" />
            </div>
            <div className="row-span-2 col-span-2">
              <img src="/images/image14.png" alt="" />
            </div>
            <div>
              <img src="/images/image11.png" alt="" />
            </div>
            <div>
              <img src="/images/image12.png" alt="" />
            </div>
            <div>
              <img src="/images/image13.png" alt="" />
            </div>
          </div>
        </section>
        <section className="my-12 px-48 py-6 flex flex-col gap-12">
          <div className="flex justify-between  bg-[#54A4CC] px-12 py-16  text-white ">
            <div className="w-[45%] gap-8 flex flex-col h-full">
              <p className="w-[40%] rounded-lg bg-[#386A8B] py-3 px-6  text-center ">
                For drug buyers
              </p>
              <h4 className="text-4xl w-[80%]  font-semibold">
                Compare prescription prices for free.
              </h4>
              <p className="text-[27px] my-6">
                Make personalized choices on your prescription search and
                contact the pharmacies for free.
              </p>
              <button className="w-[40%] rounded-sm mt-12  text-[#386A8B] bg-white p-3  text-center text-sm">
                PLACE ORDERS
              </button>
            </div>
            <div className="w-[55%] flex justify-center items-center relative">
              <img src="/images/rximage.png" alt="" className=" z-10 w-[70%]" />
              <div className="w-[70%] h-[100%]  rounded-xl bg-[#62909F] absolute top-8 right-[11%]" />
              <div className="w-[70%] h-[100%]  rounded-xl bg-[#D2F4FF] absolute top-4 right-[13%]" />
            </div>
          </div>
          <div className="flex justify-between bg-[#62909F] px-12 pt-16 text-white  ">
            <div className="w-[45%] gap-8 flex flex-col h-full pb-16">
              <p className="w-[35%] rounded-lg bg-[#386A8B] py-3 px-6  text-center">
                For pharmacies
              </p>
              <h4 className="text-4xl font-semibold">
                End-to-end solution for cost efficiency and automation.
              </h4>
              <p className="text-[30px] my-6">
                Digitalize your entire pharmacy operations across dispensary
                sales inbound, pharmacy operations, supply chain, customer
                relations and back-office.
              </p>
              <button className="w-[40%] rounded-sm mt-12  text-[#386A8B] bg-white p-3  text-center text-sm">
                GET STARTED
              </button>
            </div>
            <div className="w-[55%] flex items-end relative  h-full">
              <img src="/images/forPharmaciesImage.png " alt="" className="" />
            </div>
          </div>
        </section>
        <section className="my-12 px-48 flex flex-col gap-12">
          <div className=" flex justify-center">
            <h3 className="font-semibold text-3xl">How to use</h3>
          </div>

          <div className="flex justify-between items-start">
            <div className="">
              <img src="/images/iPhone.png" alt="" />
            </div>
            <div className="w-[60%] pl-28">
              <h3 className="font-bold text-3xl">For drug buyers</h3>

              <div className="flex flex-col justify-between gap-12">
                <div className="mt-12">
                  <div className="flex items-start gap-12">
                    <h3 className="text-3xl text-primaryCol font-bold ">1</h3>
                    <div className="flex flex-col gap-6">
                      <h5 className="font-semibold text-2xl">
                        Create an account{" "}
                      </h5>
                      <p className="w-[80%] text-xl leading-loose">
                        Get access to our platform by signing up with basic
                        information on the Android or iOs app.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="flex items-start gap-12">
                    <h3 className="text-3xl text-primaryCol font-bold ">2</h3>
                    <div className="flex flex-col gap-6">
                      <h5 className="font-semibold text-2xl">
                        Input medication search{" "}
                      </h5>
                      <p className="w-[80%] text-xl leading-loose">
                        {" "}
                        Input the details of the type of medication or supplies
                        that you are looking to filter amount, composition,
                        location etc.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="flex items-start gap-12">
                    <h3 className="text-3xl text-primaryCol font-bold ">3</h3>
                    <div className="flex flex-col gap-6">
                      <h5 className="font-semibold text-2xl">
                        Connect with pharmacy
                      </h5>
                      <p className="w-[80%] text-xl leading-loose">
                        Send a medication request to get advisory to assess
                        desirability or purchase.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="flex items-start gap-12">
                    <h3 className="text-3xl text-primaryCol font-bold ">4</h3>
                    <div className="flex flex-col gap-6">
                      <h5 className="font-semibold text-2xl">Checkout </h5>
                      <p className="w-[80%] text-xl leading-loose">
                        Clear purchase carts and get delivery. Assess our tools
                        that improves your dispensary experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between items-start">
            <div className="w-[50%]">
              <img src="/images/counterImage.png" alt="" />
            </div>
            <div className="w-[45%] mt-12">
              <h3 className="font-bold text-3xl">For pharmacies</h3>

              <div className="flex flex-col justify-between gap-12 mt-12">
                <div className="">
                  <div className="flex items-start gap-12">
                    <h3 className="text-3xl text-primaryCol font-bold ">1</h3>
                    <div className="flex flex-col gap-6">
                      <h5 className="font-semibold text-2xl">
                        Create an account{" "}
                      </h5>
                      <p className="w-[80%] text-xl leading-loose">
                        Get access to our platform by signing up with basic
                        information and certifications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-start gap-12">
                    <h3 className="text-3xl text-primaryCol font-bold ">2</h3>
                    <div className="flex flex-col gap-6">
                      <h5 className="font-semibold text-2xl">
                        Search dispensary leads and add inbounds
                      </h5>
                      <p className="w-[80%] text-xl leading-loose">
                        {" "}
                        You can create an online dispensary counter via your
                        custom webpage, get and manage leads on your dashboard.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-start gap-12">
                    <h3 className="text-3xl text-primaryCol font-bold ">3</h3>
                    <div className="flex flex-col gap-6">
                      <h5 className="font-semibold text-2xl">
                        Manage and automate pharmacy operations
                      </h5>
                      <p className="w-[80%] text-xl leading-loose">
                        Manage pharmacies, procurement, vendors, payments,
                        customer feedback, and all other integrations for your
                        pharmacy, powered by our end-to-end pharmacy operations
                        manager.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12 ">
          <div className="px-48 mb-6">
            <div className="border-t-8  border-[#27A6FF] rounded-md shadow-lg z-30">
              <div className="flex flex-col gap-3 justify-center items-center my-12">
                <h3 className="font-semibold text-3xl">
                  Your Business derserve the Best
                </h3>
                <p className="text-2xl">Why so many choose to buy from us.</p>
              </div>
              <div className="flex items-center justify-between p-12 border-t">
                <div className="flex flex-col items-center justify-start  gap-6 border-r pr-2">
                  <img
                    src="/images/deliveryIcon.png"
                    alt=""
                    className="w-[48px]"
                  />
                  <h5 className="font-semibold text-2xl text-center">
                    FAST RUSH DELIVERY
                  </h5>
                  <p className="w-[80%] text-lg leading-loose text-center">
                    Our pharmacy partners deliver inbound requests within 24hrs
                    to prioritize your well-being.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-start  gap-6 border-r pr-2">
                  <img
                    src="/images/dollarIcon.png"
                    alt=""
                    className="w-[48px]"
                  />
                  <h5 className="font-semibold text-2xl text-center">
                    BETTER PRICING
                  </h5>
                  <p className="w-[80%] text-lg leading-loose text-center">
                    We allow you compare prices across various pharmacies within
                    and outside your location to help with decision making.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-start  gap-6 border-r pr-2">
                  <img
                    src="/images/thumbIcon.png"
                    alt=""
                    className="w-[48px]"
                  />
                  <h5 className="font-semibold text-2xl text-center">
                    INDUSTRY LEADING SATISFACTION GUARANTEE{" "}
                  </h5>
                  <p className="w-[80%] text-lg leading-loose text-center">
                    Our pharmacy parties follow the best practices from
                    procurement to handling and dispatch. Read more on our
                    guarantees to you.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-start  gap-6">
                  <img
                    src="/images/messageIcon.png"
                    alt=""
                    className="w-[48px]"
                  />
                  <h5 className="font-semibold text-2xl text-center">
                    IN CALL SERVICE{" "}
                  </h5>
                  <p className="w-[80%] text-lg leading-loose text-center">
                    We allow pre-sales and post sales advisory and feedback to
                    improve value offerings to both pharmacies and drug buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-48 py-12 bg-[#E6F2FB] -z-10">
            <div className="flex justify-center items-center mb-6">
              <h3 className="font-semibold text-2xl ">
                Our Customers Testimonies
              </h3>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center gap-6 bg-white p-6">
                <div>⭐⭐⭐⭐⭐</div>
                <h3 className="font-semibold text-xl ">Less Paperwork</h3>
                <p className=" text-center text-xl">
                  Previously, we had paper work for everything. Now, we have
                  none and twice the inbounds. Our use of the Pharmanager
                  software has proved to be a great decision.
                </p>
                <h6 className="font-semibold">RX Pharmacy - Oshodi</h6>
              </div>
              <div className="flex flex-col items-center gap-6 bg-white p-6">
                <div>⭐⭐⭐⭐⭐</div>
                <h3 className="font-semibold text-xl ">Would Recommend</h3>
                <p className=" text-center text-xl">
                  I can see several pharmacies that have the any medication or
                  supply that I am looking for from anywhere.
                </p>
                <h6 className="font-semibold">Mahmoud</h6>
              </div>
              <div className="flex flex-col items-center gap-6 bg-white p-6">
                <div>⭐⭐⭐⭐⭐</div>
                <h3 className="font-semibold text-xl ">Would Recommend</h3>
                <p className=" text-center text-xl">
                  Procurement management and business planning has always been a
                  worry. Pharmanager has helped with that worry with a
                  comprehensive software solution.
                </p>
                <h6 className="font-semibold">MedCare - Lekki</h6>
              </div>
            </div>
          </div>

          <div className="px-48 pt-32 flex items-center justify-around ">
            <div className="flex flex-col items-center gap-6 w-[33%]  pr-12">
              <img src="/images/mophbig.png" alt="" className="w-[200px]" />
              <p className="text-center text-lg w-[250px]">
                Official Partner with us
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 w-[33%] border-x pr-12 pl-12">
              <img src="/images/alphabig.png" alt="" className="w-[200px]" />
              <p className="text-center text-lg w-[250px]">
                One of the Fastest Growing Private Companies in Nigeria
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 w-[33%] pl-12">
              <img src="/images/greenbig.png" alt="" className="w-[250px] " />
              <p className="text-center text-lg w-[250px]">
                Featured as one of the best pharma
              </p>
            </div>
          </div>
        </section>
      </main>
    )
}

export default HomeMain
