const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
  if (taskInput.value === "") {
    return;
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = taskInput.value;

  checkbox.addEventListener("change", function () {
    span.classList.toggle("done");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑";
  deleteButton.className = "delete";

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  taskList.appendChild(li);
  taskInput.value = "";
});
