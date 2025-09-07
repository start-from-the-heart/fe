import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoModalProps {
  onClose: () => void;
}

const TodoModal: React.FC<TodoModalProps> = ({ onClose }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  // Thêm hoặc sửa task
  const addOrEditTodo = () => {
    if (input.trim() === "") return;
    if (editId !== null) {
      // Chế độ edit
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else {
      // Thêm mới
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: input, completed: false },
      ]);
    }
    setInput("");
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle hoàn thành
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setInput(todo.text);
      setEditId(id);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-lg"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          Todo App
        </h2>

        {/* Input + Button */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập công việc..."
            className="flex-1 border p-2 rounded"
          />
          <button
            onClick={addOrEditTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded"
          >
            {editId !== null ? "Lưu" : "Thêm"}
          </button>
        </div>

        {/* Danh sách công việc */}
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded"
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer flex-1 ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {todo.completed ? "✅ " : "⬜ "} {todo.text}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => editTodo(todo.id)}
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  ✏
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  🗑
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoModal;
