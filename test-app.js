import { Translator } from './modules/Translator/Translator.js'

// Test app to display methods in the module
//
// !! Note that this module only works with characters a-z !!

const translator = new Translator()

let englishToMorseString = 'This will be translated into morse'
let morseToEnglishString = '- .... .. ... .-- .. .-.. .-.. -... . - .-. .- -. ... .-.. .- - . -.. .. -. - --- . -. --. .-.. .. ... ....' //thiswillbetranslatedintoenglish
let englishToBinaryString = 'Hello'
let binaryToEnglishString = '01001000 01000101 01001100 01001100 01001111'

// Logging out the results.
console.log(translator.englishToMorse(englishToMorseString))
console.log(translator.morseToEnglish(morseToEnglishString))
console.log(translator.englishToBinary(englishToBinaryString))
console.log(translator.binaryToEnglish(binaryToEnglishString))