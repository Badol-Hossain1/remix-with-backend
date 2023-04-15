import React from "react";
import NewNotes from "../components/NewNotes";
import { getStoredNotes, storeNotes } from "../data/notes";
import { redirect } from "@remix-run/node";

export default function notes() {
  return (
    <div>
      <h1 className="text-center mt-10 text-4xl text-white font-semibold">
        my notes
      </h1>
      <div className="mt-10">
        <NewNotes />
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  // const noteData = {
  // title: formData.get('title'),
  // contant: formData.gdt('content')
  // }
  const noteData = Object.fromEntries(formData);
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updateNotes = existingNotes.concat(noteData);
  await storeNotes(updateNotes);
  return redirect("/notes");
}
