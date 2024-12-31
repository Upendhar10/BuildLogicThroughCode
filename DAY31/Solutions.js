let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { a: 1, b: 2, c: 3 };

let arr1 = [
  { id: "a", value: 1 },
  { id: "b", value: 2 },
  { id: "c", value: 3 },
];

let arr2 = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
];

// -----------------------------------------------------------------

//*  Compare Two Objects
function CompareTwoObjects(Obj1, Obj2) {
  if (Object.keys(Obj1).length !== Object.keys(Obj2)) {
    return false;
  }

  for (let key in Obj1) {
    if (Obj1[key] !== Obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(CompareTwoObjects(obj1, obj2));

// --------------------------------------------------------------------

//*  Convert an Array of Objects to a Single Object

function ConvertToObject(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    result[arr[i].id] = arr[i].value;
  }

  return result;
}

function ConvertToObject2(arr) {
  let result = arr.map((item) => [item.id, item.value]);

  // console.log(result);

  result = Object.fromEntries(result);

  return result;
}

console.log(ConvertToObject(arr1));
// console.log(ConvertToObject2(arr1));

// --------------------------------------------------------------------

//* Group Objects by Property

function GroupObjects(arr) {
  let Grouped = {};

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].category;

    if (!Grouped[key]) {
      Grouped[key] = [];
    }
    Grouped[key].push(arr[i]);
  }

  return Grouped;
}

function GroupObjects2(arr) {
  return arr.reduce((Grouped, item) => {
    let key = item.category;

    if (!Grouped[key]) {
      Grouped[key] = [];
    }

    Grouped[key].push(item);
    return Grouped;
  }, {});
}

console.log(GroupObjects(arr2));
// console.log(GroupObjects2(arr2));
