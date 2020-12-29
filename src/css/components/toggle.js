/*
 * Copyright (c) 2015 instructure-react
 * Forked from https://github.com/aaronshaf/react-toggle/
 **/

import { css } from "@emotion/react"

export const toggle = css`
  touch-action: pan-x;

  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`

export const track = css`
  width: 42px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  transition: all 0.2s ease;
  background-color: var(--color-profile-color-modes-toggle-track-bg);
  border: 3px solid var(--color-profile-color-modes-toggle-track-border);
`

export const thumb = css`
  position: absolute;
  top: -2px;
  left: -2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--color-profile-color-modes-toggle-thumb-bg);
  transition: all 0.25s ease;
  .react-toggle--checked & {
    transform: translateX(18px);
  }
`

export const screenreaderOnly = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`
