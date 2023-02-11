import React from 'react';
import Paragraph from './Paragraph';

const DemoOutput = ({ show }) => {
  console.log('DemoOutput is Running');
  return <Paragraph>{show ? 'This is new!' : ''}</Paragraph>;
};

export default DemoOutput;
