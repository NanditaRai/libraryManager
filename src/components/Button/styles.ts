import { css } from '@emotion/core';
import { white, green, darkGreen } from '../../common/colors';

export const buttonStyle = css`
  height: 40px;
  border-radius: 4px;
  font-size: 15px;
  display: inline-block;
  text-align: center;
  font-weight: 600;
  color: ${white};
  border: 1px solid ${green};
  background-color: ${green};
  cursor: pointer;
  min-width: 15%;
  &:hover {
    background: ${darkGreen};
    color: ${white};
  }
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;

