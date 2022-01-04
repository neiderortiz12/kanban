import { Typography } from "@mui/material";
import Item from "../item/Item";
import './TableList.scss'

const TableList = ({ stateTask, tasksList, labelsMap, labels, update }) => {
    return (
        <div className="tableList">
            <Typography
                variant="h6"
                gutterBottom
                component="div"
            >
                {labelsMap[stateTask]}
            </Typography>
            <div className="tasks">
                {
                    tasksList.filter((item) => item.status === stateTask)
                        .map((item, index) => (
                            <Item
                                key={index}
                                item={item}
                                labelsMap={labelsMap}
                                stateTask={stateTask}
                                labels={labels}
                                update={update}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default TableList;