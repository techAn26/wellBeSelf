import { css } from '@emotion/react'
import { useState } from 'react'
import { Task } from '../../../states/task'
// import { useRecoilState } from 'recoil'
// import { taskListState } from '../../../states/task'

type Props = {
  task: Task
  isOpen: boolean
  onClose: () => void
}

export const TaskEditModal = ({ task, isOpen, onClose }: Props) => {
  // const [tasks, setTasks] = useRecoilState(taskListState)
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    type: task.type,
    startDate: task.startDate,
    endDate: task.endDate || ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // const updatedTasks = tasks.map((t) =>
    //   t.id === task.id ? { ...t, ...formData } : t
    // )
    // setTasks(updatedTasks)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div css={styles.overlay}>
      <div css={styles.modal}>
        <h3 css={styles.title}>タスクの編集</h3>
        <form css={styles.form} onSubmit={handleSubmit}>
          <div css={styles.formGroup}>
            <label css={styles.label}>タイトル</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              css={styles.input}
              required
            />
          </div>

          <div css={styles.formGroup}>
            <label css={styles.label}>説明</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              css={styles.textarea}
              rows={4}
            />
          </div>

          <div css={styles.formGroup}>
            <label css={styles.label}>タスクタイプ</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as Task['type'] })}
              css={styles.select}
            >
              <option value="CONTINUOUS">継続タスク</option>
              <option value="ONE_TIME">単発タスク</option>
            </select>
          </div>

          <div css={styles.formGroup}>
            <label css={styles.label}>開始日</label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              css={styles.input}
              required
            />
          </div>

          <div css={styles.buttonGroup}>
            <button type="button" onClick={onClose} css={styles.cancelButton}>
              キャンセル
            </button>
            <button type="submit" css={styles.submitButton}>
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const styles = {
  overlay: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `,
  modal: css`
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
  `,
  title: css`
    font-size: 20px;
    margin: 0 0 24px 0;
    color: #333;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  formGroup: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  label: css`
    font-size: 14px;
    color: #666;
  `,
  input: css`
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: #1976d2;
    }
  `,
  textarea: css`
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: #1976d2;
    }
  `,
  select: css`
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    background-color: white;

    &:focus {
      outline: none;
      border-color: #1976d2;
    }
  `,
  buttonGroup: css`
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    margin-top: 8px;
  `,
  cancelButton: css`
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #f5f5f5;
    }
  `,
  submitButton: css`
    padding: 8px 16px;
    background-color: #1976d2;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #1565c0;
    }
  `
} 