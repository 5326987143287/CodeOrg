onEvent("forecastButton", "click", function( ) {
  var randomID = randomNumber(1,500);
  setProperty("cityOutput","text",getColumn("Daily Weather","City")[randomID]);
  setProperty("highTempOutput","text",getColumn("Daily Weather","High Temperature")[randomID]);
  setProperty("lowTempOutput","text",getColumn("Daily Weather","Low Temperature")[randomID]);
  setProperty("iconOutput","image",getColumn("Daily Weather","Icon")[randomID]);
  setProperty("conditionOutput","text",getColumn("Daily Weather","Condition Description")[randomID]);});
