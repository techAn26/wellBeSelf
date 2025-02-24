import { css } from '@emotion/react'
import { useState } from 'react'

export const AssessmentForm = () => {
  const [values, setValues] = useState({
    physical: 50,
    mental: 50,
    memo: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: APIへのデータ送信処理
    console.log('Assessment submitted:', values)
  }

  return (
    <form css={styles.form} onSubmit={handleSubmit}>
      <div css={styles.sliderGroup}>
        <label css={styles.label}>
          肉体的健康
          <div css={styles.sliderValue}>{values.physical}</div>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={values.physical}
          onChange={(e) => setValues({ ...values, physical: Number(e.target.value) })}
          css={styles.slider}
        />
      </div>

      <div css={styles.sliderGroup}>
        <label css={styles.label}>
          精神的健康
          <div css={styles.sliderValue}>{values.mental}</div>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={values.mental}
          onChange={(e) => setValues({ ...values, mental: Number(e.target.value) })}
          css={styles.slider}
        />
      </div>

      <div css={styles.memoGroup}>
        <label css={styles.label}>
          メモ
        </label>
        <textarea
          value={values.memo}
          onChange={(e) => setValues({ ...values, memo: e.target.value })}
          css={styles.memo}
          rows={4}
          placeholder="今週の状態について、特記事項があれば記入してください"
        />
      </div>

      <button type="submit" css={styles.submitButton}>
        評価を保存
      </button>
    </form>
  )
}

const styles = {
  form: css`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  sliderGroup: css``,
  label: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #333;
    margin-bottom: 8px;
  `,
  sliderValue: css`
    font-weight: bold;
    color: #1976d2;
  `,
  slider: css`
    width: 100%;
    height: 8px;
    background: #ddd;
    border-radius: 4px;
    outline: none;
    -webkit-appearance: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      background: #1976d2;
      border-radius: 50%;
      cursor: pointer;
    }
  `,
  memoGroup: css``,
  memo: css`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: vertical;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: #1976d2;
    }
  `,
  submitButton: css`
    padding: 12px 24px;
    background-color: #1976d2;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #1565c0;
    }
  `
} 