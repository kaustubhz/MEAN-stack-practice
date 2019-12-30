const fs=require("fs");



var fileStatus=function(){
    console.log("File written successfully")
    console.log("File written successfully")
    if("hello".length>7)
    console.log("Over-sized")
    else
    console.log("Under-sized")

    var person={
        name:"KZ",
        getName:()=>console.log("Your name "+name)
    }
    fs.readFile("file-using-node.txt","utf-8",fileReadStatus);
}

var fileReadStatus=function(err,data){
    if(err)
    throw err
    console.log("File read successfully with data \n [ "+data+"]");
}
fs.writeFile("file-using-node.txt","Hello there, if you\'re reading this, this file is written with the help of node, kudos to that",fileStatus);

console.log("File I/O started");