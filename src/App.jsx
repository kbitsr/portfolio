import { useMediaQuery } from "react-responsive";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Contact } from "./pages/Contact";
import { PortfolioIndex } from "./pages/PortfolioIndex";
import { AboutIndex } from "./pages/AboutIndex";
import { Home } from "./pages/Home";
import { BarChart } from "./components/BarChart";
import { Profile } from "./pages/Profile";
import { Education } from "./components/Education";
import { PolarChart } from "./components/PolarChart";


function App() {

  const isDesktop=useMediaQuery({query:'(min-width:1224px)'})

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutIndex />} >
            <Route index element={<Profile/>}/>
            <Route path="skill" element={isDesktop?<BarChart/>:<PolarChart/>}/>
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
