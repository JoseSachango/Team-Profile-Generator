// TODO: Write code to define and export the Employee class
class Employee{

    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
        
    }
    
    getName(){
        return this.name;
    
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
       
        
       return this.constructor.name;
        
    }
}


/*
var employee = new Employee("Jake",12,"jake12@hmail.com")

console.log(employee.constructor.name)
*/


module.exports = Employee;