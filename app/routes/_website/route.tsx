import React from "react";
import { Outlet } from "react-router";

// Website layout component

const WebsiteLayout = () => {
  return (
    <>
      <nav className="container p-4">
        <ul className="m-0 p-0 flex gap-2 list-none">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
          <li>
            <a href="/adobe">Adobe</a>
          </li>
        </ul>
      </nav>
      <main className="prose container p-4">
        <Outlet />
      </main>
    </>
  );
};

export default WebsiteLayout;
