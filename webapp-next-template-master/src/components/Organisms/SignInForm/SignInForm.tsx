import React, { useState } from "react"
import { Button, TextField, InputAdornment, makeStyles, Container } from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"
import { Visibility, VisibilityOff, Person, VpnKey } from "@material-ui/icons"
import { useRouter } from "next/router"
import { ClickableIcon } from "../../Atoms"
import { useAuth } from "../../../lib/auth/AuthContext"
import { IconWithText } from "../../Melecules"

type Inputs = {
  username: string
  password: string
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

const SignInForm = () => {
  const { isAuthenticated, signIn, error } = useAuth()

  const classes = useStyles()
  const router = useRouter()

  const [visiblePassword, setPasswordVisible] = useState(false)
  const handleClick = () => setPasswordVisible(!visiblePassword)

  const { handleSubmit, control, errors, setError } = useForm<Inputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
  })

  React.useEffect(() => {
    if (error) {
      setError("username", { message: error.message, type: error.name })
      setError("password", { message: error.message, type: error.name })
    }
    if (isAuthenticated) {
      router.replace("/")
    }
  }, [error, isAuthenticated, setError, router])

  const onSubmit = (data: Inputs) => {
    signIn({
      username: data.username,
      password: data.password,
    })
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <IconWithText text="サインイン" icon={<VpnKey />} />
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
            // Reactのフォームコンポーネントは、
            // 割り当てられているStateの値がnullかundefinedになると、uncontrolledになってしまうので注意
            // https://github.com/react-hook-form/react-hook-form-website/issues/133
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
                Sign In
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

export default SignInForm
