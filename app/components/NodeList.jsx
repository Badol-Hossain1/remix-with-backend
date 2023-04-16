import { Link } from "@remix-run/react";
import React from "react";

export default function NodeList({ notes }) {
  return (
    <div className="note-list grid grid-cols-3  gap-4">
      {notes.map((note, index) => (
        <div
          className="note text-white flex flex-col justify-around  border p-4"
          key={index}
        >
            <Link to={note.id}>
          <p className="p-4">
            Date:
            {note.id}
          </p>
          <div className="flex justify-between ">
            {note.content}
            <div>{note.title}</div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
