import React from "react"
import { Button } from "@material-ui/core"
import { useAuth } from "../../../lib/auth/AuthContext"
import { useRouter } from "next/router"

const SignUpButton = (props: any) => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  if (isAuthenticated) return null

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    router.push("/signup")
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClick} {...props}>
        新規登録
      </Button>
    </div>
  )
}

export default SignUpButton
