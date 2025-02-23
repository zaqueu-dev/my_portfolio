import {Route, BrowserRouter, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  )
}

export default App
