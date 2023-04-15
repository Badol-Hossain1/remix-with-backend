import React from "react";
import NewNotes from "../components/NewNotes";

export default function notes() {
  return <div>
    <h1 className="text-center mt-10 text-4xl text-white font-semibold">my notes</h1>
  <div className="mt-10">
  <NewNotes />
  </div>
  </div>;
}
