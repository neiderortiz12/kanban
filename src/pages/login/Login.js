import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <Box
                className='caja'
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                >
                    Iniciar Sesion
                </Typography>
                <TextField
                    id="outlined-basic"
                    className="textField"
                    label="Correo electronico"
                    variant="outlined"
                    type="email"
                />
                <TextField
                    id="outlined-password-input"
                    className="textField"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                />
                <Typography
                    variant="body2"
                    gutterBottom
                    component="div"
                >
                    No estas registrado?
                    <a href="www.google.com" style={{marginLeft: '5px'}}>Registrese</a>
                </Typography>
                <Button
                    variant="contained"
                    sx={{ textTransform: 'none'}}
                    className='button'
                >
                    iniciar sesion
                </Button>
            </Box>
        </div>
    )
}

export default Login;