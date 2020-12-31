import { css } from "@emotion/react"
import styled from "@emotion/styled"
import absoluteCenter from "./common/absolute-center"
import flexCenter from "./common/flex-center"

export const BlogPostNavItemBg = styled.div`
  width: var(--maxWidth-full);
  height: var(--maxWidth-full);
  background-color: var(--color-bg-tertiary);
  filter: brightness(0.4);
  transition: filter 0.3s;
`

export const blogPostNavItemTitle = css`
  ${absoluteCenter};
  color: var(--color-white);
  font-size: var(--fontSize-2);
  font-weight: var(--fontWeight-bold);
  text-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  margin: var(--spacing-0);
  text-align: center;
`

export const blogPostNavItem = css`
  ${flexCenter}
  position: relative;
  width: var(--maxWidth-full);
  height: var(--maxWidth-3xs);
  margin: var(--spacing-0);
  overflow: hidden;
  .gatsby-image-wrapper {
    width: var(--maxWidth-full);
    height: var(--maxWidth-full);
    transition: filter 0.3s;
    filter: brightness(0.4);
  }
  :hover,
  :focus {
    ${BlogPostNavItemBg},.gatsby-image-wrapper {
      filter: brightness(0.7);
    }
  }
`

const blogPostNav = css`
  display: flex;
  flex-direction: column;
  width: var(--maxWidth-full);
`

export default blogPostNav
