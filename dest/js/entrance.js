(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function alert1() {
     alert(1);
     var alert3=function(){
     	alert(3);
     }
     alert3();
}

module.exports = alert1;

},{}],2:[function(require,module,exports){
function alert2() {
     alert(2);
}
module.exports = alert2;
},{}],3:[function(require,module,exports){
 (function(node) {
     var alert1 = require('./alert1.js');
     var alert2 = require('./alert2.js');
     var init = function() {
         alert1();
         alert2()
     }
     init();
 })(document.body);

},{"./alert1.js":1,"./alert2.js":2}]},{},[3])