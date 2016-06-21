var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

//#1
function months(input){
  var list = '';
  var i = 0
  for(i = 0; i < stringList.length; i++){
    list += ' ' + input[i];
    //check to see if there should be a comma inserted
    if(i < (stringList.length - 1)){
      console.log(stringList.length);
      list += ',';
    }
  }
  list += '.';
  return list;
};
console.log('Months listed are' + months(stringList));

//#2
//index starts at 0, so we must decrease the length by a value of 1 to find the
//correct index
console.log(numList[(numList.length - 1)]);

//#3
function magicStringNumber(input){
  //must declare variable as a string so the for loop doesn't add the numbers
  //together
  var theNumber = '';
  for(i = 0; i < numList.length; i++){
    theNumber += input[i];
  }
  return theNumber;
}
console.log(magicStringNumber(numList));

//#4
function magicNumber(input){
  //must declare variable as a number so the for loop will add the numbers
  //together
  var theNumber = 0;
  for(i = 0; i < numList.length; i++){
    theNumber += input[i];
  }
  return theNumber;
}
console.log(magicNumber(numList));

//#5
function booleanMath(list){
  if(list[1] === true){
    return numList[0] + numList[(numList.length - 1)]
  }else {
    return Math.pow(2, numList[1])
  }
};
console.log(booleanMath(boolList));

//#6
function arrayLookup(list){
  for(var i = 0; i < list.length; i++){
    if(list[i] === true){
      return numList[i];
    }
  }
}
console.log(arrayLookup(boolList));

//#7
var superArray = stringList.concat(numList);
superArray = superArray.concat(boolList);
superArray = superArray.reverse();
console.log(superArray);
