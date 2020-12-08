import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { LogoutButton, SignInButton, SignUpButton } from "../../Melecules"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "none",
      borderBottom: "1px solid #DDDDDD",
      background: "transparent",
    },
    title: {
      color: theme.palette.primary.main,
    },
    flexGrow: {
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }),
)

const TopBar: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography variant="h2">Web App Template</Typography>
        <div className={classes.flexGrow} />
        <SignInButton color="primary" className={classes.button} />
        <SignUpButton color="primary" className={classes.button} />
        <LogoutButton color="primary" className={classes.button} />
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
