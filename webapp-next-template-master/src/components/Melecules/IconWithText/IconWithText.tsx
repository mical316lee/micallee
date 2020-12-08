import React, { ReactNode } from "react"
import { Typography, Avatar, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(2),
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: theme.palette.primary.main,
  },
}))

type Props = {
  icon: ReactNode
  text: string
}

const IconWithText: React.FC<Props> = ({ icon, text }) => {
  const classes = useStyles()
  return (
    <>
      <Avatar className={classes.avatar}>{icon}</Avatar>
      <Typography component="h1" variant="h5">
        {text}
      </Typography>
    </>
  )
}

export default IconWithText
