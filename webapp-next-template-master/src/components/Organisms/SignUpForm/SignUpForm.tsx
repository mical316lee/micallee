import React, { useEffect, useState } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Button, Container, InputAdornment, TextField } from "@material-ui/core"
import { Controller, useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { useAuth } from "../../../lib/auth/AuthContext"
import { IconWithText } from "../../Melecules"
import { Email, Person, Visibility, VisibilityOff, VpnKey } from "@material-ui/icons"
import { ClickableIcon } from "../../Atoms"

type Inputs = {
  username: string
  email: string
  password: string
  submit: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }),
)

const SignUpForm = () => {
  const classes = useStyles()
  const router = useRouter()

  const [visiblePassword, setPasswordVisible] = useState(false)
  const handleClick = () => setPasswordVisible(!visiblePassword)

  const { handleSubmit, control, errors, setError } = useForm<Inputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
  })

  const { isAuthenticated, signUp, error } = useAuth()

  useEffect(() => {
    if (error) {
      setError("username", { message: error.message, type: error.name })
      setError("email", { message: error.message, type: error.name })
      setError("password", { message: error.message, type: error.name })
    }
    if (isAuthenticated) {
      router.replace("/")
    }
  }, [error, isAuthenticated, setError, router])

  const onSubmit = async (data: Inputs) => {
    const user = await signUp({
      username: data.username,
      password: data.password,
      attributes: {
        email: data.email,
      },
    })
    if (user) router.push("/confirm")
  }

  if (isAuthenticated) return null

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <IconWithText text="アカウントの新規作成" icon={<VpnKey />} />
        <form className={classes.form}>
          <Controller
            as={
              <TextField
                label="ユーザ名"
                error={!!errors.username}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                helperText={errors.username?.message || ""}
                autoComplete="username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />
            }
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "必須です。" }}
          />
          <Controller
            as={
              <TextField
                label="メールアドレス"
                error={!!errors.email}
                variant="outlined"
                margin="normal" // or dense
                fullWidth
                required
                helperText={errors.email?.message || ""}
                type={visiblePassword ? "default" : "email"}
                autoComplete="current-email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            }
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: "必須です。" }}
          />
          <Controller
            as={
              <TextField
                label="パスワード"
                error={!!errors.password}
                variant="outlined"
                margin="normal" // or dense
                fullWidth
                required
                helperText={errors.password?.message || ""}
                type={visiblePassword ? "default" : "password"}
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {visiblePassword
                        ? ClickableIcon(VisibilityOff, handleClick)
                        : ClickableIcon(Visibility, handleClick)}
                    </InputAdornment>
                  ),
                }}
              />
            }
            name="password"
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
                Sign Up
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

export default SignUpForm
