var onTimer=function(){
    console.log("Timer ticking after 2 secs!!");
}

var onDisplay=function(){
    console.log("Display beig called after 4 secs");
}

setInterval(onTimer,2000);
setInterval(onDisplay,4000);

console.log("Welcome to timer!!!!");