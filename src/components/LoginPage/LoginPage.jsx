import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';

const LoginPage = () => {
    const googleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    }

    return (
        <div>
            <div onClick={googleLogin}>
                <Button startIcon = {<GoogleIcon/>} variant = "contained" disableElevation>Admin Login</Button>
            </div>
        </div>
    )
}

export default LoginPage;