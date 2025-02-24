import { css } from '@emotion/react'
import { TaskCompletionChart } from '../features/analysis/TaskCompletionChart'
import { TaskTypeDistribution } from '../features/analysis/TaskTypeDistribution'
import { WeeklyPatternAnalysis } from '../features/analysis/WeeklyPatternAnalysis'

export const Analysis = () => {
  return (
    <div css={styles.container}>
      <h2 css={styles.pageTitle}>行動パターン分析</h2>
      
      <div css={styles.grid}>
        <div css={styles.card}>
          <h3 css={styles.cardTitle}>タスク完了率の推移</h3>
          <TaskCompletionChart />
        </div>
        
        <div css={styles.card}>
          <h3 css={styles.cardTitle}>タスクタイプの分布</h3>
          <TaskTypeDistribution />
        </div>
        
        <div css={styles.wideCard}>
          <h3 css={styles.cardTitle}>週間パターン分析</h3>
          <WeeklyPatternAnalysis />
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    padding: 24px;
  `,
  pageTitle: css`
    font-size: 24px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 24px 0;
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  `,
  card: css`
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  `,
  wideCard: css`
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    grid-column: 1 / -1;
  `,
  cardTitle: css`
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 16px 0;
  `
} 