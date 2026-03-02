import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Global.css'
import { BrowserRouter as Router , Route ,Routes, useLocation, createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/contacts';

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<Layout/>,
        children:[
          {
            children:[
              {path:'/' , element:<Home/>},
              {path:'/about' , element:<About/>},
              {path:'/projects' , element:<Projects/>},
              {path:'/contacts' , element:<Contacts/>},
            ]
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={router}></RouterProvider> 
    
  )
}

export default App
