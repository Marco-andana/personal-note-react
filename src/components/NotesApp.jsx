import React from "react";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/index.js";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onAddNotesHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title: title,
                        body: body,
                        archived: false,
                    }
                ]
            }
        })
    }

    render() {
        return (
            <>
            <NoteHeader />
            <div className='note-app__body'>
            <div className='note-input'>
            <h2>Buat catatan</h2>
            <NoteInput />
            </div>
            <h2>Catatan Aktif</h2>
            <NotesList />
            </div>
            </>
        )
    }
}

export default NotesApp;