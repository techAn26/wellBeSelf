import { css } from '@emotion/react'
// import { WeeklyAssessmentChart } from '../features/dashboard/WeeklyAssessmentChart'
// import { TaskSummary } from '../features/dashboard/TaskSummary'
import { WellbeingStatus } from '../features/dashboard/WellbeingStatus'

export const Dashboard = () => {
  return (
    <div css={styles.container}>
      <h2 css={styles.pageTitle}>ダッシュボード</h2>
      
      <div css={styles.grid}>
        <div css={styles.gridItem}>
          <WellbeingStatus />
        </div>
        
        {/* <div css={styles.gridItem}>
          <WeeklyAssessmentChart />
        </div>
        
        <div css={styles.gridItem}>
          <TaskSummary />
        </div> */}
      </div>
    </div>
  )
}

const styles = {
  container: css`
    max-width: 1200px;
    margin: 0 auto;
  `,
  pageTitle: css`
    font-size: 28px;
    margin-bottom: 24px;
    color: #333;
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  `,
  gridItem: css`
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `
} 