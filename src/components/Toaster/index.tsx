/** @jsx jsx */
import { jsx } from '@emotion/core';
import { toastContainer } from './styles';

type Props = {
  text: string[] | string,
  showToast: boolean
}

const Toaster = ({ text, showToast }: Props) => {

  const renderToastMsg = () => {
    if (typeof text === 'string') {
      return <div>{text}</div>;
    }
    return (
      <ul>
        {text.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    );
  };

  return showToast && <div css={toastContainer}>{renderToastMsg()}</div>;
};

export default Toaster;
