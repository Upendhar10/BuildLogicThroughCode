//* Pattern-1 :

function Pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = " ";
    for (let j = n; j >= i; j--) {
      rowPattern += "* ";
    }
    console.log(rowPattern.trim());
  }
}

Pattern1(5);

// ---------------------------------------------------------------------------------------------------------------------------------------

// * Pattern - 2 :

function Pattern2(n) {
  for (let i = 1; i <= n; i++) {
    // rows
    let rowPattern = " ";
    for (let j = 1; j <= n - i; j++) {
      // spaces
      rowPattern += ". ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      // starts
      rowPattern += "* ";
    }
    console.log(rowPattern.trim());
  }
}

Pattern2(5);

// ---------------------------------------------------------------------------------------------------------------------------

//* Pattern - 3

function Pattern3(n) {
  for (let i = n; i >= 1; i--) {
    // rows
    let rowPattern = " ";
    for (let j = 1; j <= n - i; j++) {
      // spaces
      rowPattern += ". ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      // starts
      rowPattern += "* ";
    }
    console.log(rowPattern.trim());
  }
}

Pattern3(10);
