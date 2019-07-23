import { Icollege } from "src/admin/admin";
import { ActivatedRoute, Router } from "@angular/router";
import { OnInit, Component } from "@angular/core";

@Component({
    templateUrl:'./idrouter.component.html',
})
export class idrouterComponent implements OnInit{
   
    pgtitle: string = "collegedetail";
    colleges:Icollege;
    constructor(private route:ActivatedRoute, private router: Router){ };

    ngOnInit(){
        let id = +this.route.snapshot.paramMap.get('id');
        this.pgtitle += `:${id}`;
        this.colleges={
        'cId':id,
         'collegeName':'RV',
         'cutOff': 10  ,
         'place':'bangalore',
          'zip':91

        };
    }
    onBack(): void{
        this.router.navigate(['/admin'])
    }
}