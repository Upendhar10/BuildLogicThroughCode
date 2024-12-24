//*  Find the Second Largest Element in an Array

function FindSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array must have atleast two elements";
  }

  let FirstMax = -Infinity;
  let SecondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > FirstMax) {
      SecondMax = FirstMax;
      FirstMax = arr[i];
    } else if (arr[i] > SecondMax && arr[i] < FirstMax) {
      SecondMax = arr[i];
    }
  }

  return SecondMax;
}

console.log(FindSecondLargest([10, 20, 4, 45, 99]));

// -----------------------------------------------------------------

//* Remove Duplicates from an Array

function RemoveDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (!result.includes(elem)) {
      result.push(elem);
    }
  }

  return result;
}

console.log(RemoveDuplicates([1, 2, 2, 3, 4, 1, 5]));

// ----------------------------------------------------------------

//*  Move Zeros to the End of an Array

function MoveZeroEnd(arr) {
  let result = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < count; i++) {
    result.push(0);
  }

  return result;
}

console.log(MoveZeroEnd([0, 1, 2, 0, 3, 4, 0]));
