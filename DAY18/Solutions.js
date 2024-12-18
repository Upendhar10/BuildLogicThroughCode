//* Pattern - 1

function PrintPattern1(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = "";

    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }

    for (let k = 1; k <= 2 * (n - i); k++) {
      rowPattern += "  ";
    }

    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }
    console.log(rowPattern);
  }

  for (let i = n - 1; i >= 1; i--) {
    let rowPattern = "";

    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }

    for (let k = 1; k <= 2 * (n - i); k++) {
      rowPattern += "  ";
    }

    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }
    console.log(rowPattern);
  }
}

PrintPattern1(5);

function PrintPattern1Optimized(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    // Determine the row index
    let rowIndex = i <= n ? i : 2 * n - i;

    // Left stars
    let leftStars = "* ".repeat(rowIndex);

    // Middle spaces
    let middleSpaces = "  ".repeat(2 * (n - rowIndex));

    // Right stars
    let rightStars = "* ".repeat(rowIndex);

    // Print the complete row
    console.log(leftStars + middleSpaces + rightStars);
  }
}

// PrintPattern1Optimized(5);

// -----------------------------------------------------------

//* Pattern - 2

function PrintPattern2(n) {
  for (let i = n; i >= 1; i--) {
    rowPattern = "";
    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }

    for (let k = 1; k <= 2 * (n - i); k++) {
      rowPattern += "  ";
    }

    for (let l = 1; l <= i; l++) {
      rowPattern += "* ";
    }

    console.log(rowPattern);
  }

  for (let i = 1; i <= n; i++) {
    rowPattern = "";
    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }

    for (let k = 1; k <= 2 * (n - i); k++) {
      rowPattern += "  ";
    }

    for (let l = 1; l <= i; l++) {
      rowPattern += "* ";
    }

    console.log(rowPattern);
  }
}

PrintPattern2(5);

// ----------------------------------------------------------

//* Pattern - 3

function PrintPattern3(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let rowPattern = "";
    for (let j = 1; j <= i; j++) {
      rowPattern += num + " ";
      num++;
    }
    console.log(rowPattern);
  }
}

PrintPattern3(5);
