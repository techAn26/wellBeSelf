import { css } from '@emotion/react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

// 仮のデータ
const data = [
  { day: '月', completed: 5, started: 3 },
  { day: '火', completed: 4, started: 2 },
  { day: '水', completed: 6, started: 4 },
  { day: '木', completed: 3, started: 5 },
  { day: '金', completed: 7, started: 3 },
  { day: '土', completed: 2, started: 1 },
  { day: '日', completed: 1, started: 2 }
]

export const WeeklyPatternAnalysis = () => {
  return (
    <div css={styles.container}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: 'white', borderRadius: '4px' }}
            formatter={(value: number, name: string) => [
              value,
              name === 'completed' ? 'タスク完了数' : 'タスク開始数'
            ]}
          />
          <Legend
            formatter={(value: string) =>
              value === 'completed' ? 'タスク完了数' : 'タスク開始数'
            }
          />
          <Bar
            dataKey="completed"
            fill="#43a047"
            radius={[4, 4, 0, 0]}
            maxBarSize={50}
          />
          <Bar
            dataKey="started"
            fill="#1976d2"
            radius={[4, 4, 0, 0]}
            maxBarSize={50}
          />
        </BarChart>
      </ResponsiveContainer>

      <div css={styles.summary}>
        <div css={styles.summaryItem}>
          <h4 css={styles.summaryTitle}>最も生産的な曜日</h4>
          <p css={styles.summaryValue}>金曜日</p>
          <p css={styles.summaryDetail}>平均7タスク完了</p>
        </div>
        <div css={styles.summaryItem}>
          <h4 css={styles.summaryTitle}>最も開始が多い曜日</h4>
          <p css={styles.summaryValue}>木曜日</p>
          <p css={styles.summaryDetail}>平均5タスク開始</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
  `,
  summary: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin-top: 32px;
  `,
  summaryItem: css`
    background-color: #f8fafc;
    border-radius: 8px;
    padding: 16px;
  `,
  summaryTitle: css`
    font-size: 14px;
    color: #666;
    margin: 0 0 8px 0;
  `,
  summaryValue: css`
    font-size: 24px;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 4px 0;
  `,
  summaryDetail: css`
    font-size: 14px;
    color: #94a3b8;
    margin: 0;
  `
} 