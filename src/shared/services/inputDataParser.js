const transformToArray = (data) => {
  let isQuotesEnabled = false; // need it to distinguish outer quotes from inner quotes
  let currentCell = ''; // collecting data for every cell here
  const result = [[]];

  // i - for every symbol, j - for every 'row' array in result
  for (let i = 0, j = 0; i < data.length; i++) {
    if ((data[i] === '"' || data[i] === '\'') && !isQuotesEnabled) {
      isQuotesEnabled = true;
      continue;
    } else if (isQuotesEnabled &&
              (data[i] === '"' || data[i] === '\'') &&
              (data[i + 1] === ',' || !data[i + 1])
    ) {
      isQuotesEnabled = false;

      // end of input of textarea
      if (!data[i + 1]) {
        result[j].push(currentCell);
      }

      continue;
    }

    // if we`re not in quotes, push phrase to 'row' array
    if (data[i] === ',' && !isQuotesEnabled) {
      result[j].push(currentCell);
      currentCell = '';
      continue;
    }

    currentCell += data[i];

    // start parsing new row if current one is ended
    if ((data[i] === '\n' && !isQuotesEnabled) || !data[i + 1]) {
      result[j].push(currentCell);
      result.push([]);
      j++;
      currentCell = '';
    }
  }

  return result;
};

export default transformToArray;
