import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
