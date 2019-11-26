const readlineSync = require("readline-sync");
let base = 0
let height = 0
let hypotenuse = 0

do{
  base = Number(readlineSync.question("Enter base: "));
} while (base > Number.MAX_SAFE_INTEGER || Number.isNaN(base) || base < 1 || base % 1 != 0)

do{
  height = Number(readlineSync.question("Enter height: "));
} while (height > Number.MAX_SAFE_INTEGER || Number.isNaN(height) || height < 1 || height % 1 != 0)

do{
  hypotenuse = Number(readlineSync.question("Enter hypotenuse: "));
} while (hypotenuse > Number.MAX_SAFE_INTEGER || Number.isNaN(hypotenuse) || hypotenuse < 1 || hypotenuse % 1 != 0)

if ((base*base) + (height*height) == (hypotenuse*hypotenuse)) {
  console.log("\nYes, that's a right triangle!")
}
else {
    console.log("\nNope...not a right triangle.")
}
