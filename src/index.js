console.log("testing");

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
  constructor() {
    this.arr = [];
  }

  append(...task) {
    this.arr.push(...task);
  }

  clearAll() {
    this.arr.length = 0;
  }

  clearCompleted() {
    this.arr = this.arr.filter((task) => task.isCompleted);
  }

  numTasks() {
    return this.arr.length;
  }
}

let defaultProject = new Project();
let task1 = new Task(1, 2, 3, false);
let task2 = new Task(2, 3, 4, false);
defaultProject.append(task1, task2);
console.log(defaultProject.numTasks());

task1.isCompleted = true;
defaultProject.clearCompleted();
console.log(defaultProject.numTasks());

defaultProject.clearAll();
console.log(defaultProject.numTasks());
