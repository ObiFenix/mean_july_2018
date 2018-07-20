// <!-- Challenge 1 : Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts. -->
// <!-- Challenge 2 : Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console. -->

var students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function print(arr){
    for (var i=0;i<arr.length; i++){
        console.log(arr[i]);
    }
}
print(students);

var users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 function print(arr){
   console.log('Employees:');
        console.log(arr.employees);
   console.log('Managers:');
        console.log(arr.managers);
}
print(users)