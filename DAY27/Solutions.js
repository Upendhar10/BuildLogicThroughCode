//*  Check Anagrams

/*
    - An anagram string refers to a pair of strings that contain the exact same characters in the same frequency, but their order can be different. 
    - Essentially, one string can be rearranged to form the other.

    - If the two input strings are identical to each other then, they are called "Trivial Anagrams"

*/

function CheckAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return "Not Anagrams";
  } else if (str1 === str2) {
    return "Trivial Anagrams";
  }

  // Sort and compare
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2 ? "Anagrams" : "Not Anagrams";
}

console.log(CheckAnagrams("listen", "silent"));

// --------------------------------------------------------------------------

//* Check if Two Strings Have the Same Set of Characters

/*
  - If str2 is a rotation of str1, then appending str1 to itself will contain str2 as a substring.
*/

function ValidRotationStrings(str1, str2) {
  if (str1.length !== str2.length) {
    return "NO";
  } else if (str1 === str2) {
    return "YES";
  }

  let concatenated = str1 + str1;

  return concatenated.includes(str2) ? "YES" : "NO";
}

console.log(ValidRotationStrings("abcdd", "cdab"));

// --------------------------------------------------------------------------

//* Remove All Non-Alphabetic Characters

function RemoveNonAlphabets(str) {
  return str.replace(/[^a-zA-Z]/g, "");
}

console.log(RemoveNonAlphabets("abc123!@#"));
