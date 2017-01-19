'use strict';
function basicTeenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  var message = basicTeenager(age)
  return message ? message : "You are not a teenager";
}

function ageChecker(age) {
  var message = basicTeenager(age)
  if (message === undefined) {
    message = (age < 13) ? "You are a kid" : "You are a grownup";
  }
  return message
}

function ternaryTeenager(age) {
  return basicTeenager(age) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  return basicTeenager(age) ? "You are a teenager" : "You have an age";
}