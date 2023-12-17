import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Contact } from "./pages/Contact";
import { PortfolioIndex } from "./pages/PortfolioIndex";
import { AboutIndex } from "./pages/AboutIndex";
import { Home } from "./pages/Home";
import { BarChart } from "./components/BarChart";
import { Profile } from "./pages/Profile";
import { Education } from "./components/Education";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutIndex />} >
            <Route index element={<Profile/>}/>
            <Route path="skill" element={<BarChart/>}/>
            <Route path="education" element={<Education/>}/>
          </Route>
          <Route path="portfolio" element={<PortfolioIndex />}>
       
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
