import { Link} from "react-router-dom";
import useImageZoom from "./hook/useImageZoom,";
import Header from "./components/Header";

function PrescriptionDetails() {
 
 
  
  
  const [zoomStyles, handlers] = useImageZoom()

    return (
    <>
    <Header title={'Prescriptions'} subtitle={'view prescriptions'} linkTo={'/inbounds/prescriptions/prescriptions-manager'} />
    <section className="w-full border-2 border-[#009fe3]  py-6 px-12">
      <div className="flex">
        <div className="w-[60%] mt-20">
          <img src="/images/prescriptionDetails.png"  alt="prescription details"
          onClick={handlers.resetZoom}
          style={{...zoomStyles}}
          />
        </div>
        <div className="relative w-[40%]">
         { <Link to={'/account/inbounds/prescriptions/create-quote'}>
         <p className="p-2 bg-[#009fe3] text-white w-[200px] rounded-md text-center absolute right-0 cursor-pointer">
            Quote Prescription 
          </p>
         </Link>}
          <div className="flex items-center gap-3 absolute top-[100px] right-0">
            <p>
              zoom size: <span>40%</span>
            </p>
            <button onClick={handlers.zoomOut} className="w-8 text-center bg-[#009fe3] text-white rounded-md">
              -
            </button>
            <button onClick={handlers.zoomIn} className="w-8 text-center bg-[#009fe3] text-white rounded-md">
              +
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default PrescriptionDetails;
