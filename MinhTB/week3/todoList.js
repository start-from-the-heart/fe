const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  renderTasks();

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  const listItem = document.createElement("li");
  listItem.innerHTML = `<h3>${taskText}</h3><button class="deleteBtn">Delete</button>`;
  taskList.appendChild(listItem);
  taskInput.value = "";

  const listTask = document.getElementById("taskList");
  listTask.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
      event.target.parentElement.remove();
    }
  });
});

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="${task.completed ? "completed" : ""}">${task.text}</span>
        <div>
          <button class="completeBtn">✔</button>
          <button class="deleteBtn">X</button>
        </div>
      `;
      li.dataset.index = index; // lưu index để tiện xử lý
      taskList.appendChild(li);
    });
  }

// Hàm lưu dữ liệu
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Thêm công việc mới
  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();

    taskInput.value = "";
  });

  // Xử lý click (Event Delegation)
  taskList.addEventListener("click", (e) => {
    const index = e.target.closest("li").dataset.index;
    
    if (e.target.classList.contains("deleteBtn")) {
      // Xóa công việc
      tasks.splice(index, 1);
    } else if (e.target.classList.contains("completeBtn")) {
      // Đánh dấu hoàn thành
      tasks[index].completed = !tasks[index].completed;
    }

    saveTasks();
    renderTasks();
  });