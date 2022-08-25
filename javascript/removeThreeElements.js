const array = [5, 4];

const removeThreeElements = (array) =>
    array.length < 3 ? (array = []) : array.slice(3);

const operationResult = removeThreeElements(array);
console.log(operationResult);
