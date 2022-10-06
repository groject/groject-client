/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react'
import Header from './Header'
import Modal from 'react-modal';
import { MdOutlineClose } from 'react-icons/md';
import Select from './select';

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
            padding: "50px",
          },
        }}
      >
        <MdOutlineClose onClick={() => setIsModalOpen(false)} size={36} css={css`
          cursor: pointer;
          color: #898989;
          float: right;
        `} />
        <div>
          <div css={css`
            display: flex;
          `}>
            <div css={css`
              display: inline-block;
              width: 250px;
              height: 250px;
              background-color: #F6F6F6;
              border-radius: 20px;
              padding: 10px;
              border: 1px solid black;
              text-align: center;
              margin-left: 50px;
            `}>
              <img src={`./images/${false ? 'Logo' : 'clickPlant'}.svg`} alt='프로젝트 로고' css={css`
                width: 250px;
                height: 250px;
              `} />
            </div>
            <div css={css`
              display: inline-block;
              width: 742px;
              height: 250px;
              padding: 30px;
            `}>
              <div>
                <h4 css={css`
                font-size: 32px;
                margin: 0;
              `}>그로젝트 <span css={css`
                font-size: 24px;
                font-weight: normal;
                color: #727272;
              `}>2022.10.05</span></h4>
                <span css={css`
                font-size: 20px;
              `}>스마트 스쿨 플랫폼!</span>
              </div>
              <div css={css`
                display: flex;
                flex-direction: column;
                margin-top: 80px;
              `}>
                <span css={css`
                font-size: 20px;
              `}>서비스 종류: 웹 서비스, 앱 서비스</span>
                <span css={css`
                font-size: 20px;
              `}>사용 언어/툴: React.js, typeScript, .......</span>
                <span css={css`
                font-size: 20px;
              `}>연락처: 010-1111-2222</span>
              </div>
            </div>
          </div>
          <p css={css`
            font-size: 20px;
            width: 1000px;
            margin: 0;
            margin-left: 50px;
            word-break: break-all;
          `}>
            화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!화이팅 하세 요 !!
          </p>
        </div>
        <div css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          right: 50px;
          cursor: pointer;
          bottom: 50px;
        `} onClick={() => setLiked(prev => !prev)}>
          <img src={hover ? './images/hoverPlant.svg' : (!liked ? './images/defaultPlant.svg' : './images/clickPlant.svg')} alt='좋아요 개수' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
          <span css={css`
          font-size: 12px;
        `}>80</span>
        </div>
      </Modal>
    </>
  )
}

function Button({ children, disabled, clickButton }) {
  return (
    <button css={css`
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

function JoinButton({ children, color }) {
  return (
    <button css={css`
      background-color: ${color};
      border-radius: 10px;
      border: none;
      width: 80px;
      cursor: pointer;
      height: 40px;
      margin: 5px;
      margin-bottom: 0;
      color: white;
    `}>
      {children}
    </button>
  )
}

function InputInfo({ children }) {
  return (
    <div css={css`
      display: flex;
      align-items: center;
    `}>
      <span css={css`
        display: inline-block;
        width: 120px;
        height: 30px;
        margin-right: 10px;
        text-align: right;
        font-size: 18px;
        line-height: 30px;
      `}>{children}</span>
      <input type='text' placeholder={children} css={css`
        padding-left: 15px;
        border: none;
        box-sizing: border-box;
        border-radius: 5px;
        outline: none;
        box-shadow: 2px 2px 5px rgba(0,0,0,25%);
        width: 500px;
        height: 35px;
        font-size: 16px;

        &:focus{
          border: 2px solid #3FB05E;
        }
      `} />
    </div>
  )
}

