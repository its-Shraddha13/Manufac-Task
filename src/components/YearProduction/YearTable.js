
import React from 'react';
import { Table } from '@mantine/core';
import './YearTable.css'; 

const YearTable = ({ data }) => {
  const rows = data.map((row, index) => (
    <tr key={index} className={index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}>
      <td>{index + 1}</td> 
      <td>{row.year}</td>
      <td>{row.maxCrop}</td>
      <td>{row.minCrop}</td>
    </tr>
  ));

  return (
    <Table className="year-table">
      <thead>
        <tr className="year-table">
          <th>Serial No.</th>
          <th>Year</th>
          <th>Crop with Maximum Production</th>
          <th>Crop with Minimum Production</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default YearTable;
