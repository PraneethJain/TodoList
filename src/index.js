import { loadProjects, saveProjects } from "./logic";
import "./style.css";

let container = document.querySelector("#container");
let allProjects = loadProjects();
let currentProjects = allProjects;

const createTitle = () => {
  let title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "To Do";

  return title;
};

const updateTaskList = () => {
  let content = document.querySelector(".content");
  let oldTaskList = document.querySelector(".tasks");
  let newTaskList = createTaskList();
  content.replaceChild(newTaskList, oldTaskList);
};

const createSidebar = () => {
  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  let sidebarHeader = document.createElement("h3");
  sidebarHeader.textContent = "Lists";
  sidebar.appendChild(sidebarHeader);

  let projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");
  let allProjectsButton = document.createElement("button");
  allProjectsButton.textContent = "All";
  allProjectsButton.onclick = () => {
    document.querySelectorAll(".projects > button").forEach((button) => {
      button.classList.remove("selected");
    });
    allProjectsButton.classList.add("selected");
    let content = document.querySelector(".content");
    let oldTaskList = document.querySelector(".tasks");
    currentProjects = allProjects;
    let newTaskList = createTaskList();
    content.replaceChild(newTaskList, oldTaskList);
  };
  allProjectsButton.classList.add("selected");
  projectsDiv.appendChild(allProjectsButton);

  currentProjects.forEach((project) => {
    let projectButton = document.createElement("button");
    projectButton.textContent = project.name;
    projectButton.onclick = () => {
      document.querySelectorAll(".projects > button").forEach((button) => {
        button.classList.remove("selected");
      });
      projectButton.classList.add("selected");
      currentProjects = [project];
      updateTaskList();
    };
    projectsDiv.appendChild(projectButton);
  });
  sidebar.appendChild(projectsDiv);

  return sidebar;
};

const createTask = (task) => {
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  let row1 = document.createElement("div");
  let row2 = document.createElement("div");
  row1.classList.add("row1");
  row2.classList.add("row2");

  let checkboxLabel = document.createElement("label");
  let transitionDiv = document.createElement("div");
  let taskCheckbox = document.createElement("input");
  let taskTitleDiv = document.createElement("div");
  let taskDescriptionDiv = document.createElement("div");
  let taskDueDateDiv = document.createElement("div");

  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;
  if (task.isCompleted) {
    taskDiv.classList.add("done");
  } else {
    taskDiv.classList.remove("done");
  }
  taskCheckbox.onchange = () => {
    task.isCompleted = taskCheckbox.checked;
    if (task.isCompleted) {
      taskDiv.classList.add("done");
    } else {
      taskDiv.classList.remove("done");
    }
  };

  transitionDiv.classList.add("transition");
  checkboxLabel.classList.add("checkBox");
  taskTitleDiv.classList.add("taskTitle");
  taskDescriptionDiv.classList.add("taskDescription");
  taskDueDateDiv.classList.add("taskDueDate");

  taskTitleDiv.textContent = task.title;
  taskDescriptionDiv.textContent = task.description;
  taskDueDateDiv.textContent = task.dueDate.toDateString();

  checkboxLabel.appendChild(taskCheckbox);
  checkboxLabel.appendChild(transitionDiv);

  row1.appendChild(checkboxLabel);
  row1.appendChild(taskTitleDiv);
  row1.appendChild(taskDueDateDiv);
  row2.appendChild(taskDescriptionDiv);

  taskDiv.appendChild(row1);
  taskDiv.appendChild(row2);

  taskDiv.onclick = (e) => {
    if (
      e.target.classList.contains("checkBox") ||
      e.target.classList.contains("transition") ||
      e.target.type === "checkbox"
    ) {
      return;
    }
    taskDiv.classList.toggle("clicked");
  };

  return taskDiv;
};

const createTaskList = () => {
  let tasksDiv = document.createElement("div");
  tasksDiv.classList.add("tasks");
  currentProjects.forEach((project) => {
    for (let task of project.tasks()) {
      tasksDiv.appendChild(createTask(task));
    }
  });

  return tasksDiv;
};

const createOperationButtons = () => {
  let operationButtons = document.createElement("div");
  let newTaskButton = document.createElement("button");
  let clearCompletedTasksButton = document.createElement("button");
  let clearAllButton = document.createElement("button");

  operationButtons.classList.add("operationButtons");
  newTaskButton.classList.add("operationButton");
  clearCompletedTasksButton.classList.add("operationButton");
  clearAllButton.classList.add("operationButton");

  newTaskButton.textContent = "New Task";
  clearCompletedTasksButton.textContent = "Clear Completed";
  clearAllButton.textContent = "Clear All";

  newTaskButton.onclick = () => {
    let modal = document.querySelector("dialog");
    modal.showModal();
  };

  clearCompletedTasksButton.onclick = () => {
    currentProjects.forEach((project) => {
      project.clearCompleted();
    });
    updateTaskList();
  };

  clearAllButton.onclick = () => {
    currentProjects.forEach((project) => {
      project.clearAll();
    });
    updateTaskList();
  };

  operationButtons.appendChild(newTaskButton);
  operationButtons.appendChild(clearCompletedTasksButton);
  operationButtons.appendChild(clearAllButton);

  return operationButtons;
};

const createContent = () => {
  let content = document.createElement("div");
  content.classList.add("content");
  content.appendChild(createSidebar());
  content.appendChild(createTaskList());
  content.appendChild(createOperationButtons());

  return content;
};

const createModal = () => {
  let modal = document.createElement("dialog");
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("modalContainer");

  let taskTitleLabel = document.createElement("label");
  let taskDescriptionLabel = document.createElement("label");
  let dueDateLabel = document.createElement("label");

  taskTitleLabel.textContent = "Title";
  taskDescriptionLabel.textContent = "Description";
  dueDateLabel.textContent = "Due on";

  let taskTitleInput = document.createElement("input");
  let taskDescriptionInput = document.createElement("input");
  let dueDateInput = document.createElement("input");
  dueDateInput.type = "date";

  taskTitleLabel.appendChild(taskTitleInput);
  taskDescriptionLabel.appendChild(taskDescriptionInput);
  dueDateLabel.appendChild(dueDateInput);

  modalContainer.appendChild(taskTitleLabel);
  modalContainer.appendChild(taskDescriptionLabel);
  modalContainer.appendChild(dueDateLabel);

  modal.appendChild(modalContainer);

  return modal;
};

const initDOM = () => {
  container.appendChild(createTitle());
  container.appendChild(createContent());
  container.appendChild(createModal());
};

initDOM();
