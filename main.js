const main = document.getElementById("task-holder");
const btn = document.getElementById("btn");
const hs7s = document.getElementById("input");
const toastContainer = document.getElementById("toast-container");

function showToast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

btn.addEventListener("click", () => {
  const value = hs7s.value.trim();

  if (value !== "") {
    // 1. إنشاء الـ li كالعادة
    const newLi = document.createElement("li");
    newLi.classList.add("task-item");

    // 2. إنشاء عنصر نصي داخل الـ li عشان يشيل الكلام
    const taskText = document.createElement("span");
    taskText.textContent = value;
    newLi.appendChild(taskText);

    // 3. إنشاء زرار المسح (Delete Button)
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    newLi.appendChild(deleteBtn);

    // [ميزة 1]: لما يضغط على نص التاسك.. علم عليها إنها خلصت
    taskText.addEventListener("click", () => {
      taskText.classList.toggle("completed");
    });

    // [ميزة 2]: لما يضغط على زرار الـ ❌.. امسح التاسك خالص مع تأثير خفيف
    deleteBtn.addEventListener("click", () => {
      newLi.style.opacity = "0";
      newLi.style.transform = "scale(0.8)";
      setTimeout(() => {
        newLi.remove();
      }, 300); // بيمسحها بعد ما تأثير الاختفاء يخلص
    });

    // إضافة الـ li كاملة للموقع
    main.appendChild(newLi);
  } else {
    showToast(" عذراً، لا يمكنك إضافة مهمة فارغة!");
  }

  hs7s.value = "";
});
