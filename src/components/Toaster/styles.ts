import { css } from '@emotion/core';
import { toasterBlack, white } from '../../common/colors';

export const toastContainer = css`
  position: absolute;
  left: 20px;
  right: 20px;
  padding: 4px;
  padding-left: 8px;
  border-radius: 4px;
  color: ${white};
  background: ${toasterBlack};
`;