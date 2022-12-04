import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { Experience } from "./pages/Experience"
import { None } from "./pages/None"

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="*" element={<None />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;