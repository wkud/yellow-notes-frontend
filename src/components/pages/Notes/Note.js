import React, { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import Moment from 'react-moment';
import NoteImage from './NoteDialog/NoteImage';
import OverflowTooltip from '../../common/OverflowTooltip';
import OverflowingBadge from '../../common/OverflowingBadge';
import useNotes from '../../../contexts/NotesContext';
import useCategories from '../../../contexts/CategoriesContext';
import { getVariant } from '../../../utility/colorUtility';
import '../../../styles/notes.css';

const Note = ({ note }) => {
  const [, , dialog] = useNotes();
  const { dialogVisible, openDialog, updateLink, setNote } = dialog;
  const [{ categories }] = useCategories();

  const updateDialog = () => {
    if (dialogVisible && dialog.note.noteId === note.noteId) {
      setNote(note);
      updateLink(note);
    }
  };
  useEffect(updateDialog, [note]);

  const getCategoryName = () => {
    return categories.find(c => c.categoryId === note.categoryId)?.name;
  };

  const todoListDiv = content => {
    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
    } catch (error) {
      parsedContent = [];
    }
    const todoItem = item => (
      <div key={item.id}>
        {<i className={`far fa-${item.checked ? 'check-square' : 'square'} fa-fw`} />}
        {item.checked ? <del>{item.content}</del> : item.content}
      </div>
    );
    return (
      <>
        {parsedContent.filter(n => !n.checked).map(i => todoItem(i))}
        {parsedContent.filter(n => n.checked).map(i => todoItem(i))}
      </>
    );
  };

  const contentDiv = note => {
    return (
      <>
        {note.imageUrl && <NoteImage imageUrl={note.imageUrl} dialog={false} />}
        <div className='content'>
          {note.variant === 0 ? note.content : todoListDiv(note.content)}
        </div>
      </>
    );
  };

  return (
    <Card
      onClick={() => openDialog(note)}
      className={`shadow-sm note-card text-${getVariant(note.color)}`}
      style={{ backgroundColor: note.color }}>
      <Card.Header className='d-flex justify-content-between'>
        <OverflowTooltip text={note.title} position='top'>
          <Card.Title className='my-auto overflow-ellipsis p-1' ref={useRef()}>
            {note.title}
          </Card.Title>
        </OverflowTooltip>
        <OverflowingBadge text={getCategoryName()} color={note.color} />
      </Card.Header>
      <Card.Body>{contentDiv(note)}</Card.Body>
      <Card.Footer className='pb-2 px-2 d-flex'>
        <div className='d-flex ml-auto'>
          {note.isBlocked && <i className='timestamp note-lock fas fa-lock fa-fw' />}
          <div className='timestamp'>
            <Moment format='YYYY-MM-DD HH:mm'>{note.modificationDate}</Moment>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Note;
