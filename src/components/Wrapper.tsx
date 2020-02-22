import styled, { ThemedStyledFunction } from 'styled-components';

interface FlexTypes {
  center: ThemedStyledFunction<'div', any> & any;
  left: ThemedStyledFunction<'div', any> & any;
  right: ThemedStyledFunction<'div', any> & any;
}

export const Flex: FlexTypes = {
  center: styled.div`
    display: flex;
    justify-content: center;
  `,
  left: styled.div`
    display: flex;
    justify-content: flex-start;
  `,
  right: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
};

const Wrapper = { Flex };
export default Wrapper;
