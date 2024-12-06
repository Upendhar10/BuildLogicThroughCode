//* Pattern - 1

function Pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = "";
    for (let j = 1; j <= n; j++) {
      rowPattern += "* ";
    }
    console.log(rowPattern);
  }
}

console.log("Pattern - 1");

Pattern1(5);

// --------------------------------------------------------------------------------------

//* Pattern - 2

function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = " ";
    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }
    console.log(rowPattern);
  }
}

console.log("Pattern - 2");
pattern2(5);

// --------------------------------------------------------------------------------------

//* Pattern - 3

function Pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = " ";
    for (let j = 1; j <= n; j++) {
      if (i == 1 || i == n || j == 1 || j == n) {
        rowPattern += "* ";
      } else {
        rowPattern += "  ";
      }
    }
    console.log(rowPattern.trim());
  }
}

console.log("Pattern - 3");
Pattern3(5);
