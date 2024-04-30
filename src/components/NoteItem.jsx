import React from 'react'
import NoteItemBody from './NoteItemBody'
import NoteItemAction from './NoteItemAction'

const NoteItem = ({id, title, createdAt, body, onDelete, onArchive}) => {
  const handleArchive = () => {
    onArchive(id)
  }

  return (
    <div className='note-item'>
        <NoteItemBody title={title} body={body} createdAt={createdAt} />
        <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  )
}

export default NoteItem
