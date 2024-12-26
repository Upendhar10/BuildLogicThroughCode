//*  Longest Word in a Sentence

function LongestWord(sentence) {
  let sentenceArr = sentence.split(" ");

  let MaxCount = 0;
  let LongWord = "";

  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i].length > MaxCount) {
      MaxCount = sentenceArr[i].length;
      LongWord = sentenceArr[i];
    }
  }
  return LongWord;
}

console.log(LongestWord("The quick brown fox"));

// ----------------------------------------------------------------------------

//*  Find the First Non-Repeating Character

function NonRepeatingChar(str) {
  let frequency = {};

  let NRC = "";

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let ch of str) {
    if (frequency[ch] == 1) {
      NRC = ch;
      break;
    }
  }

  return NRC;
}

console.log(NonRepeatingChar("swiss"));

// ----------------------------------------------------------------------------

//*  Find All Substrings of a String

function PrintAllSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.substring(i, j));
    }
  }

  return result;
}

function PrintAllSubstrings2(str) {
  let result = [];

  // add all single chat at once
  for (let i = 0; i < str.length; i++) {
    result.push(str.charAt(i));
  }

  // Add substrings of length and above in sequence
  for (let i = 2; i <= str.length; i++) {
    for (let j = 0; j <= str.length - i; j++) {
      result.push(str.substring(j, j + i));
    }
  }

  return result;
}

// console.log(PrintAllSubstrings("abc"));
console.log(PrintAllSubstrings2("abc"));
