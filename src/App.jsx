import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Item1 from "../src/pages/Item1";
import Item2 from "../src/pages/Item2";
import Item3 from "../src/pages/Item3";
import Item4 from "../src/pages/Item4";
import Item5 from "../src/pages/Item5";
import Item6 from "../src/pages/Item6";
import Item7 from "../src/pages/Item7";
import Item8 from "../src/pages/Item8";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/item1" element={<Item1 />} />
        <Route path="/item2" element={<Item2 />} />
        <Route path="/item3" element={<Item3 />} />
        <Route path="/item4" element={<Item4 />} />
        <Route path="/item5" element={<Item5 />} />
        <Route path="/item6" element={<Item6 />} />
        <Route path="/item7" element={<Item7 />} />
        <Route path="/item8" element={<Item8 />} />
        <Route path="*/notFound" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
