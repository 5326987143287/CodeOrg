var answers = ["Yes, absolutely", "Maybe", "Don't even think about it!", "I'm not sure", "Ask me again", "I have a good feeling about this", "Are you kidding?", "You are crazy!", "Why not!"];

// not nessessary to use this.
//var index = 0;

updateScreen();

onEvent("playScreen", "click", function(){
  // update the index to a random number
  // Use the Random List Access Pattern


  updateScreen();
});

function updateScreen(){
  // set the text of "answerOutput"
  setText("answerOutput", answers[randomNumber(0, 8)]);
  playSound("sound://category_pop/bubble_pop_cluster_2.mp3");
}
