import { useState } from 'react'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeMain from "./components/HomeMain";
import SearchResult from './components/SearchResult';
import DrugDetails from './components/DrugDetails';
import BuyNow from './components/BuyNow';
function Home() {
  const [display, setDisplay] = useState('home')


  return (
    <>
      <NavBar />

    
     {display === 'home' && <HomeMain setDisplay={setDisplay} />}
      {display === 'search result' && <SearchResult setDisplay={setDisplay} />}
      {display === 'drug details' &&  <DrugDetails setDisplay={setDisplay} />}
      {display === 'buy now' &&  <BuyNow />}

      <Footer />
    </>
  );
}

export default Home;
