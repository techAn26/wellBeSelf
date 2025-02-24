import { css } from '@emotion/react'

export const WellbeingStatus = () => {
  return (
    <div css={styles.container}>
      <h3 css={styles.title}>現在の状態</h3>
      <div css={styles.statusGrid}>
        <div css={styles.statusItem}>
          <span css={styles.label}>肉体的健康</span>
          <div css={styles.value}>75</div>
        </div>
        <div css={styles.statusItem}>
          <span css={styles.label}>精神的健康</span>
          <div css={styles.value}>82</div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: css``,
  title: css`
    font-size: 20px;
    margin-bottom: 16px;
    color: #333;
  `,
  statusGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  `,
  statusItem: css`
    text-align: center;
  `,
  label: css`
    display: block;
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  `,
  value: css`
    font-size: 32px;
    font-weight: bold;
    color: #1976d2;
  `
} 