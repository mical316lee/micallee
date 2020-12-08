import Head from "next/head"
import MainLayout, { siteTitle } from "../templates/MainLayout/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </MainLayout>
  )
}
