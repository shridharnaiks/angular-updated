import { User } from './adminlogin';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector:'adminlogin-root',
    templateUrl:'./adminlogin.component.html',
     styleUrls:['./adminlogin.component.css']
})
export class adminloginComponent implements OnInit{
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
 
 
 
    user = new User();
    
constructor() {
   
    
}

save(userForm:NgForm){
console.log(userForm.form);
console.log('Saved data ' + JSON.stringify(userForm.value) )
    
}

}