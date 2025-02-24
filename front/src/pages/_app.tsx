import { MainLayout } from '../components/layouts/MainLayout'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </RecoilRoot>
  )
}
