import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/homePage/Home";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout();
  }, []);
  return (
    <>
      {loader ? (
        <div className="flex items-center justify-center h-screen">
          <div>
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <Home />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
