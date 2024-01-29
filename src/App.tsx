import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "pages/main/Main";
import { Suspense, lazy } from "react";

const ProjectDetail = lazy(() => import("components/contents/ProjectDetail"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/project/:projectId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectDetail />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
