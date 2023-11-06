class Task {
  constructor(title, description, dueDate, isCompleted) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted;
  }

  setCompleted() {
    this.isCompleted = true;
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
  let project1 = new Project("List 1");
  let task1 = new Task(
    "Task Title 1",
    "Very big task description 1",
    new Date("2023-11-18"),
    false
  );
  let task2 = new Task(
    "Task Title 2",
    "Very big task description 2",
    new Date("2023-11-19"),
    false
  );
  project1.append(task1, task2);

  let project2 = new Project("List 2");
  let task3 = new Task(
    "Task Title 3",
    "Very big task description 3",
    new Date("2023-11-20"),
    false
  );
  project2.append(task3);

  let project3 = new Project("List 3");

  return [project1, project2, project3];
};

const saveProjects = () => {};

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
