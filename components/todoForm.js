import { useState } from 'react';
import TodoListTable from './todoListTable';

const TodoForm = () => {
  const [task, setTask] = useState([]);
  const [priority, setPriority] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTask((prev) => prev.concat({
      priority,
      taskName,
      description,
      taskDate,
    }));
    console.warn(task);
    setPriority('');
    setTaskName('');
    setDescription('');
    setTaskDate('');
    // setTask([]);  //Clear task array
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="priority" className="form-label">
          Priority
        </label>
        <select id="priority" value={priority} className="form-select mb-2" aria-label="Default select example" onChange={(e) => setPriority(e.target.value)}>
          <option>Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <h3>{priority}</h3>
        <div className="mb-3">
          <label htmlFor="todo" className="form-label">
            Task Name
          </label>
          <input type="text" className="form-control" id="todo" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="completionDate" className="form-label">
            Completion Date
          </label>
          <input id="completionDate" value={taskDate} className="form-control" type="date" placeholder="Date to complete" onChange={(e) => setTaskDate(e.target.value)} />
        </div>
        <button type="submit" id="todoSubmit" className="btn btn-primary">
          Save
        </button>
      </form>
      <TodoListTable task={task} />
    </>
  );
};

export default TodoForm;
