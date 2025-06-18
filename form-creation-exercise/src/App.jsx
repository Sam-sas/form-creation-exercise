import { Route, Routes } from "react-router";
import BandSelection from "./pages/BandSelection";
import Checkout from "./pages/Checkout";
import NavigationLink from "./components/NavigationLink";

function App() {
  return (
    <div className="App h-screen flex flex-col-reverse sm:flex-col bg-light-blue font-display">
      <nav className="p-2 flex items-center justify-center bg-white">
       <NavigationLink linkName="Bands" linkUrl="/" />
      </nav>
      <main className="pt-8 md:pt-2 overflow-auto pb-12 md:pb-[0px] md:pt-8">
        <Routes>
          <Route path="/" element={<BandSelection />} />
          <Route path="/checkout/:bandId" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
