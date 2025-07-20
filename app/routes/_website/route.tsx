import React from "react";
import { Outlet } from "react-router";

// Website layout component

const WebsiteLayout = () => {
  return (
    <main className="prose container p-4">
      nav goes here
      <Outlet />
    </main>
  );
};

export default WebsiteLayout;
