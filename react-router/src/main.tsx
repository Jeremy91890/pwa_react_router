import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Hi from "./pages/hi/[name]";
import Images from "./pages/Images";
import { ImagesFromPublic } from "./pages/ImagesFromPublic";

createRoot(document.getElementById("app")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/images" element={<Images />} />
        <Route path="/public" element={<ImagesFromPublic />} />
        <Route path="/hi">
          <Route path=":name" element={<Hi />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
