//* Pattern - 1

function Pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = " ";
    for (let j = 1; j <= i; j++) {
      rowPattern += `${j} `;
    }
    console.log(rowPattern);
  }
}

Pattern1(5);

// -------------------------------------------------------------------------

//* Pattern - 2

function Pattern2(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = " ";
    for (let j = 1; j <= i; j++) {
      rowPattern += `${i} `;
    }
    console.log(rowPattern);
  }
}

Pattern2(5);

// -------------------------------------------------------------------------

//* Pattern - 3

function Pattern3(n) {
  for (let i = n; i >= 1; i--) {
    let rowPattern = " ";
    for (let j = 1; j <= i; j++) {
      rowPattern += `${j} `;
    }
    console.log(rowPattern);
  }
}

Pattern3(5);
