import React from 'react'
import { Button } from '@mui/material'
// import { withStyles } from '@mui/styles/withStyles';

export default function SignUpBtn() {
    return (
        <div>
            <Button onclick="window.location.href='../pages/SignUp.jsx'">Registrarse</Button>
        </div>
    )
}
