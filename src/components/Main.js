/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react'
import Header from './Header'

function IdeaLink() {
  return (
    <div css={css`
      width: 280px;
      height: 420px;
      border-radius: 30px;
      background: #EBF3E9;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 30%);
    `}>
      <div css={css`
        width: 260px;
        height: 260px;
        border-radius: 30px 30px 0px 0px;
        margin: 10px;
        text-align: center;
        background-color: white;
      `}>
        <img src='./images/Logo.svg' alt='아이디어의 로고 사진' css={css`
          width: 240px;
          height: 240px;
          border-radius: 30px;
        `} />
      </div>
      <div css={css`
        font-size: 18px;
        padding: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
      `}>
        <div>
          <h4 css={css`
            margin: 0;
          `}>도담도담</h4>
          <span css={css`
            font-size: 0.6em;
          `}>소개소개소개소개</span>
        </div>
      </div>
      <div css={css`
        font-size: 18px;
        padding: 20px;
      `}>
        <span css={css`
            font-size: 0.6em;
            display: block;
          `}>서비스서비스서비스</span>
        <span css={css`
            font-size: 0.6em;
            display: block;
          `}>10/5 ~</span>
      </div>
    </div >
  )
}

function Button({ children, disabled, clickButton }) {
  return (
    <button css={css`
      border: ${!disabled} ? 2px solid black : 2px solid #767676;
      border-radius: 20px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      width: 100px;
      background-color: #F3F3F3;
      color: black;
    `} disabled={disabled} onClick={() => clickButton()}>
      {children}
    </button>
  )
}

function Main() {
  const [disabled, setDisabled] = useState([true, false, false]);
  const clickButton = (index) => {
    let newDisabledArray = [false, false, false];
    newDisabledArray[index] = true;
    setDisabled(newDisabledArray);
  }
  return (
    <>
      <Header />
      <div css={css`
        text-align: center;
        margin-top: 30px;
      `} >
        <img src='./images/logo.svg' alt="로고" css={css`
          width: 200px;
        `} />
      </div>
      <div css={css`
        justify-content: center;
        margin-top: 30px;
        display: flex;
        gap: 30px;
      `} >
        <Button disabled={disabled[0]} clickButton={() => clickButton(0)}>WEB</Button>
        <Button disabled={disabled[1]} clickButton={() => clickButton(1)}>APP</Button>
        <Button disabled={disabled[2]} clickButton={() => clickButton(2)}>IRON</Button>
      </div>
      <div>
        <button css={css`
          
        `}>글쓰기</button>
        <select>
          <option value="0">정렬</option>
          <option value="1">최신순</option>
          <option value="2">인기순</option>
        </select>
      </div>
      <div css={css`
        display: grid;
        width: 80%;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 0 auto;
        gap: 30px;
      `} >
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
      </div>
    </>
  )
}

export default Main