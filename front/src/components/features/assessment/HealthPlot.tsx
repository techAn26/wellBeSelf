import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'

type Point = {
  physical: number
  mental: number
  date: string
}

export const HealthPlot = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // サンプルデータ
  const points: Point[] = [
    { physical: 70, mental: 80, date: '2024-03-20' },
    { physical: 75, mental: 65, date: '2024-03-27' }
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // キャンバスのクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 軸の描画
    drawAxes(ctx, canvas.width, canvas.height)
    
    // プロットの描画
    points.forEach((point, index) => {
      const x = (point.physical / 100) * (canvas.width - 60) + 30
      const y = canvas.height - ((point.mental / 100) * (canvas.height - 60) + 30)
      
      // 点を描画
      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fillStyle = index === points.length - 1 ? '#1976d2' : '#999'
      ctx.fill()
      
      // 日付ラベル
      ctx.fillStyle = '#666'
      ctx.font = '12px Arial'
      ctx.fillText(point.date, x - 30, y - 15)
    })
  }, [points])

  return (
    <div css={styles.container}>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        css={styles.canvas}
      />
    </div>
  )
}

const drawAxes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  ctx.strokeStyle = '#ccc'
  ctx.lineWidth = 1
  
  // X軸
  ctx.beginPath()
  ctx.moveTo(30, height - 30)
  ctx.lineTo(width - 30, height - 30)
  ctx.stroke()
  
  // Y軸
  ctx.beginPath()
  ctx.moveTo(30, 30)
  ctx.lineTo(30, height - 30)
  ctx.stroke()
  
  // ラベル
  ctx.fillStyle = '#666'
  ctx.font = '14px Arial'
  ctx.fillText('肉体的健康', width - 80, height - 10)
  ctx.save()
  ctx.translate(10, height - 80)
  ctx.rotate(-Math.PI / 2)
  ctx.fillText('精神的健康', 0, 0)
  ctx.restore()
}

const styles = {
  container: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  canvas: css`
    border: 1px solid #eee;
    border-radius: 4px;
  `
} 