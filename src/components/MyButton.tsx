import React from 'react';
import { css } from '@emotion/react';

interface MyButtonProps {
  /**
   * 페이지에서 가장 중요성을 갖는 버튼 요소인가?
   */
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

function MyButton({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: MyButtonProps) {
  return (
    <button
      type="button"
      css={[
        MyButtonStyle,
        getVariantStyles({ primary }),
        getSizeStyles({ size }),
        backgroundColor && setBackgroundColor(backgroundColor),
      ]}
      {...props}
    >
      {label}
    </button>
  );
}

const MyButtonStyle = css`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

const getVariantStyles = ({ primary = false }) =>
  primary
    ? css`
        color: white;
        background-color: #1ea7fd;
      `
    : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;

const getSizeStyles = ({ size = 'medium' }) => {
  switch (size) {
    case 'small': {
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    }
    case 'large': {
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    }
    default: {
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
    }
  }
};

const setBackgroundColor = (colorCode: string) => css`
  background-color: ${colorCode};
`;

export default MyButton;
