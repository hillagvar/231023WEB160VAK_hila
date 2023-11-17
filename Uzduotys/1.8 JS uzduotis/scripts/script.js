function tempConvert(temperature) {

  let convertedTemperature = ((temperature-32)/1.8).toFixed(1);

  let tempResult = `Lietuvoje šiuo metu ${convertedTemperature} laipsnių pagal Celsijų`;

  return tempResult;

}

console.log(tempConvert(26));
