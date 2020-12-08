import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Copyright } from "../../Atoms"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
    company: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(0.5),
    },
  }),
)

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.company}>
        <Copyright />
      </div>
    </div>
  )
}

export default Footer
