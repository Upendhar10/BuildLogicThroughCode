//* Pattern - 1

function PrintPattern1(n) {
  // Top half of the diamond
  for (let i = 1; i <= n; i++) {
    let rowPattern = "";

    rowPattern += " ".repeat(n - i);

    // Print stars and spaces
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        rowPattern += "*";
      } else {
        rowPattern += " ";
      }
    }

    console.log(rowPattern);
  }

  // Bottom half of the diamond
  for (let i = n - 1; i >= 1; i--) {
    let rowPattern = "";

    rowPattern += " ".repeat(n - i);

    // Print stars and spaces
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        rowPattern += "*";
      } else {
        rowPattern += " ";
      }
    }

    console.log(rowPattern);
  }
}

PrintPattern1(4);

// ----------------------------------------------------------

//* Pattern - 2

function PrintPattern2(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = "";

    // Print leading spaces
    rowPattern += ".".repeat(2 * (n - i));

    // Print ascending numbers
    for (let j = 1; j <= i; j++) {
      rowPattern += j + " ";
    }

    // Print descending numbers
    for (let j = i - 1; j >= 1; j--) {
      rowPattern += j + " ";
    }

    console.log(rowPattern.trim());
  }
}

PrintPattern2(3);

// ----------------------------------------------------------

//* Pattern - 3

function PrintPattern3(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = "";

    for (let j = 1; j <= n; j++) {
      if ((i + j) % 2 == 0) {
        rowPattern += "0 ";
      } else {
        rowPattern += "1 ";
      }
    }
    console.log(rowPattern);
  }
}

PrintPattern3(4);
