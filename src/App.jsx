import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
