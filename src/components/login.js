/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import InputBox from './inputBox'
import SignupButton from './signupButton';

function Login() {
  return(
    <div css={
      css`
        display: flex;
        height: 100vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      `}
    >
      <img src='./images/Logo.svg' css={css`margin-bottom: 97px;`} />
      <div>
        <InputBox label='학번' placeholder='학번'/>
        <InputBox label='비밀번호' placeholder='비밀번호'/>
        <SignupButton title='로그인' />
      </div>
    </div>
  )
}

export default Login;