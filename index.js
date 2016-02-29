'use strict'

var os = require('os')
var random = require('random-words');

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function spam() {
  let time = rand(0, 20) * 100
  setTimeout(function() {
    console.log(os.hostname(), random(8).join(' '))
    spam()
  }, time)
}

spam()
