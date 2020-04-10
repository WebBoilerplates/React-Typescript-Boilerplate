import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changeToggle, changeToggleAsync, exampleCount } from './exampleSlice';
import { Action } from 'redux';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Example(): React.ComponentElement<any, any> {
  const value = useSelector(exampleCount);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div>Hello, {value}!</div>
      <button onClick={(): Action => dispatch(changeToggle())}>toggle</button>
      <button onClick={(): Action => dispatch(changeToggleAsync())}>
        toggleAsync
      </button>
    </Wrapper>
  );
}
