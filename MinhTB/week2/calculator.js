const result = document.getElementById("result");

let currentInput = "";

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    const value = btn.textContent;

    if (!action) {
      currentInput += value;
    } else if (action === "clear") {
      currentInput = "";
    } else if (action === "delete") {
      currentInput = currentInput.slice(0, -1);
    } else if (action === "+/-") {
      if (currentInput) currentInput = String(parseFloat(currentInput) * -1);
    } else if (action === "=") {
      try {
        const res = eval(currentInput.replace(/÷/g, "/").replace(/×/g, "*"));
        currentInput = res.toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      currentInput += action;
    }
    result.textContent = currentInput || "0";
  });
});
