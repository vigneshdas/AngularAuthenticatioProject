import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private router : ActivatedRoute , private route : Router) { }

  year : string;
  month : string;

  ngOnInit(): void {
     /**  this.router.paramMap
      .subscribe(params =>{
        this.year = params.get('year');
        this.month = params.get('month');
      });**/

      let params = this.router.snapshot.paramMap;
      this.year = params.get('year');
      this.month = params.get('month');
  }

  back(){
    this.route.navigateByUrl('/');
  }

}
