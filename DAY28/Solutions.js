//* Find Duplicate Characters in a String

function FindDuplicatesChars(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (char === str.charAt(j)) {
        count++;
      }
    }
    if (count > 1 && !result.includes(char)) {
      result.push(char);
    }
  }

  console.log(result);
}

FindDuplicatesChars("programming");

// -----------------------------------------------------------------------

//* Count Vowels and Consonants

function CountVowelsAndConsonants(str) {
  let StrLen = str.length;
  let Vowels = 0;

  for (let i = 0; i < StrLen; i++) {
    let char = str.charAt(i).toLowerCase();

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      Vowels++;
    }
  }

  console.log(`Vowels:${Vowels} and Consonants: ${StrLen - Vowels}`);
}

CountVowelsAndConsonants("hello");

// ----------------------------------------------------------------------

//* Matrix Addition

/*
  - To perform Addition, both matrices should have same no.of elements in row and column respectively.

  - Matrix.length => No.of rows in the matrix
  - Matrix[0].length => No.of columns in the first row
*/

function MatrixAddition(matrixA, matrixB) {
  if (
    matrixA.length !== matrixB.length ||
    matrixA[0].length !== matrixB[0].length
  ) {
    return "Two Matrices size must be same to perform Addition.";
  }

  let result = [];

  for (let i = 0; i < matrixA.length; i++) {
    let row = [];

    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }

    result.push(row);
  }

  return result;
}

// Sample Matrices

let matA = [
  [1, 2],
  [3, 4],
];

let matB = [
  [5, 6],
  [7, 8],
];

console.log(MatrixAddition(matA, matB));
