import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {stsComponent} from 'src/sts/sts.component';
import {studentComponent} from 'src/student/student.component';
import { AdminComponent } from "src/admin/admin.component";
import { homeComponent } from "src/home/home.component";
import {adminloginComponent} from "src/adminlogin/adminlogin.component";
import { idrouterComponent } from "src/idrouter/idrouter.component";
const routes: Routes = [
    {path:'sts',component:stsComponent},
    {path:'student',component:studentComponent},
     {path:'admin',component:AdminComponent},
     {path:'home',component:homeComponent},
     {path:'adminlogin',component:adminloginComponent},
     {path:'idrouter/:id',component:idrouterComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})
export class AppRoutingModule{}