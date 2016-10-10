'use strict';

function basicTeenager(age){
  if (age < 20 && age > 12){
    return "You are a teenager!";
  }
}

function teenager(age){
  if (age < 20 && age > 12){
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}
function ageChecker(age){
  if (age < 13){
    return "You are a kid";
  } else if (age > 19) {
    return "You are a grownup";
  } else {
    return "You are a teenager!";
  }
}

function ternaryTeenager(age){
  var result;
  (age < 20 && age > 12) ? result = "You are a teenager" : result = "You are not a teenager";
  return result;
}

function switchAge(age){
  var result = "You are a teenager";
  switch (age){
    case 13:
      break;
    case 14:
      break;
    case 15:
      break;
    case 16:
      break;
    case 17:
      break;
    case 18:
      break;
    case 19:
      break;
    default:
      result = "You have an age";
  }
  return result;
}
