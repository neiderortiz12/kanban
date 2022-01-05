import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Login.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Password } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [user, setUser] = useState("");
    const [passWord, setPassword] = useState("");
    const navigate = useNavigate()

    const notify = (type, message="Elementos enviados!") => toast[type](message,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
        );

    const iniciarsesion = () => {
        if(user && passWord){
            const users = JSON.parse(localStorage.getItem("users"))
            const userInit = users.filter(us => us.email === user)
            if(userInit[0] && userInit[0].pass === passWord){
                localStorage.setItem("sesion", "true")
                localStorage.setItem("user", JSON.stringify(userInit[0]))
                navigate("/home")
            }
            else{
                localStorage.setItem("sesion", "false")
                notify('error', 'datos incorrectos')
            }

        }
        /* */
    }

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
                    Iniciar Sesión
                </Typography>
                <TextField
                    id="outlined-basic"
                    className="textField"
                    label="Correo electronico"
                    variant="outlined"
                    type="email"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <TextField
                    id="outlined-password-input"
                    className="textField"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    value={passWord}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Typography
                    variant="body2"
                    gutterBottom
                    component="div"
                >
                    No estas registrado?
                    <Link to="/register" style={{marginLeft: '5px'}}>Registrese</Link>
                </Typography>
                <Button
                    variant="contained"
                    sx={{ textTransform: 'none'}}
                    className='button'
                    onClick={iniciarsesion}
                >
                    iniciar sesión
                </Button>
            </Box>
            <ToastContainer />
        </div>
    )
}

export default Login;