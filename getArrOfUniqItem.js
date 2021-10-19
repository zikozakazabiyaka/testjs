const string = 'Hello World!';

const getArrOfUniqItem = (str) => {
  const obj = {};
  const result = []

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  for (const key in obj) {
    result.push({symbol: key, amount:obj[key]})
  }

  return result;
}

console.log(getArrOfUniqItem(string));