import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import ColorPicker from '../../../common/ColorPicker';

const NoteDialogFooter = props => {
  const { isNoteNew, formData, setFormData, onDelete, note } = props;
  const [showPicker, setShowPicker] = useState(false);

  const onColorChange = color => {
    setFormData({ ...formData, color: color });
  };

  return (
    <Modal.Footer>
      {isNoteNew || (
        <Form.Label style={{ marginRight: 'auto', fontSize: '0.95rem' }}>
          <i className='far fa-calendar-alt pr-1' />
          <Moment format='YYYY-MM-DD HH:mm'>{note.modificationDate}</Moment>
        </Form.Label>
      )}
      <ColorPicker
        color={formData.color}
        onColorChange={onColorChange}
        show={showPicker}
        setShow={setShowPicker}
        placement='bottom'>
        <Button variant='outline-secondary' onClick={() => setShowPicker(!showPicker)} tabIndex='3'>
          <i className='fas fa-eye-dropper fa-fw' />
        </Button>
      </ColorPicker>
      {isNoteNew ? (
        <Button variant='outline-primary' type='submit' tabIndex='3'>
          Create
        </Button>
      ) : (
        <>
          <Button variant='outline-danger' onClick={onDelete} tabIndex='4'>
            <i className='fas fa-times-circle fa-fw' />
          </Button>
          <Button variant='outline-primary' type='submit' tabIndex='5'>
            <i className='fas fa-save fa-fw' />
          </Button>
        </>
      )}
    </Modal.Footer>
  );
};

export default NoteDialogFooter;