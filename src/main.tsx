// @ts-nocheck
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { ThemeProvider } from "@/components/theme-provider.tsx"
import "./index.css"

import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Root from "./layouts/Root"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Shows, { loader as ShowPageLoader } from "./pages/Shows"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/shows",
        Component: Shows,
        loader: ShowPageLoader,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
