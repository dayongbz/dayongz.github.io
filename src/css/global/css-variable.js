import { css } from "@emotion/react"

export const size = css`
  :root {
    --maxWidth-none: "none";
    --maxWidth-3xs: 10rem;
    --maxWidth-2xs: 16rem;
    --maxWidth-xs: 20rem;
    --maxWidth-sm: 24rem;
    --maxWidth-md: 28rem;
    --maxWidth-lg: 32rem;
    --maxWidth-xl: 36rem;
    --maxWidth-2xl: 42rem;
    --maxWidth-3xl: 48rem;
    --maxWidth-4xl: 56rem;
    --maxWidth-half: 50%;
    --maxWidth-full: 100%;
    --maxWidth-wrapper: var(--maxWidth-3xl);
    --spacing-px: "1px";
    --spacing-0: 0;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-8: 2rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-32: 8rem;
  }
`

export const color = css`
  :root {
    --color-white: #fff;
    --color-black: #000;
  }
  body.light {
    --color-primary: #0366d6;
    --color-text: #24292e;
    --color-text-light: #586069;
    --color-text-link: #0366d6;
    --color-heading: var(----color-text);
    --color-heading-black: var(----color-text);
    --color-accent: #d1dce5;
    --color-background: #ffffff;
    --color-background-op: rgba(255, 255, 255, 0.75);
    --color-border-primary: #e1e4e8;
    --color-border-secondary: #eaecef;
    --color-bg-tertiary: #f6f8fa;
    --color-tag-primary: #0366d6;
    --color-markdown-blockquote-border: #dfe2e5;
    --color-markdown-code-bg: rgba(27, 31, 35, 0.05);
    --color-markdown-table-border: #dfe2e5;
    --color-markdown-table-tr-border: #c6cbd1;
    --color-profile-color-modes-toggle-moon: #ffdf5d;
    --color-profile-color-modes-toggle-thumb-bg: #2f363d;
    --color-profile-color-modes-toggle-track-bg: #fff;
    --color-profile-color-modes-toggle-track-border: #d1d5da;
  }

  body.dark {
    --color-primary: #58a6ff;
    --color-text: #c9d1d9;
    --color-text-light: #8b949e;
    --color-text-link: #58a6ff;
    --color-heading: var(----color-text);
    --color-heading-black: var(----color-text);
    --color-accent: #424242;
    --color-background: #0d1117;
    --color-background-op: rgba(13, 17, 23, 0.75);
    --color-border-primary: #30363d;
    --color-border-secondary: #21262d;
    --color-bg-tertiary: #161b22;
    --color-tag-primary: #0366d6;
    --color-markdown-blockquote-border: #3b434b;
    --color-markdown-code-bg: rgba(240, 246, 255, 0.15);
    --color-markdown-table-border: #3b434b;
    --color-markdown-table-tr-border: #272c32;
    --color-prettylights-syntax-constant: #79c0ff;
    --color-prettylights-syntax-keyword: #ff7b72;
    --color-profile-color-modes-toggle-moon: #f8e3a1;
    --color-profile-color-modes-toggle-thumb-bg: #6e40c9;
    --color-profile-color-modes-toggle-track-bg: #271052;
    --color-profile-color-modes-toggle-track-border: #3c1e70;
  }
`

export const font = css`
  :root {
    --fontFamily-sans: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
      Open Sans, "Open Sans", Noto Sans KR, "Noto Sans KR", Segoe UI, Helvetica,
      Malgun Gothic, "맑은 고딕", Arial, sans-serif, Apple Color Emoji,
      Segoe UI Emoji;
    --fontFamily-code: SFMono-Regular, Consolas, Liberation Mono, Menlo,
      monospace;
    --font-body: var(--fontFamily-sans);
    --font-heading: var(--fontFamily-sans);
    --fontWeight-normal: 400;
    --fontWeight-medium: 500;
    --fontWeight-semibold: 600;
    --fontWeight-bold: 700;
    --fontWeight-extrabold: 800;
    --fontWeight-black: 900;
    --fontSize-root: 18px;
    --fontStyle-italic: italic;
    --lineHeight-none: 1;
    --lineHeight-tight: 1.1;
    --lineHeight-normal: 1.5;
    --lineHeight-relaxed: 1.625;
    /* 1.200 Minor Third Type Scale */
    --fontSize-0: 0.833rem;
    --fontSize-1: 1rem;
    --fontSize-2: 1.2rem;
    --fontSize-3: 1.44rem;
    --fontSize-4: 1.728rem;
    --fontSize-5: 2.074rem;
    --fontSize-6: 2.488rem;
    --fontSize-7: 2.986rem;
  }
`
const variable = css`
  ${font};
  ${color};
  ${size};
`

export default variable
