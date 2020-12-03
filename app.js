const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let EmployeeObjects =[]
function EngineerPrompt(){
    inquirer.prompt([
        //Engineer prompts
        {
            name:"Name",
            message:"What is your engineer's name?",
            type:"input"
        },
        {
            name:"id",
            message:"What is your engineer's Id?",
            type:"input"
    
        },
        {
            name:"email",
            message:"What is your engineer's email?",
            type:"email"
        },
        {
            name:"gitHub",
            message:"What is your engineer's GitHub username?",
            type:"input"
    
        },
        {
            name:"addEmployees",
            message:"Which type of team member would you like to add?",
            type:"list",
            choices:["Engineer","Intern","I don't wnat to add any more team members."]
        }

    ]).then((response)=>{
        console.log(response)

            if(response.addEmployees==="I don't wnat to add any more team members."){
                return 
            }
            else if(response.addEmployees==="Engineer"){
                console.log(response.addEmployees);
                EngineerPrompt();
                
            }
            else if(response.addEmployees==="Intern"){
                console.log(response.addEmployees);
                InternPrompt();
            }
        
        var EngineerObject = new Engineer(response.Name,response.id,response.email,response.gitHub)

        console.log(EngineerObject)

        EmployeeObjects.push(EngineerObject)
    })
    
};

function InternPrompt(){
    inquirer.prompt([
        //Intern prompts
        {
            name:"Name",
            message:"What is your intern's name?",
            type:"input"
        },
        {
            name:"id",
            message:"What is your intern's Id?",
            type:"input"
    
        },
        {
            name:"email",
            message:"What is your intern's email?",
            type:"email"
        },
        {
            name:"school",
            message:"Where did your intern go to school?",
            type:"input"
    
        },
        {
            name:"addEmployees",
            message:"Which type of team member would you like to add?",
            type:"list",
            choices:["Engineer","Intern","I don't wnat to add any more team members."]
        }

    ]).then((response)=>{
        console.log(response)

            if(response.addEmployees==="I don't wnat to add any more team members."){
                return 
            }
            else if(response.addEmployees==="Engineer"){
                console.log(response.addEmployees);
                EngineerPrompt();
                
            }
            else if(response.addEmployees==="Intern"){
                console.log(response.addEmployees);
                InternPrompt();
            }
        
        var InternObject = new Intern(response.Name,response.id,response.email,response.school)
            console.log(InternObject)
        EmployeeObjects.push(InternObject)
    })
}


function ManagerPrompt(){
        //manager prompts
        inquirer.prompt([
            //Manager prompts
            {
                name:"Name",
                message:"What is your managers name?",
                type:"input"
            },
            {
                name:"id",
                message:"What is your managers Id?",
                type:"input"

            },
            {
                name:"email",
                message:"What is your managers email?",
                type:"email"
            },
            {
                name:"officeNumber",
                message:"What is your managers office number?",
                type:"input"

            },
            {
                name:"addEmployees",
                message:"Which type of team member would you like to add?",
                type:"list",
                choices:["Engineer","Intern","I don't wnat to add any more team members."]
            }


        ]).then((response)=>{
            console.log(response)

                if(response.addEmployees==="I don't wnat to add any more team members."){
                    return 
                }
                else if(response.addEmployees==="Engineer"){
                    console.log(response.addEmployees);
                    EngineerPrompt();
                    
                }
                else if(response.addEmployees==="Intern"){
                    console.log(response.addEmployees);
                    InternPrompt();
                }

            var ManagerObject = new Manager(response.Name,response.id,response.email,response.officeNumber)
            console.log(ManagerObject)

            EmployeeObjects.push(ManagerObject);
        })

}

ManagerPrompt()


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
render(EmployeeObjects);



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
