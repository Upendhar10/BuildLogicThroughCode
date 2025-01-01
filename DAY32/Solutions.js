let obj1 = { name: "John", age: 25, city: "New York" };

let obj2 = { a: 1, b: { c: 2, d: { e: 3 } } };

// -----------------------------------------------------------------
//*  Clone an Object

function CloneObject(Obj) {
  // using spread operator
  let ObjCopy1 = { ...Obj };

  // using Object.assign(target, obj)
  let ObjCopy2 = Object.assign({}, Obj);

  return ObjCopy2;
}

console.log(CloneObject(obj1));

// -----------------------------------------------------------------

//*  Flatten a Nested Object

function FlattenNestedObject(Obj) {
  let result = {};

  let keysToProcess = Object.entries(Obj);

  while (keysToProcess.length > 0) {
    // get the first key value pair
    let [currentkey, value] = keysToProcess.shift();

    if (typeof value === "object" && value !== null) {
      // If the value is an object, iterate over its keys
      for (let subkey in value) {
        let newkey = `${currentkey}.${subkey}`; // flatten the key
        keysToProcess.push([newkey, value[subkey]]);
      }
    } else {
      // If it's not an object, add it to the result
      result[currentkey] = value;
    }
  }

  return result;
}

console.log(FlattenNestedObject(obj2));

// ----------------------------------------------------------------

//*  Sum of N Natural Numbers using Recursion

function SumOfNRecursion(N) {
  // Base condition
  if (N === 1) {
    return 1;
  }

  // recurrence relation
  return N + SumOfNRecursion(N - 1);
}

console.log(SumOfNRecursion(5));
