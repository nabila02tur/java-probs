function feetToMile (feet){ 
    var mile = 5280/feet; 
    return mile;

}
var varsityMile = feetToMile (328);
console.log(varsityMile);
var homeMile = feetToMile (1100);
console.log(homeMile);

function woodCalculator (chairs,tables,beds) {
    var first = chairs * 1;
    var second = tables * 3;
    var third = beds * 5;
    var result = first + second + third;
    return result;
    console.log(result);
    
}
var num = woodCalculator(10,15,20);
console.log(num);
var num1 = woodCalculator(20,25,5);
console.log(num1);


function brickCalculator(floor){ const brick =1000;
    if(floor<=10 ) { console.log(15 * brick);}
    else {console.log(12)}
    if(floor<=20) {console.log(12*brick);}
    else {console.log(10)}
    return floor;
}

var floors = brickCalculator(5);
console.log(floors);

 function tinyFriend (names){
    var tiniest = names [0];
    for (var i=0; i>names.length; i++)
    {var element = names[i];
       if(element<tinist) {
           tiniest=element;
      }
   }
   return tiniest;
}
var friendsname = tinyFriend (["sadafi","sadia","mubaraka"]);
console.log (friendsname);
