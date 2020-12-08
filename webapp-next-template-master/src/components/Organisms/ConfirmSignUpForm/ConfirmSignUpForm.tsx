import React from "react"
import { Button, TextField, InputAdornment, makeStyles, Container } from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"
import { useRouter } from "next/router"
import { MobileFriendly, VpnKey } from "@material-ui/icons"
import { useAuth } from "../../../lib/auth/AuthContext"
import { IconWithText } from "../../Melecules"

type Inputs = {
  username: string
  code: string
  submit: string
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const ConfirmSignUpForm = () => {
  const classes = useStyles()
  const router = useRouter()

  const { handleSubmit, control, errors, setError } = useForm<Inputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
  })

  const { isAuthenticated, confirmSignUp, error, user } = useAuth()

  React.useEffect(() => {
    if (error) {
      setError("code", { message: error.message, type: error.name })
    }
    if (isAuthenticated) {
      router.replace("/")
    }
  }, [error, isAuthenticated, setError, router])

  const onSubmit = async (data: Inputs) => {
    await confirmSignUp({
      username: user?.getUsername(),
      code: data.code,
    })
  }

  if (isAuthenticated) return null
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <IconWithText text="認証コードの入力" icon={<VpnKey />} />
        <form className={classes.form}>
          <Controller
            as={
              <TextField
                label="認証コード"
                error={!!errors.code}
                variant="outlined"
                margin="normal" // or dense
                fullWidth
                required
                helperText={errors.code?.message || ""}
                autoComplete="current-code"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MobileFriendly />
                    </InputAdornment>
                  ),
                }}
              />
            }
            name="code"
            control={control}
            defaultValue=""
            rules={{ required: "必須です。" }}
          />
          <Controller
            as={
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                認証
              </Button>
            }
            name="submit"
            control={control}
            defaultValue=""
            onClick={handleSubmit(onSubmit)}
          />
        </form>{" "}
      </div>
    </Container>
  )
}

export default ConfirmSignUpForm
