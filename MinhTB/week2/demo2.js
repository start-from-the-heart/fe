const onSearch = () => {
  const searchValue = document.querySelector("#search").value.toUpperCase();
  const listItems = document.querySelectorAll("#list li");

  listItems.forEach((item) => {
    const itemText = item.textContent.toUpperCase();
    item.style.display = itemText.includes(searchValue) ? "" : "none";
  });
};

var name = "Minh"; // ít dùng (có lỗi về phạm vi)
let age = 25; // dùng khi giá trị sẽ thay đổi
const PI = 3.14; // dùng khi giá trị cố định
function sayHello() {
  console.log("Xin chào " + age);
}
sayHello();

for (let i = 1; i <= 5; i++) {
  console.log("Lần thứ " + i);
}

let n = 1;
while (n <= 3) {
  console.log("Hello " + n);
  n++;
}

let fruits = ["Táo", "Cam", "Xoài"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

fruits.push("Nho"); 
// thêm cuối
// fruits.unshift("Dâu"); 
// thêm đầu

// fruits.pop(); 
// xóa cuối
fruits.shift(); 
// xóa đầu

fruits.forEach(function (fruit) {
  console.log(fruit);
});
