import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-component';
import useNotes from '../../../contexts/NotesContext';
import Note from './Note';
import EmptyContainer from './EmptyContainer';
import NoteLoader from './NoteLoader';
import useFilters from '../../../contexts/FiltersContext';

const NoteContainer = () => {
  const [
    { notes, note, isLoading, loadedCount, serverCount },
    dispatch,
    { openDialog }
  ] = useNotes();
  const [{ filters, needUpdate }, dispatchFilters] = useFilters();

  const match = useRouteMatch('/notes/:noteId');
  const checkRouteMatch = () => {
    if (match && !isLoading && (!note || match.params.noteId !== note.noteId.toString())) {
      dispatch({ type: 'GET_NOTE', payload: { noteId: match.params.noteId } });
    }
  };
  useEffect(checkRouteMatch, [match]);

  const openNote = () => note && openDialog(note);
  useEffect(openNote, [note]);

  const onFilterChange = () => {
    dispatch({ type: 'CLEAR_NOTES' });
    dispatchFilters({ type: 'NEED_UPDATE', payload: false });
  };
  useEffect(onFilterChange, [needUpdate]);

  const load = (takeCount, skipCount) => {
    const filterCategories = filters.filter(f => f.checked).map(f => f.categoryId);

    const payload =
      filters.length > 0
        ? { takeCount: takeCount, skipCount: skipCount, categories: filterCategories }
        : { takeCount: takeCount, skipCount: skipCount };

    if (loadedCount < serverCount || serverCount === -1) {
      dispatch({
        type: 'GET_NOTES',
        payload: payload
      });
    }
  };

  const loadNextNotes = () => {
    if (isLoading) return;

    load(6, loadedCount);
  };

  return (
    <InfiniteScroll
      datalength={notes.length}
      loadMore={loadNextNotes}
      hasMore={loadedCount < serverCount || serverCount === -1}
      loader={<NoteLoader key={-1} />}>
      {notes.length === 0 && !isLoading && <EmptyContainer />}
      <Masonry enableResizableChildren={true} className='pb-3'>
        {notes &&
          notes.map(note => (
            <Col lg={4} className='mt-3' key={note.noteId}>
              <Note note={note} />
            </Col>
          ))}
      </Masonry>
    </InfiniteScroll>
  );
};

export default NoteContainer;
