  // Create and assign list
var animals = ["alligator","bird","cow","dog","emu","flamingo","gorilla","hippo"];

console.log("Which animals have more than 5 letters in their names?");

// Filter animals to those with more than 5 letters
var animalsFiltered = [];
var animal;
for(var i = 0; i < animals.length; i++){
  animal = animals[i];
  if(animal.length > 5){
    appendItem(animalsFiltered,animal);
  }
}
console.log(animalsFiltered);

// Create and assign a list of students

var students = ["Angel","Ben","Clarissa","Darien","Elly","Francesco","Giselle","Henry"];

console.log("Which students have 6 or more letters in their names?");

// Filter students to have those with 6 or more letters
var studentsFiltered = [];
var student;

// Add code to filter the list of students

for (var i = 0; i < students.length; i++) {
  student = students[i];
  if (student.length > 5){
    appendItem(studentsFiltered, student);
  }
}



console.log(studentsFiltered);
