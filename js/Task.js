class Task {
  constructor() {
    this.tasks = this.getTask() || [];
  }

  saveTask(taskData) {
    try {
      const newTaskData = {
        id: Date.now(),
        isCompleted: false,
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
}
