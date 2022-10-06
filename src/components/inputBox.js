/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { loginState, signupState } from '../atom';
import { useRecoilState } from 'recoil';

function InputBox({ label, placeholder, type, engName, loginType }) {
  const [signup, setSignup] = useRecoilState(signupState);
  const [login, setLogin] = useRecoilState(loginState);
  const onChange = (e) => {
    const { name, value } = e.target;
    const newInputs = loginType ? login : signup
    const nextInputs = {
      ...newInputs,
      [name]: value,
    }
    loginType ? setLogin(nextInputs) : setSignup(nextInputs);
  }
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
        name={engName}
        onChange={onChange}
      />
    </div>
  )

}

export default InputBox;