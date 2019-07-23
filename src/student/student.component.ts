import { User } from './student';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector:'student-root',
    templateUrl:'./student.component.html',
     styleUrls:['./student.component.css']
})
export class studentComponent implements OnInit{
    
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

}/*import { Component } from '@angular/core';

@Component({
    selector:'student-root',
    templateUrl:'./student.component.html',
   styleUrls:['./student.component.css']
   //template:'<h1>shri</h1>'
})
export class studentComponent {
               
            //imageWidt:number=100;
           // imageHeigh:number=400;    
           // imageWid:number=100;
           // imageHeig:number=40;        
}*/