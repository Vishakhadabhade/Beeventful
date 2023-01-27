import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caterers } from 'src/app/class/caterers';
import { CaterersService } from 'src/app/services/caterers.service';

@Component({
  selector: 'app-update-caterer',
  templateUrl: './update-caterer.component.html',
  styleUrls: ['./update-caterer.component.css']
})
export class UpdateCatererComponent implements OnInit {

  id : number;
  caterers : Caterers = new Caterers();


  constructor(private caterersService : CaterersService , private route : ActivatedRoute ,
    private router : Router){ }

  ngOnInit(){
    this.id =  this.route.snapshot.params['id'];
    this.caterersService.getCatererById(this.id).subscribe(data =>{
      this.caterers = data;
    },error =>console.log(error));
  }
onSubmit() {
  this.caterersService.updateCaterer(this.id , this.caterers).subscribe( data =>{
    this.gotoCaterersList();
  },
  error => console.log(error)); 
}
gotoCaterersList(){
  this.router.navigate(['/caterers']);
}

}

