export class Translator {
  constructor () {

    this.englishAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z']

    this.morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", 
    ".---", "-.-", ".-..", "--", "-.", "---", ".---.", "--.-", ".-.",
    "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

    this.binaryAlphabet = ['01000001', '01000010', '01000011', '01000100', '01000101', '01000110', '01000111', '01001000', '01001001', '01001010', '01001011', '01001100', '01001101', '01001110', '01001111', '01010000', '01010001', '01010010', '01010011', '01010100', '01010101', '01010110', '01010111', '01011000', '01011001', '01011010']
  }

  binaryToEnglish(text) {
    let textString = text
    let stringArray = textString.split(' ')
    let answer = ''

    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.binaryAlphabet.length; j++) {
        if (this.binaryAlphabet[j] === stringArray[i]) {
          answer = answer + this.englishAlphabet[j]
        }
      }
      
    }
    return answer
  }

  /**
   * Method for translating text to binary. 
   *
   * @param {string} text String to translate
   * @returns string translated into binary code. 
   */
  englishToBinary(text) {
    let textString = text.toLowerCase()
    let stringArray = textString.split('')
    let answer = ''

    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.englishAlphabet.length; j++) {
        if (this.englishAlphabet[j] === stringArray[i])  {
          answer = answer + this.binaryAlphabet[j] + ' '
        }
        
      }
      
    }
    return answer
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

    /* stringArray.forEach(letter => {
      if (!this.englishAlphabet.includes(letter)) {
        throw new Error('Error: This is not a valid input, only a-z')
        
      }
    }) */

    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.englishAlphabet.length; j++) {
        if (this.englishAlphabet[j] === stringArray[i])  {
          answer = answer + this.morseAlphabet[j] + ' '
        }
        
      }
      
    }
    return answer
  }

  /**
   * Method for translating morse into english. 
   *
   * @param {string} text the string to translate.
   * @returns String translated into english from morsecode.
   */
  morseToEnglish(text) {
    let textString = text
    let stringArray = textString.split(' ')
    let answer = ''

    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.morseAlphabet.length; j++) {
        if (this.morseAlphabet[j] === stringArray[i]) {
          answer = answer + this.englishAlphabet[j]
        }
      }
      
    }
    return answer
  }
}