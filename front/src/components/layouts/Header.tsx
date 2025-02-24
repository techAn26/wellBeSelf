import { css } from '@emotion/react'

export const Header = () => {
  return (
    <header css={styles.header}>
      <h1 css={styles.title}>WellBeing Manager</h1>
    </header>
  )
}

const styles = {
  header: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    padding: 0 24px;
    z-index: 100;
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
    color: #333;
  `
} 