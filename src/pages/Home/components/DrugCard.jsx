import { TbCurrencyNaira } from "react-icons/tb";

function DrugCard({setDisplay}) {
    function handleDrugClick (){
        setDisplay('drug details')
    }
  return (
    <div className="flex border-2 " onClick={handleDrugClick}>
      <div className="w-[350px]">
        <img src="/images/drugImage.png" alt="" className="" />
      </div>
      <div className="flex flex-col gap-5 p-12 py-6 text-lg w-full">
        <h4 className="font-semibold text-2xl">Penicillin Ointment</h4>
        <p className="text-lg">RX Pharmacy, Oshodi</p>
        <p className="font-semibold">200mg l 1 Tube l 2 drops per use</p>
        <p>
          Penicillin is used to treat and prevent minor skin infections caused
          by small cuts or burns.
        </p>
        <div className="flex items-center justify-between  font-semibold relative">
          <p className="flex justify-evenly items-center text-formBlue text-lg"><span><TbCurrencyNaira size={25}/></span>1000</p>
          <p className="text-lg">Available</p>
        </div>
      </div>
    </div>
  );
}

export default DrugCard;
