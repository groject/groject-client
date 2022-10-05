/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { linkStyle } from '../styles';

const headerLink = css({
  display: 'flex',
  gap: '32px',
  height: '80px',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: '500',
})

function Header() {
  return (
    <header css={css(
      {
        // backgroundColor: '#F8FCF7',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',

      }
    )}>
      <div css={css([headerLink, { marginLeft: '64px' }])}>
        <Link to='/' css={css(linkStyle)}>
          나눔
        </Link>
        <Link to='/' css={css(linkStyle)}>
          사람 구하기
        </Link>
        <Link to='/' css={css(linkStyle)}>
          캡슐
        </Link>
      </div>
      <div css={css([headerLink, { marginRight: '64px' }])}>
        <Link to='/' css={css(linkStyle)}>
          LOGIN
        </Link>
      </div>
    </header>
  )
}

export default Header