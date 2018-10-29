import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from './Theme';
import { Card, Row, Input, Text } from './components';

export default function Greeting() {
  const theme = useContext(ThemeContext);

  const [surname, setSurname] = useState('Potter');
  const [name, setName] = useState('Harry');
  useEffect(() => {
    document.title = name + ' ' + surname;
  });

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Card theme={theme}>
      <Row label="Name">
        <Input value={name} onChange={setName} />
      </Row>
      <Row label="Surname">
        <Input value={surname} onChange={setSurname} />
      </Row>
      <Row label="Width">
        <Text>{width}</Text>
      </Row>
    </Card>
  );
}
