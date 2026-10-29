/* eslint-disable react-refresh/only-export-components */
import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

export const Route = createRootRoute({
  component: Layout,
});

function Layout() {
  const { matches } = useRouterState();
  const activeMatch = matches[matches.length - 1];
  // Fallback title of the page; can be left blank - const { title }
  const { title = "Jottoir" } = activeMatch.context;

  // only change title when re-rendering router
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors">
      <NavbarComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}
