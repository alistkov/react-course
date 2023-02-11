import React from 'react';

const DemoOutput = ({ children }) => {
  console.log('Paragraph is Running');
  return <p>{children}</p>;
};

export default DemoOutput;
