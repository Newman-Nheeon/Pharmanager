import { BsCheck2Circle } from "react-icons/bs";
import { GoInfo } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";

/**
 * Variables here are props for the OptionButton component in the PrescriptionTableRow Component
 *
 */

export const availableOptions = [
  {
    title: "Quote",
    icon: <BsCheck2Circle className="text-green-500" size={20} />,
    to: "/account/inbounds/prescriptions/create-quote",
  },
  {
    title: "View Details",
    icon: <GoInfo size={20} />,
    to: "/account/inbounds/prescriptions/prescription-details",
  },
];

export const acceptedPendingOptions = [
  {
    title: "Dispense Order",
    icon: <BsCheck2Circle className="text-green-500" size={20} />,
    to: "/account/inbounds/create-receipt",
  },
  {
    title: "Delete Order",
    icon: <MdOutlineCancel className="text-red-500" size={20} />,
    onClick: "",
  },
  {
    title: "View Details",
    icon: <GoInfo size={20} />,
    to: "account/inbounds/prescriptions",
  },
];

export const accepteddispensedOptions = [
  {
    title: "Delete Order",
    icon: <MdOutlineCancel className="text-red-500" size={20} />,
    onClick: "",
  },
  {
    title: "View Details",
    icon: <GoInfo size={20} />,
    to: "account/inbounds/prescriptions",
  },
];
