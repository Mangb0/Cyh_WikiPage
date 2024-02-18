import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WikipageList from "./components/WikipageList";
import WikipageDetail from "./components/WikipageDetail";
import ReactModal from "react-modal";
import Home from "./components/Home";

ReactModal.setAppElement("#root");

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/wikipage/:id"} element={<WikipageDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
