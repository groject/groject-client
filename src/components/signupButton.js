/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

function SignupButton({ title }) {
  function handleClick(e) {
    window.location.replace('/')
  }
  return(
    <div css={css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.56rem;
    margin-bottom: 16px;
  `}>
      <button onClick ={handleClick} css={css`
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
        transition: transform .3s;
        @media screen and (max-width: 830px) {
          width: 98vw;
        }

        &:hover{
          transform: scale(1.01);
          cursor: pointer;
        }

        &:active{
          transform: scale(1);
          background-color: #389F53;
        }
      `}>
        {title}
      </button>
    </div>
  )
}

export default SignupButton;