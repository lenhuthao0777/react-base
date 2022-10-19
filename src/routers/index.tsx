import { lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
// conponent
import Default from '../layouts/Default'
const Login = lazy(() => import('../pages/Login'))
const Error = lazy(() => import('../pages/Error/Error'))
const Home = lazy(() => import('../pages/Home'))
const Profile = lazy(() => import('../pages/Profile'))

// ENUM
import { ROUTER_ENUM } from './Router.enum'

type router = {
  path: string
  element: () => JSX.Element
  loader: () => void
  errorElement: () => JSX.Element
  children: children[]
}

type children = {
  path: string
  element: () => JSX.Element
  loader: () => void
  errorElement: () => JSX.Element
}

const routers = [
  {
    path: ROUTER_ENUM.BASE_URL,
    element: <Default />,
    loader: () => {},
    errorElement: <Error />,
    children: [
      {
        path: ROUTER_ENUM.DEFAULT,
        element: <Home />,
        loader: () => {},
        errorElement: <Error />,
      },
    ],
  },
  {
    path: ROUTER_ENUM.PROFILE,
    element: <Default />,
    loader: () => {},
    errorElement: <Error />,
    children: [
      {
        path: ROUTER_ENUM.DEFAULT,
        element: <Profile />,
        loader: () => {},
        errorElement: <Error />,
      },
    ],
  },
  {
    path: ROUTER_ENUM.LOGIN,
    loader: () => {},
    errorElement: <Error />,
    children: [
      {
        path: ROUTER_ENUM.DEFAULT,
        element: <Login />,
        loader: () => {},
        errorElement: <Error />,
      },
    ],
  },
]

const ListRouters = routers.map((route, index) => (
  <Route
    element={route.element}
    path={route.path}
    key={index}
    errorElement={route.errorElement}
  >
    {route.children.length &&
      route.children.map((child, childIndex) => (
        <Route
          key={childIndex}
          element={child.element}
          path={child.path}
          errorElement={child.errorElement}
        />
      ))}
  </Route>
))

const router = createBrowserRouter(createRoutesFromElements(ListRouters))

export default router
