import React from "react"
import { Typography } from "@material-ui/core"
import MuiLink from "@material-ui/core/Link"

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <MuiLink color="inherit" href="https://github.com/ashizaki/">
      k.ashizaki
    </MuiLink>{" "}
    {new Date().getFullYear()}.
  </Typography>
)

export default Copyright
