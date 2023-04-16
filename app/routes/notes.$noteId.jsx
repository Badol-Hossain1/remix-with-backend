import { Link, useLoaderData } from '@remix-run/react'
import React from 'react'
import { getStoredNotes } from '../data/notes'

export default function NoteDetailsPage() {
  const note = useLoaderData()
  return (
    <div className='text-white font-bold text-4xl border text-center py-4'>
         <Link to='/notes'>
            Back to all Notes
         </Link>
         <h1>
          {note.title}
         </h1>
         <p>
          {note.content}
         </p>
    </div>
  )
}
export async function loader({params}){
const notes =  await getStoredNotes()
const noteId = params.noteId
const selectedNote = notes.find(note => note.id === noteId)
return selectedNote
}
