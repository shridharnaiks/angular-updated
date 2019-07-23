

import { Icollege } from "src/admin/admin";
import { Component } from "@angular/core";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'Admission';


colleges:Icollege[]=[

{cId:1, collegeName:'RV', cutOff:10, place:'bangalore', zip:91},
{cId:2, collegeName:'PES', cutOff:11, place:'bangalore', zip:91},
{cId:3, collegeName:'DB', cutOff:12, place:'bangalore', zip:91}

];
}