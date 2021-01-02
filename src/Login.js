import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import "./Login.css"

export default function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(
                login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                })
            )
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt=""/>

                <Button 
                onClick={signIn}
                variant="contained"
                color="primary"
                >Login</Button>
            </div>
        </div>
    )
}
