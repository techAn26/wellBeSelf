import { css } from '@emotion/react'
import { TaskCard } from './TaskCard'
import { Task } from '../../../states/task'

// 仮のデータ
const mockTasks = [
  {
    id: '1',
    title: 'モーニングヨガ',
    description: '毎朝15分のヨガで一日をスタート',
    type: 'CONTINUOUS',
    status: 'IN_PROGRESS',
    startDate: '2024-03-01'
  },
  {
    id: '2',
    title: '瞑想',
    description: '毎日10分の瞑想時間',
    type: 'CONTINUOUS',
    status: 'TODO',
    startDate: '2024-03-01'
  }
]

export const TaskList = () => {
  return (
    <div css={styles.container}>
      {mockTasks.length === 0 ? (
        <div css={styles.emptyState}>
          <div css={styles.emptyStateIcon}>📝</div>
          <p css={styles.emptyStateText}>タスクが見つかりません</p>
          <p css={styles.emptyStateSubText}>
            新しいタスクを作成して、ウェルビーイングの向上を始めましょう
          </p>
        </div>
      ) : (
        <div css={styles.taskGrid}>
          {mockTasks.map((task) => (
            <TaskCard key={task.id} task={task as Task} />
          ))}
        </div>
      )}
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
    min-height: 400px;
  `,
  taskGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
    padding: 16px 0;
  `,
  emptyState: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    background-color: #f8fafc;
    border-radius: 12px;
    border: 2px dashed #e2e8f0;
  `,
  emptyStateIcon: css`
    font-size: 48px;
    margin-bottom: 16px;
  `,
  emptyStateText: css`
    font-size: 18px;
    font-weight: 600;
    color: #475569;
    margin: 0 0 8px 0;
  `,
  emptyStateSubText: css`
    font-size: 14px;
    color: #64748b;
    text-align: center;
    margin: 0;
  `
} 