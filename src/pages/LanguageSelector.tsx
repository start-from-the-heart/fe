import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    i18n.language === "vi" ? "VN" : "EN"
  );

  const changeLanguage = (lng: "en" | "vi") => {
    i18n.changeLanguage(lng);
    setSelected(lng.toUpperCase());
    setIsOpen(false);
  };

  return (
    <div className="language-selector-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-selector-button"
      >
        🌐 {selected} ▼
      </button>

      {isOpen && (
        <div className="language-dropdown">
          <button
            onClick={() => changeLanguage("en")}
            className="language-option"
          >
            Tiếng Anh
          </button>
          <button
            onClick={() => changeLanguage("vi")}
            className="language-option"
          >
            Tiếng Việt
          </button>
        </div>
      )}

      {/* Inline style CSS */}
      <style>
        {`
          .language-selector-container {
            position: relative;
            display: inline-block;
            z-index: 50;
          }

          .language-selector-button {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 8px 16px;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            background-color: var(--primary-25);
            color: #374151;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }

          .language-selector-button:hover {
            background-color: var(--primary-25);
          }

          .language-dropdown {
            position: absolute;
            top: 110%;
            right: 0;
            min-width: 160px;
            background-color: var(--primary-25);
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            padding: 4px 0;
          }

          .language-option {
            display: block;
            width: 100%;
            padding: 10px 16px;
            background-color: transparent;
            border: none;
            text-align: left;
            font-size: 14px;
            color: #374151;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }

          .language-option:hover {
            background-color: var(--primary-500);
          }
        `}
      </style>
    </div>
  );
};

export default LanguageSelector;
