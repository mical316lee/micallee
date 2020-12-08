import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Head from "next/head"

import { Footer } from "../../components/Organisms"
import { CssBaseline } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 56,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64,
    },
  },
  content: {
    height: "100%",
  },
}))

export const siteTitle = "Next.js Sample Website"

const SimpleLayout: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <CssBaseline />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default SimpleLayout
