import { Component, OnInit } from '@angular/core';
import { BottleService } from './bottle.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-first-project';
  users : any;
  items: any;
  showModal = false
  constructor(private bottleService:BottleService){}
  ngOnInit() : void {
    this.bottleService.fetch().subscribe(data => {this.users=data
      // console.log(data, 'ngoninit')
    });
  };
  delete(obj: any) {
        console.log(obj);
        this.showModal = true;
        this.bottleService.getAPIbyOne(obj).subscribe(data => {this.items=data
        // console.log(data,"items")
      })
      }
};

// export class AppComponent {
//   title = 'my-first-project';
//   constructor(private bottleService:BottleService){}
//   name = '';
//   fetch() {
//     this.bottleService.fetch()
//     .subscribe(data => console.log(data));
//   }
// }


