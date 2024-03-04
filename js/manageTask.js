document.addEventListener("DOMContentLoaded", () => {
  const MY_TASKS = new Task();
  const EXISTING_TASKS = MY_TASKS.getTask();

  const TASK_WRAPPER_EMPTY = document.getElementById("taskWrapperEmpty");
  const TASK_WRAPPER = document.getElementById("taskWrapper");

  let content = "";

  if (EXISTING_TASKS.length != 0) {
    TASK_WRAPPER_EMPTY.classList.add("hidden");
    EXISTING_TASKS.forEach((task) => {
      content += templateTasks(task);
      TASK_WRAPPER.innerHTML = content;
    });
  }

  var btnDeleteTasks = document.querySelectorAll("#btnDeleteTask");
  btnDeleteTasks.forEach((btnDeleteTask) => {
    btnDeleteTask.addEventListener("click", (e) => {
      const PARENT = e.target.parentElement.parentElement;
      const ID = PARENT.getAttribute("id");

      MY_TASKS.deleteTask(ID);
      window.location.reload();
    });
  });

  var btnCompleteTasks = document.querySelectorAll("#btnCompleteTask");
  btnCompleteTasks.forEach((btnCompleteTask) => {
    btnCompleteTask.addEventListener("click", (e) => {
      const PARENT = e.target.parentElement.parentElement;
      const ID = PARENT.getAttribute("id");

      MY_TASKS.completeTask(ID);
      window.location.reload();
    });
  });

  function templateTasks(task) {
    const CAPITALIZE_FIRST_LETTER = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return `<div class="flex justify-between bg-white p-5 w-full rounded-3xl" id="${
      task.id
    }">
                <div class="task-card flex flex-col gap-5">
                    <div class="flex gap-3 items-center">
                        <div
                            class="w-[50px] h-[50px] flex shrink-0 items-center justify-center bg-[#BDEBFF] rounded-full">
                            <img src="img/icons/ghost.svg" alt="icon">
                        </div>
                        <div class="flex flex-col">
                            <p class="font-bold text-lg leading-[27px]" ${
                              task.isCompleted === false
                                ? ""
                                : 'style="text-decoration: line-through; color: gray;"'
                            }>${CAPITALIZE_FIRST_LETTER(task.taskName)}</p>
                            <p class="text-sm leading-[21px] text-taskia-grey">Created at ${task.created_at
                              .split("-")
                              .join(" ")}</p>
                        </div>
                    </div>
                    <div class="flex gap-4 font-semibold text-sm leading-[21px]">
                        <div class="flex gap-1 items-center">
                            <div class="flex shrink-0 w-5 h-5">
                                <img src="img/icons/layer.svg" alt="icon">
                            </div>
                            <p>${task.taskPriority}</p>
                        </div>
                        
                        ${
                          task.isCompleted === false
                            ? `<div class="flex gap-1 items-center">
                              <div class="flex shrink-0 w-5 h-5">
                                <svg
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.29163 2.16663V18.8333"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M4.29163 3.83337H13.625C15.875 3.83337 16.375 5.08337 14.7916 6.66671L13.7916 7.66671C13.125 8.33337 13.125 9.41671 13.7916 10L14.7916 11C16.375 12.5834 15.7916 13.8334 13.625 13.8334H4.29163"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                              <p>In Progress</p>
                            </div>`
                            : `<div class="flex gap-1 items-center text-taskia-green">
                              <div class="flex shrink-0 w-5 h-5">
                                <svg
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.29163 2.16663V18.8333"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M4.29163 3.83337H13.625C15.875 3.83337 16.375 5.08337 14.7916 6.66671L13.7916 7.66671C13.125 8.33337 13.125 9.41671 13.7916 10L14.7916 11C16.375 12.5834 15.7916 13.8334 13.625 13.8334H4.29163"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                              <p>Completed</p>
                            </div>`
                        }

                    </div>
                </div>
                <div class="flex flex-row items-center gap-x-3">
                    <button type="button" id="btnDeleteTask"
                        class="my-auto font-semibold text-taskia-red border border-taskia-red p-[12px_20px] h-12 rounded-full">Delete</button>
                    
                        ${
                          task.isCompleted === false
                            ? `<button type="button" id="btnCompleteTask"
                        class="flex gap-[10px] justify-center items-center text-white p-[12px_20px] h-12 font-semibold bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full w-full border border-taskia-background-grey">Complete</button>`
                            : `<button type="button" id="btnCompleteTask"
                        class="flex gap-[10px] justify-center items-center text-black p-[12px_20px] h-12 font-semibold rounded-full w-full border border-black">Incomplete</button>`
                        }
                </div>
            </div>`;
  }
});
