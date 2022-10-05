/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState } from 'react';


function Select({ display, label, width, height, id, title, margin, cssProp, event }) {

  const [selected, setSelected] = useState('');

  return (
    <div css={css`
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.56rem;
        box-sizing: border-box;
      `}>
        <span css={
          css`
            display: ${display};
            width: 150px;
            margin-right: 44px;
            text-align: right;
          `
        }>
          {label}
        </span>
        <button id={id} css={
          css`
            width: ${width};
            height: ${height};
            background: #FBFBFB;
            border: 0;
            box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 1.56rem;
            margin-left: ${margin};
            color: #6C6C6C;
            ${cssProp}
          `}
          onClick={event}
        >
          {title}
        </button>
    </div>
  )
  
}

export default Select;