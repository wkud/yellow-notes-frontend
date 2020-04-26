import React, { useEffect, useState } from 'react';
import { Form, ListGroup, Button, Row, Col } from 'react-bootstrap';
import TodoItem from './TodoItem';
import { getVariant, getFormColor, getBlackOrWhiteColor } from '../../../../utility/colorUtility';

const Todo = props => {
  const [tasks, setTasksState] = useState([]);
  const [content, setContent] = useState('');
  const { onChange, data, name } = props;

  const setTasks = tasks => {
    onChange({ target: { name, value: JSON.stringify(tasks) } });
  };

  useEffect(() => {
    try {
      setTasksState(JSON.parse(data.content));
    } catch (error) {
      setTasksState([]);
    }
  }, [data.content]);

  const addTask = content => {
    let newId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1;
    setTasks([...tasks, { id: newId, content: content, checked: false }]);
  };

  const addTaskPressed = event => {
    event.preventDefault();
    if (content !== '') addTask(content);
    setContent('');
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const checkTask = (id, checked) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, checked: checked } : task)));
  };

  return (
    <>
      <ListGroup variant='flush' className='pt-0'>
        {tasks.map(task => (
          <TodoItem
            blocked={data.isBlocked}
            key={task.id}
            task={task}
            removeTask={removeTask}
            checkTask={checkTask}
            color={data.color}
          />
        ))}

        {data.isBlocked || (
          <ListGroup.Item style={{ backgroundColor: data.color }}>
            <Row>
              <Col className='pr-0'>
                <div onSubmit={addTaskPressed}>
                  <Form.Control
                    type='text'
                    placeholder='Enter a new task'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    tabIndex='1'
                    className={`text-${getVariant(data.color)}
                    placeholder-${getVariant(data.color)}`}
                    style={{ backgroundColor: getFormColor(data.color), borderWidth: '0' }}
                  />
                </div>
              </Col>
              <Col xs='auto' className='mr-1 py-2'>
                <Button
                  variant='success'
                  onClick={addTaskPressed}
                  className='p-1 px-2'
                  style={{ boxShadow: `0 0 2px 0 ${getBlackOrWhiteColor(data.color)}` }}>
                  <i className={'fas fa-plus fa-fw'} />
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        )}
      </ListGroup>
    </>
  );
};

export default Todo;
