var food = ["oatmeal", "pancakes", "crackers", "peanuts"];
updateScreen();

onEvent("addButton", "click", function(){
  var newFood = getText("diaryInput");
  
  appendItem(food, newFood);



  setText("diaryInput", "");
  playSound("sound://category_accent/puzzle_game_accent_a_01.mp3");
  updateScreen();
});

function updateScreen(){
  setText("diaryOutput", food.join(", "));
}
