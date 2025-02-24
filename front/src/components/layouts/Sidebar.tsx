import { css } from '@emotion/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menuItems = [
  { label: 'ダッシュボード', path: '/' },
  { label: '週次評価', path: '/assessment' },
  { label: 'タスク管理', path: '/tasks' },
  { label: '分析', path: '/analysis' }
]

export const Sidebar = () => {
  const router = useRouter()

  return (
    <nav css={styles.sidebar}>
      {menuItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          css={[styles.menuItem, router.pathname === item.path && styles.activeMenuItem]}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

const styles = {
  sidebar: css`
    width: 240px;
    background-color: #fff;
    padding: 24px 0;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  `,
  menuItem: css`
    display: block;
    padding: 12px 24px;
    color: #666;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f5f5f5;
    }
  `,
  activeMenuItem: css`
    background-color: #e3f2fd;
    color: #1976d2;
    font-weight: bold;
  `
} 