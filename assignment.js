

// Question 1

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(50);
    result = result.toFixed(7);
console.log(result);


// Question 2


function woodCalculator(chair, table, bed){
    var chair = chair*1;
    var table = table*3;
    var bed = bed*5;

    var wood = chair + table + bed ;
    return wood;
}

var totalWood = woodCalculator(2, 3, 3);
console.log(totalWood);



// Question 3

function brickCalculator(floor){
    var brick1 = 150000 + (floor - 10)*12000;
    var brick2 = 270000 + (floor - 20)*10000;

    if(floor >= 1 && floor <= 10){
        var brick = floor * 15000;
        console.log(brick);
    }
    else if( floor > 10 && floor <= 20){
        console.log(brick1);
    }
    else if(floor > 20){
        console.log(brick2);
    }
    else{
        console.log("You are not authoried to build this building")
    }
}

brickCalculator(40); 

// Question 4

function tinyFriend(names){
    var friends = names[0];
    for(i = 0; i < names.length; i++){
        var people = names[i];

        if(people.length < friends.length){
            friends = people;
        }

    }
    return friends;


}
var result = tinyFriend(["rabi", "tfd", "sharmin","fd"]);
console.log(result);
