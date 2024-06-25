import Papa from 'papaparse';

export const loadData = async (url) => {
  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: (results) => {
        const data = results.data.map(row => {
          // cleaning the data by handling missing values
          for (let key in row) {
            if (row[key] === null || row[key] === undefined || row[key] === '') {
              row[key] = 0;
            }
          }
          return row;
        });
        resolve(data);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
};
