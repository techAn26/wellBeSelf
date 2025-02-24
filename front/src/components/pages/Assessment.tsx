import { css } from '@emotion/react'
import { AssessmentForm } from '../features/assessment/AssessmentForm'
import { HealthPlot } from '../features/assessment/HealthPlot'
import { AssessmentHistory } from '../features/assessment/AssessmentHistory'
import { AIFeedback } from '../features/assessment/AIFeedback'

export const Assessment = () => {
  return (
    <div css={styles.container}>
      <h2 css={styles.pageTitle}>週次評価</h2>
      
      <div css={styles.content}>
        <div css={styles.mainSection}>
          <div css={styles.plotSection}>
            <h3 css={styles.sectionTitle}>健康状態プロット</h3>
            <HealthPlot />
          </div>
          
          <div css={styles.formSection}>
            <h3 css={styles.sectionTitle}>評価入力</h3>
            <AssessmentForm />
          </div>
        </div>

        <div css={styles.sideSection}>
          <AIFeedback />
          <AssessmentHistory />
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  `,
  plotSection: css`
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,
  formSection: css`
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,
  sideSection: css`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,
  sectionTitle: css`
    font-size: 20px;
    margin-bottom: 20px;
    color: #333;
  `
} 