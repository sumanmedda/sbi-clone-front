import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Home from './routes/Home.jsx'
import './routes/index.css'
import './routes/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>,
)
