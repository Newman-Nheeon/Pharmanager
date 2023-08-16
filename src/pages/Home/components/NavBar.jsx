import { BsDot } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import './NavBar.css'

function NavBar() {
    return (
        <nav className="bg-white shadow-md flex items-center pr-12 pl-6 font-Euclid">
        <div className="mr-24">
          <img
            src="/images/logoWhiteBg.png"
            alt="Logo"
            className="w-[80px] h-auto"
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <ul className="flex justify-between items-center gap-6 font-normal">
            <li className="relative">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="relative">
              <NavLink to="/for-drug-buyers">For drug buyers</NavLink>
            </li>
            <li className="relative">
              <NavLink to="/for-pharmacies">For pharmacies</NavLink>
            </li>
            <li className="relative">
              <NavLink to="/help">Help</NavLink>
            </li>
            <li className="relative">
              <NavLink to="/faqs">FAQs</NavLink>
            </li>
            <li className="relative">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>

          <div className="flex items-center  w-[500px]">
            <div className="flex items-center justify-between gap-1 border-r-2 pr-6">
              <img
                src="/images/livechatIcon.png"
                alt="live chat logo"
                className="w-10 h-auto"
              />
              <div className=""> 
                <h4 className="font-semibold font-lg pl-3 text-primaryCol">
                  Live Chat Now
                </h4>
                <p className="flex items-center text-base">
                  <span>
                    <BsDot size={26} className="text-green-500" />
                  </span>{" "}
                  Chat with an Expert
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-1 pl-6 ">
              <img
                src="/images/callIcon.png"
                alt="call icon"
                className="w-10 h-auto"
              />
              <div>
                <h4 className="font-semibold font-lg pl-3 text-primaryCol">
                  09087654321
                </h4>
                <p className="flex items-center text-base">
                  <span>
                    <BsDot size={26} className="text-green-500" />
                  </span>{" "}
                  Talk to an Expert
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

    )
}

export default NavBar
