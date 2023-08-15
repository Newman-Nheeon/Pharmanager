import { CiSearch } from "react-icons/ci";

function Header({title}) {
  return (
    <div className="pb-6">
      <h3 className="font-semibold text-3xl">{title}</h3>
      <div className="grid grid-cols-6 my-6">
        <div className="bg-[#DBDBDB] p-3 text-center border-r-2 border-gray-400 ">
          Category: <span>All</span>
        </div>
        <div className="bg-[#DBDBDB] p-3 text-center border-r-2 border-gray-400 ">
          Item Type: <span>All</span>
        </div>
        <div className="bg-[#DBDBDB] p-3 text-center border-r-2 border-gray-400 ">
          Location: <span>All</span>
        </div>
        <div className="bg-[#DBDBDB] p-3 text-center border-r-2 border-gray-400 ">
          Price Range: <span>All</span>
        </div>
        <div className="bg-[#DBDBDB] p-3 text-center col-span-2 relative ">
          <CiSearch
            className="absolute left-16 top-[50%] -translate-y-[50%] text-slate-500"
            size={20}
          />
          <input
            type="search"
            placeholder="Enter keywords"
            className="w-[80%] p-1 pl-12 focus:outline-none bg-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
