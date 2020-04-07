import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useNotes from '../../../contexts/NotesContext';
import Moment from 'react-moment';

const NoteDialog = () => {
  const [, dispatch, { dialogVisible, closeDialog, note }] = useNotes();
  const [formData, setFormData] = useState({ title: '', content: '' });
  const { title, content } = formData;

  useEffect(() => {
    dialogVisible && note && setFormData(() => ({ ...note }));
  }, [dialogVisible, note]);

  const onChange = e => {
    e.target && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!note) {
      dispatch({
        type: 'ADD_NOTE',
        payload: { ...formData }
      });
    } else {
      if (!title) {
        return; // TODO: add invalid note error
      }
      if (Object.keys(formData).length > 1 && formData.noteId)
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            ...Object.keys(formData)
              .filter(key => formData[key] !== note[key])
              .reduce((res, key) => ({ ...res, [key]: formData[key] }), {}),
            noteId: note.noteId
          },
        });
    }

    setFormData(() => ({
      title: '',
      content: ''
    }));
    closeDialog();
  };

  const onDelete = e => {
    dispatch({
      type: 'REMOVE_NOTE',
      payload: { ...formData }
    });
    closeDialog();
  };

  return (
    <Modal show={dialogVisible} onHide={closeDialog}>
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Form.Control
              name='title'
              value={title}
              onChange={e => onChange(e)}
              type='text'
              placeholder='Note Title'
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            name='content'
            value={content}
            onChange={e => onChange(e)}
            as='textarea'
            rows='3'
            placeholder='Note Content'
          />
        </Modal.Body>
        {!note ? (
          <Modal.Footer>
            <Button variant='outline-secondary' onClick={closeDialog}>
              Cancel
            </Button>
            <Button variant='outline-primary' type='submit'>
              Create
            </Button>
          </Modal.Footer>
        ) : (
          <Modal.Footer>
            <Form.Label style={{ marginRight: 'auto', fontSize: '0.95rem' }}>
              <i className='far fa-calendar-alt pr-1' />
              <Moment format='YYYY-MM-DD HH:mm'>{note.timestamp}</Moment>
            </Form.Label>
            <Button variant='outline-secondary' onClick={closeDialog}>
              Close
            </Button>
            <Button variant='outline-danger' onClick={onDelete}>
              Remove
            </Button>
            <Button variant='outline-primary' type='submit'>
              Save
            </Button>
          </Modal.Footer>
        )}
      </Form>
    </Modal>
  );
};

export default NoteDialog;
