import { Component, OnInit} from '@angular/core';
//import {UserService} from '../userservice';
//import {User} from './user';
//import { AppModule } from './app.module';


@Component({
  selector: 'app-root',
  templateUrl: './raci.component.html',
  styleUrls: ['./raci.component.css'],
  providers: [] //UserService]
})

export class RaciComponent {
 //user: User[];
public ProductDetails: object = [];
//public filteredGroup = [];
//public filteredActivities = [];
//public filteredRoles = [];
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
    "responsible": "R"
  },
  {

    "responsible": "A"
  },
  {
    "responsible": "I"
  },
  {
    "responsible": "C"
  },
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
    "Activity":"CI/CD Pipeline Management",
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

  }
];

constructor()

{
  this.getProducts();
}
getProducts()
{
  return this.Products;
}

SearchProduct(group:string)
{
  let obj = this.Products.filter(m => m.Group == group);
  this.ProductDetails = obj;
//  for (let i in this.Products) {

//  ...new Set(this.filteredGroup.map(a => a.Group)
}

SearchActivity(activity:string)
{
  let obj = this.Products.filter(a => a.Activity == activity);
  this.ProductDetails = obj;
}
}
/*SearchRole(Products:array)
{
  for(let i = 0; i<Products.length; i++)
  {
    if(Products.Group == "Requirements")
    {
      if(filteredGroup.includes("Requirements"))
      filteredGroup.push("Requirements");

    }
  }*/


/*  ngOnInit()
  {
  		this.userService.getUsers().subscribe(data => this.ProductDetails = data);


} */
