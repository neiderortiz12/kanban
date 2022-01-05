import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableList from '../../components/tableList/TableList';
import './Home.scss';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { useNavigate } from 'react-router-dom';

const labels = ["backlog", "going", "done"];
const labelsMap = {
    backlog: "Pendiente",
    going: "En progreso",
    done: "Finalizada",
};


const Home = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")))
    const [newTask, setNewTask] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])
    if(!user || localStorage.getItem("sesion") !== "true"){
        navigate("/login")
    }
    useEffect(()=>{
        if(localStorage.getItem("sesion") === "false"){
            navigate("/login")
        }
    }, [navigate])

    const update = (id, status) => {
        if(!id || !labels.includes(status)){
            return
        }
        const newList = tasks.map(item => (
            item.id === id ? { ...item, status: status }
                : item
        ))
        setTasks(newList)
    }

    const addTask = () => {
        if(!newTask){
            return
        }

        const newList = [{id: Date.now(), title: newTask, status: 'backlog', userId: user.id}, ...tasks]

        setTasks(newList)
    }
    const deleteTask = (id) => {
        const newList = tasks.filter(item => item.id  !== id)
        setTasks(newList)
    }

    return (
        <div className='home'>
            <Header/>
            <div className='addTask'>
                <TextField
                    id="outlined-basic"
                    className="textField"
                    label="Nueva tarea"
                    variant="outlined"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                />
                <Button
                    variant="contained"
                    sx={{ textTransform: 'none'}}
                    className='button'
                    onClick={addTask}
                >
                    Agregar
                </Button>

            </div>
            <div className='tablesContainer'>
                {
                    labels.map((stateTask, index) => (
                        <TableList
                            key={index}
                            stateTask={stateTask}
                            tasksList={tasks.filter(item => item.userId === user.id)}
                            labelsMap={labelsMap}
                            labels={labels}
                            update={update}
                            deleteTask={deleteTask}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;