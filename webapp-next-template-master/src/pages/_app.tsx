import React, { useEffect } from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "@material-ui/styles"
import { CssBaseline } from "@material-ui/core"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import "../styles/global.css"
import theme from "../theme"
import CognitoAuthProvider from "../lib/auth/CognitoAuthProvider"
import awsConfiguration from "../lib/awsConfigurations"

export const cache = createCache({ key: "css" })

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CognitoAuthProvider amplifyConfig={awsConfiguration}>
          <CssBaseline />
          <Component {...pageProps} />
        </CognitoAuthProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
