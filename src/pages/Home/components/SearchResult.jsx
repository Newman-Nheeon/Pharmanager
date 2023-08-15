import { useState, useEffect } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import DrugCard from "./DrugCard";
import Header from "./Header";

const testResult = Array.from({ length: 31 }, () => "water");
const numOfPages = Math.ceil(testResult.length / 10);
console.log(numOfPages);
const pagesArr = Array.from({ length: numOfPages }, () => "");
console.log(pagesArr);

const resultPageOne = testResult.slice(0, 10);
// console.log(testResult.slice(0, 10));
// console.log(testResult.slice(10, 10));
function SearchResult({ setDisplay }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayResult, setDisplayResult] = useState(resultPageOne);

  console.log(testResult);

  function handlePageChange(index) {
    function changePage() {
      setCurrentPage(index + 1);
    }
    changePage();
    
    const resultPerPage = 10
    const resultStartingIndex = (currentPage - 1) * resultPerPage;
    const resultEndIndex = resultStartingIndex + resultPerPage
    const newPage = testResult.slice(resultStartingIndex, resultEndIndex);
    setDisplayResult( () => newPage);
}
useEffect(()=> {
    
},[displayResult])
console.log('current page' ,currentPage);
console.log('display result' ,displayResult);
  
  return (
    <section className="font-Euclid px-48 py-32">
      <Header title={"Search Result"} />

      {displayResult.map((result) => (
        <DrugCard setDisplay={setDisplay} />
      ))}

      <div className="flex gap-3 items-end justify-end pt-12">
        <p className="pr-16">pages</p>
        <div className="flex flex-col gap-3 items-center">
          <p className="text-xs">Previous</p>
          <button className=" rounded-md bg-gray-400 py-2 px-3 text-white hover:bg-formBlue w-12 text-center">
            <BsCaretLeftFill />
          </button>
        </div>
        {pagesArr.map((page, index) => (
          <button onClick={() => handlePageChange(index)} className="p-1">{index + 1}</button>
        ))}

        <div className="flex flex-col gap-3 items-center">
          <p className="text-xs">Next</p>
          <button className=" rounded-md bg-gray-400 py-2 px-3 text-white hover:bg-formBlue w-12 text-center">
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
