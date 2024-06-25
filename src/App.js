import React, { useState, useEffect } from 'react';
import { Container } from '@mantine/core';
import { loadData } from './data-handling/dataRefining';
import { analyzeData } from './data-handling/dataAnalytics';
import YearTable from './components/YearProduction/YearTable';
import CropTable from './components/CropStats/CropTable';

function App() {
  const [yearData, setYearData] = useState([]);
  const [cropData, setCropData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadData('/agriculturalDataset.csv');
      console.log("Loaded Data:", data); // Add this line
      const { yearData, cropData } = analyzeData(data);
      console.log("Year Data:", yearData); // Add this line
      console.log("Crop Data:", cropData); // Add this line
      setYearData(yearData);
      setCropData(cropData);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Indian Agriculture Data Analytics</h1>
      <h2 className="heading1">Yearly Crop Production</h2>
      <YearTable data={yearData} />
      <h2 className="heading2">Crop Statistics (1950-2020)</h2>
      <CropTable data={cropData} />
    </Container>
  );
}

export default App;
