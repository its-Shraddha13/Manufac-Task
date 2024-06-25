
import React from 'react';
import { Table } from '@mantine/core';
import './CropTable.css'; 

const CropTable = ({ data }) => {
  const rows = data.map((row, index) => (
    <tr key={index} className={index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}>
      <td>{index + 1}</td> 
      <td>{row.crop}</td>
      <td>{row.avgYield}</td>
      <td>{row.avgArea}</td>
    </tr>
  ));

  return (
    <Table className="crop-table">
      <thead>
        <tr className="crop-table">
          <th>Serial No.</th>
          <th>Crop</th>
          <th>Average Yield (1950-2020)</th>
          <th>Average Cultivation Area (1950-2020)</th>
        </tr>
      </thead>
      <tbody className="m-5">{rows}</tbody>
    </Table>
  );
};

export default CropTable;
