# DAY - 31

1. **Compare Two Objects**

   Check if two objects have the same keys and values.

- **Input:**

  ```
  let obj1 = { a: 1, b: 2, c: 3 };
  let obj2 = { a: 1, b: 2, c: 3 };
  ```

- **Output:** true

2. **Convert an Array of Objects to a Single Object**

   Create an object where each element of the array becomes a property.

- **Input:**

  ```
  let arr = [
  { id: "a", value: 1 },
  { id: "b", value: 2 },
  { id: "c", value: 3 },
  ];
  ```

- **Output:**

  ```
  { a: 1, b: 2, c: 3 }
  ```

3. **Group Objects by a Property**

   Group an array of objects by a specified property.

- **Input:**

  ```
  let arr = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  ];
  ```

- **Output:**

  ```
  {
  fruit: [{ category: "fruit", name: "apple" }, { category: "fruit", name: "banana" }],
  vegetable: [{ category: "vegetable", name: "carrot" }]
  }
  ```
