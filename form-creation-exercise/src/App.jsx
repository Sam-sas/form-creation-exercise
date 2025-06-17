import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import { Route, Routes } from "react-router";
import BandSelection from "./pages/BandSelection";
import Checkout from "./pages/Checkout";
import ThoughtProcess from "./pages/ThoughtProcess";
import NavigationLink from "./components/NavigationLink";

function App() {
  const bands = [skaBand, kpopBand, punkBand];
  return (
    <div className="App h-screen flex flex-col-reverse sm:flex-col bg-light-blue font-display">
      <nav className="p-2 flex items-center justify-center bg-white">
       <NavigationLink linkName="Bands" linkUrl="/" />
       <NavigationLink linkName="Process" linkUrl="/process" />
      </nav>
      <main className="pt-8 md:pt-2 overflow-auto pb-12 md:pb-[0px] md:pt-8">
        <Routes>
          <Route path="/" element={<BandSelection />} />
          <Route path="/checkout/:bandId" element={<Checkout />} />
          <Route path="/process" element={<ThoughtProcess />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
