import { Route, Routes } from "react-router-dom";

import Footer from "./components/Layout/Footer";
import Home from "./pages/Home/Home";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
