/*jshint esversion: 6 */


// const chart = Array.from(document.querySelectorAll(".fa-shopping-bag"));
// function myFunction (){
//   let namePic = Array.from(this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".title"));
//    let price = Array.from(this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price")[0].querySelectorAll(".price1"));
//    let pic = Array.from(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img")[0].querySelectorAll(".img1"));
//   console.log(namePic[0].innerHTML, price[0].innerHTML, pic[0].src);
// }
// for (let i=0; i<chart.length; i++){
//   chart[i].addEventListener('click', myFunction, false);
//

let num = parseInt(prompt("Enter the number"));
function rad(a){
return 2 * 3.14159 *a;
}
alert(rad(num));
let fnum = parseInt(prompt("First number please"));
let snum = parseInt(prompt("Second number please"));
function min (x, y ){
  return Math.min(x,y)
}
alert(min(fnum,snum))
