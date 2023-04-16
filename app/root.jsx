import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from './styles/tailwind.css'
import Nav from "./components/Nav";
export function links (){
  return [{rel: 'stylesheet',href:styles}]
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
     
      </head>
      <body className="bg-blue-600">
        <header className="mt-6">
        <Nav />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


export function ErrorBoundary ({error}){
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
     
      </head>
      <body className="bg-blue-600">
        <header className="mt-6">
        <Nav />
        </header>
        <main>
          <p>
            {error.message}
          </p>
        </main>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
