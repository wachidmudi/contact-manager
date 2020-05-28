import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const TaskForm = () => {
  const { addTask, editTask, editItem } = useContext(TaskListContext)
  const [phone, setPhone] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(phone)
      setPhone('')
    } else {
      editTask(phone, editItem.id)
    }
  }

  const handleChange = e => {
    setPhone(e.target.value)
  }

  const handleClear = e => {
    e.preventDefault()
    setPhone('')
  }

  useEffect(() => {
    if (editItem) {
      setPhone(editItem.phone)
      console.log(editItem)
    } else {
      setPhone('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        pattern="[8][0-9]{1,15}"
        placeholder="Add Contact (85607766002)"
        value={phone}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit' : 'Add'}
        </button>
        <button className="btn clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
