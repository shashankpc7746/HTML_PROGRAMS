class Employee {
  constructor() {
    this.id = 48;
    this.empName = "Shashank";
  }
//   constructor(id,name){
//     this.id = id;
//     this.empName = name;
//   }
  displayInfo() {
    console.log(this.id + " " + this.empName);
  }
}

let emp = new Employee();
emp.displayInfo();

// JavaScript doesn't support overloading (only 1 constructor is allowed) it is Object Based Language not Object Oriented language.