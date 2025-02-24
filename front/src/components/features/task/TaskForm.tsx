import { css } from '@emotion/react'
import { useState } from 'react'

type TaskFormData = {
  title: string
  description: string
  type: 'CONTINUOUS' | 'ONE_TIME'
  startDate: string
  endDate: string
}

export const TaskForm = () => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    type: 'CONTINUOUS',
    startDate: '',
    endDate: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 後でAPIとの連携を実装
    console.log('新規タスク:', formData)
    
    // フォームをリセット
    setFormData({
      title: '',
      description: '',
      type: 'CONTINUOUS',
      startDate: '',
      endDate: ''
    })
  }

  return (
    <div css={styles.formContainer}>
      <h3 css={styles.title}>新規タスク作成</h3>
      <form css={styles.form} onSubmit={handleSubmit}>
        <div css={styles.formGroup}>
          <label css={styles.label}>
            タイトル
            <span css={styles.required}>*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            css={styles.input}
            required
            placeholder="タスクのタイトルを入力"
          />
        </div>

        <div css={styles.formGroup}>
          <label css={styles.label}>説明</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            css={styles.textarea}
            rows={4}
            placeholder="タスクの詳細を入力"
          />
        </div>

        <div css={styles.formGroup}>
          <label css={styles.label}>
            タスクタイプ
            <span css={styles.required}>*</span>
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as TaskFormData['type'] })}
            css={styles.select}
          >
            <option value="CONTINUOUS">継続タスク</option>
            <option value="ONE_TIME">単発タスク</option>
          </select>
        </div>

        <div css={styles.formGroup}>
          <label css={styles.label}>
            開始日
            <span css={styles.required}>*</span>
          </label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            css={styles.input}
            required
          />
        </div>

        <div css={styles.formGroup}>
          <label css={styles.label}>終了日</label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            css={styles.input}
            min={formData.startDate}
          />
        </div>

        <button type="submit" css={styles.submitButton}>
          タスクを作成
        </button>
      </form>
    </div>
  )
}

const styles = {
  formContainer: css`
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,
  title: css`
    font-size: 18px;
    color: #333;
    margin: 0 0 24px 0;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  formGroup: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  label: css`
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  required: css`
    color: #ef5350;
    font-size: 12px;
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
  submitButton: css`
    padding: 12px;
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

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  `
} 