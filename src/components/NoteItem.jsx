import React from 'react'
import NoteItemBody from './NoteItemBody'
import NoteItemAction from './NoteItemAction'

const NoteItem = ({id, title, body, onDelete, onArchive}) => {
  return (
    <div className='note-item'>
        <NoteItemBody title={title} body={body} />
        <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  )
}

export default NoteItem
