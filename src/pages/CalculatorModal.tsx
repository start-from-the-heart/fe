import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface CalculatorModalProps {
  onClose: () => void;
}

const CalculatorModal: React.FC<CalculatorModalProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const [display, setDisplay] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  const numberButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  const operatorButtons = ["+", "-", "*", "/"];

  //cộng chuỗi khi nhập số để hiển thị
  const handleNumberClick = (num: string) => {
    setDisplay((prev) => prev + num);
  };

  //cộng chuỗi khi nhập toán tử để hiển thị
  const handleOperatorClick = (op: string) => {
    setDisplay((prev) => prev + ` ${op} `);
  };

  const handleClear = () => {
    setDisplay("");
  };

const handleEquals = () => {
  try {
    // eslint-disable-next-line no-new-func
    const result = Function(`"use strict"; return (${display})`)();

    if (typeof result === "number" && !isNaN(result) && isFinite(result)) {
      setHistory((prev) => [...prev, `${display} = ${result}`]);
      setDisplay(result.toString());
    } else {
      setDisplay("Không hợp lệ");
    }
  } catch {
    setDisplay("Không hợp lệ");
  }
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-[350px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-lg"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          {t("calculator")}
        </h2>

        {/* Display */}
        <div className="border p-2 mb-3 rounded text-right font-mono bg-gray-100 dark:bg-gray-700 text-lg">
          {display || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {numberButtons.map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="bg-red-400 hover:bg-red-500 text-white p-2 rounded"
          >
            C
          </button>
        </div>

        {/* Operators */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {operatorButtons.map((op) => (
            <button
              key={op}
              onClick={() => handleOperatorClick(op)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
            >
              {op}
            </button>
          ))}
          <button
            onClick={handleEquals}
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded col-span-4"
          >
            =
          </button>
        </div>

        {/* History */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
            Lịch sử tính toán
          </h3>
          <ul className="text-xs bg-gray-50 dark:bg-gray-900 p-2 rounded h-20 overflow-y-auto">
            {history.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalculatorModal;
