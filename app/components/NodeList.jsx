import React from "react";

export default function NodeList({ notes }) {
  return (
    <div className="note-list grid grid-cols-3  gap-4">
      {notes.map((note, index) => (
        <div
          className="note text-white flex justify-around  border p-4"
          key={index}
        >
          {note.content}
          <div>
            <p>title</p>
            {note.title}
          </div>
        </div>
      ))}
    </div>
  );
}
