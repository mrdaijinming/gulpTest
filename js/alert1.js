function alert1() {
     alert(111);
     var alert3=function(){
     	alert(3333);
     }
     alert3();
}

module.exports = alert1;
