import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import useNotes from '../../../contexts/NotesContext';
import Moment from 'react-moment';
import '../../../styles/notes.css';
import 'simplebar/dist/simplebar.min.css';
import { getTextColor } from '../../../utility/colorUtility';

const Note = ({ note }) => {
  const [, , { openDialog }] = useNotes();
  const [expanded, setExpanded] = useState(false);

  const todoListDiv = content => {
    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
    } catch (error) {
      parsedContent = [];
    }
    return parsedContent.map(i => (
      <div key={i.id}>
        {<i className={`fas fa-${i.checked ? 'check' : 'times'} fa-fw`} />}
        {i.content}
      </div>
    ));
  };

  const contentDiv = note => {
    return (
      <div className={`content-${expanded ? 'expanded' : 'collapsed'}`}>
        {note.variant === 0 ? note.content : todoListDiv(note.content)}
      </div>
    );
  };

  return (
    <Card
      className={`shadow-sm note-card ${getTextColor(note.color)}`}
      style={{ backgroundColor: note.color }}>
      <Card.Header className='d-flex justify-content-between'>
        <Card.Title className='my-auto overflow-ellipsis p-1'>{note.title}</Card.Title>
        <Button variant='outline-primary' onClick={() => setExpanded(!expanded)}>
          <i className={'fas fa-' + (expanded ? 'compress-alt' : 'expand-alt')} />
        </Button>
      </Card.Header>
      <Card.Body>
        {expanded ? (
          <SimpleBar className='scrollbar'>{contentDiv(note)}</SimpleBar>
        ) : (
          contentDiv(note)
        )}
      </Card.Body>
      {expanded && (
        <Card.Footer className='d-flex justify-content-between'>
          <div className='my-auto timestamp'>
            <i className='far fa-calendar-alt pr-1' />
            <Moment format='YYYY-MM-DD HH:mm'>{note.timestamp}</Moment>
          </div>
          <Button variant='outline-primary' onClick={() => openDialog({ ...note })}>
            Edit
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
};

export default Note;
