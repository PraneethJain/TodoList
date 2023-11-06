class Task {
  constructor(title, description, dueDate, isCompleted) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.arr = [];
  }

  append(...task) {
    this.arr.push(...task);
  }

  clearAll() {
    this.arr.length = 0;
  }

  clearCompleted() {
    this.arr = this.arr.filter((task) => !task.isCompleted);
  }

  numTasks() {
    return this.arr.length;
  }

  *tasks() {
    for (const task of this.arr) {
      yield task;
    }
  }
}

const loadProjects = () => {
  const projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
  let projects = [];
  projectsArray.forEach((proj) => {
    let project = new Project(proj.name);
    proj.arr.forEach((tas) => {
      let task = new Task(
        tas.title,
        tas.description,
        new Date(tas.dueDate),
        tas.isCompleted
      );
      project.append(task);
    });
    projects.push(project);
  });
  return projects;
};

const saveProjects = (projects) => {
  const projectsArray = JSON.stringify(projects);
  localStorage.setItem("projectsArray", projectsArray);
};

const test = () => {
  let testProject = new Project();
  let task1 = new Task(1, 2, 3, false);
  let task2 = new Task(2, 3, 4, false);
  testProject.append(task1, task2);
  console.log(testProject.numTasks());

  task1.isCompleted = true;
  testProject.clearCompleted();
  console.log(testProject.numTasks());

  testProject.clearAll();
  console.log(testProject.numTasks());
};

export { loadProjects, saveProjects, Task, Project };
