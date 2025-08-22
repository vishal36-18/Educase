import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/firstpage.js";
import SecondPage from "./pages/SecondPage.js";
import ThirdPage from "./pages/ThirdPage.js";
import FourthPage from "./pages/FourthPage.js";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/Login" element={<SecondPage />}></Route>
          <Route path="/Signup" element={<ThirdPage />}></Route>
          <Route path="/Profile" element={<FourthPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
