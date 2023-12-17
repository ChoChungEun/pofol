import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "pages/main/Main";
import ProjectDetail from "components/contents/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
