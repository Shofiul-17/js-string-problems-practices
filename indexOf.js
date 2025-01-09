const lyrics = "Tumi bondhu kala pakhi ami jeno ki." + 
"boshonto kale tomay bolte parini. kala kala sada sada";

console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf("kailla"));
console.log(lyrics.indexOf("Tumi"));



if(lyrics.indexOf("sada") !== -1){
    console.log("Exists inside the string");
}
else{
    console.log("Cannot find it inside the string");
}
