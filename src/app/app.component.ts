import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'rxjsDersleri';
  
  ngOnInit(): void {
    const observable =  new Observable<number>(data => {

      data.next(3);
      data.next(5);
      data.next(6);
      data.complete();

    });
    
    // observable.subscribe(data => {
    //   console.log(data);
    // });

// const observer  = function(data : any){
//   console.log(data);
// }

// const observer  = (data:any) => {
// console.log(data);

// };

// observable.subscribe(observer);

observable.subscribe(data=>{
     console.log(data);

  });



}










}
