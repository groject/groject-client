/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

function SignupButton({ title }) {
  return(
    <div css={css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.56rem;
    margin-bottom: 16px;
  `}>
      <button css={css`
        width: 810px;
        height: 65px;
        background: #3FB05E;
        border: 0;
        color: #fff;
        box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.56rem;
        margin-top: 70px;
        @media screen and (max-width: 830px) {
          width: 98vw;
        }
      `}>
        {title}
      </button>
    </div>
  )
}

export default SignupButton;