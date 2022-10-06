/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

function InputBox({ label, placeholder, type }) {
  return (
    <div css={css`
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.56rem;
        margin-bottom: 16px;
      `}>
        <span css={
          css`
            display: inline-block;
            width: 155px;
            margin-right: 44px;
            text-align: right;
          `
        }>
          {label}
        </span>
        <input css={
          css`
            width: 613px;
            height: 65px;
            background: #FBFBFB;
            border: 0;
            box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
            box-sizing: border-box;
            border-radius: 10px;
            font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 1.56rem;
            padding: 0 0 0 21px;
            @media screen and (max-width: 830px) {
              width: 70vw;
            }
            &::placeholder{
              color: #6C6C6C;
            }
            &:focus{
              outline: none;
              border: 2px solid #3FB05E;
            }
          `}
          placeholder={placeholder}
          type={type}
        />
    </div>
  )
  
}

export default InputBox;