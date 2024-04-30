import React from 'react'

const NoteItemBody = ({title, body}) => {
  return (
    <div className='note-item__content'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{new Date()}</p>
        <p className='note-item__body'>{body}</p>
    </div>
  )
}

export default NoteItemBody;