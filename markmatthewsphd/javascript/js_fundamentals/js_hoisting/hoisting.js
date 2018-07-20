// 1
// Rewritten code
// var hello = 'world';
// console.log(hello);
//prediction: world

// Original code
//
// console.log(hello);
// var hello = 'world';

// 2
// Rewritten code
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
//
// }
// var needle='haystack';
// test();


//prediction: magnet


// Original code
//
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }


// 3
// Rewritten code
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// var brendan = 'super cool';
// console.log(brendan);


//prediction: super cool


// Original code
//
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// 4
// Rewritten code


//prediction:


// Original code
//
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// 5
// Rewritten code
// var mean = function () {
//     var food = 'fish';
//     console.log(food);
//     food = 'chicken';
//     console.log(food);
// };
// mean();
// console.log(food);
// console.log(food);


//prediction: old way would be an error because the function is not hoisted b/c it is defined as a variable, which is not hoisted the
//console.log outside of the function do not have access to the variable food


// Original code
//
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


// 6
// Rewritten code
// function rewind() {
//     var genre = "r&b";
//     console.log(genre);
//     genre = "rock";
//     console.log(genre);
// }
// console.log(genre);
// var genre = 'disco';
// rewind();
// console.log(genre);

//prediction: original code would generate logs of undefined, rock, r&b, disco
//
// console.log(genre);
// var genre = "disco";
// rewind();
// Original code
//
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
//
// console.log(genre);


// 7
// Rewritten code

// function learn() {
//     var dojo = "burbank";
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);


//prediction: san jose, seattle, burbank, san jose

// Original code
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// 8
// Rewritten code


//prediction:


// Original code
//
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }