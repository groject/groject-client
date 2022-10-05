/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react'
import Header from './Header'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';

function IdeaLink() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <>
      <div css={css`
      width: 280px;
      height: 420px;
      border-radius: 30px;
      background: #EBF3E9;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 30%);
      cursor: pointer;
    `}
      >
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
        `} onClick={() => setIsModalOpen(true)} />
        </div>
        <div css={css`
        font-size: 18px;
        padding: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
      `}>
          <div onClick={() => setIsModalOpen(true)}>
            <h4 css={css`
            margin: 0;
          `}>그로젝트</h4>
            <span css={css`
            font-size: 0.6em;
          `}>소개소개소개소개</span>
          </div>
        </div>
        <div css={css`
          font-size: 18px;
          padding: 20px;
          display: flex;
          justify-content: space-between;
        `}>
          <div onClick={() => setIsModalOpen(true)}>
            <span css={css`
            font-size: 0.6em;
            display: block;
          `}>서비스서비스서비스</span>
            <span css={css`
            font-size: 0.6em;
            display: block;
          `}>1일 전</span>
          </div>
          <div css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `} onClick={() => setLiked(prev => !prev)}>
            <img src={hover ? './images/hoverPlant.svg' : (!liked ? './images/defaultPlant.svg' : './images/clickPlant.svg')} alt='좋아요 개수' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
            <span css={css`
              font-size: 12px;
            `}>80</span>
          </div>

        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 100,
          },
          content: {
            width: "1100px",
            height: "500px",
            margin: "auto",
            borderRadius: "20px",
            overflowX: "hidden",
          },
        }}
      >
        <GrClose onClick={() => setIsModalOpen(false)} cursor='pointer' size={36} css={css`
          color: #898989;
        `} />
      </Modal>
    </>
  )
}

function Button({ children, disabled, clickButton }) {
  return (
    <button css={css`
      box-sizing: border-box;
      border: ${!disabled ? '2px solid black' : 'none'};
      border-radius: 20px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      width: 100px;
      background-color: ${!disabled ? '#F3F3F3' : '#3FB05E'};
      color: ${!disabled ? 'black' : 'white'};
    `} disabled={disabled} onClick={() => clickButton()}>
      {children}
    </button>
  )
}

function Main() {
  const [disabled, setDisabled] = useState([true, false, false]);
  const [dropdown, setDropdown] = useState(false);
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
        <Button disabled={disabled[2]} clickButton={() => clickButton(2)}>HW</Button>
      </div>
      <div css={css`
        margin: 30px;
        height: 40px;
        display: flex;
        gap: 5px;
      `}>
        <button css={css`
          border-radius: 10px;
          height: 40px;
          position: absolute;
          right: 285px;
          width: 80px;
          font-size: 16px;
          background-color: white;
          border: 1px solid black;
          cursor: pointer;
        `}>글쓰기</button>
        {/* <button css={css`
          height: 40px;
          position: absolute;
          right: 150px;
          font-size: 16px;
          border-radius: 10px;
          padding-left: 5px;
          width: 120px;

        `}> */}
        <ul css={css`
            list-style-type: none;
            margin: 0;
            padding: 0;
            position: absolute;
            text-align: left;
            right: 140px;
          `}>
          <li value="0" css={css`
            background-color: white;
            border-radius: ${dropdown ? '10px 10px 0 0' : '10px'};
            border: 1px solid black;
            height: 38px;
            width: 120px;
            line-height: 40px;
            padding-left: 10px;
          `} onClick={() => setDropdown(prev => !prev)}>정렬<img src={dropdown ? './images/up.svg' : './images/down.svg'} css={css`
            position: absolute;
            top: 18px;
            right: 20px;
          `} alt='화살표'></img></li>
          {dropdown && <>
            <li value="1" css={css`
            background-color: white;
            height: 40px;
            width: 120px;
            line-height: 40px;
            padding-left: 10px;
            transition: 0.5s;
            &:hover{
              background-color: #F1F1F1;
            }
          `}>최신순</li>
            <li value="2" css={css`
            background-color: white;
            height: 40px;
            width: 120px;
            line-height: 40px;
            padding-left: 10px;
            transition: 0.5s;
            &:hover{
              background-color: #F1F1F1;
            }
          `}>인기순</li>
          </>}
        </ul>
        {/* </button> */}
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