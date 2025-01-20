class Employee {
  constructor() {
    this.id = 48;
    this.empName = "Shashank";
  }
  displayInfo() {
    console.log(this.id + " " + this.empName);
  }
}

let emp = new Employee();
emp.displayInfo();
