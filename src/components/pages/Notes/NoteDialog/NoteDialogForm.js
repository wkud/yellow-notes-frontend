import React, { useEffect, useRef } from 'react';
import { Modal, Form } from 'react-bootstrap';
import HoverableControl from '../../../common/HoverableControl';
import Todo from '../Todo';
import { getVariant, getFormColor } from '../../../../utility/colorUtility';

const NoteDialogForm = props => {
  const { isNoteNew, children, onSubmit, formData, setFormData, dialogVisible } = props;
  const { title, content, color, isBlocked } = formData;

  const inputElement = useRef(null);

  const onChange = e => {
    e.target && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const focusTitle = () => {
    if (dialogVisible && isNoteNew && inputElement.current) {
      inputElement.current.focus();
    }
  };
  useEffect(focusTitle, [dialogVisible]);

  return (
    <Form onSubmit={onSubmit}>
      <Modal.Header
        style={{
          backgroundColor: color,
          borderBottom: 'none'
        }}>
        <Modal.Title style={{ width: '100%' }}>
          <HoverableControl
            type='text'
            readOnly={isBlocked && !isNoteNew}
            ref={inputElement}
            name='title'
            value={title}
            placeholder='Note Title'
            onChange={e => onChange(e)}
            tabIndex='1'
            color={color}
            className={`note-title border-0 text-${getVariant(color)} placeholder-${getVariant(
              color
            )}`}
          />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: color }}>
        {formData.variant === 0 ? (
          <Form.Control
            as='textarea'
            readOnly={isBlocked && !isNoteNew}
            name='content'
            value={content}
            placeholder='Note Content'
            onChange={e => onChange(e)}
            rows='3'
            tabIndex='2'
            className={`border-0 text-${getVariant(color)} placeholder-${getVariant(color)}`}
            style={{ backgroundColor: getFormColor(color) }}
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
