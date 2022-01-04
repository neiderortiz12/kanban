import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './Register.scss';

const Register = () => {
    return (
        <div className="register">
            <Box
                className="containerRegister"
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                >
                    Registro
                </Typography>
                <TextField
                    id="outlined-basic"
                    className="textField"
                    label="Nombre"
                    variant="outlined"
                />
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
                <Button
                    variant="contained"
                    sx={{ textTransform: 'none'}}
                    className='button'
                >
                    Registrarse
                </Button>
            </Box>
        </div>
    )
}

export default Register;