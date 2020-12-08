import React, { useContext } from "react"
import { SignUpParams } from "@aws-amplify/auth/lib-esm/types"
import { CognitoUser } from "amazon-cognito-identity-js"
import { AuthState, initialContext } from "./AuthState"
import { LoginOptions } from "./CognitoAuthProvider"
interface IAuthContext extends AuthState {
  signIn: (signInOption: LoginOptions) => Promise<void>
  signUp: (params: SignUpParams) => Promise<CognitoUser | undefined>
  confirmSignUp: (params: any) => Promise<void>
  signOut: () => void
}
export const AuthContext = React.createContext<IAuthContext>(initialContext)
export const useAuth = () => useContext(AuthContext)
