/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const TaskItem = ({
  priority, taskName, description, taskDate,
}) => (
  <tr>
    <td>{priority}</td>
    <td>{taskName}</td>
    <td>{description}</td>
    <td>{taskDate}</td>
  </tr>
);

TaskItem.propTypes = {
  priority: PropTypes.string,
  taskName: PropTypes.string,
  description: PropTypes.string,
  taskDate: PropTypes.string,

};

TaskItem.defaultProp = {
  priority: 'priority',
  taskName: 'taskName',
  description: 'description',
  taskDate: 'taskDate',
};

export default TaskItem;
