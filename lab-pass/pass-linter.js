'use strict';

function failLiner(){
  var name = 'single quotes';
  var greeting = name + 'world';
  return greeting;
}

var pass  = failLiner();
console.log(pass);
