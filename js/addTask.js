// Penghubung ui dan model

document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskManager = new Task();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let taskName = document.getElementById("taskName");
    let taskPriority = document.getElementById("taskPriority");

    const taskData = {
      taskName: taskName.value,
      taskPriority: taskPriority.value,
    };

    const result = taskManager.saveTask(taskData);

    if (result.success) {
      taskName.value = "";
      taskPriority.selectedIndex = 0;

      alert(result.message);
      // return (window.location.href = "/signin.html");
    } else {
      alert(result.message);
    }
  });
});
