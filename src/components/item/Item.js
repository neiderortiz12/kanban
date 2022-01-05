import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import './Item.scss'



const Item = ({ item, labelsMap, stateTask, labels, deleteTask, update}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (status) => {
        update(item.id, status)
        setAnchorEl(null);
    };
    return (
        <div className="item">
            <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
            >
                {item.title}
            </Typography>
            <div>
                <ClearOutlinedIcon onClick={() => deleteTask(item.id)}/>
                <MoreHorizOutlinedIcon
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handleClose(labels[0])}>{labelsMap[labels[0]]}</MenuItem>
                    <MenuItem onClick={() => handleClose(labels[1])}>{labelsMap[labels[1]]}</MenuItem>
                    <MenuItem onClick={() => handleClose(labels[2])}>{labelsMap[labels[2]]}</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Item;