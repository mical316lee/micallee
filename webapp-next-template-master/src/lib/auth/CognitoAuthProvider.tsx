import React from "react"

import { useState, useEffect } from "react"
import { SignUpParams } from "@aws-amplify/auth/lib-esm/types"
import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js"

import { Auth } from "aws-amplify"
import Amplify from "aws-amplify"
import { AuthContext } from "./AuthContext"

export type LoginOptions = {
  username: string
  password: string
}

interface ICognitoAuthProviderParams {
  amplifyConfig: {
    Auth: {
      identityPoolId: string
      region: string
      userPoolId: string
      userPoolWebClientId: string
    }
  }
  children: any
}

export default function CognitoAuthProvider(props: ICognitoAuthProviderParams) {
  Amplify.configure(props.amplifyConfig)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, setUser] = useState<CognitoUser>()

  useEffect(() => {
    checkAuthenticated()
  }, [])

  const checkAuthenticated = async (): Promise<void> => {
    setIsLoading(true)
    try {
      const session: CognitoUserSession = await Auth.currentSession()
      if (session) {
        setIsAuthenticated(true)
        const user: CognitoUser = await Auth.currentAuthenticatedUser()
        setUser(user)
      }
    } catch (error) {
      console.log("current session error", error)
      setError(error)
      setIsAuthenticated(false)
    }
    setIsLoading(false)
  }

  const signIn = async ({ username, password }: LoginOptions): Promise<void> => {
    setIsLoading(true)
    try {
      await Auth.signIn(username, password)
      setIsAuthenticated(true)
    } catch (error) {
      console.log("error signing in", error)
      setError(error)
      setIsAuthenticated(false)
    }
    setIsLoading(false)
  }

  const signUp = async (param: SignUpParams): Promise<CognitoUser | undefined> => {
    setIsLoading(true)
    let result
    try {
      result = await Auth.signUp(param)
      setUser(result.user)
    } catch (error) {
      console.log("error signing up", error)
      setError(error)
    }
    setIsLoading(false)
    return result?.user
  }

  const confirmSignUp = async ({ username, code }: any): Promise<void> => {
    setIsLoading(true)
    try {
      await Auth.confirmSignUp(username, code)
      setIsAuthenticated(true)
    } catch (error) {
      console.log("error confirming sign up", error)
      setError(error)
    }
    setIsLoading(false)
  }

  const signOut = () => {
    setIsLoading(true)
    Auth.signOut()
      .then(() => {
        setIsAuthenticated(false)
      })
      .catch((err) => console.log("error signing out: ", err))
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        signIn,
        signUp,
        confirmSignUp,
        signOut,
        user,
        error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
