 (function(node) {
     var alert1 = require('./alert1.js');
     var alert2 = require('./alert2.js');
     var init = function() {
         alert1();
         alert2()
     }
     init();
 })(document.body);
