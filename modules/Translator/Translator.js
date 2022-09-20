export class Translator {
  constructor () {

    this.englishAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z']

    this.morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", 
    ".---", "-.-", ".-..", "--", "-.", "---", ".---.", "--.-", ".-.",
    "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  }

  /**
   * Method for translating a string (a-z) into morsecode.
   * 
   * @param {string} text the string to translate.
   * @returns String translated into morsecode.
   */
  englishToMorse(text) {
    let textString = text.toLowerCase()
    let stringArray = textString.split('')
    let answer = ''

    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.englishAlphabet.length; j++) {
        if (this.englishAlphabet[j] === stringArray[i])  {
          answer = answer + this.morseAlphabet[j] + ' '
        }
        
      }
      
    }
    console.log(answer) 
  }

  /**
   * Method for translating morse into english. 
   *
   * @param {string} text the string to translate.
   */
  morseToEnglish(text) {
    let textString = text.toLowerCase()
    let stringArray = textString.split(' ')
    let answer = ''

    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.morseAlphabet.length; j++) {
        if (this.morseAlphabet[j] === stringArray[i]) {
          answer = answer + this.englishAlphabet[j]
        }
      }
      
    }
    console.log(answer)
  }
}