function isEvenlyDivisible(num1, num2) {
  if(num1 % num2 === 0){
    return true
  }else{
    return false
  }

}

function halfSquare(num) {
return (num ** 2) / 2
}

function isLong(str) {
if(str.length >= 15){
  return true
}else{
  return false
}
}

function exclaim(sentence) {
  if(sentence[sentence.length-1]!== "!"){
    return sentence + "!"
  } else {
    let str = ""
    for(char of sentence){
      if(char !== "!"){
        str = str + char
      } else {
        str = str
      }
    }
    return str + "!"
  }
}




function countWords(str) {
  return str.split(" ").length
}

function containsDigit(str) {
  return str.match(/[0-9]/) != null;
}


function containsLowerCase(str) {
  //return str.match(/[a-z]/) != null;
  return str.toUpperCase() !== str
}

function containsUpperCase(str) {
  //return str.match(/[A-Z]/) != null;
  return str.toLowerCase() !== str
}

function containsNonAlphanumeric(str) {
  // let count = 0
  // for(let char of str){
    // if(containsLowerCase(char)=== true){
      // count = count + 1
    // } else if (containsUpperCase(char)===true){
      // count = count + 1
    // } else if (containsDigit(char)===true){
      // count = count + 1
    // }
  // }
  // return str.length !== count
  let alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789'
for(let char of str){
if(!alphaNum.includes(char.toLowerCase())){
  return true
}
}
return false
}


function containsSpace(str) {
  return str.indexOf(' ') !== -1
}

function digits(num) {
  let array = num.toString().split("")
  let final = []
  for(let char of array){
    if(containsNonAlphanumeric(char)=== true){
    } else {
      char = parseFloat(char)
      final.push(char)
    }
  } return final
}

function truncate(str) {
  let final = ""
  if(isLong(str) === false){
    return str
  }else {
   
    for(let char of str){
      if(final.length <= 7){
        final = final + char
      }
    }
  }
 return final + "..."
}

function isValidPassword(str) {
  return containsDigit(str) &&
  containsLowerCase(str) &&
  containsNonAlphanumeric(str) &&
  containsUpperCase(str) &&
  !containsSpace(str)
}

function onlyPunchy(arr) {
  let punchy = []
  for(let str of arr){
    str = exclaim(str)
    if(isLong(str) === false){
      punchy.push(str)
  
  }
    }
    return punchy
  }
  

  



module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
