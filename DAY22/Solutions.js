//*  Print the Array in Sorted Order (Ascending and Descending)

/*
  Built-In Methods
Ascending Order : arr.sort((a, b) => a - b);
Descending Order : arr.sort((a, b) => b - a);

*/

function SortAscendingOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

function SortDescendingOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(SortAscendingOrder([5, 3, 8, 1]));
console.log(SortDescendingOrder([5, 3, 8, 1]));

// ---------------------------------------------------------------------------

//*  Finding the Longest Sequence of Consecutive 1s in a Binary Array

function LongConsequence1(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
    } else {
      count = 0;
    }
  }
  return count;
}

console.log(LongConsequence1([1, 1, 0, 1, 1, 1, 1]));

// --------------------------------------------------------------------------

//*  Finding the Most Frequent Element in an Array

// Return the most frequent number, else returns -1

function MostFrequentElement(arr) {
  let FrequentNum = -1;
  let MaxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }

    if (MaxCount < count) {
      MaxCount = Math.max(MaxCount, count);
      MaxCount > 1 ? (FrequentNum = arr[i]) : (FrequentNum = -1);
    }
  }

  return FrequentNum;
}

console.log(MostFrequentElement([1, 2, 3, 4, 5]));
