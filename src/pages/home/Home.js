import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableList from '../../components/tableList/TableList';
import './Home.scss';
import { useState } from 'react';


const Intasks = [
    { _id: 1, title: "First Task", status: "backlog" },
    { _id: 2, title: "Second Task", status: "backlog" },
    { _id: 3, title: "Third Task", status: "backlog" },
    { _id: 4, title: "Fourth Task", status: "going" },
    { _id: 5, title: "Fifth Task", status: "going" },
    { _id: 6, title: "Sixth Task", status: "going" },
    { _id: 7, title: "Seventh Task", status: "done" },
    { _id: 8, title: "Eighth Task", status: "done" },
    { _id: 9, title: "Ninth Task", status: "done" },
    { _id: 10, title: "Tenth Task", status: "done" },
];

const labels = ["backlog", "going", "done"];
const labelsMap = {
    backlog: "Pendiente",
    going: "En progreso",
    done: "Finalizada",
};


const Home = () => {
    const [tasks, setTasks] = useState(Intasks)
    const [newTask, setNewTask] = useState('')

    const update = (id, status) => {
        if(!id || !labels.includes(status)){
            return
        }
        console.log("cambiar ", id, status)
        const newList = tasks.map(item => (
            item._id === id ? { ...item, status: status }
                : item
        ))
        setTasks(newList)
        console.log("cambiar ", id, status, newList)
    }

    const addTask = () => {
        if(!newTask){
            return
        }

        const newList = [{id: Date.now, title: newTask, status: 'backlog'}, ...tasks]

        setTasks(newList)
    }

    return (
        <div className='home'>
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
                            tasksList={tasks}
                            labelsMap={labelsMap}
                            labels={labels}
                            update={update}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;