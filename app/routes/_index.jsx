import { Link } from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="text-white text-center">
      <h1 className="text-5xl mt-6">
        A better way of keeping notes in remix js
      </h1>
      <p className="mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        ipsa.
      </p>
      <p className="mt-6  ">
        <Link to="/notes">Try now!</Link>
      </p>
    </div>
  );
}
