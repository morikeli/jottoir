/* eslint-disable react-refresh/only-export-components */
import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";

export const Route = createRootRoute({
  component: Layout,
});

function Layout() {
  const { matches } = useRouterState();
  const activeMatch = matches[matches.length - 1];
  // Fallback title of the page; can be left blank - const { title }
  const { title = "Jottly" } = activeMatch.context;

  // only change title when re-rendering router
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
    <NavbarComponent />  
    <main className="px-8 py-6">
      <Outlet />
    </main>
    </>
  );
}
