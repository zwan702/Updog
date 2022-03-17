import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import classes from './registrationpage.module.scss'
import LoadingButton from '@mui/lab/LoadingButton'

const RegistrationFormView = ({ state, action }) => {
    const { email, password, username, error, loading } = state
    const { setEmail, setPassword, setUsername, submitForm } = action

    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <div className={classes.logo}>Logo</div>
            <div className={classes.container}>
                <div className={classes.inputsContainer}>
                    <h2>Create an account</h2>
                    <span
                        className={classes.error}
                        style={{
                            // this is done so that if the error shows up, the elements are not displaced (preallocated space)
                            color: error ? 'red' : 'rgba(0,0,0,0)',
                        }}
                    >
                        {error || 'Blank'}
                    </span>
                    <div className={classes.input}>
                        <TextField
                            label="Your Username"
                            type="text"
                            variant="outlined"
                            value={username}
                            fullWidth
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        {error.userName && (
                            <p className={classes.error}>{error.userName}</p>
                        )}
                    </div>

                    <div className={classes.input}>
                        <TextField
                            label="Your Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {error.email && (
                            <p className={classes.error}>{error.email}</p>
                        )}
                    </div>
                    <div className={classes.input}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            onMouseDown={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        {error.password && (
                            <p className={classes.error}>{error.password}</p>
                        )}
                    </div>
                </div>

                <div className={classes.bottomContainer}>
                    <div className={classes.buttonContainer}>
                        <LoadingButton
                            loading={loading}
                            variant="contained"
                            fullWidth
                            onClick={(e) => submitForm(e)}
                            style={{ borderRadius: 100, padding: 10 }}
                        >
                            Continue
                        </LoadingButton>
                    </div>

                    <span className={classes.signUpText}>
                        Already have an account?{' '}
                        <span className={classes.signUpText}>
                            <Link to="/signIn">Sign in</Link>
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default RegistrationFormView
