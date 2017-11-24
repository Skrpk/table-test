const transformToArray = (data) => {
  let isQuotesEnabled = false;
  let currentCell = '';
  const result = [];
  result[0] = [];

  for (let i = 0, j = 0; i < data.length; i++) {
    if ((data[i] === '"' || data[i] === '\'') && !isQuotesEnabled) {
      isQuotesEnabled = true;
      continue;
    } else if (isQuotesEnabled &&
              (data[i] === '"' || data[i] === '\'') &&
              (data[i + 1] === ',' || !data[i + 1])
    ) {
      isQuotesEnabled = false;

      if (!data[i + 1]) {
        result[j].push(currentCell);
      }

      continue;
    }

    if (data[i] === ',' && !isQuotesEnabled) {
      result[j].push(currentCell);
      currentCell = '';
      continue;
    }

    currentCell += data[i];

    if ((data[i] === '\n' && !isQuotesEnabled) || !data[i + 1]) {
      result[j].push(currentCell);
      result.push([]);
      j++;
      currentCell = '';
    }
  }

  return result;
};

const parseData = (data) => {
  const rowsArray = transformToArray(data);

  return rowsArray;
};

export default parseData;
