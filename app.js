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
let snum = parseInt(prompt("Power number please"));
function pove(x, y ){
  return Math.pow(x,y);
}
alert(pove(fnum, snum));



let wid = parseInt(prompt("give me wid number"));
let len = parseInt(prompt("give me length number"));
function triagle(w,l) {
  return w*l;
}
alert(triagle(wid,len));