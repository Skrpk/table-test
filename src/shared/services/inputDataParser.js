const parseData = (data) => {
  console.log(data);
  const rowsArray = data.split('\n').map(row => row.split(/,\s?/));

  return rowsArray;
};

export default parseData;
