const { 
    isAllCaps,
    countVowels,
    mergeAndSortArrays,
    findDuplicates,
} = require("./tdd_functions");
  
describe("isAllCaps Function", () => {
    test("should return true for an all-uppercase string", () => {
      expect(isAllCaps("HELLO")).toBe(true);
    });
  
    test("should return false for a mixed-case string", () => {
      expect(isAllCaps("Hello")).toBe(false);
    });
});
  
describe("countVowels Function", () => {
    test("should return the correct number of vowels in a string", () => {
      expect(countVowels("banana")).toBe(3);
      expect(countVowels("sky")).toBe(0);
    });
});
  
describe("mergeAndSortArrays Function", () => {
    test("should merge and sort two arrays of numbers", () => {
      const arr1 = [3, 1];
      const arr2 = [4, 2];
      const expected = [1, 2, 3, 4];
      expect(mergeAndSortArrays(arr1, arr2)).toEqual(expected);
    });
});
  
describe("findDuplicates Function", () => {
    test("should return an array of values that appear more than once", () => {
      const arr = [1, 2, 2, 3, 4, 4];
      const expected = [2, 4];
      expect(findDuplicates(arr)).toEqual(expected);
    });
});
  