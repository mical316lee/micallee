import React from "react"
import { useAuth } from "../../../lib/auth/AuthContext"
import { Tooltip, IconButton } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

const LogoutButton = (props: any) => {
  const { isAuthenticated, signOut } = useAuth()

  if (!isAuthenticated) return null

  return (
    <Tooltip title="ログアウト">
      <IconButton onClick={() => signOut()} {...props}>
        <ExitToAppIcon />
      </IconButton>
    </Tooltip>
  )
}

export default LogoutButton
