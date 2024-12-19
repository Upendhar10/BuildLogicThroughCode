//*  Pattern - 1

function PrintPattern1(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = "";

    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 == 0) {
        rowPattern += 1 + " ";
      } else {
        rowPattern += 0 + " ";
      }
    }
    console.log(rowPattern);
  }
}

PrintPattern1(5);

// --------------------------------------------------------------------------------

//* Pattern - 2

function PrintPattern2(n) {
  let size = 2 * n - 1;
  for (let i = 1; i <= size; i++) {
    let rowPattern = "";
    for (let j = 1; j <= size; j++) {
      let value =
        n -
        Math.min(
          Math.min(i - 1, size - i), // Distance from top or bottom edge
          Math.min(j - 1, size - j) // Distance from left or right edge
        );
      rowPattern += `${value} `;
    }

    console.log(rowPattern);
  }
}

PrintPattern2(4);

// -------------------------------------------------------------------------------

//* Pattern - 3

function PrintPattern3(n) {
  let startChar = "E".charCodeAt(0);

  for (let i = 1; i <= n; i++) {
    let rowPattern = "";

    let currentChar = startChar - i;

    for (let j = 1; j <= i; j++) {
      rowPattern += String.fromCharCode(currentChar + j) + " ";
    }
    console.log(rowPattern);
  }
}

PrintPattern3(5);
