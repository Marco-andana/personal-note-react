import React from "react";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import { getInitialData, showFormattedDate } from "../utils/index.js";

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
        this.setState((prevState) => {
            const updateNotes = prevState.notes.map((note) => {
                if(note.id === id) {
                    return {
                        ...note,
                        archived: true
                    }
                }
                return note;
            })
            return {notes: updateNotes}
        });
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
                        createdAt: +new Date(),
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
            <NoteInput addNotes={this.onAddNotesHandler} />
            </div>
            <h2>Catatan Aktif</h2>
            <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
            <h2>Arsip</h2>
            </div>
            </>
        )
    }
}

export default NotesApp;