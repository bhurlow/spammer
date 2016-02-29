'use strict'

var os = require('os')
var random = require('random-words');

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function logStdout() {
  console.error(os.hostname(), 'ERROR:', random(8).join(' '))
}

function logStderr() {
  console.log(os.hostname(), random(8).join(' '))
}

function spam() {
  let num = rand(0, 20) * 100
  let time = Math.floor(num)
  setTimeout(function() {
    if (time % 5) {
      logStderr()
    }
    else logStdout()
    spam()
  }, time)
}

spam()
