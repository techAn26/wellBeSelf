import { css } from '@emotion/react'
import { useState } from 'react'
import { Task } from '../../../states/task'
// import { useRecoilState } from 'recoil'
// import { taskListState } from '../../../states/task'
import { TaskEditModal } from './TaskEditModal'

type Props = {
  task: Task
}

export const TaskCard = ({ task }: Props) => {
  // const [tasks, setTasks] = useRecoilState(taskListState)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const handleStatusChange = (_newStatus: Task['status']) => {
    // const updatedTasks = tasks.map((t) =>
    //   t.id === task.id ? { ...t, status: newStatus } : t
    // )
    // setTasks(updatedTasks)
    // TODO: APIに状態更新を送信
  }

  const handleDelete = () => {
    if (confirm('このタスクを削除してもよろしいですか？')) {
      // const updatedTasks = tasks.filter((t) => t.id !== task.id)
      // setTasks(updatedTasks)
    }
  }

  return (
    <>
      <div css={styles.container}>
        <div css={styles.header}>
          {/* ToDo 状態管理がうまくいっていないため、デザインの適用もできていないっぽい */}
          <span css={[styles.badge, styles[task.type.toLowerCase() as keyof typeof styles]]}>
            {task.type === 'CONTINUOUS' ? '継続' : '単発'}
          </span>
            {task.status === 'TODO' ? '未着手' : task.status === 'IN_PROGRESS' ? '進行中' : '完了'}
          <span css={[styles.statusBadge, styles[task.status.toLowerCase() as keyof typeof styles]]}>
          </span>
          <div css={styles.actions}>
            <button
              onClick={() => setIsEditModalOpen(true)}
              css={styles.actionButton}
            >
              編集
            </button>
            <button
              onClick={handleDelete}
              css={[styles.actionButton, styles.deleteButton]}
            >
              削除
            </button>
          </div>
        </div>
        
        <h3 css={styles.title}>{task.title}</h3>
        <p css={styles.description}>{task.description}</p>
        
        <div css={styles.footer}>
          <div css={styles.dates}>
            <span css={styles.dateLabel}>開始日:</span>
            <span css={styles.dateValue}>{task.startDate}</span>
            {task.endDate && (
              <>
                <span css={styles.dateLabel}>終了日:</span>
                <span css={styles.dateValue}>{task.endDate}</span>
              </>
            )}
          </div>
          <div css={styles.statusControl}>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(e.target.value as Task['status'])}
              css={[styles.statusSelect, styles[task.status.toLowerCase() as keyof typeof styles]]}
            >
              <option value="TODO">未着手</option>
              <option value="IN_PROGRESS">進行中</option>
              <option value="DONE">完了</option>
            </select>
          </div>
        </div>
      </div>

      <TaskEditModal
        task={task}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </>
  )
}

const styles = {
  container: css`
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
  `,
  header: css`
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
  `,
  badge: css`
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  `,
  continuous: css`
    background-color: #e3f2fd;
    color: #1976d2;
  `,
  one_time: css`
    background-color: #f3e5f5;
    color: #7b1fa2;
  `,
  statusBadge: css`
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  `,
  todo: css`
    background-color: #eeeeee;
    color: #616161;
  `,
  in_progress: css`
    background-color: #fff3e0;
    color: #f57c00;
  `,
  done: css`
    background-color: #e8f5e9;
    color: #43a047;
  `,
  title: css`
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 8px 0;
  `,
  description: css`
    font-size: 14px;
    color: #666;
    margin: 0 0 16px 0;
    line-height: 1.5;
  `,
  footer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eee;
    padding-top: 12px;
  `,
  dates: css`
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 12px;
  `,
  dateLabel: css`
    color: #999;
  `,
  dateValue: css`
    color: #666;
    font-weight: 500;
  `,
  statusControl: css`
    flex: 1;
    max-width: 120px;
  `,
  statusSelect: css`
    width: 100%;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: #1976d2;
    }
  `,
  actions: css`
    display: flex;
    gap: 8px;
  `,
  actionButton: css`
    padding: 4px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    color: #666;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #f5f5f5;
    }
  `,
  deleteButton: css`
    border-color: #ef5350;
    color: #ef5350;

    &:hover {
      background-color: #ffebee;
    }
  `
} 