/* =================================================
        There is two ways you can search String.
   ================================================= */
// ====== # 1 Way - Easiest way to search String but you will face case sensitive problem ======
// Example #1.1
const lyrics = "Tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte parini. kala kala sada sada";

const doesExist = lyrics.includes("pakhi"); // Search value (pakhi) spelling is correct.
console.log(doesExist); // Expected output true

/* =================================================================================== */

// ====== Easiest way to search String but you will face case sensitive problem ======
// Example #1.2
const lyrics2 = "Tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte parini. kala kala sada sada";

const doesExist2 = lyrics2.includes("pokhi"); // The includes() method is case sensitive make sure search value (pakhi) is correct.
console.log(doesExist2); // Expected output false

/* =================================================================================== */

// ====== Easiest way to search String but you will face case sensitive problem ======
// Example #1.3
const lyrics3 = "Tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte parini. kala kala sada sada";

const doesExist3 = lyrics3.includes("Pakhi"); // The includes() method is case sensitive make sure search value (pakhi) is correct.
console.log(doesExist3); // Expected output false


/* =================================================================================== */

// ====== Easiest way to search String but you will face case sensitive problem ======
// Example #1.4
const lyrics4 = "Tumi bondhu kala pakhi ami jeno ki." + 
"boshonto kale tomay bolte parini. kala kala sada sada";

const searchString = "Pakhi"; // The search value (pakhi) is case sensitive make sure spelling is correct.

const doesExist4 = lyrics4.includes(searchString); 
console.log(doesExist4); // Expected output false



/* =============================================================================================
   ====== To ignore Or avoid case sensitive problem you must use toLowercase() method two different places. 
   (How to resolve case sensitive issue?) ======
   ============================================================================================= */
/* 
   ====== # 2 Way - The best Easiest way to search String using toLowercase() method to avid case sensitive problem ======
*/
// Example #2.1

const lyrics5 = "Tumi bondhu kala pakhi ami jeno ki." + 
"boshonto kale tomay bolte parini. kala kala sada sada";

/* 
   IMPORTANT NOTE: When you will use toLowercase() method to avoid case sensitive problem 
   make sure search value (Pakhi) must be all lowercase. Otherwise you will get error.
*/
const searchString5 = "Pakhi"; // The search value (pakhi) is case sensitive make sure spelling is correct.


/* 
   Here you just use toLowercase() method in one place with (lyrics5) string variable. 
   But you didn't use toLowercase() method in second place with (searchString5) search variable.
*/
const lyricsLowercase = lyrics5.toLowerCase(); 

const doesExist5 = lyricsLowercase.includes(searchString5);
console.log(doesExist5); // Expected output false


/* =================================================================================== */

// ====== # 2 Way - The best Easiest way to search String using toLowercase() method to avid case sensitive problem ======
// Example #2.2

const lyrics6 = "Tumi bondhu kala pakhi ami jeno ki." + 
"boshonto kale tomay bolte parini. kala kala sada sada";


/* IMPORTANT NOTE: If you use toLowercase method in two places 
   then it doesn't matter search value "pakhi" loewrcase or "Pakhi", "PAKHI" uppercase */
const searchString6 = "Pakhi";


/* Here apply toLowercase() method in two places with 
(lyrics5) string variable and (searchString5) search value variable. */
const lyricsLowercase6 = lyrics6.toLowerCase();
const searchStringLower = searchString6.toLowerCase();


const doesExist6 = lyricsLowercase.includes(searchStringLower);
console.log(doesExist6); // Expected output true


/* =================================================================================== */


/*
   ====== # 2 Way - 
   The best Easiest way to search String using toLowercase() method to avid case sensitive problem in one line ======
*/
// Example #2.3

const lyrics7 = "Tumi bondhu kala pakhi ami jeno ki." + 
"boshonto kale tomay bolte parini. kala kala sada sada";


/* IMPORTANT NOTE: If you use toLowercase method in two places 
   then it doesn't matter search value "pakhi" loewrcase or "Pakhi", "PAKHI" uppercase */
const searchString7 = "Pakhi";


/* Here apply toLowercase() method in two places with (lyrics7) string variable and (searchString7) search variable. 
   But you didn't use toLowercase() method in second place with.*/

const doesExist7OneLineCode = lyrics7.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist7OneLineCode); // Expected output true



