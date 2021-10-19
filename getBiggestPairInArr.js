const inputArray = [3, 6, -2, -5, 7, 3];

const getBiggestPair = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] * arr[i + 1]) > result) {
      result = arr[i] * arr[i + 1];
    }
  }

  return result;
}

console.log(getBiggestPair(inputArray))