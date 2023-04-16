import React from "react";
import NewNotes from "../components/NewNotes";
import { getStoredNotes, storeNotes } from "../data/notes";
import { Response, json, redirect } from "@remix-run/node";
import NodeList from "../components/NodeList";
import { useCatch, useLoaderData } from "@remix-run/react";

export default function notes() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const notes = useLoaderData();

  return (
    <div>
      <h1 className="text-center mt-10 text-4xl text-white font-semibold">
        my notes
      </h1>
      <div className="mt-10">
        <NewNotes />
        <div className="mt-10">
          <NodeList notes={notes} />
        </div>
      </div>
    </div>
  );
}
export async function loader() {
  const notes = await getStoredNotes();


  return notes;
  // return new Response(JSON.stringify(notes), {
  //   headers: { "Content-Type": "application/json" },
  // });
  // return json(notes)
}

export async function action({ request }) {
  const formData = await request.formData();

  // const noteData = {
  // title: formData.get('title'),
  // contant: formData.gdt('content')
  // }
  const noteData = Object.fromEntries(formData);
  if (noteData.title.trim().length < 4) {
    return {
      message: "Invalid title - must be at least 4 characters long....",
    };
  }
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updateNotes = existingNotes.concat(noteData);
  await storeNotes(updateNotes);
  return redirect("/notes");
}

