import React from "react";
import LanguageSelector from "./pages/LanguageSelector";
import ThemeSelector from "./pages/ThemeSelector";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./router/router";

function App() {
  return (
    <div className="font-sans text-xs max-w-4xl mx-auto p-4">
      <div className="flex justify-end items-center gap-4 mb-4">
        <LanguageSelector />
        <ThemeSelector />
      </div>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
