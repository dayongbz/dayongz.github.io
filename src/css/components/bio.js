import { css } from "@emotion/react"
import flexCenter from "./common/flex-center"

export const bioCoverGrad = css`
  position: absolute;
  left: var(--spacing-0);
  right: var(--spacing-0);
  bottom: var(--spacing-0);
  height: var(--spacing-20);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`

export const bioCover = css`
  position: relative;
  background-color: var(--color-bg-tertiary);
  width: var(--maxWidth-4xl);
  height: var(--maxWidth-2xs);
  border-radius: 0 0 8px 8px;
  overflow: hidden;
`

export const bioAvatarWrapper = css`
  width: var(--maxWidth-3xs);
  position: relative;
  margin-bottom: var(--spacing-6);
`

export const bioAvatar = css`
  width: var(--maxWidth-full);
  height: var(--maxWidth-3xs);
  position: absolute;
  left: var(--spacing-2);
  right: var(--spacing-0);
  bottom: calc(var(--spacing-4) * -1);
  border: 6px solid var(--color-border-primary);
  border-radius: var(--maxWidth-full);
  overflow: hidden;
`

const bio = css`
  ${flexCenter};
  flex-direction: column;
  padding-bottom: var(--spacing-8);
  text-align: center;
  h2 {
    margin: var(--spacing-2) var(--spacing-0);
  }
  p {
    margin: var(--spacing-0);
  }
`

export default bio
