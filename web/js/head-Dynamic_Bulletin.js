const charList = [" ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "\"", "$", "%", "&", "/", "(", ")", "=", "?", "+", "*", "#", "'", ":", ";", "-", ".", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const randomAirportNames = ["EDINBURGH", "DYCE", "GLASGOW", "LONDON HEATHROW", "JFK INTERNATIONAL", "FRANKFURT", "BERLIN", "PARIS", "ROME", "WASHINGTON DC", "HONG KONG", "SYDNEY", "DUBLIN", "MOON", "SKIPHOL", "WARSAW", "HONOLULU", "ZURICH"];

$(document).ready(function(){
    const msg = "HELLO-WORLD-TWO";
    showContent(msg);
    $(".header-panel-input").val(msg);
    setInterval(function () {
      showContent(null);
    },8000);
    $(".header-panel-input").blur(function(){
	    //赋值显示
        const msg = $("input").val();
        showContent(msg);
    });
});

function switchChar(char,n){
  let i;
    var current = $(".flip").eq(n).attr("value");
  var start = 0;
  for(i = 0; i<charList.length; i++){
    if(charList[i] == current){
      start = i;
      break;
    } 
  }
  var complete = false;
  for(i = start; i<charList.length; i++){
    if(charList[i] == char){
      complete = true;
      break;
    }
    $(".flip").eq(n).attr("value",char);
    $(".flip").eq(n).find("ul").animate({top: "-=70px"},50);
  }
  if(complete == false){
    $(".flip").eq(n).find("ul").animate({top: "0px"},50);
    start = 0;
     for(i = start; i<charList.length; i++){
      if(charList[i] == char){
        break;
        complete = true;
      }
      $(".flip").eq(n).attr("value",char);
      $(".flip").eq(n).find("ul").animate({top: "-=70px"},50);
    }
  }
}

function anewNested(){
	$(".flip").each(function(index){
    $(this).append("<ul></ul>");
    $(this).attr("value"," ");
		for(var i=0;i<charList.length;i++){
		  var char = charList[i];
		  $("ul", this).append("<li>"+char+"</li>");
		}
	});
}

function showContent(msg) {
    let k;
    if (msg == null || msg.trim() == ""){
        const random = Math.round(Math.random() * randomAirportNames.length);
        msg = randomAirportNames[random];
    }
    $(".wrapper").children().remove();
    console.log(msg);
    for(k = 0; k<msg.length; k++){
        $(".wrapper").append("<div class='flip'></div>");
    }
    anewNested();
    const msgEx = msg.split("");
    const showGridCount = msgEx.length;
    for(k = 0; k<msgEx.length; k++){
        switchChar(msgEx[k],k);
    }
}