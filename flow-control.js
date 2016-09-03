'use strict';

function basicTeenager(age){
  if (12 < age && age < 20){
    return "You are a teenager!"
  }
}

function teenager(age){
  if (12 < age && age < 20){
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age){
  if (12 < age && age < 20){
    return "You are a teenager!"
  } else if (age < 13){
    return "You are a kid"
  }
    else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age){
  return (12 < age && age < 20) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age){
  switch(age){
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";  
  }
}

// function basicTeenager(num) {
//   if ( num >= 13 && num <= 19 ) {
//     return "You are not a teenager!";
//   }
// }

// function ageChecker(num) {
//  if (num < 13) {
//    return "You are a kid";
//  } else if ( num < 13) && num < 19 ) {
//     return "You are not a teenager";
//  }
//   else {
//    return "You are a grownup";
//  } 
// }

// function ternaryTeenager(age) {
//   ( age >= 13 && age <= 19 ) ? return "You are a teenager" : return "You are not a teenager";
// }

// function switchAge(age) {
//   switch (age) {
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//     case 19:
//       return "You are a teenager";
//       break;
//     default:
//       return "You have an age";
//   }
// }
