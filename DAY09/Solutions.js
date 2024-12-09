//* Pattern - 1

function Pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = " ";
    for (let j = 1; j <= i; j++) {
      rowPattern += `${j} `;
    }
    for (let k = 1; k <= 2 * (n - i); k++) {
      rowPattern += "  ";
    }
    for (let l = i; l >= 1; l--) {
      rowPattern += `${l} `;
    }
    console.log(rowPattern);
  }
}

Pattern1(5);

// --------------------------------------------------------------------------------------

//* Pattern - 2

function Pattern2(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = " ";
    for (let j = 0; j < i; j++) {
      rowPattern += String.fromCharCode(65 + j) + " ";
    }
    console.log(rowPattern.trim());
  }
}

Pattern2(5);

// --------------------------------------------------------------------------------------

//* Pattern - 3

function Pattern3(n) {
  for (let i = n; i >= 1; i--) {
    let rowPattern = " ";
    for (let j = 0; j < i; j++) {
      rowPattern += String.fromCharCode(65 + j) + " ";
    }
    console.log(rowPattern.trim());
  }
}

Pattern3(5);
