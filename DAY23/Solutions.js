//* Missing Number

function FindMissingNum(arr) {
  let MissingNum = null;

  let n = arr.length + 1;

  let TotalSum = (n * (n + 1)) / 2;

  let ActualSum = arr.reduce((acc, currNum) => acc + currNum, 0);

  MissingNum = TotalSum - ActualSum;

  return MissingNum;
}

console.log(FindMissingNum([1, 2, 4, 5, 6]));

// -----------------------------------------------------------------

//* Majority Element

function FindMajorityElement(arr) {
  let MajorityCount = arr.length / 2;
  let MajorityElem = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }

    if (count > MajorityCount) {
      MajorityCount = count;
      MajorityElem = arr[i];
    }
  }

  return MajorityElem;
}

console.log(FindMajorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));

// ---------------------------------------------------------------

//* Reverse an Array

/*
    arr.reverse() method returns a new array with the desired result, but it also modifies the existing array as well

    arr.toReversed() method returns a new array with the desired result, but it will not modify the existing array.
*/

function ReverseArray(arr) {
  //   let reversedArr = arr.reverse();
  let reversedArr = arr.toReversed();

  //   console.log(arr);
  console.log(reversedArr);
}

ReverseArray([1, 2, 3, 4, 5]);
