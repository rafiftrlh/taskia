class Task {
  constructor() {
    this.tasks = this.getTask() || [];
  }

  saveTask(taskData) {
    try {
      const newTaskData = {
        id: Date.now(),
        isCompleted: false,
        created_at: new Date().toISOString().split("T")[0], // Format: "yyyy-mm-dd"
        ...taskData,
      };

      this.tasks.push(newTaskData);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));

      return {
        success: true,
        message: `Task ${newTaskData.taskName}(${newTaskData.taskPriority}) berhasil di tambahkan`,
      };
    } catch (error) {
      return {
        success: false,
        message: `Task ${newTaskData.taskName}(${newTaskData.taskPriority}) gagal di tambahkan`,
      };
    }
  }

  getTask() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  completeTask(taskId) {
    const findTask = this.tasks.find((task) => task.id == taskId);

    if (findTask != null && findTask.isCompleted == false) {
      findTask.isCompleted = true;
      this.updateLocalStorage();
    } else if (findTask != null && findTask.isCompleted == true) {
      findTask.isCompleted = false;
      this.updateLocalStorage();
    }
  }

  deleteTask(taskId) {
    const findTaskIndex = this.tasks.findIndex((task) => task.id == taskId);

    console.log(findTaskIndex);
    console.log(this.tasks[findTaskIndex]);

    if (findTaskIndex != -1) {
      // Menggunakan splice untuk menghapus task dari array berdasarkan indeks
      this.tasks.splice(findTaskIndex, 1);
      console.log(this.tasks);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
