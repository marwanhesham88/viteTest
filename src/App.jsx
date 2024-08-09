import './App.css'
import Home from './component/Home/Home';
import About from './component/About/About';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './component/Layout/Layout';
import NotFound from './component/NotFound/NotFound';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';

function App() {

const router = createBrowserRouter([
  {
    path:"",
    element:<Layout />,
    children: [
    {
      index: true,
      element: <Home />
    },
    {
      path:"about",
      element: <About />
    },
    {
      path:"portfolio",
      element: <Portfolio />
    },
    {
      path:"contact",
      element: <Contact />
    },
    {
      path:"*",
      element: <NotFound />
    }
  ]
  }
])

  return (
   <RouterProvider router={router}/>
  );
}

export default App
