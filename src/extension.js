import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.h3`
  color: skyblue;
  border: 1px solid #eee;
  padding: 15px;
`;
const SubTitle = styled.h4`
  color: orange;
`;

const Extension = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Title>Extension.</Title>
      {active && <SubTitle>Subtitle</SubTitle>}
      <button onClick={() => setActive(!active)}>Toggle</button>
    </div>
  )
};

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);
ReactDOM.render(<Extension />, rootEl);
