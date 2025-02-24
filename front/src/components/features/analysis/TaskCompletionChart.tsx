import { css } from '@emotion/react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

// 仮のデータ
const data = [
  { date: '3/1', rate: 65 },
  { date: '3/2', rate: 70 },
  { date: '3/3', rate: 75 },
  { date: '3/4', rate: 80 },
  { date: '3/5', rate: 85 },
  { date: '3/6', rate: 82 },
  { date: '3/7', rate: 88 }
]

export const TaskCompletionChart = () => {
  return (
    <div css={styles.container}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis unit="%" />
          <Tooltip
            formatter={(value: number) => [`${value}%`, '完了率']}
            labelStyle={{ color: '#666' }}
          />
          <Line
            type="monotone"
            dataKey="rate"
            stroke="#1976d2"
            strokeWidth={2}
            dot={{ fill: '#1976d2' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
    height: 300px;
  `
} 