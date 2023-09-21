function formatCurrency(number) {
    return `$${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
}
  
function transformArrayToObject(array) {
    const obj = {};
    for (const [key, value] of array) {
      obj[key] = value;
    }
    return obj;
}
  
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
function convertToCamelCase(string) {
    return string
      .split(" ")
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return capitalizeFirstLetter(word);
        }
      })
    .join("");
}
  
module.exports = {
    formatCurrency,
    transformArrayToObject,
    capitalizeFirstLetter,
    convertToCamelCase,
};
  