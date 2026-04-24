import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Stats from './pages/Stats/Stats'
import Timeline from './pages/TImeline/Timeline'
import FriendDetails from './pages/FriendDetails/FriendDetails'
import HomePage from './pages/homepage/HomePage'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>
        },
        {
          path: "/details/:id",
          element: <FriendDetails></FriendDetails>
        },
        {
          path: "/timeline",
          element: <Timeline></Timeline>
        },
        {
          path: "/stats",
          element: <Stats></Stats>
        },
      ],
      errorElement: <ErrorPage></ErrorPage>
    },
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
