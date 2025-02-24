import { css } from '@emotion/react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts'

// 仮のデータ
const data = [
  { name: '継続タスク', value: 60, color: '#1976d2' },
  { name: '単発タスク', value: 40, color: '#7b1fa2' }
]

export const TaskTypeDistribution = () => {
  return (
    <div css={styles.container}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [`${value}%`, 'タスク比率']}
            contentStyle={{ backgroundColor: 'white', borderRadius: '4px' }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value: string) => (
              <span css={styles.legendText}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>

      <div css={styles.statsGrid}>
        {data.map((item) => (
          <div key={item.name} css={styles.statCard}>
            <div css={styles.statHeader}>
              <div
                css={[styles.statDot, css`background-color: ${item.color};`]}
              />
              <span css={styles.statLabel}>{item.name}</span>
            </div>
            <div css={styles.statValue}>{item.value}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
  `,
  legendText: css`
    color: #666;
    font-size: 14px;
  `,
  statsGrid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 24px;
  `,
  statCard: css`
    background-color: #f8fafc;
    border-radius: 8px;
    padding: 16px;
  `,
  statHeader: css`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  `,
  statDot: css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
  `,
  statLabel: css`
    font-size: 14px;
    color: #666;
  `,
  statValue: css`
    font-size: 24px;
    font-weight: 600;
    color: #2c3e50;
  `
} 