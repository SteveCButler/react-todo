import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TodoListTable = ({ task }) => (
  <table id="todoListTable" className="table mt-5">
    <thead>
      <tr>
        <th scope="col" id="sortPriority">
          Priority
        </th>
        <th scope="col" id="sortName">
          Name
        </th>
        <th scope="col">Description</th>
        <th scope="col" id="sortCompleteBy">
          Complete By Date
        </th>
        <th scope="col">Remove</th>
      </tr>
    </thead>
    <tbody>
      {task.map((item) => <TaskItem prority={item.prority} taskName={item.taskName} description={item.description} taskDate={item.taskDate} />)}
    </tbody>
  </table>
);

TodoListTable.propTypes = {
  task: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,

};

// TodoListTable.defaultProps = {
//   task: [],
// };
export default TodoListTable;
