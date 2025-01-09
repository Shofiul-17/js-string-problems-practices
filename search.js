/* =================================================
        There is two ways you can search String.
   ================================================= */
// ====== Easiest way #1 ======

/* const lyrics = "Tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte parini. kala kala sada sada";

const doesExist = lyrics.includes("pakhi"); // The includes() method is case sensitive make sure searchvalue (pakhi) is correct.
console.log(doesExist); */


// ====== The includes() method is case sensitive searchvalue (pakhi) is NOT correct. ======
/* const lyrics = "Tumi bondhu kala pakhi ami jeno ki." + 
"boshonto kale tomay bolte parini. kala kala sada sada";

const doesExist = lyrics.includes("pokhi"); // The includes() method is case sensitive searchvalue (pakhi) is NOT correct.
console.log(doesExist); */








/* =============================================================================================
   ====== To ignore Or avoid case sensitive issue. (How to resolve case sensitive issue?) ======
   ============================================================================================= */
// ====== Way #1 ======

/* const lyrics = "Tumi bondhu kala pakhi ami jeno ki." + 
"boshonto kale tomay bolte parini. kala kala sada sada";

const searchString = "Pakhi";

const doesExist = lyrics.includes(searchString); 
console.log(doesExist); */


const lyrics = "Tumi bondhu kala pakhi ami jeno ki." + 
"boshonto kale tomay bolte parini. kala kala sada sada";

const searchString = "Pakhi";

/* const lyricsLowercase = lyrics.toLocaleLowerCase();
const searchStringLower = searchString.toLocaleLowerCase();
const doesExist = lyricsLowercase.includes(searchStringLower); */ 


const oneLineCode = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
console.log(oneLineCode);
