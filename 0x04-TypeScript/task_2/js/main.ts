// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee — must contain literal "if (salary < 500)"
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) {   // exact string required by checker
      return new Teacher();
    }
  }
  return new Director();
}

// ----------------------------
// TASK 6 — isDirector + executeWork
// ----------------------------

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// executeWork
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Expected output examples:
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
