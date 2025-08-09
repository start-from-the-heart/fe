// src/components/CalculatorModal.tsx
import React, { useState } from "react";

interface CalculatorModalProps {
  onClose: () => void;
}

const CalculatorModal: React.FC<CalculatorModalProps> = ({ onClose }) => {
  const [num1, setNum1] = useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");
  const [result, setResult] = useState<number | null>(null);

  const operators = [
    { symbol: "+", color: "bg-green-600 hover:bg-green-700" },
    { symbol: "-", color: "bg-red-600 hover:bg-red-700" },
    { symbol: "*", color: "bg-yellow-600 hover:bg-yellow-700" },
    { symbol: "/", color: "bg-purple-600 hover:bg-purple-700" },
  ];

  const handleCalc = (op: string) => {
    const a = parseFloat(num1.toString());
    const b = parseFloat(num2.toString());
    if (isNaN(a) || isNaN(b)) return;

    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : NaN);
        break;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-[300px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-lg"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Mini Calculator
        </h2>
        <div className="flex flex-col gap-3">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="border p-2 rounded"
            placeholder="Input 1"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="border p-2 rounded"
            placeholder="Input 2"
          />
          <div className="flex justify-between">
            {operators.map(({ symbol, color }) => (
              <button
                key={symbol}
                onClick={() => handleCalc(symbol)}
                className={`${color} text-white px-3 py-1 rounded`}
              >
                {symbol}
              </button>
            ))}
          </div>
          {result !== null && (
            <div className="text-center text-lg font-semibold text-green-600 dark:text-green-400">
              Kết quả: {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorModal;
