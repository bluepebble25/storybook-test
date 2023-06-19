import React from 'react';
import { css } from '@emotion/react';
import MyButton from './components/MyButton';

function App() {
  return (
    <div css={containerStyle}>
      <div>
        <MyButton label="hi" primary />
        <MyButton label="hi" />
      </div>
      <br />
      <div>
        <MyButton label="hi" size={'large'} />
        <MyButton label="hi" size={'medium'} />
        <MyButton label="hi" size={'small'} />
      </div>
    </div>
  );
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default App;
