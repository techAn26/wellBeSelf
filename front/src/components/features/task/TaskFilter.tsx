import { css } from '@emotion/react'

type FilterOption = {
  label: string
  value: string
}

const taskTypes: FilterOption[] = [
  { label: 'すべて', value: 'ALL' },
  { label: '継続タスク', value: 'CONTINUOUS' },
  { label: '単発タスク', value: 'ONE_TIME' }
]

const taskStatuses: FilterOption[] = [
  { label: 'すべて', value: 'ALL' },
  { label: '未着手', value: 'TODO' },
  { label: '進行中', value: 'IN_PROGRESS' },
  { label: '完了', value: 'DONE' }
]

export const TaskFilter = () => {
  return (
    <div css={styles.container}>
      <div css={styles.filterGroup}>
        <label css={styles.label}>タスクタイプ</label>
        <div css={styles.buttonGroup}>
          {taskTypes.map((type) => (
            <button
              key={type.value}
              css={styles.filterButton}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div css={styles.filterGroup}>
        <label css={styles.label}>ステータス</label>
        <div css={styles.buttonGroup}>
          {taskStatuses.map((status) => (
            <button
              key={status.value}
              css={styles.filterButton}
            >
              {status.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,
  filterGroup: css`
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  `,
  label: css`
    display: block;
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  `,
  buttonGroup: css`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  `,
  filterButton: css`
    padding: 6px 12px;
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
  `
} 