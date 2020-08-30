import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { displayFlex, flexRow, flexColumn } from '../../common/styles';
import {borderGrey} from '../../common/colors';

export const Container = styled.div`
  padding: 40px;
`;

export const HeaderContainer = styled.div`
  ${displayFlex};
  align-items: 'center';
  @media (max-width: 600px) {
    ${flexColumn}
  }
  @media (min-width: 600px) {
    ${flexRow};
    justify-content: 'space-between';
  }
`;

export const searchInput = css`
  ${displayFlex};
  flex: 1;
  border-radius: 10px;
  border: 2px solid ${borderGrey};
  padding: 10px;
  font-size: 14px;
  @media (min-width: 600px) {
    margin-right: 20px;
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;