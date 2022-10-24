import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import GameBill from "./components/Gamebill/GameBill";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div id="main-content" >
        <div className="main_container">
          <div className="main_left">
            <Sidebar />
          </div>
          <div className="main_right">
            <MainContent />
            <GameBill />
            <Footer />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
