import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "pages/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
