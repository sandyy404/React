import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import AboutUs from './Component/AboutUs/AboutUs.jsx'
import Contact from './Component/Contact/Contact.jsx'
import User from './Component/User/User.jsx'
import Github from './Component/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <AboutUs />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//        {
        //  path:"user",
        //  element:<User/>
//        }
      // {
      //   path:"github",
      //   element:<Github/>
    // }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<AboutUs/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='github'element={<Github/>}/>
    <Route path='user/:id' element={<User/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
