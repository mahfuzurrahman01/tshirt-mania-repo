
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import About from './Components/About/About';
import Grandpa from './Components/Grandpa/Grandpa';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('product.json'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('product.json'),
          element: <Home></Home>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/grandpa',
          element: <Grandpa></Grandpa>
        }
      ]
    }
  ])
  return (

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>

  );
}

export default App;
