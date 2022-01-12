var reminderList = [];
var counter = 0;
var current = 0;

onEvent("addButton", "click", function( ) {
  appendItem(reminderList, getText("reminderInput"));
  
  
  
  setProperty("reminderOutput", "text", reminderList[counter]);
  
  
  setProperty("reminderInput", "text", "");
  
  current += 1;
  counter += 1;
  
  setProperty("countOutput", "text", current);
  
  console.log(reminderList + " | " + counter);
});


onEvent("rightButton", "click", function( ) {
  
  if (current == counter) {
    //pass
  } else {
    current += 1;
    setProperty("reminderOutput", "text", reminderList[current-1]);
    setProperty("countOutput", "text", current);
  }
  
  
  print(current);
});


onEvent("leftButton", "click", function( ) {
  
  if (current <= 1) {
    //pass
  } else {
    current -= 1;
    setProperty("reminderOutput", "text", reminderList[current-1]);
    setProperty("countOutput", "text", current);
  }
  
  
  print(current);
});


function print(text) {
  console.log(text);
}
