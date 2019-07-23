import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { collegeComponent } from '../college/college.component';
import { stsComponent } from '../sts/sts.component';
import { studentComponent } from '../student/student.component';
import { AdminComponent } from "src/admin/admin.component";
import { homeComponent } from "src/home/home.component";
import { FormsModule } from '@angular/Forms';
import {adminloginComponent} from "src/adminlogin/adminlogin.component";
import { idrouterComponent } from "src/idrouter/idrouter.component";
@NgModule({
  declarations: [
    AppComponent,collegeComponent,stsComponent,studentComponent,AdminComponent,
    homeComponent,adminloginComponent,idrouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
