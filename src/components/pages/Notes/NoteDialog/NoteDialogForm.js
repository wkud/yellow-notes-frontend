import React, { useEffect, useRef } from 'react';
import { Modal, Form } from 'react-bootstrap';
import Todo from '../Todo';
import { getVariant, getFormColor } from '../../../../utility/colorUtility';

const NoteDialogForm = props => {
  const { isNoteNew, children, onSubmit, formData, setFormData, dialogVisible } = props;
  const { title, content, color, isBlocked } = formData;
  const inputElement = useRef(null);

  const onChange = e => {
    e.target && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (dialogVisible && inputElement.current) {
      inputElement.current.focus();
    }
  }, [dialogVisible]);

  return (
    <Form onSubmit={onSubmit}>
      <Modal.Header
        style={{
          backgroundColor: color,
          borderBottom: 'none'
        }}>
        <Modal.Title style={{ width: '100%' }}>
          <Form.Control
            readOnly={isBlocked && !isNoteNew}
            ref={inputElement}
            name='title'
            value={title}
            onChange={e => onChange(e)}
            type='text'
            placeholder='Note Title'
            tabIndex='1'
            className={`text-${getVariant(color)} placeholder-${getVariant(color)}`}
            style={{ backgroundColor: getFormColor(color), borderWidth: '0' }}
          />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: color }}>
        {formData.variant === 0 ? (
          <Form.Control
            readOnly={isBlocked && !isNoteNew}
            name='content'
            value={content}
            onChange={e => onChange(e)}
            as='textarea'
            rows='3'
            placeholder='Note Content'
            tabIndex='2'
            className={`text-${getVariant(color)} placeholder-${getVariant(color)}`}
            style={{ backgroundColor: getFormColor(color), borderWidth: '0' }}
          />
        ) : (
          <Todo
            name='content'
            isNoteNew={isNoteNew}
            data={formData}
            onChange={e => onChange(e)}
            rows='3'
            tabIndex='2'
          />
        )}
      </Modal.Body>
      {children}
    </Form>
  );
};

export default NoteDialogForm;
