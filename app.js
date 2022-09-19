import fs from 'node:fs'

const PATH_TO_TEXTFILE = "./text.txt"
const textFromFile = fs.readFileSync(PATH_TO_TEXTFILE, 'utf-8')
const arrayOfLetters = textFromFile.replaceAll(' ', '').split('')

const amountOfRows = getNrOfCharacters('\n', arrayOfLetters)
const nrOfEmptyRows = getNrOfEmptyRows(arrayOfLetters)

// Presenting the result
console.log('Number of rows: ' + amountOfRows)
console.log('Number of rows with characters: ' + (amountOfRows - nrOfEmptyRows))
console.log('Number of empty rows: ' + nrOfEmptyRows)

//
// Function section
//

function getNrOfCharacters(character, array) {
  let amountOfCharacters = 0
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] === character) {
      amountOfCharacters += 1 
    }
  }
  //count the last row. 
  if (array.length > 0) {
    amountOfCharacters += 1
  }
  return amountOfCharacters
}

function getNrOfEmptyRows(array) {
  let amountOfEmptyRows = 0
  for (let index = 0; index < array.length; index++) {
    if (array[index] === '\n' && array[index + 2]  === '\n') {
      amountOfEmptyRows += 1
    }
  }
  return amountOfEmptyRows
}




