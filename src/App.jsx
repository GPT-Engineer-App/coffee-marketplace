import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Subpage from "./pages/Subpage.jsx";
import Basket from "./pages/Basket.jsx";
import Navigation from "./components/Navigation.jsx";
import Survey from "./pages/Survey.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/subpage" element={<Subpage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
}

export default App;
