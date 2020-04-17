export default (state, { type, payload }) => {
  switch (type) {
    case 'LOADING_START': {
      return { ...state, isLoading: true };
    }

    case 'GET_NOTES': {
      const notes = [...state.notes];
      payload.notes.forEach(note => {
        const index = notes.findIndex(n => n.noteId === note.noteId);
        index === -1 ? notes.push(note) : (notes[index] = note);
      });
      return { ...state, ...payload, notes, isLoading: false };
    }

    case 'ADD_NOTE': {
      return { ...state, notes: [{ ...payload }, ...state.notes], isLoading: false };
    }

    case 'EDIT_NOTE': {
      if (!state.notes.some(n => n.noteId === payload.noteId)) return state;
      const note = { ...state.notes.find(n => n.noteId === payload.noteId), ...payload };
      const notes = state.notes.filter(n => n.noteId !== payload.noteId);
      return { ...state, notes: [note, ...notes], isLoading: false };
    }

    case 'REMOVE_NOTE': {
      if (!state.notes.some(n => n.noteId === payload.noteId)) return state;
      const notes = state.notes.filter(n => n.noteId !== payload.noteId);
      return { ...state, notes, isLoading: false };
    }

    case 'CLEAR_NOTES': {
      return {
        loadedCount: 0,
        serverCount: -1,
        notes: [],
        isLoading: false
      };
    }

    case 'ADD_FAILED': {
      return {
        error: { type: 'ADD', message: 'Error while adding note!' }
      };
    }

    case 'EDIT_FAILED': {
      return {
        error: { type: 'EDIT', message: 'Error while editing note!' }
      };
    }

    case 'GET_FAILED': {
      return {
        error: { type: 'GET', message: 'Unable to load notes!' }
      };
    }

    case 'REMOVE_FAILED': {
      return {
        error: { type: 'REMOVE', message: 'Error while removing note!' }
      };
    }

    case 'CLEAR_ERRORS': {
      return { ...state, error: null };
    }

    default:
      return state;
  }
};
