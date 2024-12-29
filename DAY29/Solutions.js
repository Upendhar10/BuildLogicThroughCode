//* Matrix Multipication

/*
    # Matrix Multiplication Rules:
    - The no.of rows in the matrixA should be equal to the no.of columns matrixB.
    - The no.of columns in the matrixA should be equal to the no.of rows in the matrixB.
*/

function MatrixMultiplication(matrixA, matrixB) {
  if (matrixA[0].length !== matrixB.length) {
    return "Invalid Inputs, for this Question";
  }

  let rowSize = matrixA.length;
  let columnSize = matrixB[0].length;
  let commonSize = matrixB.length;

  let result = [];

  for (let i = 0; i < rowSize; i++) {
    let row = [];

    for (let j = 0; j < columnSize; j++) {
      let sum = 0;

      for (let k = 0; k < commonSize; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

let MatA = [
  [1, 2],
  [3, 4],
];

let MatB = [
  [5, 6],
  [7, 8],
];

console.log(MatrixMultiplication(MatA, MatB));

//----------------------------------------------------------------

//* Search an Element in a Matrix

function SearchElementInMatrix(Matrix, target) {
  for (let i = 0; i < Matrix.length; i++) {
    for (let j = 0; j < Matrix[i].length; j++) {
      if (Matrix[i][j] === target) {
        return `Element is found at ${i} row, ${j} column`;
      }
    }
  }
  return "Element Not Found!";
}

let MatrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(SearchElementInMatrix(MatrixA, 7));

// --------------------------------------------------------------

//* Matrix Transpose

/*
    - If a matrix A has dimensions 𝑚×𝑛 (with 𝑚 rows and 𝑛 columns), its transpose 𝐴^𝑇 will have dimensions 𝑛×𝑚 (with 𝑛 rows and 𝑚 columns). 
    - In the transpose matrix, the element at position 𝐴[𝑖][𝑗] in the original matrix becomes 𝐴^𝑇[𝑗][𝑖]
*/

function MatrixTranspose(matrix) {
  let rowSize = matrix.length;
  let columnSize = matrix[0].length;

  let TransposeMatrix = [];

  for (let i = 0; i < columnSize; i++) {
    let row = [];
    for (let j = 0; j < rowSize; j++) {
      row.push(matrix[j][i]);
    }

    TransposeMatrix.push(row);
  }
  return TransposeMatrix;
}

let Matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(MatrixTranspose(Matrix));
