import React from 'react';
import styled from 'styled-components';

interface Iheader {
  header: string;
  paragraph?: string;
  id?: string | number;
}

const Header = ({
  header,
  paragraph = "It's an application for medical use",
  id=100
}: Iheader) => {
  return (
    <>
      <h1>{header}</h1>

      {paragraph}
      <p>{typeof id==='number'? id.toString():id}</p>
      
    </>
  );
};
export default Header;
