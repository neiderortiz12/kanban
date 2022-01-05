import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
const Header = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || "")
    const navigate = useNavigate()
    const exit = () => {
        localStorage.setItem("sesion", "false")
        navigate("/login")
    }
    return (
        <div className='header'>
            <div className='title'>
                <Typography
                    className='text'
                    variant="h4"
                    gutterBottom
                    component="div"
                >
                    Kanban
                </Typography>
            </div>
            <div className='sectionUser'>

                <Typography
                    className='text'
                    variant="h6"
                    gutterBottom
                    component="div"
                >
                    hola, {user.name}
                </Typography>
                <LogoutOutlinedIcon onClick={exit}/>
            </div>

        </div>
    )
}

export default Header;