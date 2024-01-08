import Navbar from "./components/Navbar";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Latestmix from "./components/Latestmix";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Latestmix />
        <Comments />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
