import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

type Props = {
  children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div css={styles.container}>
      <Header />
      <div css={styles.content}>
        <Sidebar />
        <main css={styles.main}>{children}</main>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    min-height: 100vh;
    background-color: #f5f5f5;
  `,
  content: css`
    display: flex;
    padding-top: 64px;
  `,
  main: css`
    flex-grow: 1;
    padding: 24px;
  `
} 