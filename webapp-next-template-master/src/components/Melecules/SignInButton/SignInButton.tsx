import React from "react"
import Button from "@material-ui/core/Button"
import { useAuth } from "../../../lib/auth/AuthContext"
import { useRouter } from "next/router"

const SignInButton = (props: any) => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  if (isAuthenticated) return null

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    router.push("/signin")
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClick} {...props}>
        ログイン
      </Button>
    </div>
  )
}

export default SignInButton
