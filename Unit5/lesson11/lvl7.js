// Create and assign variables and lists

var gradesList = [];
var total = 0;

onEvent("addGradeButton","click",function(){
  var newGrade = getNumber("gradeInput");
  appendItem(gradesList,newGrade);
  
  updateScreen();  
});

onEvent("averageGradeButton","click",function(){
  // Add code here to make the app show the average grade
  // when the user clicks the average grade button
  
  for (var i = 0; i < gradesList.length; i++) {
    total += gradesList[i];
    console.log(total);
  }
  
  
  setText("averageGradeLabel","Your average grade: " + total/gradesList.length);
  
  
});

function updateScreen(){
  setProperty("gradeInput","text","");
  setProperty("gradesLabel","text",gradesList.join("\n"));
}
