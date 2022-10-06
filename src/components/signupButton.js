/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { loginState, signupState } from '../atom';
import { useRecoilState } from 'recoil';
import { instance } from '../instance';
import { useNavigate } from 'react-router-dom';

function SignupButton({ title, loginType }) {
  const nav = useNavigate();
  const [signup, setSignup] = useRecoilState(signupState);
  const [login, setLogin] = useRecoilState(loginState);
  const postSignUp = async () => {
    try {
      const response = await instance.post('/user/signup', signup);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const postLogin = async () => {
    try {
      console.log(login);
      const response = await instance.post('/user/login', login);
      console.log(response);
      localStorage.setItem('access-token', response.data.accessToken);
      localStorage.setItem('user', response.data.authority);
      nav('/');
    } catch (error) {
      console.log(error);
    }
  }
  const selectPost = () => {
    loginType ? postLogin() : postSignUp();
  }
  return (
    <div css={css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.56rem;
    margin-bottom: 16px;
  `}>
      <button onClick={selectPost} css={css`
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