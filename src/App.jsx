import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WikipageList from "./components/WikipageList";
import WikipageDetail from "./components/WikipageDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<WikipageList />}></Route>
          <Route path={"/wikipage/:id"} element={<WikipageDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
