/** @jsx jsx */
import { jsx } from '@emotion/core';
import { buttonStyle } from './styles';

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children: string
}

const Button = ({onClick, children} : Props) => {
  return (
    <button type="button" css={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
