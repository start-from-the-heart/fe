import React from "react";
import About from "./pages/About";
import LanguageSelector from "./pages/LanguageSelector";
import ThemeSelector from "./pages/ThemeSelector";

function App() {
  return (
    <div className="font-sans text-xs max-w-4xl mx-auto p-4">
      <div className="flex justify-end items-center gap-4 mb-4">
        <LanguageSelector />
        <ThemeSelector />
      </div>
      <About />
    </div>
  );
}

export default App;
