import { css } from '@emotion/react'
import { TaskList } from '../features/task/TaskList'
import { TaskForm } from '../features/task/TaskForm'
import { TaskFilter } from '../features/task/TaskFilter'

export const Tasks = () => {
  return (
    <div css={styles.container}>
      <h2 css={styles.pageTitle}>ウェルビーイングタスク</h2>
      
      <div css={styles.content}>
        <div css={styles.mainSection}>
          <TaskFilter />
          <TaskList />
        </div>
        
        <div css={styles.sideSection}>
          <TaskForm />
        </div>
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
  content: css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
  `,
  mainSection: css`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  sideSection: css`
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `
} 