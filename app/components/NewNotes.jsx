import { Form } from "@remix-run/react";
import React from "react";

export default function NewNotes() {
  return (
    <>
      <form method="post" id="note-from">
        <div className="flex justify-center items-center  text-white gap-4">
          <label htmlFor="title" className="font-semibold text-4xl">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="px-4 py-4 w-[330px] bg-blue-400 border"
            required
          />
        </div>{" "}
        <div className="flex justify-center items-center mt-10 text-white gap-4">
          <label htmlFor="content" className="font-bold text-4xl">
            content
          </label>
          <textarea
            type="text"
            rows="10"
            cols="50"
            name="content"
            className="bg-blue-400 border"
            required
          />
        </div>{" "}
        <div className="flex justify-center mt-10">
          <button  className=" text-white bg-green-500 px-4 py-3 rounded-md font-semibold">
            Add Note
          </button>
        </div>
      </form>
    </>
  );
}
