import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './Register.scss';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

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

    if (localStorage.getItem("sesion") === "true") {
        localStorage.setItem("sesion", false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem("users"))
        const user = users.filter(us => us.email === email)
        if(user[0]){
            notify('error', 'el correo electronico ya existe')
            return
        }
        else{
            const newuser = {id: Date.now(), name, email, pass}
            localStorage.setItem("sesion", "true")
            const newusers = [...users, newuser]
            localStorage.setItem("user", JSON.stringify(newuser))
            localStorage.setItem("users", JSON.stringify(newusers))
            navigate("/")
            
        }
    }
    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
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
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <TextField
                        id="outlined-basic"
                        className="textField"
                        label="Correo electronico"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        id="outlined-password-input"
                        className="textField"
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                        required
                    />
                    <Button
                        variant="contained"
                        sx={{ textTransform: 'none' }}
                        className='button'
                        type="onsubmit"
                        disabled={!pass || !email || !name}
                    >
                        Registrarse
                    </Button>
                </Box>
            </form>
            <ToastContainer />
        </div >
    )
}

export default Register;