function Capsule() {
  const [disabled, setDisabled] = useState([true, false, false]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [sort, setSort] = useState('정렬');
  const [selected, setSelected] = useState(-1);
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
          right: calc(10% + 140px);
          width: 80px;
          font-size: 16px;
          background-color: white;
          border: 1px solid black;
          cursor: pointer;
        `} onClick={() => setIsModalOpen(true)}>글쓰기</button>
        <ul css={css`
            list-style-type: none;
            margin: 0;
            padding: 0;
            position: absolute;
            text-align: left;
            right: 10%;
          `}>
          <li value="0" css={css`
            background-color: white;
            border-radius: ${dropdown ? '10px 10px 0 0' : '10px'};
            border: 1px solid black;
            height: 38px;
            cursor: pointer;
            width: 120px;
            line-height: 40px;
            padding-left: 10px;
          `} onClick={() => setDropdown(prev => !prev)}>{sort}<img src={dropdown ? './images/up.svg' : './images/down.svg'} css={css`
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
          `} onClick={() => {
                setDropdown(prev => !prev);
                setSort('최신순');
              }}>최신순</li>
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
          `} onClick={() => {
                setDropdown(prev => !prev);
                setSort('인기순');
              }}>인기순</li>
          </>}
        </ul>
      </div>
      <div css={css`
        display: grid;
        width: 80%;
        /* grid-template-columns: 1fr 1fr 1fr 1fr; */
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        margin: 0 auto;
        gap: 50px;
      `} >
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
        <IdeaLink />
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
            width: "940px",
            height: "500px",
            margin: "auto",
            outline: 'none',
            borderRadius: "20px",
            overflowX: "hidden",
            paddingLeft: "130px",
            paddingRight: "80px",
            paddingBottom: "20px",
          },
        }}
      >
        <div css={css`
          display: flex;
          
        `}>
          <div css={css`
          display: flex;
          flex-direction: column;
          height: 300px;
        `}>
            <div css={css`
            display: inline-block;
            width: 250px;
            height: 250px;
            background-color: #F6F6F6;
            border-radius: 20px;
            padding: 10px;
            border: 1px solid black;
            text-align: center;
          `}>
              <img src={`./images/${false ? 'Logo' : 'hoverPlant'}.svg`} alt='프로젝트 로고' css={css`
              width: 250px;
              height: 250px;
            `} />
            </div>
            <div css={css`
            display: block;
          `}>
              <div css={css`
              width: 272px;
              display: flex;
              justify-content: space-between;
            `}>
                <button css={css`
                padding: 5px;
                width: 135px;
                display: flex;
                justify-content: space-between;
                height: 40px;
                align-items: center;
                margin: 0;
                margin-top: 5px;
                border-radius: 10px 0 0 10px;
                background-color: white;
                border: 1px solid black;
                cursor: pointer;
              `}><img src='./images/camera.svg' alt='카메라 아이콘' /> 사진 등록</button>
                <button css={css`
                padding: 5px;
                width: 135px;
                display: flex;
                justify-content: space-between;
                height: 40px;
                align-items: center;
                margin-top: 5px;
                border-radius: 0 10px 10px 0;
                background-color: white;
                border: 1px solid black;
                cursor: pointer;
              `}><img src='./images/trash.svg' alt='카메라 아이콘' /> 사진 삭제</button>
              </div>
            </div>
          </div>
          <div css={css`
            padding: 15px;
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 30px;
          `}>
            <InputInfo>프로젝트 명</InputInfo>
            <InputInfo>한 줄 설명</InputInfo>
            <div css={css`
              display: flex;
              align-items: center;
            `}>
              <span css={css`
                display: inline-block;
                width: 120px;
                height: 30px;
                margin-right: 10px;
                text-align: right;
                font-size: 18px;
                line-height: 30px;
              `}>서비스 종류</span>
              <div css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin: 0;
                  width: 500px;
                `} >
                <Select cssProp={selected === 2 && 'border: 2px solid #3FB05E'} event={() => setSelected(2)} display='none' margin='0' width='135px' height='30px' id='2' title='웹 서비스' fontSize='18px' divStyle={`margin: 0`} />
                <Select cssProp={selected === 1 && 'border: 2px solid #3FB05E'} event={() => setSelected(1)} display='none' margin='0' width='135px' height='30px' id='1' title='앱 서비스' fontSize='18px' divStyle={`margin: 0`} />
                <Select cssProp={selected === 3 && 'border: 2px solid #3FB05E'} event={() => setSelected(3)} display='none' margin='0' width='135px' height='30px' id='3' title='하드웨어' fontSize='18px' divStyle={`margin: 0`} />
              </div>
            </div>
            <InputInfo>사용 언어/툴</InputInfo>
            <InputInfo>연락처</InputInfo>
          </div>
        </div>
        <textarea placeholder='프로젝트 및 아이디어에 대한 설명을 작성해주세요.' css={css`
          width: calc(100% - 40px);
          height: 120px;
          resize: none;
          outline: none;
          border: none;
          border-radius: 10px;
          box-sizing: border-box;
          box-shadow: inset 0px 0px 4px 3px rgba(0, 0, 0, 0.25);
          padding: 15px;
          margin-top: 12px;
          
          &:focus{
            border: 2px solid #3FB05E;
            box-shadow: inset 0px 0px 4px 3px rgba(63, 176, 94, 0.25)
          }
        `} />
        <div css={css`
          text-align: center;
        `}>
          <JoinButton color='#EC4B4B'>취소</JoinButton>
          <JoinButton color='#3FB05E'>등록</JoinButton>
        </div>
      </Modal>
    </>
  )
}

export default Capsule