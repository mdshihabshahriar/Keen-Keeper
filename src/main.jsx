import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: "/details",
          element: <h2>Details</h2>
        },
        {
          path: "/timeline",
          element: <h2>Timeline</h2>
        },
        {
          path: "/stats",
          element: <h2>Element</h2>
        },
      ],
    },
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
