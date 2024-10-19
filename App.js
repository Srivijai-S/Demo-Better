import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./Aboutus";
import Contact from "./Mortage";
import StartPage from "./StartPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<About />} />
          <Route path="mortgage" element={<Contact />} />
          <Route path="StartPage" element={<StartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
