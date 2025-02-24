import { css } from '@emotion/react'

export const AIFeedback = () => {
  // TODO: APIからAIフィードバックを取得
  const feedback = {
    analysis: '先週と比較して、肉体的健康は改善傾向にありますが、精神的健康にやや低下が見られます。',
    recommendations: [
      '定期的な運動習慣を継続することで、さらなる肉体的健康の向上が期待できます。',
      'ストレス解消のために、十分な休息時間の確保を心がけましょう。',
      '趣味の時間を設けることで、精神的な充実感を得られる可能性があります。'
    ]
  }

  return (
    <div css={styles.container}>
      <h3 css={styles.title}>AIフィードバック</h3>
      <div css={styles.content}>
        <div css={styles.analysis}>{feedback.analysis}</div>
        <div css={styles.recommendationsTitle}>推奨アクション：</div>
        <ul css={styles.recommendationsList}>
          {feedback.recommendations.map((recommendation, index) => (
            <li key={index} css={styles.recommendationItem}>
              {recommendation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    margin-top: 32px;
    padding: 24px;
    background-color: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #1976d2;
  `,
  title: css`
    font-size: 20px;
    margin-bottom: 16px;
    color: #333;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  analysis: css`
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  `,
  recommendationsTitle: css`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-top: 8px;
  `,
  recommendationsList: css`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `,
  recommendationItem: css`
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    padding-left: 20px;
    position: relative;
    margin-bottom: 8px;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #1976d2;
    }
  `
} 