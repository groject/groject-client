/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import InputBox from './inputBox'
import Select from './select';

function Signup() {
  const [selected, setSelected] = useState(-1);
  return(
    <div css={
      css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <img src='./images/Logo.svg' />
      <InputBox label='이름' placeholder='이름'/>
      <div css={css`display: flex;`}>
        <Select cssProp={selected === 0 && 'border: 2px solid #3FB05E'} event={() => setSelected(0)} display='inline-block' label='학교' width='143px' height='65px' id='1' title='대덕' />
        <Select cssProp={selected === 1 && 'border: 2px solid #3FB05E'} event={() => setSelected(1)} display='none' margin='19px' width='143px' height='65px' id='2' title='대구' />
        <Select cssProp={selected === 2 && 'border: 2px solid #3FB05E'} event={() => setSelected(2)} display='none' margin='19px' width='143px' height='65px' id='3' title='광주' />
        <Select cssProp={selected === 3 && 'border: 2px solid #3FB05E'} event={() => setSelected(3)} display='none' margin='19px' width='143px' height='65px' id='4' title='부산' />
      </div>
      <InputBox label='학번' placeholder='학번'/>
      <InputBox label='비밀번호' placeholder='비밀번호'/>
      <InputBox label='비밀번호 확인' placeholder='비밀번호 확인'/>
    </div>
  )
}

export default Signup;