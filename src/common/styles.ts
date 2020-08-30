import { css } from '@emotion/core'
import { borderGrey } from './colors';

export const displayFlex = css`
  display: flex;
`;

export const flexRow = css`
  flex-direction: row;
`;

export const flexColumn = css`
  flex-direction: column;
`;

export const centerItems = css`
  align-items: center;
  justify-content: center;
`;

export const formInput = css`
  height: 30px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 10px;
  border: 2px solid ${borderGrey};
  padding: 10px;
  font-size: 14px;
`;
