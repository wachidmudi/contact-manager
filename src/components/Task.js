import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const Task = ({ task }) => {
  const { removeTask } = useContext(TaskListContext)
  const uri = `https://wa.me/${task.phone}`
  return (
    <li className="list-item">
      <span>{task.phone} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{' '}
        <button className="btn-edit task-btn">
          <a style={{ display: "table-cell" }} href={uri} target="_blank"><i className="fa fa-whatsapp"></i></a>
        </button>
      </div>
    </li>
  )
}

export default Task
