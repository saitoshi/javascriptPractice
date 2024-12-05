/**
 * @name inputFunction
 * @array setofInputs - a collection of 3D array where the first part contains the function and second contains the keyword or term
 * @return the modified list as a string
 */
function inputFunction(setOfInputs) {
  const results = [];
  for (let i = 0; i < setOfInputs.length; i++) {
    const expression = setOfInputs[i][0];
    switch (expression) {
      case 'ADD':
        if (results.length > 0) {
          results.push(results[results.length - 1] + ' ' + setOfInputs[i][1]);
        } else {
          results.push(setOfInputs[i][1]);
        }
        break;
      case 'UNDO':
        if (results.length > 0) {
          results.pop();
        }
        break;
      case 'DEL':
        if (results.length > 0) {
          const tempStorage = results[results.length - 1].split(' ');
          const concatItem = tempStorage[tempStorage.length - 1];
          console.log(concatItem);
          results.push(
            results[results.length - 2] +
              ' ' +
              concatItem.slice(0, concatItem.length - setOfInputs[i][1]),
          );
        }
        break;
      default:
        break;
    }
    console.log(results);
  }
  return results[results.length - 1].toString();
}

const itemList = [['ADD', 'Hello'], ['ADD', 'World'], ['DEL', 2], ['UNDO']];
const result = inputFunction(itemList);
console.log(result);
