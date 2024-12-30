//* Object Keys and Values

let obj = { name: "John", age: 25, city: "New York" };
let obj1 = { name: "John", age: 25 };
let obj2 = { city: "New York", country: "USA" };

// ------------------------------------------------------------------------------------------

function PrintKeysValues(Obj) {
  console.log("Keys : ", Object.keys(Obj));
  console.log("Values: ", Object.values(Obj));
}

PrintKeysValues(obj);

// -------------------------------------------------------------

//* Merge two Objects

function MergeObjects(Obj1, Obj2) {
  return Object.assign({}, Obj1, Obj2);
}

console.log(MergeObjects(obj1, obj2));

// -------------------------------------------------------------

//* Swap Keys and Values

function SwapKeysValues(Obj) {
  let result = {};

  for (key in Obj) {
    result[Obj[key]] = key;
  }

  return result;
}

console.log(SwapKeysValues(obj));
