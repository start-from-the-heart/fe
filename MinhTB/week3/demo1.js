// Lấy phần tử bằng ID
const title = document.getElementById("myTitle");

// Lấy phần tử bằng class
const items = document.getElementsByClassName("item");

// Lấy phần tử bằng tag name
const paragraphs = document.getElementsByTagName("p");

// Lấy phần tử bằng CSS selector
const firstItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");

const btn = document.getElementById("btn");
btn.onclick = function () {
  alert("Clicked! me 1");
};

// Sự kiện nhập liệu
document.getElementById("input").addEventListener("input", (e) => {
  console.log("Value:", e.target.value);
});

// Sự kiện di chuột
document.getElementById("box").addEventListener("mouseover", () => {
  console.log("Mouse is over the box");
});

const p = document.createElement("p");
p.textContent = "This is a new paragraph.";
document.body.appendChild(p);

const parent = document.getElementById("minh1");
const newEl = document.createElement("li");
newEl.textContent = "X";

const referenceEl = parent.children[0];
parent.insertBefore(newEl, referenceEl);
parent.appendChild(newEl); // Cuối
// parent.prepend(newEl);


// Sự kiện lan truyền (bubbling)
document.getElementById("parent").addEventListener("click", () => {
  alert("Parent clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
  // e.stopPropagation(); // Không cho sự kiện lan lên parent
  alert("Child clicked");
});

// Ngăn chặn sự kiện mặc định
document.getElementById("link").addEventListener("click", (e) => {
  e.preventDefault(); // Không cho chuyển sang Google
  alert("Bạn vừa bấm link nhưng không đi đâu cả!");
});
