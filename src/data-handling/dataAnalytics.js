export const analyzeData = (data) => {
    let yearlyData = {};
    let cropStats = {};
  
    data.forEach(row => {
      const year = row.Year;
      const crop = row.CropName;
      const production = parseFloat(row.Production) || 0;
      const yieldValue = parseFloat(row.Yield) || 0;
      const area = parseFloat(row.Area) || 0;
  
      // yearlData for the year has been initialized if not present
      if (!yearlyData[year]) {
        yearlyData[year] = { max: { crop: crop, value: production }, min: { crop: crop, value: production } };
      } else {
        // updation for maximum production of crop
        if (production > yearlyData[year].max.value) {
          yearlyData[year].max = { crop: crop, value: production };
        }
        // Updation for minimum production of crop
        if (production < yearlyData[year].min.value) {
          yearlyData[year].min = { crop: crop, value: production };
        }
      }
  
      // cropData for the crop has been initialized if not present
      if (!cropStats[crop]) {
        cropStats[crop] = { totalYield: yieldValue, totalArea: area, count: 1 };
      } else {
        cropStats[crop].totalYield += yieldValue;
        cropStats[crop].totalArea += area;
        cropStats[crop].count += 1;
      }
    });
  
    const yearData = Object.keys(yearlyData).map(year => ({
      year,
      maxCrop: yearlyData[year].max.crop,
      minCrop: yearlyData[year].min.crop
    }));
  
    const cropData = Object.keys(cropStats).map(crop => ({
      crop,
      avgYield: (cropStats[crop].totalYield / cropStats[crop].count).toFixed(3),
      avgArea: (cropStats[crop].totalArea / cropStats[crop].count).toFixed(3)
    }));
  
    return { yearData, cropData };
  };
  