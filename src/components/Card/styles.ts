import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { borderGrey, textGrey } from '../../common/colors';

export const CardContainer = styled.div`
  border-radius: 8px;
  padding: 10px;
  border: solid 1px ${borderGrey};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const valueText = css`
  color: ${textGrey};
`;

export const CardComponent = styled.div`
  display: flex;
  padding-top: 5px;
  > :first-child {
    width: 22%;
  }
  > :nth-child(2) {
    width: 3%;
  }
  > :nth-child(3) {
    width: 65%;
  }
`;


