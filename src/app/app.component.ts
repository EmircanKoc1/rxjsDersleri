import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'rxjs';
  
  ngOnInit(): void {
    // const observable =  new Observable<number>(data => {

    //   data.next(3);
    //   data.next(5);
    //   data.next(6);
    //   data.complete();

    // });
    
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

// observable.subscribe(data=>{
//      console.log(data);

//   });

// const subject = new Subject();

// subject.subscribe(data=>{
// console.log(`observerA : ${data}`);
// });

// subject.subscribe(data=>{
// console.log(`observerB : ${data}`);
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);

// subject.subscribe(data=>{
//   console.log(`observerC : ${data}`);
//   });
  
// subject.next(4);
// subject.next(5);
// subject.next("ahmet");
// }

// let data : any = "hilmi";
// const subject = new BehaviorSubject(data);

// subject.subscribe(data=>{
// console.log(`observerA : ${data}`);
// });

// subject.subscribe(data=>{
// console.log(`observerB : ${data}`);
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);

// subject.subscribe(data=>{
//   console.log(`observerC : ${data}`);
//   });
  
// subject.next(4);
// subject.next(5);
// subject.next("ahmet");


const subject = new ReplaySubject(5);

subject.subscribe(data=>{
console.log(`observerA : ${data}`);
});

subject.subscribe(data=>{
console.log(`observerB : ${data}`);
});

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe(data=>{
  console.log(`observerC : ${data}`);
  });



}









}
