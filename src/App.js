import { NavBar } from "./pages/NavBar";
import  HeroImage from "./pages/HeroImage"
import HeroText from "./pages/HeroText";
import NFTItems from "./pages/NFTItems";
import GhostToken from "./pages/GhostToken";
import GetNFT from "./pages/GetNFT";
import Connect from "./pages/Connect";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroImage/>
      <HeroText/>
      <NFTItems/>
      <GhostToken/>
      <GetNFT/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
