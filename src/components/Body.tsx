import React from 'react';
import styled from 'styled-components';

interface Idata {
  id: string;
  name: string;
  speciality: string;
  availability: string;
}

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const TableData = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Body = () => {
  const data: Idata[] = [
    { id: '01', name: 'Dr Joshi', speciality: 'Heart', availability: 'Yes' },
    { id: '02', name: 'Dr Mhatre', speciality: 'Brain', availability: 'Yes' },
    { id: '03', name: 'Dr Jain', speciality: 'Kidney', availability: 'Yes' },
    { id: '04', name: 'Dr Jagtap', speciality: 'Gastro', availability: 'Yes' },
    { id: '05', name: 'Dr Doshi', speciality: 'Ortho', availability: 'Yes' },
  ];

  return (
    <>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Doctor</TableHeader>
            <TableHeader>Speciality</TableHeader>
            <TableHeader>Availability</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <TableData>{item.id}</TableData>
              <TableData>{item.name}</TableData>
              <TableData>{item.speciality}</TableData>
              <TableData>{item.availability}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      <div></div>
    </>
  );
};

export default Body;
