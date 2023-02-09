const form = document.getElementById("create-task-form")
const descriptionField = document.getElementById("new-task-description")
const taskList = document.getElementById("tasks")

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const task = document.createElement("li")
  task.textContent = descriptionField.value
  taskList.append(task)
  e.target.reset()
})