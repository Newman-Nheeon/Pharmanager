import { useEffect, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";

/**
 * Array of Objects
 * @param {array} options
 * {
 *  title,
 *  icon,
 *  to,
 *  onClick,
 * }
 * @param {object} prescription
 * @param {function} setPrescriptions
 * @param {array} prescriptions
 * @returns {jsx}
 */

export default function OptionButton({ options }) {
  const [open, setOpen] = useState(false);

  useEffect(function () {
    function callback(e) {
      if (e.code === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", callback);
    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, []);

  return (
    <div>
      <div className="relative ">
        <button className="focus:outline-none" onClick={() => setOpen(!open)}>
          <SlOptionsVertical />
        </button>

        {/* Dropdown */}
        <div
          className="absolute w-max -top-[10px] -left-[70px]  bg-red rounded-md py-3 shadow-md z-10 text-sm bg-white "
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          <ul>
            {options.map((option, index) => {
              return option.to ? (
                <Link to={option.to}>
                  <li
                    key={option.title + index * 2}
                    className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200  ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    {option.icon}

                    <span className="font-normal">{option.title}</span>
                  </li>
                </Link>
              ) : (
                <li
                  key={option.title + index}
                  className={`flex items-center gap-3 py-1 px-3 cursor-pointer hover:bg-gray-200  ${
                    open ? "block" : "hidden"
                  }`}
                >
                  {option.icon}

                  <span className="font-normal">{option.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
