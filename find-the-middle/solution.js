var gimme = function (inputArray) {
  let sortedArray = inputArray.slice();
  console.log('input array = ' + inputArray);
  let element = sortedArray.sort((a, b) => {return a - b})[1];
  console.log('sorted array = ' + sortedArray);

  return inputArray.indexOf(element);
  
  
};
