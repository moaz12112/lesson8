//let arr=[15,20,"ahmad",25,30];
//let divs =document.getElementsByClassName("t1");

/*let arr = [15,20,"ahmad",25,30];
document.getElementById(container).innerHTML = arr;
console.log(arr);

for(let i=0; i<arr.length; i++){
    divs[i].innerhtml=arr[i] + "<br>"

}
document.getElementById(container).innerHTML = i;
console.log(i);
*/


//divs[0].innerHTML='hhhhh';
//console.log(divs);


let list=[0,1,2,3,4,5];
let res ="<table border=\"1\" witdh=\"100%\"> ";
res +="<tr>";
for(let i=0; i<list.length; i++){
res +="<td>" + list[i]+"</td>";

}
    document.getElementById("res").innerHTML = "res is " + res;
res +="</tr>";
res +="</table>";
document.getElementById("table").innerHTML = res;

let min=list[0];
let index_min=0;
for(let i=0; i<list.length; i++){
   if(list[i]<min){
   min=list[i];
   index_min=i; 
   }
    
    }
    document.getElementById("min").innerHTML = "min is " + min + "is";
