function isAllCaps(str) {
    return str === str.toUpperCase();
}
  
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return str.split("").filter((char) => vowels.includes(char)).length;
}

function mergeAndSortArrays(arr1, arr2) {
    const merged = [...arr1, ...arr2];
    return merged.sort((a, b) => a - b);
}

function findDuplicates(arr) {
    const countMap = {};
    const duplicates = [];
  
    for (const item of arr) {
      if (countMap[item]) {
        duplicates.push(item);
      } else {
        countMap[item] = 1;
      }
    } 
    return [...new Set(duplicates)];
}
  
module.exports = {
    isAllCaps,
    countVowels,
    mergeAndSortArrays,
    findDuplicates,
};
  