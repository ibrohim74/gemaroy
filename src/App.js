import {BrowserRouter , Routes, Route} from "react-router-dom";
import Index from "./page";
import Success from "./page/success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Index/>}/>
        <Route path={'/success'} element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
