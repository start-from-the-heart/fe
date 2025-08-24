import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import profileImg from "../assets/images/my-image.jpg";
import CalculatorModal from "./CalculatorModal";
import TodoModal from "./TodoModal";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [showCalculator, setShowCalculator] = useState(false);
  const [showTodo, setShowTodo] = useState(false);

  return (
    <section className="p-6 overflow-y-auto max-h-[600px] border rounded-md shadow-md bg-white dark:bg-gray-900">
      {/* Personal Info */}
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">{t("name")} Lê Hoàng Anh</h1>
          <p className="text-sm">🏠 Phú Diễn, Hà Nội</p>
          <p className="text-sm">👤 Nam</p>
          <p className="text-sm">📞 0123 456 789</p>
          <p className="text-sm">✉️ lehoanganh.1203@gmail.com</p>
          <p className="text-sm">🎓 Đại học FPT Hà Nội</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img
            src={profileImg}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-md border border-gray-300 dark:border-gray-700"
          />
          <button
            type="button"
            onClick={() => setShowCalculator(true)}
            className="text-white bg-blue-700 font-medium rounded-full text-sm px-5 py-2"
          >
            {t("calculator")}
          </button>

          <button
            type="button"
            onClick={() => setShowTodo(true)}
            className="text-white bg-green-700 font-medium rounded-full text-sm px-5 py-2"
          >
            {t("to-do-app")}
          </button>

          <button
            onClick={() => navigate("/pokemon")}
            className="mt-4 bg-yellow-500 font-medium rounded-full text-sm px-5 py-2"
          >
            Pokemon
          </button>
        </div>
      </div>

      {showCalculator && (
        <CalculatorModal onClose={() => setShowCalculator(false)} />
      )}

      {showTodo && <TodoModal onClose={() => setShowTodo(false)} />}

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">💻 Kỹ năng</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>React, TypeScript, JavaScript</li>
          <li>HTML, SCSS, TailwindCSS</li>
          <li>Gitlab, Github</li>
        </ul>
      </div>

      {/* Work Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🏢 Kinh nghiệm làm việc</h2>
        <table className="w-full text-sm text-left border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="border px-4 py-2">Công ty</th>
              <th className="border px-4 py-2">Vị trí</th>
              <th className="border px-4 py-2">Thời gian</th>
              <th className="border px-4 py-2">Công việc</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-900">
              <td className="border px-4 py-2 font-semibold">ABC</td>
              <td className="border px-4 py-2">Frontend Developer</td>
              <td className="border px-4 py-2">2021 - 2023</td>
              <td className="border px-4 py-2">
                Phát triển giao diện, hệ thống dashboard quản lý nội bộ
              </td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border px-4 py-2 font-semibold">XYZ</td>
              <td className="border px-4 py-2">Frontend Developer</td>
              <td className="border px-4 py-2">2023 - 2025</td>
              <td className="border px-4 py-2">
                Thiết kế giao diện người dùng, xây dựng module hiển thị dữ liệu
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Interests */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">🎯 Sở thích</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Nghe nhạc</li>
          <li>Bóng đá </li>
          <li>Đọc sách</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="flex space-x-4 mt-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default About;
