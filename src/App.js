import { NavBar } from "./pages/NavBar";
import  HeroImage from "./pages/HeroImage"
import HeroText from "./pages/HeroText";
import NFTItems from "./pages/NFTItems";
import GhostToken from "./pages/GhostToken";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroImage/>
      <HeroText/>
      <NFTItems/>
      <GhostToken/>
    </div>
  );
}

export default App;
