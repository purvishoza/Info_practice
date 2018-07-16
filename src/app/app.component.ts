import { Component, OnInit} from '@angular/core';
//import {UserService} from '../userservice';
//import {User} from './user';

import { AppModule } from './app.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [] //UserService]
})

export class AppComponent {
 //user: User[];
public ProductDetails: object = [];
 user = [
   {
     group: "Requirement"
   },
   {
     group: "CI/CD"
   },
   {
     group: "Agile Practice"
   },
   {
     group: "Environment Management"
   },
   {
     group: "AR Release"
   }
];

user1 = [
  {
    activity: "Requirement analysis"
  },
  {
    activity: "Pull in work and create epic and stories"
  },
  {
    activity: "Internal demos or desk checks"
  },
  {
    activity: "Facilitate Scrum Meetings and plan sprints"
  },
  {
    activity: "Code Promotion and validation"
  },
  {
    activity: "Enviroment Stability and Health"
  },
  {
    activity: "Plutora Release Scope"
  }
];

Products = [
  {
    "Group": "Requirement",
    "Activity":"Requirement analysis",
    "Developer": "R",
    "Agile_Project_Owner": "A",
    "Scrum_Master": "C",
    "SDET": "I",
    "TechLead":"",
    "TechnicalPO":"R",
    "Architect":"",
     "Automation":"C"
  },
  {
    "Group": "Requirement",
    "Activity":"Internal demos or desk checks",
    "Developer": "R",
    "Agile_Project_Owner": "",
    "Scrum_Master": "I",
    "SDET": "I",
    "TechLead":"",
    "TechnicalPO":"R/A",
    "Architect":"C",
    "Automation":"C"
  },
  {
    "Group": "Requirement",
    "Activity":"Pull in work and create epic and stories",
    "Developer": "R",
    "Agile_Project_Owner": "A",
    "Scrum_Master": "",
    "SDET": "I",
    "TechLead":"",
    "TechnicalPO":"C",
    "Architect":"",
    "Automation":"A"
  },
  {
    "Group": "Requirement",
    "Activity":"Internal demos or desk checks",
    "Developer": "R/A",
    "Agile_Project_Owner": "",
    "Scrum_Master": "A ",
    "SDET": "I/C",
    "TechLead":"",
    "TechnicalPO":"R",
    "Architect":"I",
    "Automation":""
  },
  {
    "Group": "CI/CD",
    "Activity": "Code Promotion and validation",
    "Developer": "C",
    "Agile_Project_Owner": "I/R",
    "Scrum_Master": "R",
    "SDET": "A/I",
    "TechLead":"",
    "TechnicalPO":"",
    "Architect":"I",
    "Automation":""
  },
  {
    "Group": "CI/CD",
    "Activity": ["CI/CD Pipeline Management",
    "CI/CD Management",
    "CI/CD Pipelin"],
    "Developer": "R",
    "Agile_Project_Owner": "C",
    "Scrum_Master": "",
    "SDET": "I",
    "TechLead":"",
    "TechnicalPO":"A",
    "Architect":"",
    "Automation":"R"
  },
  {
    "Group": "Agile Practice",
    "Activity":"Facilitate Scrum Meetings and plan sprints",
    "Developer": "A",
    "Agile_Project_Owner": "R/I",
    "Scrum_Master": "",
    "SDET": "",
    "TechLead":"I",
    "TechnicalPO":"I",
    "Architect":"",
    "Automation":"C/A"
  },
  {
    "Group": "Environment Management",
    "Activity":"Enviroment Stability and Health",
    "Developer": "",
    "Agile_Project_Owner": "",
    "Scrum_Master": "C",
    "SDET": "I",
    "TechLead":"A",
    "TechnicalPO":"R/A",
    "Architect":"",
    "Automation":"C"
  },
  {
    "Group": "AR Release",
    "Activity":"Plutora Release Scope",
    "Developer": "",
    "Agile_Project_Owner": "A/I",
    "Scrum_Master": "A ",
    "SDET": "C/R",
    "TechLead":"",
    "TechnicalPO":"R",
    "Architect":"I",
    "Automation":"R/A"
  }
];


// actSelected: string;
 //grpSelected: string;

 /* this.users = [{
 "group": "Requirement",
 "activity": "Requirement analysis",
 "roles":
 {
   "r" : "Agile Product Owner",
   "a" : "Agile Product Owner",
   "i" : "Tech Lead",
   "c" : "SDET"
 }
 },

 {
 "group": "Requirement",
 "activity": "Pull in work and create... ",
 "roles":
 {
   "r" : "Agile Product Owner",
   "a" : "Tech Lead",
   "i" : "Agile Product Owner",
   "c" : "SDET"
 }
 },


 {
 "group": "Requirement",
 "activity": "Emphasize code quality..",
 "roles": {
   "r" : "Scrum Master",
   "a" : "Developers"
 }
}]; */



constructor()

{
  this.getProducts();
}
getProducts()
{
  return this.user;
}

SearchProduct(group:string)
{
  let obj = this.Products.filter(m => m.Group == group);
  this.ProductDetails = obj;
}

SearchActivity(activity:string)
{
  let obj = this.Products.filter(a => a.Activity == activity);
  this.ProductDetails = obj;
}
}
/*  ngOnInit()
  {
  		this.userService.getUsers().subscribe(data => this.ProductDetails = data);


} */
