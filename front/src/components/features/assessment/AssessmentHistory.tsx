import { css } from '@emotion/react'

type Assessment = {
  id: string
  date: string
  physical: number
  mental: number
  memo: string
}

export const AssessmentHistory = () => {
  // TODO: APIから履歴データを取得
  const history: Assessment[] = [
    {
      id: '1',
      date: '2024-03-20',
      physical: 70,
      mental: 80,
      memo: '運動を始めた週。精神的にも充実していた。'
    },
    {
      id: '2',
      date: '2024-03-27',
      physical: 75,
      mental: 65,
      memo: '仕事が忙しく、少し疲れ気味。'
    }
  ]

  return (
    <div css={styles.container}>
      <h3 css={styles.title}>評価履歴</h3>
      <div css={styles.historyList}>
        {history.map((assessment) => (
          <div key={assessment.id} css={styles.historyItem}>
            <div css={styles.date}>{assessment.date}</div>
            <div css={styles.scores}>
              <div css={styles.score}>
                肉体的健康: <span css={styles.scoreValue}>{assessment.physical}</span>
              </div>
              <div css={styles.score}>
                精神的健康: <span css={styles.scoreValue}>{assessment.mental}</span>
              </div>
            </div>
            <div css={styles.memo}>{assessment.memo}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: css`
    margin-top: 32px;
  `,
  title: css`
    font-size: 20px;
    margin-bottom: 16px;
    color: #333;
  `,
  historyList: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  historyItem: css`
    padding: 16px;
    background-color: #f5f5f5;
    border-radius: 8px;
  `,
  date: css`
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  `,
  scores: css`
    display: flex;
    gap: 16px;
    margin-bottom: 8px;
  `,
  score: css`
    font-size: 14px;
    color: #333;
  `,
  scoreValue: css`
    font-weight: bold;
    color: #1976d2;
  `,
  memo: css`
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  `
} 