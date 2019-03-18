// console.log("hello world");
// const constVar= "hello"; 
// // không thay đổi được biến của constVar (uncaught var)
// // let , var : khai báo biến có thể thay đổi được 
// // let a = 123;
// // var b= "string";
// console.log(a);
// console.log(typeof b );
// // value types : 1 .undifined ( quên khai báo , không tồn tại ) 2.null ( có tồn tại ) 3. string , 4.number ,5.boolean , 6.object 7.symbol
// //object subtypes 
// // ba kiểu khai báo function 
// function aFunc( a, b , c ) {
//     console.log(a,b, c);

// }
// aFunc(1,2,3)
// const bFunc= function(){
//     console.log("hello");

// }
// const cFunc = () => {
//     console.log("world");
// }
// bFunc();
// cFunc();
// // let và var : khi khai báo ra biến  , tồn tại trong function scope , 
// var a = 100;

// function print(){
//     var b = 5 ; 
//     if (1+1==2){
//      var c=5;
//      console.log(a); // 100
//      console.log(b); // 5 
//      console.log(c); // 5
    

 
//     }
//     console.log(c); // 5 , vẫn tồn tại trong function này nếu là var a , nhưng khi dùng let a ;
//     console.log(a); // 100
//     console.log(b); // 5 

// }
// print();
// console.log(b); => không tồn tại 



//  function countDown(num){

//      for(let i = num ; i>=0 ; i--){    
//         setTimeout(function() {
       
//         console.log(i)  ;
//    }, 1000*(num-1));
//   }
//  }



//  countDown(5);
// function print(num , waitTime){
//     setTimeout(function(){
//         console.log(num)
//     }, 100*waitTime)

// }
// function countDown(num){
//     for (var i = num ; i >=0 ; i--){
       
//             print(i , num -i);
        

//     }
// }



 console.log("hello");
 function print(onWaitDone){// function được truyền vào 


 setTimeout(function(){
     console.log("world")
     onWaitDone(); 
 },1000); }
 print(function(){ // callback : onWaitDone
 console.log("hbbj")
})



// function aFunc(){
//     a = 10;
//     b= "snl"
// }
// aFunc();
// console.log(b)

// function aRose(){
//     console.log("hello")
// }
// anotherrose=aRose; // anotherrose tro thanh mot function 
// function dung nhu object