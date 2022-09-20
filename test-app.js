import { Translator } from './modules/Translator/Translator.js'

// Test app to display methods in the module
//
//

const translator = new Translator()

let englishToMorseString = 'This will be translated into morse'
let morseToEnglishString = '- .... .. ... .-- .. .-.. .-.. -... . - .-. .- -. ... .-.. .- - . -.. .. -. - --- . -. --. .-.. .. ... ....' //thiswillbetranslatedintoenglish

// Logging out the results.
console.log(translator.englishToMorse(englishToMorseString))
console.log(translator.morseToEnglish(morseToEnglishString))